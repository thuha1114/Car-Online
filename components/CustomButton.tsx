"use client"

import { CustomButtonProps } from '@/types'
import Image from 'next/image'
import React from 'react'

const CustomButton = ({title, containerStyles, handleClick, btnType}: CustomButtonProps) => {
  return (
    <button
        disabled={false}
        type={btnType || 'button'}
        className={`${containerStyles}`}
        onClick={handleClick}
    >
        <span className=''>{title}</span>
    </button>
  )
}

export default CustomButton