"use client"

import Image from 'next/image'
import React from 'react'
import { CustomButton } from '.'

const Hero = () => {
    const handleScroll = () => {

    }

  return (
    <div className='h-full w-full'>
        <div className='pt-36 px-20 md:flex md:justify-between'>
            <div className='pb-10'>
                <div className='font-bold text-2xl md:text-4xl sm:text-3xl'>Find, book or rent a car - quickly and easily!</div>
                <p className='font-raleway text-sm md:text-lg sm:text-base py-3'>Streamline your car rental experience with out effortless booking process.</p>
                
                <CustomButton
                    title="Explore Cars"
                    containerStyles = "bg-blue-700 text-white rounded-full mt-10 px-5 py-3 hover:opacity-90 text-sm md:text-lg"
                    handleClick={handleScroll}
                    btnType="button"
                /> 
            </div>

            <div className=' flex justify-center -space-x-96 '>
                <div className=' flex items-center justify-center py-10 z-10'>
                    <Image
                        src="/car.png"
                        width={500}
                        height={500}
                        alt="Car Image "
                    />
                </div>
                <div className=' mix-blend-multiply bg-blue-600 h-96 w-96 rounded-full half-circle z-0'></div>
            </div>           
        </div>
    </div>
  )
}

export default Hero