import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { CustomButton } from '.'

const Navbar = () => {
  return (
    <header className='w-full absolute'>
      <div className='px-20 flex justify-between items-center'>
          <Link href="/">
            <Image
              src="/logo.png"
              width={130}
              height={130}
              alt="Car Logo "
            />
          </Link>
          <CustomButton
            title='Sign In'
            containerStyles='font-semibold bg-blue-700 h-10 text-white px-10 rounded-full hover:opacity-95 text-base md:text-xl md:h-14'
            btnType='button'
          />
      </div>
    </header>
  )
}

export default Navbar
