import Image from 'next/image'
import { Inter } from 'next/font/google'
import Footer from '../components/Footer/index'

const inter = Inter({ subsets: ['latin'] })
import Navbar from '../components/Navbar/index'
import Hero  from '../components/Hero/index'
export default function Home() {
  return (
    <main className='bg-black'>
      <Navbar />
      <Hero />
      <Footer />
    </main>
  )
}
