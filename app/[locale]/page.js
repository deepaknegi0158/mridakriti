import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import Product from '@/components/Product'
import Slider from '@/components/Slider'

export default function Home() {
  return (
    <main className='font-sans'>
        <Navbar />
        <Slider />
        <Product />
        <Footer />  
    </main>
  )
}
