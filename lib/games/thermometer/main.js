// import { toPng } from "html-to-image"
import { ThermoQ, ThermoSVG } from "components/Boards/Thermometer";
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
                // localStorage.setItem("th_img", img.src)
                // console.log(img.src)
                // return (img.src)
            })
            .catch(function (error) {
                console.error('oops, something went wrong!', error);
            });
    }, [])

    return (
        <div id='view' className='w-full mx-auto'>
            <div ref={ref} className='max-h-80 max-w-80 grid justify-evenly grid-cols-3 bg-white shadow-md rounded-lg gap-4 p-4'>
                {data?.map((item, index) => (
                    <div key={index} className='grid gap-2 items-center col-span-1'>

                        {/* <ThermoQ temp={+item.temp} /> */}
                        <ThermoSVG temp={+item.temp} />
                        
                        {/* Bottom answer  */}
                        {shows?.view ? (
                            <p className='text-center text-xs'>({item.id})
                                <span className='font-medium'>
                                   {' '} {item.temp}°C
                                </span>
                            </p>
                        ) : (
                            <p className='text-center text-xs'>({item.id})_____</p>
                        )}
                    </div>
                ))}
            </div>
        </div>
    )
}

export class Thermoc {

    constructor(c) {
        this.c = c;
    }

    makeData() {
        //create random data 
        let temps = Array.from({ length: 3 }, () => Math.floor(Math.random() * this.c))

        let tempss = temps?.map((jin, index) => ({
            id: index + 1,
            temp: jin
        }));
        return tempss
    }

}