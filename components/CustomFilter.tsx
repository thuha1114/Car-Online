"use client"

import { CustomFilterProps } from '@/types'
import { updateSearchParams } from '@/utils'
import { Listbox, Transition } from '@headlessui/react'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import React, { Fragment, useState } from 'react'
import { HiMiniChevronUpDown } from "react-icons/hi2";

const CustomFilter = ({title, options} : CustomFilterProps) => {

  const router = useRouter()
  const [selected, setSelected] = useState(options[0])

  const handleUpdateParams = (e: {type: string, value: string}) => {

    const newPathName = updateSearchParams(title, e.value.toLowerCase())
    router.push(newPathName)
  }

  return (
    <div className='w-fit pr-5'>
      <Listbox
        value={selected}
        onChange = {(e) => {setSelected(e); handleUpdateParams(e)}}
       
      >
        <div className='relative w-fit z-10'>
          <Listbox.Button className='border-2 border-slate-300 w-40 flex py-2 px-5 items-center justify-between rounded-lg shadow-lg'>
            <span className='block truncate'>{selected.title}</span>
            <HiMiniChevronUpDown />
          </Listbox.Button>

          <Transition
            as = {Fragment}
            leave="transiton ease-in duration-100"
            leaveFrom='opacity-100'
            leaveTo='opacity-0'          
          >
            <Listbox.Options className="absolute left-0 bg-white text-gray-700 w-40 border-2 border-slate-300 shadow-lg ">
              {options.map(item => (
                <Listbox.Option  
                  key={item.title}
                  value={item} 
                  className= {({active}) => `cursor-pointer py-1 px-2 ${active ? 'bg-blue-500 font-semibold text-white' : 'bg-white text-black'}`}
                >
                  {({selected}) => (
                    <span className={`${selected ? 'font-semibold' : 'font-normal'}`}>{item.title}</span>
                  )}

                </Listbox.Option>
              ))}
            </Listbox.Options>
          </Transition>
        </div>
      </Listbox>
    </div>
  )
}

export default CustomFilter
