import '@/styles/globals.css'
import { Poppins } from 'next/font/google'

// const poppins = Poppins({ subsets: ['latin'] })
export default function App({ Component, pageProps }) {
  return (
    <main>
      <Component {...pageProps} />
    </main>
  )
}
