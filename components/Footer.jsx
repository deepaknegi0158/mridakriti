import React from 'react'
import Image  from 'next/image'

const Footer = () => {
  return (
    <footer className="relative bg-black pt-5 border-t border-gray-500 backdrop-opacity-0">
      <div className="mx-auto max-w-7xl px-6 pb-12 lg:px-12 xl:px-6 2xl:px-0">

        <div className="mt-8 md:mt-10 lg:mt-14">
          <div className="space-y-8 md:space-y-12">
            <a href="/" className="text-2xl font-light tracking-widest text-white">
              <Image 
                src="/Logo.png"
                width={48}
                height={48}
                alt='mridakriti-logo'
              />
              {/* <img className="h-12 w-auto" src={Logo} alt="logo mark" width="100" height="100" /> */}
            </a>
            <nav>
              <ul className="flex flex-wrap gap-6 text-sm uppercase tracking-wider text-white">
                <li>
                  <a href="#home">Home</a>
                </li>
                <li>
                  <a href="#our-works">Work</a>
                </li>
                <li>
                  <a href="#services">Services</a>
                </li>
                <li>
                  <a className="block w-max" href="#about">About us</a>
                </li>
                <li>
                  <a href="#contact">Contact</a>
                </li>
              </ul>
            </nav>
            <div className="flex flex-wrap justify-between gap-3">
              <span className="text-sm text-white/50">© Mridakriti 2021 - Present</span>
              <span className="text-sm text-white/50">Designed by <a href="https://thecodingbyte/" className="text-white">TheCodingByte</a></span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer