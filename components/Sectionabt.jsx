"use client"
import React, { useState } from 'react'
import { useLanguage } from '../app/LanguageContext'
import Image from 'next/image';
import Auth01 from '../public/Auth2408.jpg'
import Auth02 from '../public/Auth2508.jpg'
import Twitter from '../public/twitter.svg'
import Facebook from '../public/facebook.svg'
import Instagram from '../public/instagram.svg'

const Sectionabt = () => {

    const { lang } = useLanguage();

    return (
        <div className='relative bg-black z-10 pt-[15rem] font-sans'>
            <div className='pb-16'>
                <div className="flex flex-wrap items-center gap-6 px-14 mx-auto max-w-7xl lg:px-12 xl:px-6 2xl:px-0">
                    <h2 className="text-7xl font-bold text-white xl:text-8xl">
                        {lang === 'en' ? (
                            <div>
                                About us
                            </div>
                        ) : (
                            <div>
                                हमारे बारे में
                            </div>
                        )}
                    </h2>
                </div>
                <div className='ml-auto pt-6 md:pt-12 lg:w-3/4 px-14'>
                    <div className='mb-10 text-base font-light text-white sm:text-lg xl:leading-normal tracking-wide'>
                        {lang === 'en' ? (
                            <div>
                                Welcome to Mridakriti, where art comes to life through the vibrant and earthy medium of soil. Our passion is to create exquisite paintings that not only captivate the eyes but also resonate with the soul.
                            </div>
                        ) : (
                            <div>
                                मृदाकृति में आपका स्वागत है, जहां कला मिट्टी के जीवंत और पार्थिव माध्यम से जीवंत होती है। हमारा जुनून उत्कृष्ट पेंटिंग बनाना है जो न केवल आंखों को लुभाती हैं बल्कि आत्मा में भी गूंजती हैं।
                            </div>
                        )}
                    </div>
                    <div className='mb-10 text-base font-light text-white sm:text-lg xl:leading-normal tracking-wide'>
                        {lang === 'en' ? (
                            <div>
                                At Mridakriti, we believe that art is a powerful means of connecting with nature and expressing our deepest emotions. Our journey began with a simple yet profound idea: to harness the natural beauty of soil and transform it into stunning works of art. Through meticulous craftsmanship and boundless creativity, we bring to life scenes that evoke feelings of nostalgia, wonder, and serenity.
                            </div>
                        ) : (
                            <div>
                                मृदाकृति में, हम मानते हैं कि कला प्रकृति से जुड़ने और हमारी गहरी भावनाओं को व्यक्त करने का एक शक्तिशाली साधन है। हमारी यात्रा एक सरल लेकिन गहन विचार के साथ शुरू हुई: मिट्टी की प्राकृतिक सुंदरता का दोहन करना और इसे कला के आश्चर्यजनक कार्यों में बदलना। सूक्ष्म शिल्प कौशल और असीम रचनात्मकता के माध्यम से, हम उन दृश्यों को जीवंत करते हैं जो पुरानी यादों, आश्चर्य और शांति की भावनाएँ पैदा करते हैं।
                            </div>
                        )}
                    </div>
                </div>
            </div>

            <div className="relative bg-gradient-to-b bg-white scroll-mt-14 pb-3 pt-8 sm:scroll-mt-32 sm:pb-16 sm:pt-10 lg:pt-16">
                <div className="absolute inset-x-0 bottom-0 top-1/2 [mask-image:linear-gradient(transparent,white)]">
                    <svg aria-hidden="true" className="text-gray-300 absolute inset-0 h-full w-full">
                        <defs><pattern id=":S7:" width="128" height="128" patternUnits="userSpaceOnUse" x="50%" y="100%"><path d="M0 128V.5H128" fill="none" stroke="currentColor"></path></pattern></defs><rect width="100%" height="100%" fill="url(#:S7:)"></rect>
                    </svg>
                </div>

                <div className="relative mx-auto pt-4  px-6 lg:px-12 xl:px-6 2xl:px-0">
                    <div className='relative my-4 max-w-7xl px-6 mx-auto'>
                        <h2 className="inline-flex items-center font-medium tracking-tight rounded-full px-4 py-1 text-orange-600 ring-1 ring-inset ring-orange-600">
                            Our Team
                        </h2>
                        <div className='text-black my-6 text-4xl font-extrabold tracking-tight sm:text-5xl'>The people behind Mridakriti</div>
                    </div>

                    <div className='relative mx-auto max-w-[60rem] mt-10 flex flex-col md:flex-row px-10 md:px-3 gap-[5rem]'>
                        <div className='border w-full md:w-1/2 mt-20 bg-slate-50 p-2 rounded-3xl'>
                            <div className='mt-10'>
                                <div className="z-10 relative mx-auto -mt-[8rem] h-48 w-48 overflow-hidden rounded-full md:h-52 md:w-52 lg:h-52 lg:w-52">
                                    <Image
                                        alt='author-01'
                                        src={Auth01}
                                        style={{
                                            maxWidth: '100%',
                                            height: 'auto',
                                        }}
                                    />
                                </div>
                                <div className='block p-5'>
                                    <h2 className='mt-3 text-4xl font-extrabold tracking-tight sm:text-5xl text-blue-600'>
                                        Ayush Bisht
                                    </h2>
                                    <p className='mt-4'>
                                        I've been painting soil-art professionally for over a decade and have worked with dozens of the biggest brands to create custom sets for their products.
                                    </p>

                                    <div className='flex flex-row my-5 space-x-4'>
                                        <a className="inline-flex items-center text-base font-medium tracking-tight text-blue-600" href="#">
                                            <Image
                                                src={Instagram}
                                                alt='twitter-logo'
                                                width={40}
                                                height={40}
                                                className='relative'
                                            />
                                        </a>
                                        <a className="inline-flex items-center text-base font-medium tracking-tight text-blue-600" href="#">
                                            <Image
                                                src={Facebook}
                                                alt='twitter-logo'
                                                width={40}
                                                height={40}
                                            />
                                        </a>
                                        <a className="inline-flex items-center text-base font-medium tracking-tight text-blue-600" href="#">
                                            <Image
                                                src={Twitter}
                                                alt='twitter-logo'
                                                width={40}
                                                height={40}
                                            />
                                        </a>
                                    </div>


                                </div>
                            </div>
                        </div>
                        <div className='border w-full md:w-1/2 mt-20 bg-slate-50 p-2 rounded-3xl'>
                            <div className='mt-10'>
                                <div className="z-10 relative mx-auto -mt-[8rem] h-48 w-48 overflow-hidden rounded-full md:h-52 md:w-52 lg:h-52 lg:w-52">
                                    <Image
                                        alt='author-02'
                                        src={Auth02}
                                        style={{
                                            maxWidth: '100%',
                                            height: 'auto',
                                        }}
                                    />
                                </div>
                                <div className='block p-5'>
                                    <h2 className='mt-3 text-4xl font-extrabold tracking-tight sm:text-5xl text-blue-600'>
                                        Amita Bisht
                                    </h2>
                                    <p className='mt-4'>
                                        I've been painting soil-art professionally for over a decade and have worked with dozens of the biggest brands to create custom sets for their products.
                                    </p>
                                    <div className='flex flex-col my-5 space-y-4'>
                                        <a className="inline-flex items-center text-base font-medium tracking-tight text-blue-600" href="#">
                                            <Image
                                                src={Instagram}
                                                alt='twitter-logo'
                                                width={40}
                                                height={40}
                                            />
                                            <span className="bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 text-transparent bg-clip-text ml-4">Follow on Instagram</span>
                                        </a>
                                        <a className="inline-flex items-center text-base font-medium tracking-tight text-blue-600" href="#">
                                            <Image
                                                src={Facebook}
                                                alt='twitter-logo'
                                                width={40}
                                                height={40}
                                            />
                                            <span className="ml-4">Follow on Facebook</span>
                                        </a>
                                        <a className="inline-flex items-center text-base font-medium tracking-tight text-blue-600" href="#">
                                            <Image
                                                src={Twitter}
                                                alt='twitter-logo'
                                                width={40}
                                                height={40}
                                            />
                                            <span className="ml-4">Follow on Twitter</span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Sectionabt