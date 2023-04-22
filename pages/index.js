import Image from 'next/image'


import Navbar from '../components/Navbar/index'
import Hero from '../components/Hero/index'

export default function Home() {
  return (
    <main
      // className={`flex min-h-screen flex-col items-center justify-between p- ${inter.className}`}
    >
      <Navbar />
      <Hero />
    </main>
  )
}
