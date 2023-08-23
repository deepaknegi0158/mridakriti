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
              <a href="/our-works" className="rellax relative inline-block py-1.5 text-white before:absolute before:inset-0 before:origin-bottom before:scale-y-[.03] before:bg-white/60 before:transition before:duration-300 hover:before:scale-y-100 hover:before:scale-x-125 hover:before:bg-white/10 scroll-smooth duration-300">
                <span className="relative">See our work</span>
              </a>
            </div>
          </div>
          <div className="rellax relative mt-16 w-max md:mt-32 md:ml-0 xl:-mt-16">
            <span className="text-xs font-light uppercase tracking-widest text-white">Follow us</span>
            <ul className="relative z-20 mt-4 space-y-2 text-sm font-light text-white">
              <li>
                <a href="/" className='flex gap-4' target="_blank">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" ><rect width="20" height="20" x="2" y="2" rx="5" ry="5" /><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" /><line x1="17.5" x2="17.51" y1="6.5" y2="6.5" /></svg>
                  Instagram
                </a>
              </li>
              <li>
                <a href="/" className='flex gap-4' target="_blank">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" ><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" /></svg>
                  Facebook
                </a>
              </li>
              <li>
                <a href="/" className='flex gap-4' target="_blank">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M6.014 8.00613C6.12827 7.1024 7.30277 5.87414 8.23488 6.01043L8.23339 6.00894C9.14051 6.18132 9.85859 7.74261 10.2635 8.44465C10.5504 8.95402 10.3641 9.4701 10.0965 9.68787C9.7355 9.97883 9.17099 10.3803 9.28943 10.7834C9.5 11.5 12 14 13.2296 14.7107C13.695 14.9797 14.0325 14.2702 14.3207 13.9067C14.5301 13.6271 15.0466 13.46 15.5548 13.736C16.3138 14.178 17.0288 14.6917 17.69 15.27C18.0202 15.546 18.0977 15.9539 17.8689 16.385C17.4659 17.1443 16.3003 18.1456 15.4542 17.9421C13.9764 17.5868 8 15.27 6.08033 8.55801C5.97237 8.24048 5.99955 8.12044 6.014 8.00613Z" fill="#ffffff"></path> <path fillRule="evenodd" clipRule="evenodd" d="M12 23C10.7764 23 10.0994 22.8687 9 22.5L6.89443 23.5528C5.56462 24.2177 4 23.2507 4 21.7639V19.5C1.84655 17.492 1 15.1767 1 12C1 5.92487 5.92487 1 12 1C18.0751 1 23 5.92487 23 12C23 18.0751 18.0751 23 12 23ZM6 18.6303L5.36395 18.0372C3.69087 16.4772 3 14.7331 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12C21 16.9706 16.9706 21 12 21C11.0143 21 10.552 20.911 9.63595 20.6038L8.84847 20.3397L6 21.7639V18.6303Z" fill="#ffffff"></path> </g></svg>
                  WhatsApp
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