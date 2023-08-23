import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

const Navbar = () => {
  return (
    <header className='fixed top-0 font-sans w-full z-30 transition-all pt-4 text-white backdrop-blur-sm'>
      <div className='max-w-screen-xl px-6 sm:px-8 lg:px-16 mx-auto grid grid-flow-col py-3 sm:py-4'>
        <div className='col-start-1 col-end-2 flex items-center'>
            <a className='flex'>
              <Image 
                src={"/Logo.png"}
                width={48}
                height={48}
                alt='mridakriti-logo'
              />
              <div className='my-auto ml-3 text-3xl'>Mridakriti</div>
            </a>
        </div>
      </div>
    </header>
  )
}

export default Navbar