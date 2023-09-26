"use client"
// components/Carousel.js
import { useState } from 'react';
import Image from 'next/image';
import Profile from '../public/demoprofile.jpg'
import Twitter from '../public/twitter.svg';
import Google from '../public/google-logo.svg';
import Facebook from '../public/facebook.svg';

const Carousel = () => {

    const [currentIndex, setCurrentIndex] = useState(0);
    const slides = [
        {
            author: 'Sarah H',
            text: 'Ive never seen art like this before. The use of natural materials in these soil paintings is both innovative and stunning.',
            imageSrc: Profile
        },
        {
            author: 'David M',
            text: 'These soil paintings are a true testament to the beauty of nature. They bring a sense of tranquility and harmony to any space.',
            imageSrc: Profile
        },
        {
            author: 'Robert C',
            text: 'Ive never seen art like this before. The use of natural materials in these soil paintings is both innovative and stunning.',
            imageSrc: Profile
        },
        {
            author: 'Robert C',
            text: 'Ive never seen art like this before. The use of natural materials in these soil paintings is both innovative and stunning.',
            imageSrc: Profile
        },
    ];
    // const nextSlide = () => {
    //     setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
    // };
    // const prevSlide = () => {
    //     setCurrentIndex((prevIndex) =>
    //         prevIndex === 0 ? slides.length - 1 : prevIndex - 1
    //     );
    // };
    const goToSlide = (index) => {
        setCurrentIndex(index);
    }

    return (
        <>

            {/* <div className='relative mx-auto bg-white'>
                <div className='mx-10 pt-10 text-6xl max-w-3xl'>
                    Here's what past clients are saying about us
                </div>
                <div className="pb-8 max-w-4xl mx-auto px-4 md:px-6">
                    <div className='relative mt-10'>
                        <div className="relative px-6 pb-4 md:px-12 md:pb-0">
                            <div className='touch-pan-y pt-[7rem] mb-20'>
                                <div className='flex relative w-full h-full z-10 transform box-content'>

                                    {slides.map((slide, index) => (
                                        <div
                                            key={index}
                                            className={`absolute flex h-full w-full space-x-6 items-center justify-center translate-3d 
                                ${index === currentIndex ? 'opacity-100' : 'opacity-0'} 
                                ${index === currentIndex ? 'translate-x-0 duration-1000' : 'translate-x-full'} `}

                                        >
                                            <div className='z-10 relative mx-auto w-[28rem]'>
                                                <div className='p-2'>
                                                    <Image
                                                        alt='author-01'
                                                        src={slide.imageSrc}
                                                        className='rounded-full'
                                                    />
                                                </div>
                                                <div className='absolute right-0 bottom-0 mr-4 mb-4'>
                                                    <div className='flex gap-1 items-center bottom-full bg-white shadow-xl rounded-full px-3 py-[0.15rem]'>
                                                        <Image
                                                            src={Twitter}
                                                            alt='twitter-logo'
                                                            width={20}
                                                            height={20}
                                                        />
                                                        {slide.author}
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="relative text-black text-xl font-sans h-auto">{slide.text}</div>
                                        </div>
                                    ))
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='relative mx-20 left-[90%] top-3 z-[11]'>
                        <div className="flex transform">
                            {slides.map((_, index) => (
                                <button
                                    key={index}
                                    className={`w-2 h-2 mx-1 rounded-full focus:outline-none ${index === currentIndex ? 'bg-gray-600' : 'bg-gray-300'
                                        }`}
                                    onClick={() => goToSlide(index)}
                                ></button>
                            ))}
                        </div>
                    </div>
                </div>
            </div> */}


            <div className="relative bg-white z-10 sm:px-6 px-4 py-4 h-[30rem]">
                <div className='mx-10 mt-10 text-6xl max-w-3xl'>
                    Here's what past clients are saying about us
                </div>
                <div className='relative p-2 max-w-4xl mx-auto'>
                    <div className='relative md:px-12 px-6 mt-10 touch-pan-y'>

                        <div className='flex relative w-full h-full z-10 transform box-content'>
                            {slides.map((slide, index) => (
                                <div
                                    key={index}
                                    className={`absolute flex space-x-6 items-center justify-center transition-transform transform 
                                ${index === currentIndex ? 'w-full' : 'opacity-0'} 
                                ${index === currentIndex ? 'translate-x-0 duration-1000' : 'translate-x-full'} `}

                                    // animation for right to left
                                    style={{
                                        transitionProperty: 'transform',
                                        transitionDuration: '700ms',
                                        transitionTimingFunction: 'ease-out',
                                    }}
                                >
                                    <div className='z-10 relative mx-auto'>
                                        <div className='p-2'>
                                            <Image
                                                alt='author-01'
                                                src={slide.imageSrc}
                                                className='rounded-full w-[28rem]'
                                            />
                                        </div>
                                        <div className='absolute right-0 bottom-0 mr-4 mb-4'>
                                            <div className='flex gap-1 items-center bottom-full bg-white shadow-xl rounded-full px-3 py-[0.15rem]'>
                                                <Image
                                                    src={Twitter}
                                                    alt='twitter-logo'
                                                    width={20}
                                                    height={20}
                                                />
                                                {slide.author}
                                            </div>
                                        </div>
                                    </div>

                                    <div className="relative text-black text-xl font-sans h-auto">{slide.text}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                <div className='relative mx-20 top-[10rem] z-10'>
                    <div className="flex absolute -bottom-12 left-[90%] transform -translate-x-1/2">
                        {slides.map((_, index) => (
                            <button
                                key={index}
                                className={`w-2 h-2 mx-1 rounded-full focus:outline-none ${index === currentIndex ? 'bg-gray-600' : 'bg-gray-300'
                                    }`}
                                onClick={() => goToSlide(index)}
                            ></button>
                        ))}
                    </div>
                </div>
            </div>


            {/* section 2 demo */}
            <div className='bg-white relative z-10 py-8'>
                <div className='mx-10 pt-10 text-6xl max-w-3xl'>
                    Here's what past clients are saying about us
                </div>
                <div className="px-4 sm:px-6 md:max-w-2xl md:px-4 lg:max-w-7xl lg:px-8 mx-auto relative pt-20 grid grid-cols-1 gap-y-8 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-x-8">
                    <ul className="-mx-px -mt-px space-y-8 px-px pt-px pb-px text-md max-h-[70rem] overflow-hidden sm:max-h-[90rem] lg:max-h-[80rem]">
                        <li className="whitespace-pre-line break-words rounded-xl bg-white p-8 ring-1 ring-slate-900/5">
                            <figure className="flex flex-col-reverse">
                                <blockquote className="mt-6 space-y-4 leading-7 text-slate-700">
                                    <p>
                                        I was captivated by the earthy beauty of these soil paintings. Each piece tells a unique story, and Im proud to have them displayed in my home.
                                    </p>
                                </blockquote>
                                <figcaption className="flex items-center">
                                    <Image
                                        src={Profile}
                                        alt='profile-demo'
                                        height={50}
                                        width={50}
                                        className=' rounded-full'
                                    />
                                    <div className="ml-4">
                                        <div className="font-semibold text-slate-900">Wes Bos</div>
                                        <div className="text-slate-500">@wesbos</div>
                                    </div>
                                    <a href="/" className="ml-auto text-slate-300 hover:text-slate-400">
                                        <Image
                                            src={Twitter}
                                            alt='twitter-logo'
                                            width={30}
                                            height={30}
                                        />
                                    </a>
                                </figcaption>
                            </figure>
                        </li>

                        <li className="whitespace-pre-line break-words rounded-xl bg-white p-8 ring-1 ring-slate-900/5"><figure className="flex flex-col-reverse">
                            <blockquote className="mt-6 space-y-4 leading-7 text-slate-700">
                                <p>
                                    The artists behind these soil paintings have a true talent for transforming nature into art. I'm continually inspired by their work and the message it conveys.
                                </p>
                            </blockquote>
                            <figcaption className="flex items-center">
                                <Image
                                    src={Profile}
                                    alt='profile-demo'
                                    height={50}
                                    width={50}
                                    className=' rounded-full'
                                />
                                <div className="ml-4">
                                    <div className="font-semibold text-slate-900">Dana Cottreau</div>
                                    <div className="text-slate-500">@_DanaCottreau</div>
                                </div>
                                <a href="/" className="ml-auto text-slate-300 hover:text-slate-400">
                                    <Image
                                        src={Twitter}
                                        alt='twitter-logo'
                                        width={30}
                                        height={30}
                                    />
                                </a>
                            </figcaption>
                        </figure>
                        </li>
                    </ul>

                    <ul className="-mx-px -mt-px space-y-8 px-px pt-px pb-px text-md hidden sm:block max-h-[70rem] overflow-hidden sm:max-h-[90rem] lg:max-h-[80rem]">
                        <li className="whitespace-pre-line break-words rounded-xl bg-white p-8 ring-1 ring-slate-900/5">
                            <figure className="flex flex-col-reverse">
                                <blockquote className="mt-6 space-y-4 leading-7 text-slate-700">
                                    <p>
                                        I'm an avid supporter of eco-friendly art, and these soil paintings exceeded my expectations. They're not just paintings; they're a statement about our relationship with the environment.
                                    </p>
                                </blockquote>
                                <figcaption className="flex items-center">
                                    <Image
                                        src={Profile}
                                        alt='profile-demo'
                                        height={50}
                                        width={50}
                                        className=' rounded-full'
                                    />
                                    <div className="ml-4">
                                        <div className="font-semibold text-slate-900">Ben Nadel</div>
                                        <div className="text-slate-500">@BenNadel</div>
                                    </div>
                                    <a href="/" className="ml-auto text-slate-300 hover:text-slate-400">
                                        <Image
                                            src={Google}
                                            alt='twitter-logo'
                                            width={30}
                                            height={30}
                                        />
                                    </a>
                                </figcaption>
                            </figure>
                        </li>
                        <li className="whitespace-pre-line break-words rounded-xl bg-white p-8 ring-1 ring-slate-900/5">
                            <figure className="flex flex-col-reverse">
                                <blockquote className="mt-6 space-y-4 leading-7 text-slate-700">
                                    <p>
                                        The colors and textures in these soil paintings are absolutely mesmerizing. They add a touch of elegance and eco-consciousness to my art collection.
                                    </p>
                                </blockquote>
                                <figcaption className="flex items-center">

                                    <Image
                                        src={Profile}
                                        alt='profile-demo'
                                        height={50}
                                        width={50}
                                        className=' rounded-full'
                                    />
                                    <div className="ml-4">
                                        <div className="font-semibold text-slate-900">Taylor Otwell</div>
                                        <div className="text-slate-500">@taylorotwell</div>
                                    </div>
                                    <a href="/" className="ml-auto text-slate-300 hover:text-slate-400">
                                        <Image
                                            src={Twitter}
                                            alt='twitter-logo'
                                            width={30}
                                            height={30}
                                        />
                                    </a>
                                </figcaption>
                            </figure>
                        </li>
                    </ul>

                    <ul className="-mx-px -mt-px space-y-8 px-px pt-px pb-px text-md hidden sm:block max-h-[70rem] overflow-hidden sm:max-h-[90rem] lg:max-h-[80rem]">
                        <li className="whitespace-pre-line break-words rounded-xl bg-white p-8 ring-1 ring-slate-900/5">
                            <figure className="flex flex-col-reverse">
                                <blockquote className="mt-6 space-y-4 leading-7 text-slate-700">
                                    <p>
                                        I've never seen art like this before. The use of natural materials in these soil paintings is both innovative and stunning. They're a conversation starter in my living room
                                    </p>
                                </blockquote>
                                <figcaption className="flex items-center">
                                    <Image
                                        src={Profile}
                                        alt='profile-demo'
                                        height={50}
                                        width={50}
                                        className=' rounded-full'
                                    />
                                    <div className="ml-4">
                                        <div className="font-semibold text-slate-900">Ben Nadel</div>
                                        <div className="text-slate-500">@BenNadel</div>
                                    </div>
                                    <a href="/" className="ml-auto text-slate-300 hover:text-slate-400">
                                        <Image
                                            src={Facebook}
                                            alt='twitter-logo'
                                            width={30}
                                            height={30}
                                        />
                                    </a>
                                </figcaption>
                            </figure>
                        </li>
                        <li className="whitespace-pre-line break-words rounded-xl bg-white p-8 ring-1 ring-slate-900/5">
                            <figure className="flex flex-col-reverse">
                                <blockquote className="mt-6 space-y-4 leading-7 text-slate-700">
                                    <p>
                                        I've never seen art like this before. The use of natural materials in these soil paintings is both innovative and stunning. They're a conversation starter in my living room
                                    </p>
                                </blockquote>
                                <figcaption className="flex items-center">

                                    <Image
                                        src={Profile}
                                        alt='profile-demo'
                                        height={50}
                                        width={50}
                                        className=' rounded-full'
                                    />
                                    <div className="ml-4">
                                        <div className="font-semibold text-slate-900">Taylor Otwell</div>
                                        <div className="text-slate-500">@taylorotwell</div>
                                    </div>
                                    <a href="/" className="ml-auto text-slate-300 hover:text-slate-400">
                                        <Image
                                            src={Twitter}
                                            alt='twitter-logo'
                                            width={30}
                                            height={30}
                                        />
                                    </a>
                                </figcaption>
                            </figure>
                        </li>
                    </ul>
                </div>
            </div>
        </>

    );
};

export default Carousel;
