import { ChadaSVG } from "components/Boards/Chadaa";
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

    return (
        <div id='view' className='w-full mx-auto'>
            <div ref={ref} className='max-h-80 max-w-80 grid justify-evenly grid-cols-1 bg-white shadow-md rounded-lg gap-2 p-4'>
                {data?.slice(0, 1).map((z, index) => (
                    <div key={index}>
                        {/* <ChadaQ low={z.low} high={z.high} shows={shows.view} x={index + 1} /> */}
                        <ChadaSVG item={z} shows={shows.view} x={index + 1}/>
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
        // setAngs(angs)
        return angs;
    }


}