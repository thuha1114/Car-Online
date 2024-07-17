"use client"

import { SearchManufactureProps } from '@/types'
import {Combobox, Transition} from "@headlessui/react"
import { useState, Fragment } from 'react';
import { GiSteeringWheel } from "react-icons/gi";
import { manufacturers } from '@/constants';

const SearchManufacture = ({manufacture, setManufacture} : SearchManufactureProps) => {
  
    const [query, setQuery] = useState("")

    const filteredManufactures = query === "" ? manufacturers : manufacturers.filter(item => item.toLowerCase().includes(query.toLowerCase()))


    return (
    <div className=''>
      <Combobox value={manufacture} onChange={setManufacture}>
          <div className="relative border-2 border-slate-300 mr-5 shadow-lg">

              <Combobox.Button className="absolute top-1.5 left-2">
                <GiSteeringWheel className='h-5 w-5 text-gray-700' />
              </Combobox.Button>

              <Combobox.Input
                className=' pl-8 py-1 w-full'
                placeholder='Enter manufacture ...'
                displayValue={(manufacture : string) => manufacture}
                onChange = { (e) => setQuery(e.target.value) }
              />

                <Transition
                    
                    leave="transition ease-in duration-100"
                    leaveFrom='opacity-100'
                    leaveTo='opacity-0'
                    afterLeave={() => setQuery('')}
                >
                    <Combobox.Options className=" border-slate-800 w-full max-h-60 overflow-y-auto z-10">
                        {filteredManufactures.length === 0 && query !== "" ? (
                            <Combobox.Option
                                value={query}
                            >
                                No results found!
                            </Combobox.Option>
                        ):(
                            filteredManufactures.map(item => (
                                <Combobox.Option
                                    key={item}
                                    value={item}
                                    className={({ active }) =>
                                                `cursor-default select-none relative py-2 pl-10 pr-4 ${
                                                    active ? 'bg-blue-500 text-white font-semibold' : ''
                                                }`
                                            }
                                >
                                    {({ selected, active }) => (
                                        <>
                                            <span className={`block truncate ${selected ? "font-medium" : "font-normal"}`}>
                                            {item}
                                            </span>

                                            {/* Show an active blue background color if the option is selected */}
                                            {selected ? (
                                            <span className={`absolute inset-y-0 left-0 flex items-center pl-3 ${active? "text-white": "text-pribg-primary-purple"}`}
                                            ></span>
                                            ) : null}
                                        </>
                                        )}

                                </Combobox.Option>
                            ))
                        )}
                        
                    </Combobox.Options>

                </Transition>
          </div>
      </Combobox>
    </div>
  )

}

export default SearchManufacture
