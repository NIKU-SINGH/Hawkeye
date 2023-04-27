import Image from 'next/image'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })
import Navbar from '../components/Navbar/index'
import Hero  from '../components/Hero/index'
export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
    </main>
  )
}
