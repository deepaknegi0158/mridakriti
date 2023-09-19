import Navbar from '../components/Navbar';
import Slider from '../components/Slider';
import Product from '../components/Product';
import Footer from '../components/Footer';
import Feedback from '../components/Feedback';
import Join from '../components/Joinus';

export default function Home() {
  const sectionOffsets = [0, 1670, 2580]
  return (
    <main className='font-sans'>
      <Navbar sectionOffsets={sectionOffsets} />
      <Slider />
      <Product />
      <Feedback />
      <Join />      
      <Footer />
    </main>
  )
}
