import { RullerSVG } from "components/Boards/Ruller";
import { useEffect, useRef, useState } from "react"

//ignore ts
export function Rullerq(props) {

    let shows = {
        id: 1,
        view: props.show
    }

    const [data, setData] = useState([])
    const ref = useRef();

    useEffect(() => {
        setData(props.jinis)
    }, [props])

    return (
        <div id='view' className='w-full mx-auto'>
            <div ref={ref} className='max-h-80 max-w-80 grid justify-evenly grid-cols-1 bg-white shadow-md rounded-lg gap-2 p-4'>
                {data?.slice(0, 1).map((z, index) => (
                    <div key={index} className="h-[35vh]">
                        <RullerSVG item={z} shows={shows.view} x={index + 1} />
                    </div>
                ))}
            </div>
        </div>
    )
}

export class Rullerc {

    constructor() {
    }

    makeData() {

        let datas = []
        let a1 = 1
        let a2 = 1

        for (let i = 0; i < 2; i++) {
            do {
                a1 = Math.floor(Math.random() * 51)
                a2 = Math.floor(Math.random() * 51)
            } while (a1 === a2 || a1 === 0 || a2 === 0);

            datas.push({ a1: a1, a2: a2 });
        }
        return datas
    }


}