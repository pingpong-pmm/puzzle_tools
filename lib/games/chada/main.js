// import { toPng } from "html-to-image"
import { toPng } from "html-to-image";
import { useCallback, useEffect, useRef, useState } from "react"

//ignore ts
export function Chada(props) {

    let shows = {
        id: 1,
        view: props.show
    }

    const [data, setData] = useState([])
    const ref = useRef();

    useEffect(() => {
        setData(props.angles)
    }, [props])

    // view images 

    useCallback(() => {
        let node = document.getElementById('view');

        toPng(node)
            .then(function (dataUrl) {
                var img = document.createElement('img');
                img.src = dataUrl;
                localStorage.clear()
                localStorage.setItem("ch_img", img.src)
                console.log(img.src)
                // return (img.src)
            })
            .catch(function (error) {
                console.error('oops, something went wrong!', error);
            });
    }, [props])

    return (
        <div id='view' className='w-full mx-auto'>
            <div ref={ref} className='max-h-80 max-w-80 grid justify-evenly grid-cols-1 bg-gray-100 rounded-lg gap-2 p-4'>
                {data?.slice(0, 2).map((z, index) => (
                    <div key={index}>
                        <Chadaq low={z.low} high={z.high} shows={shows.view} x={index + 1} />
                    </div>
                ))}
            </div>
        </div>
    )
}

export class Chadaa {

    constructor() {

    }

    makeData() {
        //create random data 
        function getRandomNumber(min, max) {
            return Math.floor(Math.random() * (max - min + 1)) + min;
        }

        function getRandomObject() {
            let high = 0
            let low = 0

            // Generate random numbers for 'high' and 'low' while ensuring 'low' is less than 'high'
            do {
                high = getRandomNumber(-90, 90);
                low = getRandomNumber(-90, 90);
            } while (high === 0 || low === 0 || low >= high);

            return { high, low };
        }

        function createRandomArray() {
            const randomArray = [];

            for (let i = 0; i < 4; i++) {
                randomArray.push(getRandomObject());
            }

            return randomArray;
        }

        const randomArray = createRandomArray();
        return randomArray
    }


}

