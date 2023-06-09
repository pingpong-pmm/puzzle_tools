import type { NextPage } from 'next'
import { useState } from 'react'

function Temperature(item: any) {
    const [show, setShow] = useState(true)

    let temps = item.temp
    console.log(item)

    return (
        <div className='grid gap-5 items-center'>
            <div className="relative">
                <div className="flex items-start justify-center">
                    <div className='grid gap-0.5 pt-3 w-5 justify-items-end'>
{/* 10 */}
                        <div className='p-[0.5px] w-5 bg-black' />
                        <div className='p-[0.5px] w-3 bg-black' />
                        <div className='p-[0.5px] w-3 bg-black' />
                        <div className='p-[0.5px] w-3 bg-black' />
                        <div className='p-[0.5px] w-3 bg-black' />
{/* 20 */}
                        <div className='p-[0.5px] w-5 bg-black' />
                        <div className='p-[0.5px] w-3 bg-black' />
                        <div className='p-[0.5px] w-3 bg-black' />
                        <div className='p-[0.5px] w-3 bg-black' />
                        <div className='p-[0.5px] w-3 bg-black' />
{/* 30 */}
                        <div className='p-[0.5px] w-5 bg-black' />
                        <div className='p-[0.5px] w-3 bg-black' />
                        <div className='p-[0.5px] w-3 bg-black' />
                        <div className='p-[0.5px] w-3 bg-black' />
                        <div className='p-[0.5px] w-3 bg-black' />
{/* 40 */}
                        <div className='p-[0.5px] w-5 bg-black' />
                        <div className='p-[0.5px] w-3 bg-black' />
                        <div className='p-[0.5px] w-3 bg-black' />
                        <div className='p-[0.5px] w-3 bg-black' />
                        <div className='p-[0.5px] w-3 bg-black' />
{/* 50 */}
                        <div className='p-[0.5px] w-5 bg-black' />
                        <div className='p-[0.5px] w-3 bg-black' />
                        <div className='p-[0.5px] w-3 bg-black' />
                        <div className='p-[0.5px] w-3 bg-black' />
                        <div className='p-[0.5px] w-3 bg-black' />
{/* 60 */}
                        <div className='p-[0.5px] w-5 bg-black' />
                        <div className='p-[0.5px] w-3 bg-black' />
                        <div className='p-[0.5px] w-3 bg-black' />
                        <div className='p-[0.5px] w-3 bg-black' />
                        <div className='p-[0.5px] w-3 bg-black' />
{/* 70 */}
                        <div className='p-[0.5px] w-5 bg-black' />
                        <div className='p-[0.5px] w-3 bg-black' />
                        <div className='p-[0.5px] w-3 bg-black' />
                        <div className='p-[0.5px] w-3 bg-black' />
                        <div className='p-[0.5px] w-3 bg-black' />
{/* 80 */}
                        <div className='p-[0.5px] w-5 bg-black' />
                        <div className='p-[0.5px] w-3 bg-black' />
                        <div className='p-[0.5px] w-3 bg-black' />
                        <div className='p-[0.5px] w-3 bg-black' />
                        <div className='p-[0.5px] w-3 bg-black' />
{/* 90 */}
                        <div className='p-[0.5px] w-5 bg-black' />
                        <div className='p-[0.5px] w-3 bg-black' />
                        <div className='p-[0.5px] w-3 bg-black' />
                        <div className='p-[0.5px] w-3 bg-black' />
                        <div className='p-[0.5px] w-3 bg-black' />
{/* 100 */}
                        <div className='p-[0.5px] w-5 bg-black' />
                        <div className='p-[0.5px] w-3 bg-black' />
                        <div className='p-[0.5px] w-3 bg-black' />
                        <div className='p-[0.5px] w-3 bg-black' />
                        <div className='p-[0.5px] w-3 bg-black' />

                        <div className='p-[0.5px] w-5 bg-black' />

                    </div>

                    <div className="h-48 w-5 grid items-center rotate-180 overflow-hidden rounded-full ring-black ring-1 bg-gray-300">
                        <div className='h-full pb-3 pt-10'>
                            <div className="h-full bg-red-600" style={{ "height": `${+temps}%` }}></div>
                        </div>
                    </div>

                    <div className='grid gap-0.5 pt-3'>
                        <div className='p-[0.5px] w-5 bg-black' />
                        <div className='p-[0.5px] w-3 bg-black' />
                        <div className='p-[0.5px] w-3 bg-black' />
                        <div className='p-[0.5px] w-3 bg-black' />
                        <div className='p-[0.5px] w-3 bg-black' />

                        <div className='p-[0.5px] w-5 bg-black' />
                        <div className='p-[0.5px] w-3 bg-black' />
                        <div className='p-[0.5px] w-3 bg-black' />
                        <div className='p-[0.5px] w-3 bg-black' />
                        <div className='p-[0.5px] w-3 bg-black' />

                        <div className='p-[0.5px] w-5 bg-black' />
                        <div className='p-[0.5px] w-3 bg-black' />
                        <div className='p-[0.5px] w-3 bg-black' />
                        <div className='p-[0.5px] w-3 bg-black' />
                        <div className='p-[0.5px] w-3 bg-black' />

                        <div className='p-[0.5px] w-5 bg-black' />
                        <div className='p-[0.5px] w-3 bg-black' />
                        <div className='p-[0.5px] w-3 bg-black' />
                        <div className='p-[0.5px] w-3 bg-black' />
                        <div className='p-[0.5px] w-3 bg-black' />

                        <div className='p-[0.5px] w-5 bg-black' />
                        <div className='p-[0.5px] w-3 bg-black' />
                        <div className='p-[0.5px] w-3 bg-black' />
                        <div className='p-[0.5px] w-3 bg-black' />
                        <div className='p-[0.5px] w-3 bg-black' />

                        <div className='p-[0.5px] w-5 bg-black' />
                        <div className='p-[0.5px] w-3 bg-black' />
                        <div className='p-[0.5px] w-3 bg-black' />
                        <div className='p-[0.5px] w-3 bg-black' />
                        <div className='p-[0.5px] w-3 bg-black' />

                        <div className='p-[0.5px] w-5 bg-black' />
                        <div className='p-[0.5px] w-3 bg-black' />
                        <div className='p-[0.5px] w-3 bg-black' />
                        <div className='p-[0.5px] w-3 bg-black' />
                        <div className='p-[0.5px] w-3 bg-black' />

                        <div className='p-[0.5px] w-5 bg-black' />
                        <div className='p-[0.5px] w-3 bg-black' />
                        <div className='p-[0.5px] w-3 bg-black' />
                        <div className='p-[0.5px] w-3 bg-black' />
                        <div className='p-[0.5px] w-3 bg-black' />

                        <div className='p-[0.5px] w-5 bg-black' />
                        <div className='p-[0.5px] w-3 bg-black' />
                        <div className='p-[0.5px] w-3 bg-black' />
                        <div className='p-[0.5px] w-3 bg-black' />
                        <div className='p-[0.5px] w-3 bg-black' />

                        <div className='p-[0.5px] w-5 bg-black' />
                        <div className='p-[0.5px] w-3 bg-black' />
                        <div className='p-[0.5px] w-3 bg-black' />
                        <div className='p-[0.5px] w-3 bg-black' />
                        <div className='p-[0.5px] w-3 bg-black' />
                        <div className='p-[0.5px] w-5 bg-black' />

                    </div>
                </div>
                <div className="absolute inset-0 flex items-end justify-center">
                    <div className="h-[52px] ring-1 ring-red-600 w-[52px] rounded-full bg-red-600"></div>
                </div>
            </div>

            {show ? (
                <p className='text-center'>({item.id})
                    <span className=' border-b px-1 border-black'>
                        {' '}{temps} °C
                    </span>
                </p>
            ) : (
                <p className='text-center'>({item.id})________</p>
            )}
        </div>
    )
}


const Demo: NextPage = () => {

    const data = [
        {
            id: 1,
            temp: 0
        },
        {
            id: 2,
            temp: 50
        },
        {
            id: 3,
            temp: 100
        },
        {
            id: 4,
            temp: 10
        },
    ]

    return (
        <div className='flex gap-4 max-w-7xl mx-auto px-5 py-10'>
            {data.map((item, index) => (
                <Temperature key={index} {...item} />
            ))}
        </div>
    )
}

export default Demo


