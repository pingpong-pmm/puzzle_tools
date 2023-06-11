import {shapeConst} from './shapeConstants'

export default function getShape(shape, cellShape, width, height) {
    let arrayName = `${shape[0].toUpperCase()}${shape.substring(1)}_${cellShape[0].toUpperCase()}${cellShape.substring(1)}_${width}_${height}`;

    let array = [ [1, 2], [1,2] ]
    try{
        array = shapeConst[arrayName];
    }
    catch(err){
        console.log(err);
        if(err){
            return null;
        }
    }
    //console.log(array);
    //console.log(array.toString());

    array = JSON.parse(JSON.stringify(array));
    //array = JSON.parse(array.toString());
    //array = JSON.parse(array.toString());
    return array;
}
