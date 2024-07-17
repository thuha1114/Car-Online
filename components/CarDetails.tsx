"use client"
import { CarProps } from '@/types'
import { Dialog, Transition } from '@headlessui/react'
import Image from 'next/image';
import React, { Fragment } from 'react'
import { IoCloseCircleOutline } from "react-icons/io5";

interface CarDetailsProp{
    isOpen: boolean,
    closeModal: () => void,
    car: CarProps
}

const CarDetails = ({isOpen, closeModal, car}: CarDetailsProp) => {
  return (
    <div>
        <Transition appear show={isOpen} as={Fragment}>
            <Dialog as="div" className="relative z-10" onClose={closeModal}>

                <Transition.Child
                    as = {Fragment}
                    enter="ease-out duration-300"
                    enterFrom='opacity-0'
                    enterTo="opacity-100"
                    leave="ease-in duration-200"
                    leaveFrom='opacity-100'
                    leaveTo='opacity-0'

                >
                    <div className='fixed bg-black inset-0 opacity-25'>

                    </div>
                </Transition.Child>

                <div className='fixed inset-0 overflow-y-auto flex items-center justify-center custom-scrollbar'>
                    {/* Tại sao đoạn này không thay đổi chiều cao được? */}
                    <div className=" md:w-1/2 h-5/6 flex items-center justify-center text-center p-10" >
                        <Transition.Child
                            as = {Fragment}
                            enter="ease-out duration-300"
                            enterFrom='opacity-0 scale-95'
                            enterTo="opacity-100 scale-100"
                            leave="ease-in duration-200"
                            leaveFrom='opacity-100 scale-100'
                            leaveTo='opacity-0 scale-95'

                        >

                            <Dialog.Panel className="relative w-full h-full overflow-y-auto transform rounded-2xl bg-white custom-scrollbar">
                                <button
                                    type='button'
                                    onClick={closeModal}
                                    className="absolute top-2 right-2 z-10 w-fit bg-blue-300 rounded-full text-2xl text-white"
                                >
                                    <IoCloseCircleOutline />
                                </button>

                                <div className='flex-1 flex flex-col gap-3'>
                                    <div className='relative w-full h-40 bg-center rounded-lg bg-blue-500 flex items-center justify-center'>
                                        <Image
                                            src="/car_img.png"
                                            width={300}
                                            height={300}
                                            alt="Car Image "
                                        />
                                    </div>
                                    <div className="grid grid-cols-3 gap-5 px-10">
                                        <Image
                                            src="/car_1.png"
                                            width={300}
                                            height={300}
                                            alt="Car Image "
                                        />
                                         <Image
                                            src="/car_2.png"
                                            width={300}
                                            height={300}
                                            alt="Car Image "
                                        />
                                         <Image
                                            src="/car_3.png"
                                            width={300}
                                            height={300}
                                            alt="Car Image "
                                        />
                                    </div>

                                </div>

                                <div>
                                    <h2 className='capitalize font-semibold text-xl'>{car.make} {car.model}</h2>
                                    <ul className='flex flex-col px-10 pb-5 gap-4'>
                                        {Object.entries(car).map(([key,value]) => (
                                           <li className='flex justify-between' key={key}>
                                                <div className='font-semibold capitalize text-gray-700'>{key.split("_").join(" ")}</div>
                                                <div>{value}</div>
                                            </li>
                                        ))}
                                    </ul>
                                   
                                </div>
                            </Dialog.Panel>
                        </Transition.Child>
                    </div>
                </div>
            </Dialog>
        </Transition>
    </div>
  )
}

export default CarDetails