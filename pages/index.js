import Image from 'next/image'
import Hero from '../components/Hero/index'

export default function Home() {
  return (
    <main
      // className={`flex min-h-screen flex-col items-center justify-between p- ${inter.className}`}
      className=' h-full w-full bg-gray-900'
    >
    <div className='bg-hero w-full h-full'>

      <Hero />
    </div>
    </main>
  )
}
