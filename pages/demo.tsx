/* eslint-disable react/jsx-no-duplicate-props */
import type { NextPage } from 'next'


const Demos: NextPage = () => {

    return (
        <div className='p-8 flex gap-4 justify-center items-center mx-auto'>
            <Chada low={10} high={65} />
            <Chada low={-40} high={80} />
            <Chada low={20} high={45} />
            <Chada low={-10} high={75} />
        </div>
    )
}

function Chada(props: any) {
    return (
        <div className='w-40'>
            <div className="relative flex justify-center rounded-t-full ring-1 ring-black h-20 w-40 bg-gray-200">
                <div className='flex gap-[0.5px] h-20 relative justify-center'>

                    <div style={{ transform: 'rotate(-80deg)', transformOrigin: 'bottom' }} className='h-full absolute bottom-0 p-[0.5px] bg-black z-20' />
                    <div style={{ transform: 'rotate(-70deg)', transformOrigin: 'bottom' }} className='h-full absolute bottom-0 p-[0.5px] bg-black z-20' />
                    <div style={{ transform: 'rotate(-60deg)', transformOrigin: 'bottom' }} className='h-full absolute bottom-0 p-[0.5px] bg-black z-20' />
                    <div style={{ transform: 'rotate(-50deg)', transformOrigin: 'bottom' }} className='h-full absolute bottom-0 p-[0.5px] bg-black z-20' />
                    <div style={{ transform: 'rotate(-40deg)', transformOrigin: 'bottom' }} className='h-full absolute bottom-0 p-[0.5px] bg-black z-20' />
                    <div style={{ transform: 'rotate(-30deg)', transformOrigin: 'bottom' }} className='h-full absolute bottom-0 p-[0.5px] bg-black z-20' />
                    <div style={{ transform: 'rotate(-20deg)', transformOrigin: 'bottom' }} className='h-full absolute bottom-0 p-[0.5px] bg-black z-20' />
                    <div style={{ transform: 'rotate(-10deg)', transformOrigin: 'bottom' }} className='h-full absolute bottom-0 p-[0.5px] bg-black z-20' />

                    <div style={{ transform: 'rotate(0deg)', transformOrigin: 'bottom' }} className='h-full absolute bottom-0 p-[0.5px] bg-black z-20' />
                    <div style={{ transform: 'rotate(10deg)', transformOrigin: 'bottom' }} className='h-full absolute bottom-0 p-[0.5px] bg-black z-20' />
                    <div style={{ transform: 'rotate(20deg)', transformOrigin: 'bottom' }} className='h-full absolute bottom-0 p-[0.5px] bg-black z-20' />
                    <div style={{ transform: 'rotate(30deg)', transformOrigin: 'bottom' }} className='h-full absolute bottom-0 p-[0.5px] bg-black z-20' />
                    <div style={{ transform: 'rotate(40deg)', transformOrigin: 'bottom' }} className='h-full absolute bottom-0 p-[0.5px] bg-black z-20' />
                    <div style={{ transform: 'rotate(50deg)', transformOrigin: 'bottom' }} className='h-full absolute bottom-0 p-[0.5px] bg-black z-20' />
                    <div style={{ transform: 'rotate(60deg)', transformOrigin: 'bottom' }} className='h-full absolute bottom-0 p-[0.5px] bg-black z-20' />
                    <div style={{ transform: 'rotate(70deg)', transformOrigin: 'bottom' }} className='h-full absolute bottom-0 p-[0.5px] bg-black z-20' />
                    <div style={{ transform: 'rotate(80deg)', transformOrigin: 'bottom' }} className='h-full absolute bottom-0 p-[0.5px] bg-black z-20' />
                    {/* <div style={{ transform: 'rotate(90deg)', transformOrigin: 'bottom' }} className='h-full absolute bottom-0 p-[0.5px] bg-black z-20' /> */}
                </div>
                <div className='flex justify-center absolute bottom-0 rounded-t-full h-[90px] w-[180px] bg-gray-100 z-40'>
                    <div style={{ transform: `rotate(${props.low}deg)`, transformOrigin: 'bottom' }} className='h-full absolute bottom-0 p-[0.5px] bg-[red] z-20' />
                    <div style={{ transform: `rotate(${props.high}deg)`, transformOrigin: 'bottom' }} className='h-full absolute bottom-0 p-[0.5px] bg-[red] z-20' />
                </div>
            </div>
            <p className='text-xs text-center py-2'>(1) <span className='border-b border-black'>{props.high - props.low}°</span></p>
        </div>
    )
}

export default Demos


