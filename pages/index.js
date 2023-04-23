import Image from 'next/image'
import Hero from '../components/Hero/index'
import Mainnav from '../components/Navbar/mainNavbar'
export default function Home() {
  return (
    <main
      // className={`flex min-h-screen flex-col items-center justify-between p- ${inter.className}`}
      className=' h-full w-full'
    >
    <div className='bg-hero w-full h-full'>
      <Mainnav />
      <Hero />
    </div>
    </main>
  )
}
