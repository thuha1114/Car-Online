import { footerLinks } from '@/constants'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <div className='bg-blue-600 pt-10 text-slate-100'>
      <div className='font-raleway pb-10 px-10 sm:ml-20 sm:grid-rows-4 grid md:grid-rows-2 lg:grid-rows-1 lg:grid-cols-4 gap-8'>
        
        <div className='lg:col-span-1 sm:row-span-1 md:row-span-1'>
          <div className='flex justify-center items items-center'>
            <Image
              src="/logo.png"
              width={100}
              height={100}
              alt="Car Image "
              
            />
          </div>
          <p className='text-center  sm:text-lg md:text-xl'>Product made by <b>@thuha</b></p>
        </div>

        <div className='lg:col-span-3 sm:row-span-3 md:row-span-1 flex justify-center items-center'>

          <div className='grid sm:w-full sm:grid-cols-2 md:grid-rows-1 md:grid-cols-3 gap-8 md:flex-1'>

            {footerLinks.map((item, index) => (
              <div key={index} className='md:col-span-1 px-5'>
                  <b className='sm:text-lg md:text-xl'>{item.title}</b>
                  <ul className='sm:text-sm md:text-base'>
                    {item.links.map((itemLink,index) => (
                      <li key={index} className="py-2">
                        <Link href={itemLink.url}>{itemLink.title}</Link>
                      </li>
                    ))}
                  </ul>
              </div>
            ))}

          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer