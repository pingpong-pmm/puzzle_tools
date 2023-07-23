/* eslint-disable react/jsx-no-duplicate-props */
import type { NextPage } from 'next'
import { useEffect, useState } from 'react';
import '../styles/Home.module.css'

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

    // Initial height for className='two'
    const initialHeightTwo = 537;

    // State to handle the height of className='one'
    const [heightOne, setHeightOne] = useState(0);

    // Function to handle height changes for 'className="one"'
    const handleHeightChange = (newHeight: number) => {
        // Ensure the height is within the range of 0 to 100
        const clampedHeight = Math.max(0, Math.min(100, newHeight));
        setHeightOne(clampedHeight);
    };

    // Replace the 'originalHeightOne' with the actual original height of className="one"
    const originalHeightOne = 557.52;

    // Calculate the new height based on the percentage of the original height for 'className="one"'
    const newHeightOne = (originalHeightOne * heightOne) / 100;

    let th = new Chadaa()
    let b_data = th.makeData()
    // console.log(b_data)

    useEffect(() => {
        setView(true)
    }, [])

    return view && (
        <>
            <div className='p-8 md:hidden max-w-lg w-full flex flex-wrap gap-2 justify-center items-center mx-auto'>
                {b_data?.slice(0, 1).map((z: { low: number; high: number; }, index: number) => (
                    <div key={index} className='bg-gray-200 rounded-md p-2'>
                        <Chada low={z.low} high={z.high} sb={true} x={index + 1} />
                    </div>
                ))}
            </div>

            <div className='p-8 h-screen flex gap-4'>
                {/* 
                <svg className='h-[70vh] w-full' id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 93.47 647.6">

                    <path className='two' style={{ fill: 'none', strokeWidth: '3px', stroke: '#231f20', strokeMiterlimit: '10' }} d="M381,271.48a21,21,0,1,0-42,0v537h42Z"
                        transform="translate(-313.26 -248.84)" />
                    <path className='one' style={{ strokeMiterlimit: '10', fill: '#ed1c24', stroke: '#ed1c24', height: '10px' }} d="M378.68,301a18.68,18.68,0,1,0-37.36,0V808.52h37.36Z"
                        transform="translate(-313.26 -248.84)" />

                    <circle style={{ stroke: '#231f20', strokeMiterlimit: '10', fill: '#231f20' }} cx="46.74" cy="600.86" r="46.24" />
                </svg> */}

                <div>
                    <svg className='h-[70vh] w-full items-end grid' id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 93.47 647.6">
                        <path className='two' style={{ fill: 'blue', strokeWidth: '3px', stroke: '#231f20', strokeMiterlimit: '10' }} d="M381,271.48a21,21,0,1,0-42,0v537h42Z"
                            transform="translate(-313.26 -248.84)" />
                        <path className='one' style={{ transformOrigin:'top', strokeMiterlimit: '10', fill: '#ed1c24', stroke: '#ed1c24'}} d={`M378.68,301a18.68,18.68,0,1,0-37.36,0V${540}h37.36Z`}
                            transform="translate(-313.26 -248.84)" />

                        <circle style={{ stroke: '#231f20', strokeMiterlimit: '10', fill: '#231f20' }} cx="46.74" cy="600.86" r="46.24" />
                    </svg>
                </div>
            </div>
        </>
    )
}

function Chada(props: any) {
    return (
        <div className='w-64'>
            <div className="relative flex justify-center rounded-t-full ring-1 ring-black h-32 w-64 bg-gray-100">
                <div className='flex gap-[0.5px] h-30 relative justify-center'>

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
                <div className='flex justify-center absolute bottom-0 rounded-t-full h-[130px] w-[260px] bg-white z-40'>
                    <div style={{ transform: `rotate(${props.low}deg)`, transformOrigin: 'bottom' }} className='h-full absolute bottom-0 p-[0.5px] bg-[red] z-20' />
                    <div style={{ transform: `rotate(${props.high}deg)`, transformOrigin: 'bottom' }} className='h-full absolute bottom-0 p-[0.5px] bg-[red] z-20' />
                </div>
            </div>
            <p className='text-xs text-center py-2'>({props.x}) {props.sb ? (<span className='border-b border-black'>{props.high - props.low}°</span>) : (<span>_____</span>)}</p>
        </div>
    )
}

export default Demos


