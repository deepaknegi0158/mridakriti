"use client"
import Navbar from '../components/Navbar';
import Slider from '../components/Slider';
import Product from '../components/Product';
import Footer from '../components/Footer';
import Feedback from '../components/Feedback';
import Join from '../components/Joinus';
import { useState } from 'react';
import { useLoadingAnimation } from '../lib/LoadingAnimation';

export default function Home() {
  const sectionOffsets = [0, 1704, 2574]

  const [loading, setLoading] = useState(true);
  useLoadingAnimation(setLoading);

  return (
    <main className='font-sans'>
      {loading ? (
        <div className="fixed inset-0 flex items-center justify-center bg-black backdrop-blur-lg z-50">
          <div className="logo">
            <img
              src="logo.png"
              alt="mridakriti-logo"
            />
          </div>
        </div>
      ) : (
        <>
          <Navbar sectionOffsets={sectionOffsets} />
          <Slider />
          <Product />
          <Feedback />
          <Join />
          <Footer />
        </>
      )
      }

    </main>
  )
}
