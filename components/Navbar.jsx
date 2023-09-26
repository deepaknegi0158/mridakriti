"use client"
import React, { useEffect, useState } from 'react'
import { useLanguage } from '../app/LanguageContext'
import {createHandleScroll} from '../lib/ScrollHelper'
import Image from 'next/image'
import Logo from '../public/Logo.png'

const Navbar = (props) => {

    const { lang, changeLang } = useLanguage();

    // Navbar expanded section 
    const [isExpanded, setIsExpanded] = useState(false);
    const handleExpand = () => {
        setIsExpanded(!isExpanded);
    }

    // Navbar text color change
    const [isDarkBackground, setIsDarkBackground] = useState(true);
    const sectionOffsets = props.sectionOffsets;
    const handleScrollFunction = createHandleScroll(sectionOffsets, setIsDarkBackground);
    
    useEffect(() => {
        window.addEventListener('scroll', handleScrollFunction);

        return () => {
            window.removeEventListener('scroll', handleScrollFunction);
        };
    }, [handleScrollFunction]);

    const navbarTextColor = isDarkBackground ? 'text-white' : 'text-black';


    return (
        <header className={`fixed top-0 font-sans w-full z-30 transition-all pt-4 backdrop-blur-sm ${navbarTextColor}`}>
            <div className='max-w-screen-xl px-6 sm:px-8 lg:px-8 mx-auto grid grid-flow-col py-3 sm:py-4'>
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
                <ul className='hidden lg:flex col-start-4 col-end-8 items-center transition-all duration-100'>
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

                    {/* Old language change button */}
                    {/* <div className={`mx-2 gap-2 flex transition-all ${navbarTextColor}`}>
                        {lang === 'en' ? (
                            <button
                                onClick={() => changeLang('hn')}
                                className='px-[0.42rem] py-[0.1rem] border text-sm border-gray-500 rounded-xl'>
                                Hn
                            </button>
                        ) : (
                            <button
                                onClick={() => changeLang('en')}
                                className='px-2 py-[0.1rem] border text-sm border-gray-500 rounded-xl'>
                                En
                            </button>
                        )}
                    </div> */}


                    <div className={`gap-2 flex ml-4`}>
                        <svg viewBox="0 0 24 24" width={30} height={30} fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M7.64859 20.9098C7.61859 20.9098 7.57859 20.9298 7.54859 20.9298C5.60859 19.9698 4.02859 18.3798 3.05859 16.4398C3.05859 16.4098 3.07859 16.3698 3.07859 16.3398C4.29859 16.6998 5.55859 16.9698 6.80859 17.1798C7.02859 18.4398 7.28859 19.6898 7.64859 20.9098Z" fill="#d7d9db"></path> <path d="M20.9391 16.4498C19.9491 18.4398 18.2991 20.0498 16.2891 21.0198C16.6691 19.7498 16.9891 18.4698 17.1991 17.1798C18.4591 16.9698 19.6991 16.6998 20.9191 16.3398C20.9091 16.3798 20.9391 16.4198 20.9391 16.4498Z" fill="#d7d9db"></path> <path d="M21.0191 7.71047C19.7591 7.33047 18.4891 7.02047 17.1991 6.80047C16.9891 5.51047 16.6791 4.23047 16.2891 2.98047C18.3591 3.97047 20.0291 5.64047 21.0191 7.71047Z" fill="#d7d9db"></path> <path d="M7.65047 3.08859C7.29047 4.30859 7.03047 5.54859 6.82047 6.80859C5.53047 7.00859 4.25047 7.32859 2.98047 7.70859C3.95047 5.69859 5.56047 4.04859 7.55047 3.05859C7.58047 3.05859 7.62047 3.08859 7.65047 3.08859Z" fill="#d7d9db"></path> <path d="M15.4917 6.59C13.1717 6.33 10.8317 6.33 8.51172 6.59C8.76172 5.22 9.08172 3.85 9.53172 2.53C9.55172 2.45 9.54172 2.39 9.55172 2.31C10.3417 2.12 11.1517 2 12.0017 2C12.8417 2 13.6617 2.12 14.4417 2.31C14.4517 2.39 14.4517 2.45 14.4717 2.53C14.9217 3.86 15.2417 5.22 15.4917 6.59Z" fill="#d7d9db"></path> <path d="M6.59 15.4917C5.21 15.2417 3.85 14.9217 2.53 14.4717C2.45 14.4517 2.39 14.4617 2.31 14.4517C2.12 13.6617 2 12.8517 2 12.0017C2 11.1617 2.12 10.3417 2.31 9.56172C2.39 9.55172 2.45 9.55172 2.53 9.53172C3.86 9.09172 5.21 8.76172 6.59 8.51172C6.34 10.8317 6.34 13.1717 6.59 15.4917Z" fill="#d7d9db"></path> <path d="M22.0002 12.0017C22.0002 12.8517 21.8802 13.6617 21.6902 14.4517C21.6102 14.4617 21.5502 14.4517 21.4702 14.4717C20.1402 14.9117 18.7802 15.2417 17.4102 15.4917C17.6702 13.1717 17.6702 10.8317 17.4102 8.51172C18.7802 8.76172 20.1502 9.08172 21.4702 9.53172C21.5502 9.55172 21.6102 9.56172 21.6902 9.56172C21.8802 10.3517 22.0002 11.1617 22.0002 12.0017Z" fill="#d7d9db"></path> <path d="M15.4917 17.4102C15.2417 18.7902 14.9217 20.1502 14.4717 21.4702C14.4517 21.5502 14.4517 21.6102 14.4417 21.6902C13.6617 21.8802 12.8417 22.0002 12.0017 22.0002C11.1517 22.0002 10.3417 21.8802 9.55172 21.6902C9.54172 21.6102 9.55172 21.5502 9.53172 21.4702C9.09172 20.1402 8.76172 18.7902 8.51172 17.4102C9.67172 17.5402 10.8317 17.6302 12.0017 17.6302C13.1717 17.6302 14.3417 17.5402 15.4917 17.4102Z" fill="#d7d9db"></path> <path d="M15.7633 15.7633C13.2622 16.0789 10.7378 16.0789 8.23667 15.7633C7.92111 13.2622 7.92111 10.7378 8.23667 8.23667C10.7378 7.92111 13.2622 7.92111 15.7633 8.23667C16.0789 10.7378 16.0789 13.2622 15.7633 15.7633Z" fill="#d7d9db"></path> </g></svg>

                        <button
                            onClick={handleExpand}
                            className='flex my-auto hover:opacity-80'>
                            {lang === 'en' ? (
                                <div className='mx-1'>English</div>
                            ) : (
                                <div className='mx-2'>हिंदी</div>
                            )
                            }
                            <svg className={`my-auto 
                            ${isExpanded ? 'transform rotate-180' : ''}`}
                                xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="m6 9 6 6 6-6" />
                            </svg>

                        
                        </button>

                        {isExpanded && (
                            <div className='absolute w-[6rem] right-[4.2rem] mt-9 text-white border bg-gray-100 border-gray-200 rounded-md shadow-lg'>
                                {lang === 'en' ? (
                                    <button
                                        onClick={() => {
                                            changeLang('hn');
                                            handleExpand();
                                        }}
                                        className='text-black text-center w-full'>
                                        हिंदी
                                    </button>
                                ) : (
                                    <button
                                        onClick={() => {
                                            changeLang('en');
                                            handleExpand();
                                        }}
                                        className='text-black mx-auto flex justify-center'>
                                        English
                                    </button>
                                )

                                }

                            </div>
                        )}
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Navbar