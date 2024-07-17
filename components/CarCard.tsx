"use client"
import { CarProps } from '@/types'
import { calculateCarRent } from '@/utils';
import Image from 'next/image';
import { TbSteeringWheel } from "react-icons/tb";
import { GiCarWheel } from "react-icons/gi";
import { MdGasMeter } from "react-icons/md";
import {useState} from 'react'
import { CarDetails, CustomButton } from '.';
import { FaArrowRight } from "react-icons/fa";

interface CarCardProps {
    car: CarProps
}

const CarCard = ({car} : CarCardProps) => {

    const {city_mpg, year, make, model, transmission, drive} = car;

    const carRent = calculateCarRent(city_mpg, year);

    const [isOpen, setIsOpen] = useState(false)

  return (
    <div className=' p-5 group relative hover:opacity-85 hover:transition duration-300 hover:scale-105 cursor-pointer my-5 border-2 border-slate-200 rounded-xl md:p-5 sm:p-7 shadow-xl'>

        <div className="">
            <div className="font-semibold sm:text-lg lg:text-xl capitalize truncate">
                {make} {model}
            </div>
        </div>

        <div className="flex">
            $
            <div className='font-bold sm:text-lg md:text-xl'>
                {carRent}
            </div>

            <div className='self-end md:text-base lg:text-xl'>/day</div>
        </div>

        <div>
            <Image
                src="/car_img.png"
                width={500}
                height={500}
                alt="Car Image "
            />
        </div>

        <div className="flex justify-between font-semibold text-slate-800">
            <div className="flex flex-col items-center text-sm md:text-base">
                <TbSteeringWheel className='text-red-600'/>
                <div>{transmission === 'a' ? 'Automatic' : 'Manual'}</div>
            </div>
            <div className="flex flex-col items-center text-sm md:text-base">
                <GiCarWheel className='text-orange-600' />
                <div>{drive.toUpperCase()}</div>
            </div>
            <div className="flex flex-col items-center text-sm md:text-base">
                <MdGasMeter className='text-green-600'/>
                <div>{city_mpg} MPG</div>
            </div>
        </div>

        <div className='hidden group-hover:block'>
            <CustomButton
                title='View More'
                containerStyles=' ml-4 w-11/12 absolute bottom-5 left-0 text-white font-bold border-2 bg-blue-500 rounded-2xl py-2 '
                handleClick={() => setIsOpen(true)}
            />
            <FaArrowRight className='absolute right-10 bottom-8 text-white' />

        </div>

        
        <CarDetails
          isOpen = {isOpen} 
          closeModal = {() => setIsOpen(false)}
          car ={car}
        />
    </div>
  )
}

export default CarCard
