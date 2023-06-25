import Image from 'next/image'
import React from 'react'

export function ThermoSVG(props) {
    return (
        <div className='min-h-screen'>
            {/* <img className='cover h-full w-full' src={props.link} alt='download-image' /> */}
            <Image className='cover' src={props.link} height={500} width={500} alt='download-image' />
        </div>
    )
}