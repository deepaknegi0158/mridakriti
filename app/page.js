import Product from '@/components/Product'
import Slider from '@/components/Slider'
import Image from 'next/image'

export default function Home() {
  return (
    <main className='font-sans'>
        <Slider />
        <Product />
    </main>
  )
}
