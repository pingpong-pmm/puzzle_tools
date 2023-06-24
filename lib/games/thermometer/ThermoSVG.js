import Image from 'next/image'
import React from 'react'

export function ThermoSVG(props) {
    return (
        <div className='w-full'>
            <Image src={props.link} height={2*500} width={500} alt='download-image' />
        </div>
    )
}