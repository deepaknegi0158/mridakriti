import React from 'react'
import Image from 'next/image';
import { useTranslations } from 'next-intl';
import Auth01 from '../public/Auth2408.jpg'
import Auth02 from '../public/Auth2508.jpg'

const Sectionabt = () => {

    const t = useTranslations('header');

    return (
        <div className='relative bg-black z-10 pt-[15rem] font-sans'>
            <div>
                <div className="flex flex-wrap items-center gap-6 px-14 mx-auto max-w-7xl lg:px-12 xl:px-6 2xl:px-0">
                    <h2 className="text-7xl font-bold text-white xl:text-8xl">
                        {t('about-us')}
                    </h2>
                </div>
                <div className='ml-auto pt-6 md:pt-12 lg:w-3/4 px-14'>
                    <p className='mb-10 text-base font-light text-white sm:text-lg xl:leading-normal tracking-wide'>
                        {t('about-p1')}
                    </p>
                    <p className='mb-10 text-base font-light text-white sm:text-lg xl:leading-normal tracking-wide'>
                        {t('about-p2')}
                    </p>
                </div>
            </div>

            <div className="relative bg-gradient-to-b from-black via-black/30 to-black/10 scroll-mt-14 pb-3 pt-8 sm:scroll-mt-32 sm:pb-16 sm:pt-10 lg:pt-16">
                <div className="absolute inset-x-0 bottom-0 top-1/2 [mask-image:linear-gradient(transparent,white)]">
                    <svg aria-hidden="true" className="text-gray-100 absolute inset-0 h-full w-full">
                        <defs><pattern id=":S7:" width="128" height="128" patternUnits="userSpaceOnUse" x="50%" y="100%"><path d="M0 128V.5H128" fill="none" stroke="currentColor"></path></pattern></defs><rect width="100%" height="100%" fill="url(#:S7:)"></rect>
                    </svg>
                </div>

                <div className="relative mx-auto pt-4  px-6 lg:px-12 xl:px-6 2xl:px-0">
                    <div className='relative my-4 max-w-7xl px-6 mx-auto'>
                        <h2 className="inline-flex items-center font-medium tracking-tight rounded-full px-4 py-1 text-orange-600 ring-1 ring-inset ring-orange-600">
                            Our Team
                        </h2>
                        <div className='text-white my-6 text-4xl font-extrabold tracking-tight sm:text-5xl'>The people behind Mridakriti</div>
                    </div>

                    <div className='relative mx-auto max-w-5xl mt-10 flex flex-col md:flex-row px-10 md:px-3 gap-[5rem]'>
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
                                        I've been painting soil-art so professionally for over a decade and have worked with dozens of the biggest brands to create custom sets for their products.
                                    </p>
                                    <a className="my-6 inline-flex items-center text-base font-medium tracking-tight text-blue-600" href="#"><svg aria-hidden="true" viewBox="0 0 40 40" className="h-10 w-10 fill-current"><path d="M13.817 33.753c12.579 0 19.459-10.422 19.459-19.458 0-.297 0-.592-.02-.884a13.913 13.913 0 0 0 3.411-3.543 13.65 13.65 0 0 1-3.928 1.077 6.864 6.864 0 0 0 3.007-3.784 13.707 13.707 0 0 1-4.342 1.66 6.845 6.845 0 0 0-11.655 6.239A19.417 19.417 0 0 1 5.654 7.915a6.843 6.843 0 0 0 2.117 9.128 6.786 6.786 0 0 1-3.104-.853v.086a6.842 6.842 0 0 0 5.487 6.704 6.825 6.825 0 0 1-3.088.116 6.847 6.847 0 0 0 6.39 4.75A13.721 13.721 0 0 1 3.334 30.68a19.36 19.36 0 0 0 10.483 3.066"></path></svg><span className="ml-4">Follow on Twitter</span></a>
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
                                    <a className="my-6 inline-flex items-center text-base font-medium tracking-tight text-blue-600" href="#"><svg aria-hidden="true" viewBox="0 0 40 40" className="h-10 w-10 fill-current"><path d="M13.817 33.753c12.579 0 19.459-10.422 19.459-19.458 0-.297 0-.592-.02-.884a13.913 13.913 0 0 0 3.411-3.543 13.65 13.65 0 0 1-3.928 1.077 6.864 6.864 0 0 0 3.007-3.784 13.707 13.707 0 0 1-4.342 1.66 6.845 6.845 0 0 0-11.655 6.239A19.417 19.417 0 0 1 5.654 7.915a6.843 6.843 0 0 0 2.117 9.128 6.786 6.786 0 0 1-3.104-.853v.086a6.842 6.842 0 0 0 5.487 6.704 6.825 6.825 0 0 1-3.088.116 6.847 6.847 0 0 0 6.39 4.75A13.721 13.721 0 0 1 3.334 30.68a19.36 19.36 0 0 0 10.483 3.066"></path></svg><span className="ml-4">Follow on Twitter</span></a>
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