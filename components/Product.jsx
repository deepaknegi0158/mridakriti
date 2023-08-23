import React from 'react'
import { useTranslations } from 'next-intl';
import Image from 'next/image'

const Product = () => {

  const t = useTranslations('header');

  return (
    <div id='our-works' className='relative bg-black z-10 pt-20 pb-20'>
            <div className="flex flex-wrap items-center gap-6 mx-auto max-w-7xl px-6 lg:px-12 xl:px-6 2xl:px-0">
                <h2 className="text-7xl font-bold text-white xl:text-8xl">Our work</h2>
                <span className="h-max rounded-full border border-white/40 px-2 py-1 text-xs tracking-wider text-white">12 Projects</span>
            </div>
            <div className='mx-auto px-10 sm:px-6 md:max-w-2xl md:px-4 lg:max-w-7xl lg:px-8 mt-10'>
                <ol className='px-1 lg:px-[13rem] grid grid-cols-1 gap-y-10 lg:grid-cols-2 lg:text-center xl:-mx-12 xl:divide-x xl:divide-slate-500'>
                    <li className='grid auto-rows-min grid-cols-1 items-center gap-8 px-3 sm:grid-cols-2 sm:gap-y-10 lg:grid-cols-1 xl:px-12'>
                        <div className='relative overflow-hidden rounded-2xl h-48 sm:h-60 lg:h-[20rem]'>
                            <div className='mt-5 absolute inset-0 flex items-center justify-center'>
                              <Image 
                                src="/P2101.jpg"
                                width={352}
                                height={263}
                                className='brightness-150'
                              />
                            </div>
                        </div>
                        <div>
                            <h3 className="text-xl font-medium tracking-tight text-slate-200">
                                {t("head1")}
                            </h3>
                            <p className="mt-2 text-base text-slate-400">
                                {t("message1")}
                            </p>
                            <a href="#our-works" className="rellax relative inline-block mt-4 py-1.5 text-white before:absolute before:inset-0 before:origin-bottom before:scale-y-[.03] before:bg-white/60 before:transition before:duration-300 hover:before:scale-y-100 hover:before:scale-x-125 hover:before:bg-white/10">
                                <span className="relative">Buy Now</span>
                            </a>
                        </div>
                    </li>
                    <li className='grid auto-rows-min grid-cols-1 items-center gap-8 px-3 sm:grid-cols-2 sm:gap-y-10 lg:grid-cols-1 xl:px-12'>
                        <div className='relative overflow-hidden rounded-2xl h-48 sm:h-60 lg:h-[20rem]'>
                            <div className='absolute inset-0 flex items-center justify-center'>
                            <Image 
                                src="/P2102.jpg"
                                width={353}
                                height={385}
                                className='brightness-150'
                              />
                            </div>
                        </div>
                        <div>
                            <h3 className="text-xl font-medium tracking-tight text-slate-200">
                                {t("head2")}
                            </h3>
                            <p className="mt-2 text-base text-slate-400">
                                {t("message2")}
                            </p>
                            <a href="#our-works" className="rellax relative inline-block mt-4 py-1.5 text-white before:absolute before:inset-0 before:origin-bottom before:scale-y-[.03] before:bg-white/60 before:transition before:duration-300 hover:before:scale-y-100 hover:before:scale-x-125 hover:before:bg-white/10">
                                <span className="relative">Buy Now</span>
                            </a>
                        </div>
                    </li>
                </ol>
            </div>

        </div>
  )
}

export default Product