function Chadaq(props) {
    return (
        <div className='grid justify-center bg-gray-50 rounded-md'>
            <div className="relative flex justify-center rounded-t-full ring-1 ring-black h-28 w-56 bg-gray-100">
                <div className='flex gap-[0.5px] h-28 relative justify-center'>

                    <div style={{ transform: 'rotate(-85deg)', transformOrigin: 'bottom' }} className='h-[130px] absolute bottom-0 p-[0.5px] bg-black z-20' />
                    <div style={{ transform: 'rotate(-80deg)', transformOrigin: 'bottom' }} className='h-full absolute bottom-0 p-[0.5px] bg-black z-20' />
                    <div style={{ transform: 'rotate(-75deg)', transformOrigin: 'bottom' }} className='h-[130px] absolute bottom-0 p-[0.5px] bg-black z-20' />
                    <div style={{ transform: 'rotate(-70deg)', transformOrigin: 'bottom' }} className='h-full absolute bottom-0 p-[0.5px] bg-black z-20' />
                    <div style={{ transform: 'rotate(-65deg)', transformOrigin: 'bottom' }} className='h-[130px] absolute bottom-0 p-[0.5px] bg-black z-20' />
                    <div style={{ transform: 'rotate(-60deg)', transformOrigin: 'bottom' }} className='h-full absolute bottom-0 p-[0.5px] bg-black z-20' />
                    <div style={{ transform: 'rotate(-55deg)', transformOrigin: 'bottom' }} className='h-[130px] absolute bottom-0 p-[0.5px] bg-black z-20' />
                    <div style={{ transform: 'rotate(-50deg)', transformOrigin: 'bottom' }} className='h-full absolute bottom-0 p-[0.5px] bg-black z-20' />
                    <div style={{ transform: 'rotate(-45deg)', transformOrigin: 'bottom' }} className='h-[130px] absolute bottom-0 p-[0.5px] bg-black z-20' />
                    <div style={{ transform: 'rotate(-40deg)', transformOrigin: 'bottom' }} className='h-full absolute bottom-0 p-[0.5px] bg-black z-20' />
                    <div style={{ transform: 'rotate(-35deg)', transformOrigin: 'bottom' }} className='h-[130px] absolute bottom-0 p-[0.5px] bg-black z-20' />
                    <div style={{ transform: 'rotate(-30deg)', transformOrigin: 'bottom' }} className='h-full absolute bottom-0 p-[0.5px] bg-black z-20' />
                    <div style={{ transform: 'rotate(-25deg)', transformOrigin: 'bottom' }} className='h-[130px] absolute bottom-0 p-[0.5px] bg-black z-20' />
                    <div style={{ transform: 'rotate(-20deg)', transformOrigin: 'bottom' }} className='h-full absolute bottom-0 p-[0.5px] bg-black z-20' />
                    <div style={{ transform: 'rotate(-15deg)', transformOrigin: 'bottom' }} className='h-[130px] absolute bottom-0 p-[0.5px] bg-black z-20' />
                    <div style={{ transform: 'rotate(-10deg)', transformOrigin: 'bottom' }} className='h-full absolute bottom-0 p-[0.5px] bg-black z-20' />
                    <div style={{ transform: 'rotate(-5deg)', transformOrigin: 'bottom' }} className='h-[130px] absolute bottom-0 p-[0.5px] bg-black z-20' />

                    <div style={{ transform: 'rotate(0deg)', transformOrigin: 'bottom' }} className='h-full absolute bottom-0 p-[0.5px] bg-black z-20' />
                    <div style={{ transform: 'rotate(5deg)', transformOrigin: 'bottom' }} className='h-[130px] absolute bottom-0 p-[0.5px] bg-black z-20' />
                    <div style={{ transform: 'rotate(10deg)', transformOrigin: 'bottom' }} className='h-full absolute bottom-0 p-[0.5px] bg-black z-20' />
                    <div style={{ transform: 'rotate(15deg)', transformOrigin: 'bottom' }} className='h-[130px] absolute bottom-0 p-[0.5px] bg-black z-20' />
                    <div style={{ transform: 'rotate(20deg)', transformOrigin: 'bottom' }} className='h-full absolute bottom-0 p-[0.5px] bg-black z-20' />
                    <div style={{ transform: 'rotate(25deg)', transformOrigin: 'bottom' }} className='h-[130px] absolute bottom-0 p-[0.5px] bg-black z-20' />
                    <div style={{ transform: 'rotate(30deg)', transformOrigin: 'bottom' }} className='h-full absolute bottom-0 p-[0.5px] bg-black z-20' />
                    <div style={{ transform: 'rotate(35deg)', transformOrigin: 'bottom' }} className='h-[130px] absolute bottom-0 p-[0.5px] bg-black z-20' />
                    <div style={{ transform: 'rotate(40deg)', transformOrigin: 'bottom' }} className='h-full absolute bottom-0 p-[0.5px] bg-black z-20' />
                    <div style={{ transform: 'rotate(45deg)', transformOrigin: 'bottom' }} className='h-[130px] absolute bottom-0 p-[0.5px] bg-black z-20' />
                    <div style={{ transform: 'rotate(50deg)', transformOrigin: 'bottom' }} className='h-full absolute bottom-0 p-[0.5px] bg-black z-20' />
                    <div style={{ transform: 'rotate(55deg)', transformOrigin: 'bottom' }} className='h-[130px] absolute bottom-0 p-[0.5px] bg-black z-20' />
                    <div style={{ transform: 'rotate(60deg)', transformOrigin: 'bottom' }} className='h-full absolute bottom-0 p-[0.5px] bg-black z-20' />
                    <div style={{ transform: 'rotate(65deg)', transformOrigin: 'bottom' }} className='h-[130px] absolute bottom-0 p-[0.5px] bg-black z-20' />
                    <div style={{ transform: 'rotate(70deg)', transformOrigin: 'bottom' }} className='h-full absolute bottom-0 p-[0.5px] bg-black z-20' />
                    <div style={{ transform: 'rotate(75deg)', transformOrigin: 'bottom' }} className='h-[130px] absolute bottom-0 p-[0.5px] bg-black z-20' />
                    <div style={{ transform: 'rotate(80deg)', transformOrigin: 'bottom' }} className='h-full absolute bottom-0 p-[0.5px] bg-black z-20' />
                    <div style={{ transform: 'rotate(85deg)', transformOrigin: 'bottom' }} className='h-[130px] absolute bottom-0 p-[0.5px] bg-black z-20' />
                    {/* <div style={{ transform: 'rotate(90deg)', transformOrigin: 'bottom' }} className='h-full absolute bottom-0 p-[0.5px] bg-black z-20' /> */}
                </div>
                <div className='flex justify-center absolute bottom-0 rounded-t-full h-[120px] w-[240px] bg-white z-40'>
                    <div style={{ transform: `rotate(${props.low}deg)`, transformOrigin: 'bottom' }} className='h-full absolute bottom-0 p-[0.5px] bg-[red] z-20' />
                    <div style={{ transform: `rotate(${props.high}deg)`, transformOrigin: 'bottom' }} className='h-full absolute bottom-0 p-[0.5px] bg-[red] z-20' />
                </div>
            </div>
            <p className='text-xs text-center py-2'>({props.x}) {props.shows ? (<span className='border-b border-black'>{props.high - props.low}°</span>) : (<span>_____</span>)}</p>
        </div>
    )
}