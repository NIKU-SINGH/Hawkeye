import Image from 'next/image'
import Hero from '../components/Hero/index'

export default function Home() {
  return (
    <main
      // className={`flex min-h-screen flex-col items-center justify-between p- ${inter.className}`}
      className='bg-hero h-full w-full'
    >
      <Hero />
    </main>
  )
}
