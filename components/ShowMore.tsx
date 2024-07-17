"use client"

import { ShowMoreProps } from '@/types'
import { updateSearchParams } from '@/utils'
import { useRouter } from 'next/navigation'
import React from 'react'
import { CustomButton } from '.'

const ShowMore = ({pageNumber, isNext}: ShowMoreProps) => {

    const router = useRouter()
    const handleNavigation = () => {
        const newLimit = (pageNumber + 1) *10;
        const newPathName = updateSearchParams("limit",`${newLimit}`)
        router.push(newPathName)
    }

  return (
    <div className='w-full flex items-center justify-center gap-5 my-10'>
        {!isNext && (
            <CustomButton
                title = "Show More"
                btnType = "button"
                containerStyles='rounded-full bg-blue-700 text-white font-semibold px-5 py-2'
                handleClick={handleNavigation}
            />
        )}
    </div>
  )
}

export default ShowMore