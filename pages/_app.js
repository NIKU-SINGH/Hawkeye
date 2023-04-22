import '@/styles/globals.css'
import { Poppins } from 'next/font/google'
import Navbar from '../components/Navbar/index'

// const poppins = Poppins({ subsets: ['latin'] })
export default function App({ Component, pageProps }) {
  return (
    <main>
    <Navbar />
      <Component {...pageProps} />
    </main>
  )
}
