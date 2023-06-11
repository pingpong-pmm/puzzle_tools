import {buildModel} from './model.js';
import {buildMaze} from './lib/main.js';
import {
   METADATA_END_CELL, METADATA_START_CELL, METADATA_PATH
} from './lib/constants.js';
export class Thermo{
    model = buildModel();

    constructor(){
    }

    isMaskAvailableForCurrentConfig() {
        const currentMask = this.model.mask[getModelMaskKey()];
        return currentMask && currentMask.length;
    }

    buildMazeUsingModel(overrides={}) {
        if (this.model.maze) {
            this.model.maze.dispose();
        }
        if(overrides){
            this.model.shape=overrides.shape;
            this.model.size= overrides.size;
            this.model.mask=overrides.mask;
        }

        const grid = Object.assign({'cellShape': this.model.shape}, this.model.size);
        const maze = buildMaze({
                grid,
                'algorithm': overrides.algorithm || this.model.algorithm,
                'randomSeed': overrides.randomSeed || this.model.randomSeed,
                'element': overrides.element,
                'mask':overrides.mask || this.model.mask,
                'exitConfig': overrides.exitConfig || this.model.exitConfig
            });

        this.model.maze = maze;

        this.model.maze.runAlgorithm.toCompletion();
        this.model.maze.render();
        return Promise.resolve();
    }

    findStartAndEndCells() {
        let startCell, endCell;
        this.model.maze.forEachCell(cell => {
            if (cell.metadata[METADATA_START_CELL]) {
                startCell = cell;
            }
            if (cell.metadata[METADATA_END_CELL]) {
                endCell = cell;
            }
        });
        return [startCell, endCell];
    }

    solve(){
        const [startCell, endCell] = this.findStartAndEndCells();
        if (!(startCell && endCell)) {
            alert('You must generate a maze with exits in order to solve');
            return;
        }
        if (this.model.maze.metadata[METADATA_PATH]) {
            this.model.maze.clearPathAndSolution();
        } else {
            const [startCell, endCell] = this.findStartAndEndCells();
            console.assert(startCell);
            console.assert(endCell);
            this.model.maze.findPathBetween(startCell.coords, endCell.coords);
        }
        this.model.maze.render();
        
    };

    async downloadPDF(size, puzzlesPerPage, puzzles, solve=false, pdf_pages=1) {
        // if(size == "pdf_a5"){
        const pdfDoc = await PDFDocument.create()
        const timesRomanFont = await pdfDoc.embedFont(StandardFonts.TimesRoman)
        const page = pdfDoc.addPage([420, 595])
        const { width, height } = page.getSize()
        const text = 'Maze Puzzle Generator'
        const solution_text = 'Maze Solution Generator'
        const textSize = 25
        
        if(solve){
            page.drawText(solution_text, {
                x: width/6+30,
                y: height - textSize,
                size: textSize,
                font: timesRomanFont,
                color: rgb(0, 0, 0),
            })

        }else{
            page.drawText(text, {
                x: width/6+30,
                y: height - textSize,
                size: textSize,
                font: timesRomanFont,
                color: rgb(0, 0, 0),
            })

        }

        // Calculating Rows x Cols for Per Page Bases
        // -----------------------------------------
        const margin_w = 40;
        const margin_h = margin_w * height / width;
        const width_m = width - 2 * margin_w;
        const length_m = height - 2 * margin_h;
        
        const number_of_cols = Math.round(Math.sqrt(puzzlesPerPage * width_m / length_m));
        let number_of_rows = puzzlesPerPage / number_of_cols;
        
        if (Math.floor(number_of_rows) * number_of_cols === puzzlesPerPage) {
            number_of_rows = Math.floor(number_of_rows);
        } 
        else if (Math.ceil(number_of_rows) * number_of_cols === puzzlesPerPage) {
            number_of_rows = Math.ceil(number_of_rows);
        } 
        else {
            console.log('Not Possible');
        }

        //-------------------------------------------
        // A4
        // 
        // • A4: [number, number] = [595.28, 841.89] as [number, number]
        // 
        // A5
        // 
        // • A5: [number, number] = [419.53, 595.28] as [number, number]
        // 
        let puzzles_bytes=[]

        for (let i = 0; i < puzzlesPerPage; i++) {
            const fileName = path.resolve(__dirname,`./data/output_${puzzles[i]}.png`)

            const pngImageBytes = await new Promise((resolve,reject)=>{
                fs.readFile(fileName,(err, data)=>{
                    if (err) {
                        reject(err); // in the case of error, control flow goes to the catch block with the error occured.
                    }
                    else{
                        resolve(data);  // in the case of success, control flow goes to the then block with the content of the file.
                    }
                });
            })
            puzzles_bytes.push(pngImageBytes);
        }

        for (let i = 0; i < puzzlesPerPage; i++) {
            const fileName = path.resolve(__dirname,`./data/output_${puzzles[i]}.png`)
            try {
              fs.unlinkSync(fileName);
            } catch (err) {
              console.error(err);
            }
        }

         for (let row = 0; row < number_of_rows; row++){
             for (let col = 0; col < number_of_cols; col++){
                    const pngImage = await pdfDoc.embedPng(puzzles_bytes[col+row])
                     let pngDims = pngImage.scale(1/number_of_rows);

                     if(puzzlesPerPage==1){
                         pngDims = pngImage.scale(0.8);
                         let x_1 = pngDims.width/6;
                         let y_1 = pngDims.height/2;
                         await page.drawImage(pngImage, {
                              x: x_1,
                              y: y_1,
                              width: pngDims.width,
                              height: pngDims.height,
                         });  
                         break
                     }

                     if(puzzlesPerPage==4){
                         pngDims  = pngImage.scale(1/2.25);
                     }else if(puzzlesPerPage==9){
                         pngDims  = pngImage.scale((1/4));
                     }
                     
                     const m_w=((width/number_of_cols)-pngDims.width);
                     const m_h=((height/number_of_rows)-pngDims.height);

                     let x = (col * pngDims.width)  + ((col+1) * m_w) -((col+1)*m_w*(1/number_of_rows));
                     let y = (row * pngDims.height) + ((row+1) * m_h) -((row+1)*m_h*(1/number_of_rows));

                     let maze_name=`Maze ${(row+col+1).toString()}`
                    // Note that these fields are visible in the "Document Properties" section of 
                    // most PDF readers.
                    pdfDoc.setTitle(' Maze Generator ')
                    pdfDoc.setSubject(`📘 Generated ${puzzlesPerPage} Puzzles `)
                    pdfDoc.setProducer('Maze Generator')
                    pdfDoc.setCreationDate(new Date(Date.now()))
                    pdfDoc.setModificationDate(new Date(Date.now()))
                     await page.drawText(maze_name, { x: x + 20 , y: y + pngDims.height + 12, size: 10})

                     await page.drawImage(pngImage, {
                          x: x,
                          y: y,
                          width: pngDims.width,
                          height: pngDims.height,
                     });  
                 }

             }

        const buff = Buffer.from(await pdfDoc.save());
        let fileNamePdf;
        if(solve){
            fileNamePdf=path.resolve(__dirname,`./data/maze_${size}_${puzzlesPerPage}_${pdf_pages}_solved.pdf`)
            fs.writeFileSync(fileNamePdf,buff);
        }else{
            fileNamePdf=path.resolve(__dirname,`./data/maze_${size}_${puzzlesPerPage}_${pdf_pages}.pdf`)
            fs.writeFileSync(fileNamePdf, buff);
        }
        return fileNamePdf;
    }
}
