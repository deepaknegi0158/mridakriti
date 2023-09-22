"use client"
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Mridakriti from '../public/Mridakriti00.jpg';
import { useLanguage } from '../app/LanguageContext';
import Instagram from '../public/instagram.svg';
import Facebook from '../public/facebook.svg';
import Whatsapp from '../public/whatsapp.svg';

const Slider = () => {
    const { lang } = useLanguage();
    const [animate, setAnimate] = useState(false);

    return (
        <section className='relative w-full mx-0 overflow-hidden'>
            <div className='relative flex min-h-screen items-center'>
                <div className='absolute inset-0 z-[1] bg-gradient-to-b from-black/10 via-black/10 to-black'>
                </div>
                <Image
                    alt='mridakrit'
                    src={Mridakriti}
                    sizes='100vw'
                    style={{
                        objectFit: 'cover',
                        inset: '0px',
                    }}
                    className='fixed h-full w-full animate-fadein'
                />
                <div className='relative z-10 mx-auto max-w-7xl px-6 pb-40 pt-60 lg:px-12 xl:px-6 2xl:px-0'>
                    <div className='pb-12'>
                        <h1 className='text-6xl font-bold text-white sm:text-8xl md:text-9xl xl:leading-tight slideInLeft'>
                            Creative Duo
                        </h1>
                    </div>
                    <div>
                        <div className='ml-auto md:w-2/3 md:pt-12 lg:w-1/2'>
                            <div className='mb-20 text-lg font-light text-white slideInRight sm:text-2xl xl:leading-normal'>
                                {lang === 'en' ? (
                                    <p>
                                        On an endless journey to create experiences that inspire others. Always motived by design that&apos;s honest, aesthetic and natural. Probably the only designer you&apos;ll ever need.
                                    </p>
                                ) : (
                                    <p>
                                        दूसरों को प्रेरित करने वाले अनुभव बनाने की अंतहीन यात्रा पर। हमेशा ऐसे डिज़ाइन से प्रेरित होता है जो ईमानदार, सौंदर्यपूर्ण और प्राकृतिक हो। संभवतः एकमात्र डिज़ाइनर जिसकी आपको कभी आवश्यकता होगी।
                                    </p>
                                )}
                            </div>
                            <a href="#our-work" className="rellax relative inline-block py-1.5 text-white before:absolute before:inset-0 before:origin-bottom before:scale-y-[.03] before:bg-white/60 before:transition before:duration-300 hover:before:scale-y-100 hover:before:scale-x-125 hover:before:bg-white/10 scroll-smooth duration-300">
                                <span className="relative">See our work</span>
                            </a>
                        </div>
                    </div>
                    <div className="rellax relative mt-16 w-max md:mt-32 md:ml-0 xl:-mt-10">
                        <span className="text-xs font-light uppercase tracking-widest text-white">Follow us</span>
                        <ul className="relative z-20 mt-4 space-y-2 text-sm font-light text-white">
                            <li>
                                <a href="https://www.instagram.com/mridakritii/" className='flex gap-4' target="_blank">
                                    <Image
                                        src={Instagram}
                                        alt='twitter-logo'
                                        width={25}
                                        height={25}
                                        className='relative'
                                    />
                                    <span className='bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 text-transparent bg-clip-text text-base font-medium'>
                                        Instagram
                                    </span>
                                </a>
                            </li>
                            <li>
                                <a href="https://www.instagram.com/mridakritii/" className='flex gap-4' target="_blank">
                                    <Image
                                        src={Facebook}
                                        alt='twitter-logo'
                                        width={25}
                                        height={25}
                                        className='relative'
                                    />
                                    <span className='text-blue-600 text-base font-medium'>
                                        Facebook
                                    </span>
                                </a>
                            </li>
                            <li>
                                <a href="/" className='flex gap-4' target="_blank">
                                    <Image
                                        src={Whatsapp}
                                        alt='twitter-logo'
                                        width={25}
                                        height={25}
                                        className='relative'
                                    />
                                    <span className='text-green-600 text-base font-medium'>
                                        Whatapp
                                    </span>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Slider