import React from 'react'
import { useTranslations } from 'next-intl';
import Link from 'next-intl/link';
import Image from 'next/image'
import Logo from '../public/Logo.png'

const Navbar = () => {

  const t = useTranslations('header');

  return (
    <header className='fixed top-0 font-sans w-full z-30 transition-all pt-4 text-white backdrop-blur-sm'>
      <div className='max-w-screen-xl px-6 sm:px-8 lg:px-16 mx-auto grid grid-flow-col py-3 sm:py-4'>
        <div className='col-start-1 col-end-2 flex items-center'>
          <a href='/' className='flex'>
            <Image
              src={Logo}
              width={48}
              height={48}
              alt='mridakriti-logo'
            />
            <div className='my-auto ml-3 text-3xl'>{t('heading')}</div>
          </a>
        </div>
        <ul className='hidden lg:flex col-start-4 col-end-8 items-center'>
          <a href="/about" className='px-4 py-2 mx-2 cursor-pointer relative hover:text-orange-500'>About</a>
          <a href="/about" className='px-4 py-2 mx-2 cursor-pointer relative hover:text-orange-500'>Feature</a>
          <a href="/about" className='px-4 py-2 mx-2 cursor-pointer relative hover:text-orange-500'>Pricing</a>
          <a href="/about" className='px-4 py-2 mx-2 cursor-pointer relative hover:text-orange-500'>Testimonial</a>
        </ul>
        <div className='col-start-10 col-end-12 font-medium md:flex justify-end items-center hidden'>
          <a href="/sign-in" className='mx-2 sm:mx-4 capitalize tracking-wide hover:text-orange-500 transition-all'>Sign In</a>

          <button className='font-medium tracking-wide py-2 px-5 sm:px-8 border border-orange-500 text-orange-500 bg-white-500 outline-none rounded-l-full rounded-r-full capitalize hover:bg-orange-500 hover:text-white transition-all hover:shadow-orange'>Sign Up</button>

          <div className='text-white'>
            <Link href="/" locale='en' className='px-2 py-[0.1rem] border border-gray-500 rounded-xl mx-2'>
              En
            </Link>
            <Link href="/" locale='hn' className='px-2 py-[0.1rem] border border-gray-500 rounded-xl'>
              Hn
            </Link>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Navbar