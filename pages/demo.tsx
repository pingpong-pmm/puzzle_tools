/* eslint-disable react/jsx-no-duplicate-props */
import type { NextPage } from 'next'
import { useEffect, useState } from 'react';

export class Chadaa {

    constructor() {
        // this.c = c;
    }

    makeData() {
        //create random data 
        function getRandomNumber(min: number, max: number) {
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

const Demos: NextPage = () => {

    const [view, setView] = useState(false)

    let th = new Chadaa()
    let b_data = th.makeData()
    // console.log(b_data)

    useEffect(() => {
        setView(true)
    }, [])

    return view && (
        <div className='p-8 max-w-lg w-full flex flex-wrap gap-4 justify-center items-center mx-auto'>
            {b_data?.map((z: { low: number; high: number; }, index: number) => (
                <div key={index} className='bg-gray-200 rounded-md p-2'>
                    <Chada low={z.low} high={z.high} sb={true} x={index + 1} />
                </div>
            ))}
        </div>
    )
}

function Chada(props: any) {
    return (
        <div className='w-40'>
            <div className="relative flex justify-center rounded-t-full ring-1 ring-black h-20 w-40 bg-gray-100">
                <div className='flex gap-[0.5px] h-20 relative justify-center'>

                    <div style={{ transform: 'rotate(-85deg)', transformOrigin: 'bottom' }} className='h-[95px] absolute bottom-0 p-[0.5px] bg-black z-20' />
                    <div style={{ transform: 'rotate(-80deg)', transformOrigin: 'bottom' }} className='h-full absolute bottom-0 p-[0.5px] bg-black z-20' />
                    <div style={{ transform: 'rotate(-75deg)', transformOrigin: 'bottom' }} className='h-[95px] absolute bottom-0 p-[0.5px] bg-black z-20' />
                    <div style={{ transform: 'rotate(-70deg)', transformOrigin: 'bottom' }} className='h-full absolute bottom-0 p-[0.5px] bg-black z-20' />
                    <div style={{ transform: 'rotate(-65deg)', transformOrigin: 'bottom' }} className='h-[95px] absolute bottom-0 p-[0.5px] bg-black z-20' />
                    <div style={{ transform: 'rotate(-60deg)', transformOrigin: 'bottom' }} className='h-full absolute bottom-0 p-[0.5px] bg-black z-20' />
                    <div style={{ transform: 'rotate(-55deg)', transformOrigin: 'bottom' }} className='h-[95px] absolute bottom-0 p-[0.5px] bg-black z-20' />
                    <div style={{ transform: 'rotate(-50deg)', transformOrigin: 'bottom' }} className='h-full absolute bottom-0 p-[0.5px] bg-black z-20' />
                    <div style={{ transform: 'rotate(-45deg)', transformOrigin: 'bottom' }} className='h-[95px] absolute bottom-0 p-[0.5px] bg-black z-20' />
                    <div style={{ transform: 'rotate(-40deg)', transformOrigin: 'bottom' }} className='h-full absolute bottom-0 p-[0.5px] bg-black z-20' />
                    <div style={{ transform: 'rotate(-35deg)', transformOrigin: 'bottom' }} className='h-[95px] absolute bottom-0 p-[0.5px] bg-black z-20' />
                    <div style={{ transform: 'rotate(-30deg)', transformOrigin: 'bottom' }} className='h-full absolute bottom-0 p-[0.5px] bg-black z-20' />
                    <div style={{ transform: 'rotate(-25deg)', transformOrigin: 'bottom' }} className='h-[95px] absolute bottom-0 p-[0.5px] bg-black z-20' />
                    <div style={{ transform: 'rotate(-20deg)', transformOrigin: 'bottom' }} className='h-full absolute bottom-0 p-[0.5px] bg-black z-20' />
                    <div style={{ transform: 'rotate(-15deg)', transformOrigin: 'bottom' }} className='h-[95px] absolute bottom-0 p-[0.5px] bg-black z-20' />
                    <div style={{ transform: 'rotate(-10deg)', transformOrigin: 'bottom' }} className='h-full absolute bottom-0 p-[0.5px] bg-black z-20' />
                    <div style={{ transform: 'rotate(-5deg)', transformOrigin: 'bottom' }} className='h-[95px] absolute bottom-0 p-[0.5px] bg-black z-20' />

                    <div style={{ transform: 'rotate(0deg)', transformOrigin: 'bottom' }} className='h-full absolute bottom-0 p-[0.5px] bg-black z-20' />
                    <div style={{ transform: 'rotate(5deg)', transformOrigin: 'bottom' }} className='h-[95px] absolute bottom-0 p-[0.5px] bg-black z-20' />
                    <div style={{ transform: 'rotate(10deg)', transformOrigin: 'bottom' }} className='h-full absolute bottom-0 p-[0.5px] bg-black z-20' />
                    <div style={{ transform: 'rotate(15deg)', transformOrigin: 'bottom' }} className='h-[95px] absolute bottom-0 p-[0.5px] bg-black z-20' />
                    <div style={{ transform: 'rotate(20deg)', transformOrigin: 'bottom' }} className='h-full absolute bottom-0 p-[0.5px] bg-black z-20' />
                    <div style={{ transform: 'rotate(25deg)', transformOrigin: 'bottom' }} className='h-[95px] absolute bottom-0 p-[0.5px] bg-black z-20' />
                    <div style={{ transform: 'rotate(30deg)', transformOrigin: 'bottom' }} className='h-full absolute bottom-0 p-[0.5px] bg-black z-20' />
                    <div style={{ transform: 'rotate(35deg)', transformOrigin: 'bottom' }} className='h-[95px] absolute bottom-0 p-[0.5px] bg-black z-20' />
                    <div style={{ transform: 'rotate(40deg)', transformOrigin: 'bottom' }} className='h-full absolute bottom-0 p-[0.5px] bg-black z-20' />
                    <div style={{ transform: 'rotate(45deg)', transformOrigin: 'bottom' }} className='h-[95px] absolute bottom-0 p-[0.5px] bg-black z-20' />
                    <div style={{ transform: 'rotate(50deg)', transformOrigin: 'bottom' }} className='h-full absolute bottom-0 p-[0.5px] bg-black z-20' />
                    <div style={{ transform: 'rotate(55deg)', transformOrigin: 'bottom' }} className='h-[95px] absolute bottom-0 p-[0.5px] bg-black z-20' />
                    <div style={{ transform: 'rotate(60deg)', transformOrigin: 'bottom' }} className='h-full absolute bottom-0 p-[0.5px] bg-black z-20' />
                    <div style={{ transform: 'rotate(65deg)', transformOrigin: 'bottom' }} className='h-[95px] absolute bottom-0 p-[0.5px] bg-black z-20' />
                    <div style={{ transform: 'rotate(70deg)', transformOrigin: 'bottom' }} className='h-full absolute bottom-0 p-[0.5px] bg-black z-20' />
                    <div style={{ transform: 'rotate(75deg)', transformOrigin: 'bottom' }} className='h-[95px] absolute bottom-0 p-[0.5px] bg-black z-20' />
                    <div style={{ transform: 'rotate(80deg)', transformOrigin: 'bottom' }} className='h-full absolute bottom-0 p-[0.5px] bg-black z-20' />
                    <div style={{ transform: 'rotate(85deg)', transformOrigin: 'bottom' }} className='h-[95px] absolute bottom-0 p-[0.5px] bg-black z-20' />
                    {/* <div style={{ transform: 'rotate(90deg)', transformOrigin: 'bottom' }} className='h-full absolute bottom-0 p-[0.5px] bg-black z-20' /> */}
                </div>
                <div className='flex justify-center absolute bottom-0 rounded-t-full h-[90px] w-[180px] bg-white z-40'>
                    <div style={{ transform: `rotate(${props.low}deg)`, transformOrigin: 'bottom' }} className='h-full absolute bottom-0 p-[0.5px] bg-[red] z-20' />
                    <div style={{ transform: `rotate(${props.high}deg)`, transformOrigin: 'bottom' }} className='h-full absolute bottom-0 p-[0.5px] bg-[red] z-20' />
                </div>
            </div>
            <p className='text-xs text-center py-2'>({props.x}) {props.sb ? (<span className='border-b border-black'>{props.high - props.low}°</span>) : (<span>_____</span>)}</p>
        </div>
    )
}

export default Demos


