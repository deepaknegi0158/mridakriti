import Navbar from '../components/Navbar';
import Slider from '../components/Slider';
import Product from '../components/Product';
import Footer from '../components/Footer';


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
