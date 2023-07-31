import { NewThermoSVG } from "components/Boards/Thermometer";
import { useEffect, useRef, useState } from "react"

//ignore ts
export function Thermo(props) {

    const [data, setData] = useState({})
    const ref = useRef();

    useEffect(() => {
        setData(props.temps)
    }, [props])

    return (
        <div id='view' className='w-full mx-auto'>
            <div ref={ref} className='max-h-80 max-w-80 grid bg-white shadow-md rounded-lg p-4'>

                    <NewThermoSVG
                        shows={props.show}
                        temp1={+data.temp1}
                        temp2={+data.temp2}
                        temp3={+data.temp3}
                        temp4={+data.temp4}
                    />
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

        {/* let temps = Array.from({ length: 3 }, () => Math.floor(Math.random() * this.c))

        let tempss = temps?.map((jin, index) => ({
            id: index + 1,
            temp: jin
        }));
        return tempss */}
        function generateUniqueRandom(existingNumbers, low, high) {
            let num;
            do {
                num = Math.floor(Math.random() * (high - low + 1)) + low;
            } while (existingNumbers.includes(num));

            return num;
        }

        // Generate 4 unique random numbers in the range of 0 to 100
        const existingNumbers = [];
        const temps = {};

        for (let i = 1; i <= 4; i++) {
            const num = generateUniqueRandom(existingNumbers, 0, 100);
            existingNumbers.push(num);
            temps[`temp${i}`] = num;
        }
        return temps

    }

}