"use client"
import React from 'react'
import { useLanguage } from '../app/LanguageContext'
import Image from 'next/image'
import Logo from '../public/Logo.png'

const Navbar = () => {

    const { lang, changeLang } = useLanguage();
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
                        <div className='my-auto ml-3 text-3xl'>
                            {lang === 'en' ? (
                                <div>
                                    Mridakriti
                                </div>
                            ) : (
                                <div>
                                    मृदाकृति
                                </div>
                            )}
                        </div>
                    </a>
                </div>
                <ul className='hidden lg:flex col-start-4 col-end-8 items-center'>
                    <a href="/about" className='px-4 py-2 mx-2 cursor-pointer relative hover:text-orange-500'>About</a>
                    <a href="/about" className='px-4 py-2 mx-2 cursor-pointer relative hover:text-orange-500'>Feature</a>
                    <a href="/about" className='px-4 py-2 mx-2 cursor-pointer relative hover:text-orange-500'>Pricing</a>
                    <a href="/about" className='px-4 py-2 mx-2 cursor-pointer relative hover:text-orange-500'>Testimonial</a>
                </ul>
                <div className='col-start-10 col-end-12 font-medium md:flex justify-end items-center hidden'>
                    <a href="/login" className='mx-2 sm:mx-4 capitalize tracking-wide hover:text-orange-500 transition-all'>Sign In</a>

                    <button className='font-medium tracking-wide py-2 px-5 sm:px-8 border border-orange-500 text-orange-500 bg-white-500 outline-none rounded-l-full rounded-r-full capitalize hover:bg-orange-500 hover:text-white transition-all hover:shadow-orange'>
                        <a href="/register">Sign Up</a>
                    </button>

                    <div className='text-white mx-2 gap-2 flex'>
                        <button
                            onClick={() => changeLang('en')}
                            className='px-2 py-[0.1rem] border text-sm border-gray-500 rounded-xl'>
                            En
                        </button>
                        <button
                            onClick={() => changeLang('hn')}
                            className='px-[0.42rem] py-[0.1rem] border text-sm border-gray-500 rounded-xl'>
                            Hn
                        </button>
                        {/* <Link href="/" locale='en' className='px-2 py-[0.1rem] border border-gray-500 rounded-xl mx-2'>
                            En
                        </Link>
                        <Link href="/" locale='hn' className='px-2 py-[0.1rem] border border-gray-500 rounded-xl'>
                            Hn
                        </Link> */}
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Navbar