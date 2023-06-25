// import { toPng } from "html-to-image"
import { toSvg } from "html-to-image";
import { useCallback, useEffect, useRef, useState } from "react"

//ignore ts
export function Thermo(props) {

    let shows = {
        id: 1,
        view: props.show
    }

    const [data, setData] = useState([])
    const ref = useRef();

    useEffect(() => {
        setData(props.temps)
    }, [props])

    // view images 

    useCallback(() => {
        let node = document.getElementById('view');

        toSvg(node)
            .then(function (dataUrl) {
                var img = document.createElement('img');
                img.src = dataUrl;
                localStorage.clear()
                localStorage.setItem("th_img", img.src)
                // return (img.src)
            })
            .catch(function (error) {
                console.error('oops, something went wrong!', error);
            });
    }, [])

    return (
        // <div id='view' className='w-full mx-auto'>
            <div ref={ref} className='h-full w-full grid grid-cols-3 bg-gray-100 rounded-lg gap-4 px-4 py-4'>
                {data?.map((item, index) => (
                    <div key={index} className='grid gap-2 items-center'>
                        <div className="relative">
                            <div className="flex items-start justify-center">
                                <div className='grid gap-0.5 pt-3 w-4 justify-items-end'>
                                    {/* 10 */}
                                    <div className='p-[0.5px] w-4 bg-black' />
                                    <div className='p-[0.5px] w-2 bg-black' />
                                    <div className='p-[0.5px] w-2 bg-black' />
                                    <div className='p-[0.5px] w-2 bg-black' />
                                    <div className='p-[0.5px] w-2 bg-black' />
                                    {/* 20 */}
                                    <div className='p-[0.5px] w-4 bg-black' />
                                    <div className='p-[0.5px] w-2 bg-black' />
                                    <div className='p-[0.5px] w-2 bg-black' />
                                    <div className='p-[0.5px] w-2 bg-black' />
                                    <div className='p-[0.5px] w-2 bg-black' />
                                    {/* 30 */}
                                    <div className='p-[0.5px] w-4 bg-black' />
                                    <div className='p-[0.5px] w-2 bg-black' />
                                    <div className='p-[0.5px] w-2 bg-black' />
                                    <div className='p-[0.5px] w-2 bg-black' />
                                    <div className='p-[0.5px] w-2 bg-black' />
                                    {/* 40 */}
                                    <div className='p-[0.5px] w-4 bg-black' />
                                    <div className='p-[0.5px] w-2 bg-black' />
                                    <div className='p-[0.5px] w-2 bg-black' />
                                    <div className='p-[0.5px] w-2 bg-black' />
                                    <div className='p-[0.5px] w-2 bg-black' />
                                    {/* 50 */}
                                    <div className='p-[0.5px] w-4 bg-black' />
                                    <div className='p-[0.5px] w-2 bg-black' />
                                    <div className='p-[0.5px] w-2 bg-black' />
                                    <div className='p-[0.5px] w-2 bg-black' />
                                    <div className='p-[0.5px] w-2 bg-black' />
                                    {/* 60 */}
                                    <div className='p-[0.5px] w-4 bg-black' />
                                    <div className='p-[0.5px] w-2 bg-black' />
                                    <div className='p-[0.5px] w-2 bg-black' />
                                    <div className='p-[0.5px] w-2 bg-black' />
                                    <div className='p-[0.5px] w-2 bg-black' />
                                    {/* 70 */}
                                    <div className='p-[0.5px] w-4 bg-black' />
                                    <div className='p-[0.5px] w-2 bg-black' />
                                    <div className='p-[0.5px] w-2 bg-black' />
                                    <div className='p-[0.5px] w-2 bg-black' />
                                    <div className='p-[0.5px] w-2 bg-black' />
                                    {/* 80 */}
                                    <div className='p-[0.5px] w-4 bg-black' />
                                    <div className='p-[0.5px] w-2 bg-black' />
                                    <div className='p-[0.5px] w-2 bg-black' />
                                    <div className='p-[0.5px] w-2 bg-black' />
                                    <div className='p-[0.5px] w-2 bg-black' />
                                    {/* 90 */}
                                    <div className='p-[0.5px] w-4 bg-black' />
                                    <div className='p-[0.5px] w-2 bg-black' />
                                    <div className='p-[0.5px] w-2 bg-black' />
                                    <div className='p-[0.5px] w-2 bg-black' />
                                    <div className='p-[0.5px] w-2 bg-black' />
                                    {/* 100 */}
                                    <div className='p-[0.5px] w-4 bg-black' />
                                    <div className='p-[0.5px] w-2 bg-black' />
                                    <div className='p-[0.5px] w-2 bg-black' />
                                    <div className='p-[0.5px] w-2 bg-black' />
                                    <div className='p-[0.5px] w-2 bg-black' />

                                    <div className='p-[0.5px] w-4 bg-black' />

                                </div>

                                <div className="h-48 w-4 grid items-center rotate-180 overflow-hidden rounded-full ring-black ring-1 bg-gray-300">
                                    <div className='h-full pb-3 pt-10'>
                                        <div className="h-full bg-black" style={{ "height": `${+item.temp}%` }}></div>
                                    </div>
                                </div>

                                <div className='grid gap-0.5 pt-3'>
                                    <div className='p-[0.5px] w-4 bg-black' />
                                    <div className='p-[0.5px] w-2 bg-black' />
                                    <div className='p-[0.5px] w-2 bg-black' />
                                    <div className='p-[0.5px] w-2 bg-black' />
                                    <div className='p-[0.5px] w-2 bg-black' />

                                    <div className='p-[0.5px] w-4 bg-black' />
                                    <div className='p-[0.5px] w-2 bg-black' />
                                    <div className='p-[0.5px] w-2 bg-black' />
                                    <div className='p-[0.5px] w-2 bg-black' />
                                    <div className='p-[0.5px] w-2 bg-black' />

                                    <div className='p-[0.5px] w-4 bg-black' />
                                    <div className='p-[0.5px] w-2 bg-black' />
                                    <div className='p-[0.5px] w-2 bg-black' />
                                    <div className='p-[0.5px] w-2 bg-black' />
                                    <div className='p-[0.5px] w-2 bg-black' />

                                    <div className='p-[0.5px] w-4 bg-black' />
                                    <div className='p-[0.5px] w-2 bg-black' />
                                    <div className='p-[0.5px] w-2 bg-black' />
                                    <div className='p-[0.5px] w-2 bg-black' />
                                    <div className='p-[0.5px] w-2 bg-black' />

                                    <div className='p-[0.5px] w-4 bg-black' />
                                    <div className='p-[0.5px] w-2 bg-black' />
                                    <div className='p-[0.5px] w-2 bg-black' />
                                    <div className='p-[0.5px] w-2 bg-black' />
                                    <div className='p-[0.5px] w-2 bg-black' />

                                    <div className='p-[0.5px] w-4 bg-black' />
                                    <div className='p-[0.5px] w-2 bg-black' />
                                    <div className='p-[0.5px] w-2 bg-black' />
                                    <div className='p-[0.5px] w-2 bg-black' />
                                    <div className='p-[0.5px] w-2 bg-black' />

                                    <div className='p-[0.5px] w-4 bg-black' />
                                    <div className='p-[0.5px] w-2 bg-black' />
                                    <div className='p-[0.5px] w-2 bg-black' />
                                    <div className='p-[0.5px] w-2 bg-black' />
                                    <div className='p-[0.5px] w-2 bg-black' />

                                    <div className='p-[0.5px] w-4 bg-black' />
                                    <div className='p-[0.5px] w-2 bg-black' />
                                    <div className='p-[0.5px] w-2 bg-black' />
                                    <div className='p-[0.5px] w-2 bg-black' />
                                    <div className='p-[0.5px] w-2 bg-black' />

                                    <div className='p-[0.5px] w-4 bg-black' />
                                    <div className='p-[0.5px] w-2 bg-black' />
                                    <div className='p-[0.5px] w-2 bg-black' />
                                    <div className='p-[0.5px] w-2 bg-black' />
                                    <div className='p-[0.5px] w-2 bg-black' />

                                    <div className='p-[0.5px] w-4 bg-black' />
                                    <div className='p-[0.5px] w-2 bg-black' />
                                    <div className='p-[0.5px] w-2 bg-black' />
                                    <div className='p-[0.5px] w-2 bg-black' />
                                    <div className='p-[0.5px] w-2 bg-black' />
                                    <div className='p-[0.5px] w-4 bg-black' />

                                </div>
                            </div>

                            {/* The bottom circle */}
                            <div className="absolute inset-0 flex items-end justify-center">
                                <div className="h-[50px] ring-2 ring-black w-[50px] rounded-full bg-black"></div>
                            </div>
                        </div>

                        {/* Bottom answer  */}
                        {shows.view ? (
                            <p className='text-center text-xs'>({item.id})
                                <span className=' border-b px-1 border-black'>
                                    {' '}{item.temp} °C
                                </span>
                            </p>
                        ) : (
                            <p className='text-center text-xs'>({item.id})________</p>
                        )}
                    </div>
                ))}
            </div>
        //</div> 
    )
}

export class Thermoc {

    constructor(c) {
        this.c = c;
    }

    makeData() {
        //create random data 
        let temps = Array.from({ length: 6 }, () => Math.floor(Math.random() * this.c))

        let tempss = temps?.map((jin, index) => ({
            id: index + 1,
            temp: jin
        }));
        return tempss
    }

}