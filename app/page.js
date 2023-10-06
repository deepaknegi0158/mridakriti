"use client"
import { useState } from 'react';
import Image from 'next/image'

import Navbar from '../components/Navbar';
import Slider from '../components/Slider';
import Product from '../components/Product';
import Footer from '../components/Footer';
import Feedback from '../components/Feedback';
import Join from '../components/Joinus';
import Logo from '../public/Logo.png'
import { useLoadingAnimation } from '../lib/LoadingAnimation';

export default function Home() {
  const sectionOffsets = [0, 1704, 2574]

  const [loading, setLoading] = useState(true);
  useLoadingAnimation(setLoading);

  if (loading === true) {
    return (
      <main>
        <div className="fixed inset-0 flex items-center justify-center bg-black backdrop-blur-lg z-50">
          <div className="logo">
            <Image
              src={Logo}
              alt="mridakriti-logo"
              priority='high'
            />
          </div>
        </div>
      </main>
    )
  } else {
    return (
      <main className='font-sans'>
        <Navbar sectionOffsets={sectionOffsets} />
        <Slider />
        <Product />
        {/* <ProductList products={productData} /> */}
        <Feedback />
        <Join />
        <Footer />
      </main>
    )
  }

  // return (
  //   <main className='font-sans'>
  //     {loading ? (
  //       <div className="fixed inset-0 flex items-center justify-center bg-black backdrop-blur-lg z-50">
  //         <div className="logo">
  //           <Image
  //             src={Logo}
  //             alt="mridakriti-logo"
  //           />
  //         </div>
  //       </div>
  //     ) : (
  //       <>
  //         <Navbar sectionOffsets={sectionOffsets} />
  //         <Slider />
  //         <Product />
  //         <Feedback />
  //         <Join />
  //         <Footer />
  //       </>
  //     )
  //     }

  //   </main>
  // )
}
