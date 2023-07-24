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
    const [temp, setTemp] = useState(10)
    const [angs, setAngs] = useState([])

    // function getRandomAngle() {
    //     return Math.floor(Math.random() * 181); // Generates a random angle between 0 and 180 (inclusive)
    // }
    // useEffect(() => {

    function handleAngle() {
        const angs = [];
        let a1 = 0
        let a2 = 0

        for (let i = 0; i < 2; i++) {
            // Generate random angles until they are not equal
            do {
                a1 = Math.floor(Math.random() * 179);
                a2 = Math.floor(Math.random() * 179);
            } while (a1 === 0 || a1 === 180 || a2 === 0 || a2 === 180 || a1 === a2 || a2 <= a1);

            angs.push({ a1: a1, a2: a2 });
        }
        setAngs(angs)
        // return angs;
    }

    // }, [])

    // Function to update the height percentage and limit it to the range of 0 to 100
    const handleHeightChange = (h: number) => {
        setTemp(Math.min(Math.max(h, 0), 100));

    };

    // Calculate the new height in pixels based on the percentage of the total height (535.99)
    const totalHeight = 535.99;
    const newHeightPixels = (totalHeight * temp) / 100;

    let th = new Chadaa()
    let b_data = th.makeData()
    // console.log(b_data)

    useEffect(() => {
        setView(true)
    }, [])

    return view && (
        <>
            {/* <div className='p-8 md:hidden max-w-lg w-full flex flex-wrap gap-2 justify-center items-center mx-auto'>
                {b_data?.slice(0, 1).map((z: { low: number; high: number; }, index: number) => (
                    <div key={index} className='bg-gray-200 rounded-md p-2'>
                        <Chada low={z.low} high={z.high} sb={true} x={index + 1} />
                    </div>
                ))}
            </div> */}

            <div className='max-h-screen grid gap-4 p-4 max-w-lg w-full mx-auto'>

                <div className='hidden justify-between  gap-4 w-full'>


                    <svg height={535.99} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 99.15 647.51">
                        <g id="circle">
                            <path style={{ strokeWidth: '3px', fill: 'none', stroke: '#231f20', strokeMiterlimit: '10' }} d="M381,276.28a21,21,0,1,0-42,0v537h42Z"
                                transform="translate(-310.42 -253.64)" />

                            <rect style={{ fill: '#ed1c24' }} x="32.2" y={22.17 + (535.99 - 535.99 * temp / 99)} width="34.74" height={535.99 * temp / 99} />
                            {/* <rect style={{ fill: '#ed1c24' }} x="32.2" y={22.17 + 108 * 5 - temp * 6} width="34.74" height={535.99 - 108 * 5 + temp * 6} /> */}

                            <line style={{ fill: 'none', stroke: '#231f20', strokeMiterlimit: '10', strokeWidth: '0.5px' }} y1="22.17" x2="28.59" y2="22.17" />
                            <line style={{ fill: 'none', stroke: '#231f20', strokeMiterlimit: '10', strokeWidth: '0.5px' }} y1="33.1" x2="28.59" y2="33.1" />
                            <line style={{ fill: 'none', stroke: '#231f20', strokeMiterlimit: '10', strokeWidth: '0.5px' }} y1="44.04" x2="28.59" y2="44.04" />
                            <line style={{ fill: 'none', stroke: '#231f20', strokeMiterlimit: '10', strokeWidth: '0.5px' }} y1="54.98" x2="28.59" y2="54.98" />
                            <line style={{ fill: 'none', stroke: '#231f20', strokeMiterlimit: '10', strokeWidth: '0.5px' }} y1="65.92" x2="28.59" y2="65.92" />
                            <line style={{ fill: 'none', stroke: '#231f20', strokeMiterlimit: '10', strokeWidth: '0.5px' }} y1="76.86" x2="28.59" y2="76.86" />
                            <line style={{ fill: 'none', stroke: '#231f20', strokeMiterlimit: '10', strokeWidth: '0.5px' }} y1="87.8" x2="28.59" y2="87.8" />
                            <line style={{ fill: 'none', stroke: '#231f20', strokeMiterlimit: '10', strokeWidth: '0.5px' }} y1="98.74" x2="28.59" y2="98.74" />
                            <line style={{ fill: 'none', stroke: '#231f20', strokeMiterlimit: '10', strokeWidth: '0.5px' }} y1="109.67" x2="28.59" y2="109.67" />
                            <line style={{ fill: 'none', stroke: '#231f20', strokeMiterlimit: '10', strokeWidth: '0.5px' }} y1="120.61" x2="28.59" y2="120.61" />
                            <line style={{ fill: 'none', stroke: '#231f20', strokeMiterlimit: '10', strokeWidth: '0.5px' }} y1="131.55" x2="28.59" y2="131.55" />
                            <line style={{ fill: 'none', stroke: '#231f20', strokeMiterlimit: '10', strokeWidth: '0.5px' }} y1="142.49" x2="28.59" y2="142.49" />
                            <line style={{ fill: 'none', stroke: '#231f20', strokeMiterlimit: '10', strokeWidth: '0.5px' }} y1="153.43" x2="28.59" y2="153.43" />
                            <line style={{ fill: 'none', stroke: '#231f20', strokeMiterlimit: '10', strokeWidth: '0.5px' }} y1="164.37" x2="28.59" y2="164.37" />
                            <line style={{ fill: 'none', stroke: '#231f20', strokeMiterlimit: '10', strokeWidth: '0.5px' }} y1="175.31" x2="28.59" y2="175.31" />
                            <line style={{ fill: 'none', stroke: '#231f20', strokeMiterlimit: '10', strokeWidth: '0.5px' }} y1="186.24" x2="28.59" y2="186.24" />
                            <line style={{ fill: 'none', stroke: '#231f20', strokeMiterlimit: '10', strokeWidth: '0.5px' }} y1="197.18" x2="28.59" y2="197.18" />
                            <line style={{ fill: 'none', stroke: '#231f20', strokeMiterlimit: '10', strokeWidth: '0.5px' }} y1="208.12" x2="28.59" y2="208.12" />
                            <line style={{ fill: 'none', stroke: '#231f20', strokeMiterlimit: '10', strokeWidth: '0.5px' }} y1="219.06" x2="28.59" y2="219.06" />
                            <line style={{ fill: 'none', stroke: '#231f20', strokeMiterlimit: '10', strokeWidth: '0.5px' }} y1="230" x2="28.59" y2="230" />
                            <line style={{ fill: 'none', stroke: '#231f20', strokeMiterlimit: '10', strokeWidth: '0.5px' }} y1="240.94" x2="28.59" y2="240.94" />
                            <line style={{ fill: 'none', stroke: '#231f20', strokeMiterlimit: '10', strokeWidth: '0.5px' }} y1="251.88" x2="28.59" y2="251.88" />
                            <line style={{ fill: 'none', stroke: '#231f20', strokeMiterlimit: '10', strokeWidth: '0.5px' }} y1="262.81" x2="28.59" y2="262.81" />
                            <line style={{ fill: 'none', stroke: '#231f20', strokeMiterlimit: '10', strokeWidth: '0.5px' }} y1="273.75" x2="28.59" y2="273.75" />
                            <line style={{ fill: 'none', stroke: '#231f20', strokeMiterlimit: '10', strokeWidth: '0.5px' }} y1="284.69" x2="28.59" y2="284.69" />
                            <line style={{ fill: 'none', stroke: '#231f20', strokeMiterlimit: '10', strokeWidth: '0.5px' }} y1="295.63" x2="28.59" y2="295.63" />
                            <line style={{ fill: 'none', stroke: '#231f20', strokeMiterlimit: '10', strokeWidth: '0.5px' }} y1="306.57" x2="28.59" y2="306.57" />
                            <line style={{ fill: 'none', stroke: '#231f20', strokeMiterlimit: '10', strokeWidth: '0.5px' }} y1="317.51" x2="28.59" y2="317.51" />
                            <line style={{ fill: 'none', stroke: '#231f20', strokeMiterlimit: '10', strokeWidth: '0.5px' }} y1="328.45" x2="28.59" y2="328.45" />
                            <line style={{ fill: 'none', stroke: '#231f20', strokeMiterlimit: '10', strokeWidth: '0.5px' }} y1="339.38" x2="28.59" y2="339.38" />
                            <line style={{ fill: 'none', stroke: '#231f20', strokeMiterlimit: '10', strokeWidth: '0.5px' }} y1="350.32" x2="28.59" y2="350.32" />
                            <line style={{ fill: 'none', stroke: '#231f20', strokeMiterlimit: '10', strokeWidth: '0.5px' }} y1="361.26" x2="28.59" y2="361.26" />
                            <line style={{ fill: 'none', stroke: '#231f20', strokeMiterlimit: '10', strokeWidth: '0.5px' }} y1="372.2" x2="28.59" y2="372.2" />
                            <line style={{ fill: 'none', stroke: '#231f20', strokeMiterlimit: '10', strokeWidth: '0.5px' }} y1="383.14" x2="28.59" y2="383.14" />
                            <line style={{ fill: 'none', stroke: '#231f20', strokeMiterlimit: '10', strokeWidth: '0.5px' }} y1="394.08" x2="28.59" y2="394.08" />
                            <line style={{ fill: 'none', stroke: '#231f20', strokeMiterlimit: '10', strokeWidth: '0.5px' }} y1="405.02" x2="28.59" y2="405.02" />
                            <line style={{ fill: 'none', stroke: '#231f20', strokeMiterlimit: '10', strokeWidth: '0.5px' }} y1="415.95" x2="28.59" y2="415.95" />
                            <line style={{ fill: 'none', stroke: '#231f20', strokeMiterlimit: '10', strokeWidth: '0.5px' }} y1="426.89" x2="28.59" y2="426.89" />
                            <line style={{ fill: 'none', stroke: '#231f20', strokeMiterlimit: '10', strokeWidth: '0.5px' }} y1="437.83" x2="28.59" y2="437.83" />
                            <line style={{ fill: 'none', stroke: '#231f20', strokeMiterlimit: '10', strokeWidth: '0.5px' }} y1="448.77" x2="28.59" y2="448.77" />
                            <line style={{ fill: 'none', stroke: '#231f20', strokeMiterlimit: '10', strokeWidth: '0.5px' }} y1="459.71" x2="28.59" y2="459.71" />
                            <line style={{ fill: 'none', stroke: '#231f20', strokeMiterlimit: '10', strokeWidth: '0.5px' }} y1="470.65" x2="28.59" y2="470.65" />
                            <line style={{ fill: 'none', stroke: '#231f20', strokeMiterlimit: '10', strokeWidth: '0.5px' }} y1="481.59" x2="28.59" y2="481.59" />
                            <line style={{ fill: 'none', stroke: '#231f20', strokeMiterlimit: '10', strokeWidth: '0.5px' }} y1="492.52" x2="28.59" y2="492.52" />
                            <line style={{ fill: 'none', stroke: '#231f20', strokeMiterlimit: '10', strokeWidth: '0.5px' }} y1="503.46" x2="28.59" y2="503.46" />
                            <line style={{ fill: 'none', stroke: '#231f20', strokeMiterlimit: '10', strokeWidth: '0.5px' }} y1="514.4" x2="28.59" y2="514.4" />
                            <line style={{ fill: 'none', stroke: '#231f20', strokeMiterlimit: '10', strokeWidth: '0.5px' }} y1="525.34" x2="28.59" y2="525.34" />
                            <line style={{ fill: 'none', stroke: '#231f20', strokeMiterlimit: '10', strokeWidth: '0.5px' }} y1="536.28" x2="28.59" y2="536.28" />
                            <line style={{ fill: 'none', stroke: '#231f20', strokeMiterlimit: '10', strokeWidth: '0.5px' }} y1="547.22" x2="28.59" y2="547.22" />
                            <line style={{ fill: 'none', stroke: '#231f20', strokeMiterlimit: '10', strokeWidth: '0.5px' }} y1="558.16" x2="28.59" y2="558.16" />
                            <line style={{ fill: 'none', stroke: '#231f20', strokeMiterlimit: '10', strokeWidth: '0.5px' }} x1="14.29" y1="27.64" x2="28.59" y2="27.64" />
                            <line style={{ fill: 'none', stroke: '#231f20', strokeMiterlimit: '10', strokeWidth: '0.5px' }} x1="14.29" y1="38.57" x2="28.59" y2="38.57" />
                            <line style={{ fill: 'none', stroke: '#231f20', strokeMiterlimit: '10', strokeWidth: '0.5px' }} x1="14.29" y1="49.51" x2="28.59" y2="49.51" />
                            <line style={{ fill: 'none', stroke: '#231f20', strokeMiterlimit: '10', strokeWidth: '0.5px' }} x1="14.29" y1="60.45" x2="28.59" y2="60.45" />
                            <line style={{ fill: 'none', stroke: '#231f20', strokeMiterlimit: '10', strokeWidth: '0.5px' }} x1="14.29" y1="71.39" x2="28.59" y2="71.39" />
                            <line style={{ fill: 'none', stroke: '#231f20', strokeMiterlimit: '10', strokeWidth: '0.5px' }} x1="14.29" y1="82.33" x2="28.59" y2="82.33" />
                            <line style={{ fill: 'none', stroke: '#231f20', strokeMiterlimit: '10', strokeWidth: '0.5px' }} x1="14.29" y1="93.27" x2="28.59" y2="93.27" />
                            <line style={{ fill: 'none', stroke: '#231f20', strokeMiterlimit: '10', strokeWidth: '0.5px' }} x1="14.29" y1="104.21" x2="28.59" y2="104.21" />
                            <line style={{ fill: 'none', stroke: '#231f20', strokeMiterlimit: '10', strokeWidth: '0.5px' }} x1="14.29" y1="115.14" x2="28.59" y2="115.14" />
                            <line style={{ fill: 'none', stroke: '#231f20', strokeMiterlimit: '10', strokeWidth: '0.5px' }} x1="14.29" y1="126.08" x2="28.59" y2="126.08" />
                            <line style={{ fill: 'none', stroke: '#231f20', strokeMiterlimit: '10', strokeWidth: '0.5px' }} x1="14.29" y1="137.02" x2="28.59" y2="137.02" />
                            <line style={{ fill: 'none', stroke: '#231f20', strokeMiterlimit: '10', strokeWidth: '0.5px' }} x1="14.29" y1="147.96" x2="28.59" y2="147.96" />
                            <line style={{ fill: 'none', stroke: '#231f20', strokeMiterlimit: '10', strokeWidth: '0.5px' }} x1="14.29" y1="158.9" x2="28.59" y2="158.9" />
                            <line style={{ fill: 'none', stroke: '#231f20', strokeMiterlimit: '10', strokeWidth: '0.5px' }} x1="14.29" y1="169.84" x2="28.59" y2="169.84" />
                            <line style={{ fill: 'none', stroke: '#231f20', strokeMiterlimit: '10', strokeWidth: '0.5px' }} x1="14.29" y1="180.78" x2="28.59" y2="180.78" />
                            <line style={{ fill: 'none', stroke: '#231f20', strokeMiterlimit: '10', strokeWidth: '0.5px' }} x1="14.29" y1="191.71" x2="28.59" y2="191.71" />
                            <line style={{ fill: 'none', stroke: '#231f20', strokeMiterlimit: '10', strokeWidth: '0.5px' }} x1="14.29" y1="202.65" x2="28.59" y2="202.65" />
                            <line style={{ fill: 'none', stroke: '#231f20', strokeMiterlimit: '10', strokeWidth: '0.5px' }} x1="14.29" y1="213.59" x2="28.59" y2="213.59" />
                            <line style={{ fill: 'none', stroke: '#231f20', strokeMiterlimit: '10', strokeWidth: '0.5px' }} x1="14.29" y1="224.53" x2="28.59" y2="224.53" />
                            <line style={{ fill: 'none', stroke: '#231f20', strokeMiterlimit: '10', strokeWidth: '0.5px' }} x1="14.29" y1="235.47" x2="28.59" y2="235.47" />
                            <line style={{ fill: 'none', stroke: '#231f20', strokeMiterlimit: '10', strokeWidth: '0.5px' }} x1="14.29" y1="246.41" x2="28.59" y2="246.41" />
                            <line style={{ fill: 'none', stroke: '#231f20', strokeMiterlimit: '10', strokeWidth: '0.5px' }} x1="14.29" y1="257.35" x2="28.59" y2="257.35" />
                            <line style={{ fill: 'none', stroke: '#231f20', strokeMiterlimit: '10', strokeWidth: '0.5px' }} x1="14.29" y1="268.28" x2="28.59" y2="268.28" />
                            <line style={{ fill: 'none', stroke: '#231f20', strokeMiterlimit: '10', strokeWidth: '0.5px' }} x1="14.29" y1="279.22" x2="28.59" y2="279.22" />
                            <line style={{ fill: 'none', stroke: '#231f20', strokeMiterlimit: '10', strokeWidth: '0.5px' }} x1="14.29" y1="290.16" x2="28.59" y2="290.16" />
                            <line style={{ fill: 'none', stroke: '#231f20', strokeMiterlimit: '10', strokeWidth: '0.5px' }} x1="14.29" y1="301.1" x2="28.59" y2="301.1" />
                            <line style={{ fill: 'none', stroke: '#231f20', strokeMiterlimit: '10', strokeWidth: '0.5px' }} x1="14.29" y1="312.04" x2="28.59" y2="312.04" />
                            <line style={{ fill: 'none', stroke: '#231f20', strokeMiterlimit: '10', strokeWidth: '0.5px' }} x1="14.29" y1="322.98" x2="28.59" y2="322.98" />
                            <line style={{ fill: 'none', stroke: '#231f20', strokeMiterlimit: '10', strokeWidth: '0.5px' }} x1="14.29" y1="333.92" x2="28.59" y2="333.92" />
                            <line style={{ fill: 'none', stroke: '#231f20', strokeMiterlimit: '10', strokeWidth: '0.5px' }} x1="14.29" y1="344.85" x2="28.59" y2="344.85" />
                            <line style={{ fill: 'none', stroke: '#231f20', strokeMiterlimit: '10', strokeWidth: '0.5px' }} x1="14.29" y1="355.79" x2="28.59" y2="355.79" />
                            <line style={{ fill: 'none', stroke: '#231f20', strokeMiterlimit: '10', strokeWidth: '0.5px' }} x1="14.29" y1="366.73" x2="28.59" y2="366.73" />
                            <line style={{ fill: 'none', stroke: '#231f20', strokeMiterlimit: '10', strokeWidth: '0.5px' }} x1="14.29" y1="377.67" x2="28.59" y2="377.67" />
                            <line style={{ fill: 'none', stroke: '#231f20', strokeMiterlimit: '10', strokeWidth: '0.5px' }} x1="14.29" y1="388.61" x2="28.59" y2="388.61" />
                            <line style={{ fill: 'none', stroke: '#231f20', strokeMiterlimit: '10', strokeWidth: '0.5px' }} x1="14.29" y1="399.55" x2="28.59" y2="399.55" />
                            <line style={{ fill: 'none', stroke: '#231f20', strokeMiterlimit: '10', strokeWidth: '0.5px' }} x1="14.29" y1="410.49" x2="28.59" y2="410.49" />
                            <line style={{ fill: 'none', stroke: '#231f20', strokeMiterlimit: '10', strokeWidth: '0.5px' }} x1="14.29" y1="421.42" x2="28.59" y2="421.42" />
                            <line style={{ fill: 'none', stroke: '#231f20', strokeMiterlimit: '10', strokeWidth: '0.5px' }} x1="14.29" y1="432.36" x2="28.59" y2="432.36" />
                            <line style={{ fill: 'none', stroke: '#231f20', strokeMiterlimit: '10', strokeWidth: '0.5px' }} x1="14.29" y1="443.3" x2="28.59" y2="443.3" />
                            <line style={{ fill: 'none', stroke: '#231f20', strokeMiterlimit: '10', strokeWidth: '0.5px' }} x1="14.29" y1="454.24" x2="28.59" y2="454.24" />
                            <line style={{ fill: 'none', stroke: '#231f20', strokeMiterlimit: '10', strokeWidth: '0.5px' }} x1="14.29" y1="465.18" x2="28.59" y2="465.18" />
                            <line style={{ fill: 'none', stroke: '#231f20', strokeMiterlimit: '10', strokeWidth: '0.5px' }} x1="14.29" y1="476.12" x2="28.59" y2="476.12" />
                            <line style={{ fill: 'none', stroke: '#231f20', strokeMiterlimit: '10', strokeWidth: '0.5px' }} x1="14.29" y1="487.05" x2="28.59" y2="487.05" />
                            <line style={{ fill: 'none', stroke: '#231f20', strokeMiterlimit: '10', strokeWidth: '0.5px' }} x1="14.29" y1="497.99" x2="28.59" y2="497.99" />
                            <line style={{ fill: 'none', stroke: '#231f20', strokeMiterlimit: '10', strokeWidth: '0.5px' }} x1="14.29" y1="508.93" x2="28.59" y2="508.93" />
                            <line style={{ fill: 'none', stroke: '#231f20', strokeMiterlimit: '10', strokeWidth: '0.5px' }} x1="14.29" y1="519.87" x2="28.59" y2="519.87" />
                            <line style={{ fill: 'none', stroke: '#231f20', strokeMiterlimit: '10', strokeWidth: '0.5px' }} x1="14.29" y1="530.81" x2="28.59" y2="530.81" />
                            <line style={{ fill: 'none', stroke: '#231f20', strokeMiterlimit: '10', strokeWidth: '0.5px' }} x1="14.29" y1="541.75" x2="28.59" y2="541.75" />
                            <line style={{ fill: 'none', stroke: '#231f20', strokeMiterlimit: '10', strokeWidth: '0.5px' }} x1="14.29" y1="552.69" x2="28.59" y2="552.69" />
                            <line style={{ fill: 'none', stroke: '#231f20', strokeMiterlimit: '10', strokeWidth: '0.5px' }} x1="99.15" y1="22.17" x2="70.56" y2="22.17" />
                            <line style={{ fill: 'none', stroke: '#231f20', strokeMiterlimit: '10', strokeWidth: '0.5px' }} x1="99.15" y1="33.1" x2="70.56" y2="33.1" />
                            <line style={{ fill: 'none', stroke: '#231f20', strokeMiterlimit: '10', strokeWidth: '0.5px' }} x1="99.15" y1="44.04" x2="70.56" y2="44.04" />
                            <line style={{ fill: 'none', stroke: '#231f20', strokeMiterlimit: '10', strokeWidth: '0.5px' }} x1="99.15" y1="54.98" x2="70.56" y2="54.98" />
                            <line style={{ fill: 'none', stroke: '#231f20', strokeMiterlimit: '10', strokeWidth: '0.5px' }} x1="99.15" y1="65.92" x2="70.56" y2="65.92" />
                            <line style={{ fill: 'none', stroke: '#231f20', strokeMiterlimit: '10', strokeWidth: '0.5px' }} x1="99.15" y1="76.86" x2="70.56" y2="76.86" />
                            <line style={{ fill: 'none', stroke: '#231f20', strokeMiterlimit: '10', strokeWidth: '0.5px' }} x1="99.15" y1="87.8" x2="70.56" y2="87.8" />
                            <line style={{ fill: 'none', stroke: '#231f20', strokeMiterlimit: '10', strokeWidth: '0.5px' }} x1="99.15" y1="98.74" x2="70.56" y2="98.74" />
                            <line style={{ fill: 'none', stroke: '#231f20', strokeMiterlimit: '10', strokeWidth: '0.5px' }} x1="99.15" y1="109.67" x2="70.56" y2="109.67" />
                            <line style={{ fill: 'none', stroke: '#231f20', strokeMiterlimit: '10', strokeWidth: '0.5px' }} x1="99.15" y1="120.61" x2="70.56" y2="120.61" />
                            <line style={{ fill: 'none', stroke: '#231f20', strokeMiterlimit: '10', strokeWidth: '0.5px' }} x1="99.15" y1="131.55" x2="70.56" y2="131.55" />
                            <line style={{ fill: 'none', stroke: '#231f20', strokeMiterlimit: '10', strokeWidth: '0.5px' }} x1="99.15" y1="142.49" x2="70.56" y2="142.49" />
                            <line style={{ fill: 'none', stroke: '#231f20', strokeMiterlimit: '10', strokeWidth: '0.5px' }} x1="99.15" y1="153.43" x2="70.56" y2="153.43" />
                            <line style={{ fill: 'none', stroke: '#231f20', strokeMiterlimit: '10', strokeWidth: '0.5px' }} x1="99.15" y1="164.37" x2="70.56" y2="164.37" />
                            <line style={{ fill: 'none', stroke: '#231f20', strokeMiterlimit: '10', strokeWidth: '0.5px' }} x1="99.15" y1="175.31" x2="70.56" y2="175.31" />
                            <line style={{ fill: 'none', stroke: '#231f20', strokeMiterlimit: '10', strokeWidth: '0.5px' }} x1="99.15" y1="186.24" x2="70.56" y2="186.24" />
                            <line style={{ fill: 'none', stroke: '#231f20', strokeMiterlimit: '10', strokeWidth: '0.5px' }} x1="99.15" y1="197.18" x2="70.56" y2="197.18" />
                            <line style={{ fill: 'none', stroke: '#231f20', strokeMiterlimit: '10', strokeWidth: '0.5px' }} x1="99.15" y1="208.12" x2="70.56" y2="208.12" />
                            <line style={{ fill: 'none', stroke: '#231f20', strokeMiterlimit: '10', strokeWidth: '0.5px' }} x1="99.15" y1="219.06" x2="70.56" y2="219.06" />
                            <line style={{ fill: 'none', stroke: '#231f20', strokeMiterlimit: '10', strokeWidth: '0.5px' }} x1="99.15" y1="230" x2="70.56" y2="230" />
                            <line style={{ fill: 'none', stroke: '#231f20', strokeMiterlimit: '10', strokeWidth: '0.5px' }} x1="99.15" y1="240.94" x2="70.56" y2="240.94" />
                            <line style={{ fill: 'none', stroke: '#231f20', strokeMiterlimit: '10', strokeWidth: '0.5px' }} x1="99.15" y1="251.88" x2="70.56" y2="251.88" />
                            <line style={{ fill: 'none', stroke: '#231f20', strokeMiterlimit: '10', strokeWidth: '0.5px' }} x1="99.15" y1="262.81" x2="70.56" y2="262.81" />
                            <line style={{ fill: 'none', stroke: '#231f20', strokeMiterlimit: '10', strokeWidth: '0.5px' }} x1="99.15" y1="273.75" x2="70.56" y2="273.75" />
                            <line style={{ fill: 'none', stroke: '#231f20', strokeMiterlimit: '10', strokeWidth: '0.5px' }} x1="99.15" y1="284.69" x2="70.56" y2="284.69" />
                            <line style={{ fill: 'none', stroke: '#231f20', strokeMiterlimit: '10', strokeWidth: '0.5px' }} x1="99.15" y1="295.63" x2="70.56" y2="295.63" />
                            <line style={{ fill: 'none', stroke: '#231f20', strokeMiterlimit: '10', strokeWidth: '0.5px' }} x1="99.15" y1="306.57" x2="70.56" y2="306.57" />
                            <line style={{ fill: 'none', stroke: '#231f20', strokeMiterlimit: '10', strokeWidth: '0.5px' }} x1="99.15" y1="317.51" x2="70.56" y2="317.51" />
                            <line style={{ fill: 'none', stroke: '#231f20', strokeMiterlimit: '10', strokeWidth: '0.5px' }} x1="99.15" y1="328.45" x2="70.56" y2="328.45" />
                            <line style={{ fill: 'none', stroke: '#231f20', strokeMiterlimit: '10', strokeWidth: '0.5px' }} x1="99.15" y1="339.38" x2="70.56" y2="339.38" />
                            <line style={{ fill: 'none', stroke: '#231f20', strokeMiterlimit: '10', strokeWidth: '0.5px' }} x1="99.15" y1="350.32" x2="70.56" y2="350.32" />
                            <line style={{ fill: 'none', stroke: '#231f20', strokeMiterlimit: '10', strokeWidth: '0.5px' }} x1="99.15" y1="361.26" x2="70.56" y2="361.26" />
                            <line style={{ fill: 'none', stroke: '#231f20', strokeMiterlimit: '10', strokeWidth: '0.5px' }} x1="99.15" y1="372.2" x2="70.56" y2="372.2" />
                            <line style={{ fill: 'none', stroke: '#231f20', strokeMiterlimit: '10', strokeWidth: '0.5px' }} x1="99.15" y1="383.14" x2="70.56" y2="383.14" />
                            <line style={{ fill: 'none', stroke: '#231f20', strokeMiterlimit: '10', strokeWidth: '0.5px' }} x1="99.15" y1="394.08" x2="70.56" y2="394.08" />
                            <line style={{ fill: 'none', stroke: '#231f20', strokeMiterlimit: '10', strokeWidth: '0.5px' }} x1="99.15" y1="405.02" x2="70.56" y2="405.02" />
                            <line style={{ fill: 'none', stroke: '#231f20', strokeMiterlimit: '10', strokeWidth: '0.5px' }} x1="99.15" y1="415.95" x2="70.56" y2="415.95" />
                            <line style={{ fill: 'none', stroke: '#231f20', strokeMiterlimit: '10', strokeWidth: '0.5px' }} x1="99.15" y1="426.89" x2="70.56" y2="426.89" />
                            <line style={{ fill: 'none', stroke: '#231f20', strokeMiterlimit: '10', strokeWidth: '0.5px' }} x1="99.15" y1="437.83" x2="70.56" y2="437.83" />
                            <line style={{ fill: 'none', stroke: '#231f20', strokeMiterlimit: '10', strokeWidth: '0.5px' }} x1="99.15" y1="448.77" x2="70.56" y2="448.77" />
                            <line style={{ fill: 'none', stroke: '#231f20', strokeMiterlimit: '10', strokeWidth: '0.5px' }} x1="99.15" y1="459.71" x2="70.56" y2="459.71" />
                            <line style={{ fill: 'none', stroke: '#231f20', strokeMiterlimit: '10', strokeWidth: '0.5px' }} x1="99.15" y1="470.65" x2="70.56" y2="470.65" />
                            <line style={{ fill: 'none', stroke: '#231f20', strokeMiterlimit: '10', strokeWidth: '0.5px' }} x1="99.15" y1="481.59" x2="70.56" y2="481.59" />
                            <line style={{ fill: 'none', stroke: '#231f20', strokeMiterlimit: '10', strokeWidth: '0.5px' }} x1="99.15" y1="492.52" x2="70.56" y2="492.52" />
                            <line style={{ fill: 'none', stroke: '#231f20', strokeMiterlimit: '10', strokeWidth: '0.5px' }} x1="99.15" y1="503.46" x2="70.56" y2="503.46" />
                            <line style={{ fill: 'none', stroke: '#231f20', strokeMiterlimit: '10', strokeWidth: '0.5px' }} x1="99.15" y1="514.4" x2="70.56" y2="514.4" />
                            <line style={{ fill: 'none', stroke: '#231f20', strokeMiterlimit: '10', strokeWidth: '0.5px' }} x1="99.15" y1="525.34" x2="70.56" y2="525.34" />
                            <line style={{ fill: 'none', stroke: '#231f20', strokeMiterlimit: '10', strokeWidth: '0.5px' }} x1="99.15" y1="536.28" x2="70.56" y2="536.28" />
                            <line style={{ fill: 'none', stroke: '#231f20', strokeMiterlimit: '10', strokeWidth: '0.5px' }} x1="99.15" y1="547.22" x2="70.56" y2="547.22" />
                            <line style={{ fill: 'none', stroke: '#231f20', strokeMiterlimit: '10', strokeWidth: '0.5px' }} x1="99.15" y1="558.16" x2="70.56" y2="558.16" />
                            <line style={{ fill: 'none', stroke: '#231f20', strokeMiterlimit: '10', strokeWidth: '0.5px' }} x1="84.86" y1="27.64" x2="70.56" y2="27.64" />
                            <line style={{ fill: 'none', stroke: '#231f20', strokeMiterlimit: '10', strokeWidth: '0.5px' }} x1="84.86" y1="38.57" x2="70.56" y2="38.57" />
                            <line style={{ fill: 'none', stroke: '#231f20', strokeMiterlimit: '10', strokeWidth: '0.5px' }} x1="84.86" y1="49.51" x2="70.56" y2="49.51" />
                            <line style={{ fill: 'none', stroke: '#231f20', strokeMiterlimit: '10', strokeWidth: '0.5px' }} x1="84.86" y1="60.45" x2="70.56" y2="60.45" />
                            <line style={{ fill: 'none', stroke: '#231f20', strokeMiterlimit: '10', strokeWidth: '0.5px' }} x1="84.86" y1="71.39" x2="70.56" y2="71.39" />
                            <line style={{ fill: 'none', stroke: '#231f20', strokeMiterlimit: '10', strokeWidth: '0.5px' }} x1="84.86" y1="82.33" x2="70.56" y2="82.33" />
                            <line style={{ fill: 'none', stroke: '#231f20', strokeMiterlimit: '10', strokeWidth: '0.5px' }} x1="84.86" y1="93.27" x2="70.56" y2="93.27" />
                            <line style={{ fill: 'none', stroke: '#231f20', strokeMiterlimit: '10', strokeWidth: '0.5px' }} x1="84.86" y1="104.21" x2="70.56" y2="104.21" />
                            <line style={{ fill: 'none', stroke: '#231f20', strokeMiterlimit: '10', strokeWidth: '0.5px' }} x1="84.86" y1="115.14" x2="70.56" y2="115.14" />
                            <line style={{ fill: 'none', stroke: '#231f20', strokeMiterlimit: '10', strokeWidth: '0.5px' }} x1="84.86" y1="126.08" x2="70.56" y2="126.08" />
                            <line style={{ fill: 'none', stroke: '#231f20', strokeMiterlimit: '10', strokeWidth: '0.5px' }} x1="84.86" y1="137.02" x2="70.56" y2="137.02" />
                            <line style={{ fill: 'none', stroke: '#231f20', strokeMiterlimit: '10', strokeWidth: '0.5px' }} x1="84.86" y1="147.96" x2="70.56" y2="147.96" />
                            <line style={{ fill: 'none', stroke: '#231f20', strokeMiterlimit: '10', strokeWidth: '0.5px' }} x1="84.86" y1="158.9" x2="70.56" y2="158.9" />
                            <line style={{ fill: 'none', stroke: '#231f20', strokeMiterlimit: '10', strokeWidth: '0.5px' }} x1="84.86" y1="169.84" x2="70.56" y2="169.84" />
                            <line style={{ fill: 'none', stroke: '#231f20', strokeMiterlimit: '10', strokeWidth: '0.5px' }} x1="84.86" y1="180.78" x2="70.56" y2="180.78" />
                            <line style={{ fill: 'none', stroke: '#231f20', strokeMiterlimit: '10', strokeWidth: '0.5px' }} x1="84.86" y1="191.71" x2="70.56" y2="191.71" />
                            <line style={{ fill: 'none', stroke: '#231f20', strokeMiterlimit: '10', strokeWidth: '0.5px' }} x1="84.86" y1="202.65" x2="70.56" y2="202.65" />
                            <line style={{ fill: 'none', stroke: '#231f20', strokeMiterlimit: '10', strokeWidth: '0.5px' }} x1="84.86" y1="213.59" x2="70.56" y2="213.59" />
                            <line style={{ fill: 'none', stroke: '#231f20', strokeMiterlimit: '10', strokeWidth: '0.5px' }} x1="84.86" y1="224.53" x2="70.56" y2="224.53" />
                            <line style={{ fill: 'none', stroke: '#231f20', strokeMiterlimit: '10', strokeWidth: '0.5px' }} x1="84.86" y1="235.47" x2="70.56" y2="235.47" />
                            <line style={{ fill: 'none', stroke: '#231f20', strokeMiterlimit: '10', strokeWidth: '0.5px' }} x1="84.86" y1="246.41" x2="70.56" y2="246.41" />
                            <line style={{ fill: 'none', stroke: '#231f20', strokeMiterlimit: '10', strokeWidth: '0.5px' }} x1="84.86" y1="257.35" x2="70.56" y2="257.35" />
                            <line style={{ fill: 'none', stroke: '#231f20', strokeMiterlimit: '10', strokeWidth: '0.5px' }} x1="84.86" y1="268.28" x2="70.56" y2="268.28" />
                            <line style={{ fill: 'none', stroke: '#231f20', strokeMiterlimit: '10', strokeWidth: '0.5px' }} x1="84.86" y1="279.22" x2="70.56" y2="279.22" />
                            <line style={{ fill: 'none', stroke: '#231f20', strokeMiterlimit: '10', strokeWidth: '0.5px' }} x1="84.86" y1="290.16" x2="70.56" y2="290.16" />
                            <line style={{ fill: 'none', stroke: '#231f20', strokeMiterlimit: '10', strokeWidth: '0.5px' }} x1="84.86" y1="301.1" x2="70.56" y2="301.1" />
                            <line style={{ fill: 'none', stroke: '#231f20', strokeMiterlimit: '10', strokeWidth: '0.5px' }} x1="84.86" y1="312.04" x2="70.56" y2="312.04" />
                            <line style={{ fill: 'none', stroke: '#231f20', strokeMiterlimit: '10', strokeWidth: '0.5px' }} x1="84.86" y1="322.98" x2="70.56" y2="322.98" />
                            <line style={{ fill: 'none', stroke: '#231f20', strokeMiterlimit: '10', strokeWidth: '0.5px' }} x1="84.86" y1="333.92" x2="70.56" y2="333.92" />
                            <line style={{ fill: 'none', stroke: '#231f20', strokeMiterlimit: '10', strokeWidth: '0.5px' }} x1="84.86" y1="344.85" x2="70.56" y2="344.85" />
                            <line style={{ fill: 'none', stroke: '#231f20', strokeMiterlimit: '10', strokeWidth: '0.5px' }} x1="84.86" y1="355.79" x2="70.56" y2="355.79" />
                            <line style={{ fill: 'none', stroke: '#231f20', strokeMiterlimit: '10', strokeWidth: '0.5px' }} x1="84.86" y1="366.73" x2="70.56" y2="366.73" />
                            <line style={{ fill: 'none', stroke: '#231f20', strokeMiterlimit: '10', strokeWidth: '0.5px' }} x1="84.86" y1="377.67" x2="70.56" y2="377.67" />
                            <line style={{ fill: 'none', stroke: '#231f20', strokeMiterlimit: '10', strokeWidth: '0.5px' }} x1="84.86" y1="388.61" x2="70.56" y2="388.61" />
                            <line style={{ fill: 'none', stroke: '#231f20', strokeMiterlimit: '10', strokeWidth: '0.5px' }} x1="84.86" y1="399.55" x2="70.56" y2="399.55" />
                            <line style={{ fill: 'none', stroke: '#231f20', strokeMiterlimit: '10', strokeWidth: '0.5px' }} x1="84.86" y1="410.49" x2="70.56" y2="410.49" />
                            <line style={{ fill: 'none', stroke: '#231f20', strokeMiterlimit: '10', strokeWidth: '0.5px' }} x1="84.86" y1="421.42" x2="70.56" y2="421.42" />
                            <line style={{ fill: 'none', stroke: '#231f20', strokeMiterlimit: '10', strokeWidth: '0.5px' }} x1="84.86" y1="432.36" x2="70.56" y2="432.36" />
                            <line style={{ fill: 'none', stroke: '#231f20', strokeMiterlimit: '10', strokeWidth: '0.5px' }} x1="84.86" y1="443.3" x2="70.56" y2="443.3" />
                            <line style={{ fill: 'none', stroke: '#231f20', strokeMiterlimit: '10', strokeWidth: '0.5px' }} x1="84.86" y1="454.24" x2="70.56" y2="454.24" />
                            <line style={{ fill: 'none', stroke: '#231f20', strokeMiterlimit: '10', strokeWidth: '0.5px' }} x1="84.86" y1="465.18" x2="70.56" y2="465.18" />
                            <line style={{ fill: 'none', stroke: '#231f20', strokeMiterlimit: '10', strokeWidth: '0.5px' }} x1="84.86" y1="476.12" x2="70.56" y2="476.12" />
                            <line style={{ fill: 'none', stroke: '#231f20', strokeMiterlimit: '10', strokeWidth: '0.5px' }} x1="84.86" y1="487.05" x2="70.56" y2="487.05" />
                            <line style={{ fill: 'none', stroke: '#231f20', strokeMiterlimit: '10', strokeWidth: '0.5px' }} x1="84.86" y1="497.99" x2="70.56" y2="497.99" />
                            <line style={{ fill: 'none', stroke: '#231f20', strokeMiterlimit: '10', strokeWidth: '0.5px' }} x1="84.86" y1="508.93" x2="70.56" y2="508.93" />
                            <line style={{ fill: 'none', stroke: '#231f20', strokeMiterlimit: '10', strokeWidth: '0.5px' }} x1="84.86" y1="519.87" x2="70.56" y2="519.87" />
                            <line style={{ fill: 'none', stroke: '#231f20', strokeMiterlimit: '10', strokeWidth: '0.5px' }} x1="84.86" y1="530.81" x2="70.56" y2="530.81" />
                            <line style={{ fill: 'none', stroke: '#231f20', strokeMiterlimit: '10', strokeWidth: '0.5px' }} x1="84.86" y1="541.75" x2="70.56" y2="541.75" />
                            <line style={{ fill: 'none', stroke: '#231f20', strokeMiterlimit: '10', strokeWidth: '0.5px' }} x1="84.86" y1="552.69" x2="70.56" y2="552.69" />

                            <circle style={{ fill: '#231f20', stroke: '#231f20', strokeMiterlimit: '10' }} cx="49.58" cy="600.77" r="46.24" />
                        </g>
                    </svg>
                </div>

                {angs.slice(0, 1).map((a, index) => (
                    <div key={index}>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 501.23 251.61">
                            <g id="scales">
                                <line style={{ fill: 'none', stroke: '#f90606', strokeMiterlimit: '10', strokeWidth: '2px' }} x1="250.61" y1="250.61" x2="250.61" y2="1" />
                                <line style={{ fill: 'none', stroke: '#f90606', strokeMiterlimit: '10', strokeWidth: '2px' }} x1="250.61" y1="250.61" x2="230.22" y2="17.5" />
                                <line style={{ fill: 'none', stroke: '#f90606', strokeMiterlimit: '10', strokeWidth: '2px' }} x1="250.61" y1="250.61" x2="190.05" y2="24.58" />
                                <line style={{ fill: 'none', stroke: '#f90606', strokeMiterlimit: '10', strokeWidth: '2px' }} x1="250.61" y1="250.61" x2="151.72" y2="38.54" />
                                <line style={{ fill: 'none', stroke: '#f90606', strokeMiterlimit: '10', strokeWidth: '2px' }} x1="250.61" y1="250.61" x2="116.4" y2="58.93" />
                                <line style={{ fill: 'none', stroke: '#f90606', strokeMiterlimit: '10', strokeWidth: '2px' }} x1="250.61" y1="250.61" x2="85.15" y2="85.15" />
                                <line style={{ fill: 'none', stroke: '#f90606', strokeMiterlimit: '10', strokeWidth: '2px' }} x1="250.61" y1="250.61" x2="58.93" y2="116.4" />
                                <line style={{ fill: 'none', stroke: '#f90606', strokeMiterlimit: '10', strokeWidth: '2px' }} x1="250.61" y1="250.61" x2="38.54" y2="151.72" />
                                <line style={{ fill: 'none', stroke: '#f90606', strokeMiterlimit: '10', strokeWidth: '2px' }} x1="250.61" y1="250.61" x2="24.58" y2="190.05" />
                                <line style={{ fill: 'none', stroke: '#f90606', strokeMiterlimit: '10', strokeWidth: '2px' }} x1="250.61" y1="250.61" x2="17.5" y2="230.22" />
                                <line style={{ fill: 'none', stroke: '#f90606', strokeMiterlimit: '10', strokeWidth: '2px' }} x1="250.61" y1="250.61" x2="483.73" y2="230.22" />
                                <line style={{ fill: 'none', stroke: '#f90606', strokeMiterlimit: '10', strokeWidth: '2px' }} x1="250.61" y1="250.61" x2="476.65" y2="190.05" />
                                <line style={{ fill: 'none', stroke: '#f90606', strokeMiterlimit: '10', strokeWidth: '2px' }} x1="250.61" y1="250.61" x2="462.69" y2="151.72" />
                                <line style={{ fill: 'none', stroke: '#f90606', strokeMiterlimit: '10', strokeWidth: '2px' }} x1="250.61" y1="250.61" x2="442.3" y2="116.4" />
                                <line style={{ fill: 'none', stroke: '#f90606', strokeMiterlimit: '10', strokeWidth: '2px' }} x1="250.61" y1="250.61" x2="416.08" y2="85.15" />
                                <line style={{ fill: 'none', stroke: '#f90606', strokeMiterlimit: '10', strokeWidth: '2px' }} x1="250.61" y1="250.61" x2="384.83" y2="58.93" />
                                <line style={{ fill: 'none', stroke: '#f90606', strokeMiterlimit: '10', strokeWidth: '2px' }} x1="250.61" y1="250.61" x2="349.51" y2="38.54" />
                                <line style={{ fill: 'none', stroke: '#f90606', strokeMiterlimit: '10', strokeWidth: '2px' }} x1="250.61" y1="250.61" x2="311.18" y2="24.58" />
                                <line style={{ fill: 'none', stroke: '#f90606', strokeMiterlimit: '10', strokeWidth: '2px' }} x1="250.61" y1="250.61" x2="271.01" y2="17.5" />
                                <line style={{ fill: 'none', stroke: '#f90606', strokeMiterlimit: '10', strokeWidth: '2px' }} x1="250.61" y1="250.61" x2="207.27" y2="4.79" />
                                <line style={{ fill: 'none', stroke: '#f90606', strokeMiterlimit: '10', strokeWidth: '2px' }} x1="250.61" y1="250.61" x2="165.24" y2="16.05" />
                                <line style={{ fill: 'none', stroke: '#f90606', strokeMiterlimit: '10', strokeWidth: '2px' }} x1="250.61" y1="250.61" x2="125.81" y2="34.44" />
                                <line style={{ fill: 'none', stroke: '#f90606', strokeMiterlimit: '10', strokeWidth: '2px' }} x1="250.61" y1="250.61" x2="90.17" y2="59.4" />
                                <line style={{ fill: 'none', stroke: '#f90606', strokeMiterlimit: '10', strokeWidth: '2px' }} x1="250.61" y1="250.61" x2="59.4" y2="90.17" />
                                <line style={{ fill: 'none', stroke: '#f90606', strokeMiterlimit: '10', strokeWidth: '2px' }} x1="250.61" y1="250.61" x2="34.44" y2="125.81" />
                                <line style={{ fill: 'none', stroke: '#f90606', strokeMiterlimit: '10', strokeWidth: '2px' }} x1="250.61" y1="250.61" x2="16.05" y2="165.24" />
                                <line style={{ fill: 'none', stroke: '#f90606', strokeMiterlimit: '10', strokeWidth: '2px' }} x1="250.61" y1="250.61" x2="4.79" y2="207.27" />
                                <line style={{ fill: 'none', stroke: '#f90606', strokeMiterlimit: '10', strokeWidth: '2px' }} x1="250.61" y1="250.61" x2="496.44" y2="207.27" />
                                <line style={{ fill: 'none', stroke: '#f90606', strokeMiterlimit: '10', strokeWidth: '2px' }} x1="250.61" y1="250.61" x2="485.18" y2="165.24" />
                                <line style={{ fill: 'none', stroke: '#f90606', strokeMiterlimit: '10', strokeWidth: '2px' }} x1="250.61" y1="250.61" x2="466.79" y2="125.81" />
                                <line style={{ fill: 'none', stroke: '#f90606', strokeMiterlimit: '10', strokeWidth: '2px' }} x1="250.61" y1="250.61" x2="441.83" y2="90.17" />
                                <line style={{ fill: 'none', stroke: '#f90606', strokeMiterlimit: '10', strokeWidth: '2px' }} x1="250.61" y1="250.61" x2="411.06" y2="59.4" />
                                <line style={{ fill: 'none', stroke: '#f90606', strokeMiterlimit: '10', strokeWidth: '2px' }} x1="250.61" y1="250.61" x2="375.42" y2="34.44" />
                                <line style={{ fill: 'none', stroke: '#f90606', strokeMiterlimit: '10', strokeWidth: '2px' }} x1="250.61" y1="250.61" x2="335.99" y2="16.05" />
                                <line style={{ fill: 'none', stroke: '#f90606', strokeMiterlimit: '10', strokeWidth: '2px' }} x1="250.61" y1="250.61" x2="293.96" y2="4.79" />
                            </g>
                            <g id="chaada">
                                <path style={{ fill: 'none', strokeMiterlimit: '10', strokeWidth: '2px', stroke: '#231f20' }}
                                    d="M609.61,637.67c0-137.86-111.75-249.62-249.61-249.62S110.39,499.81,110.39,637.67Z"
                                    transform="translate(-109.39 -387.05)" />
                                <path style={{ stroke: '#f90606', strokeMiterlimit: '10', strokeWidth: '2px', fill: '#fff' }}
                                    d="M582.59,637.67c0-122.94-99.66-222.59-222.59-222.59S137.41,514.73,137.41,637.67Z"
                                    transform="translate(-109.39 -387.05)" />
                            </g>
                            <g id="pointers">

                                {/* <line style={{ fill: 'none', strokeMiterlimit: '10', strokeWidth: '2px', stroke: 'gray' }}
                                    x1="250.61" y1="28.03" x2="250.61" y2="250.61"
                                    transform="rotate(0 250.61 250.61)"
                                /> */}

                                <line style={{ fill: 'none', strokeMiterlimit: '10', strokeWidth: '2px', stroke: 'blue' }}
                                    x1="250.61" y1="28.03" x2="250.61" y2="250.61"
                                    transform={`rotate(${-a.a1 + 90} 250.61 250.61)`}
                                />
                                <line style={{ fill: 'none', strokeMiterlimit: '10', strokeWidth: '2px', stroke: 'green' }}
                                    x1="250.61" y1="28.03" x2="250.61" y2="250.61"
                                    transform={`rotate(${90 - a.a2} 250.61 250.61)`}
                                />

                                <path style={{ fill: 'none', strokeMiterlimit: '10', strokeWidth: '2px', stroke: '#231f20' }}
                                    d="M582.59,637.67c0-122.94-99.66-222.59-222.59-222.59S137.41,514.73,137.41,637.67Z"
                                    transform="translate(-109.39 -387.05)" />
                            </g>
                        </svg>
                        <p className='pt-4 text-center'>Angle:{' '}{a.a2 - a.a1}°</p>
                    </div>
                ))}

                <div className='grid gap-2 w-full'>
                    <button type='button' onClick={handleAngle} >create angles</button>
                    <label htmlFor='temp'>change temp</label>
                    <input id='temp' name='temp' type="number" placeholder='temp °C' value={temp} onChange={(e: any) => setTemp(e.target.value)} />
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


