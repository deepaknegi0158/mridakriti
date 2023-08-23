import React from 'react'
import Image from 'next/image'

const Slider = () => {
  return (
    <section className='relative w-full mx-0 overflow-hidden'>
      <div className='relative flex min-h-screen items-center'>
        <div className='absolute inset-0 z-[1] bg-gradient-to-b from-black/10 via-black/10 to-black'>
        </div>
        <Image
          src={"/Mridakriti00.jpg"}
          width={1343}
          height={691}
          alt='mridakrit'
          className='fixed inset-0 h-full w-full object-cover'
        />
        <div className='relative z-10 mx-auto max-w-7xl px-6 pb-40 pt-60 lg:px-12 xl:px-6 2xl:px-0'>
          <div className='pb-12'>
            <h1 className='text-6xl font-bold text-white sm:text-8xl md:text-9xl xl:leading-tight'>
              Creative Duo
            </h1>
          </div>
          <div>
            <div className='ml-auto md:w-2/3 md:pt-12 lg:w-1/2'>
              <p className='mb-20 text-lg font-light text-white sm:text-2xl xl:leading-normal'>
                On an endless journey to create experiences that inspire others. Always motived by design that&apos;s honest, aesthetic and natural. Probably the only designer you&apos;ll ever need.
              </p>
              <a href="#our-works" className="rellax relative inline-block py-1.5 text-white before:absolute before:inset-0 before:origin-bottom before:scale-y-[.03] before:bg-white/60 before:transition before:duration-300 hover:before:scale-y-100 hover:before:scale-x-125 hover:before:bg-white/10 scroll-smooth duration-300">
                <span className="relative">See our work</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Slider