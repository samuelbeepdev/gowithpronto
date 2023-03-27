import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { AnimatePresence, motion } from 'framer-motion'

export default function App({ Component, pageProps }: AppProps) {
  let { asPath } = useRouter()

  return <>
    <Head>
      <title>Let's Go with PRONTO</title>
      <link rel="shortcut icon" href="https://www.ridepronto.com/dist/img/favicons/favicon.ico" type="image/x-icon" />
    </Head>
    <nav>
      <div>
        <Link href={'/'}>
          <img src="/logo.png" alt="Let's Go with PRONTO" style={{ height: '10vh', verticalAlign: 'middle' }} />
        </Link>
        <span className='addlLogosDesktop'>
          <Link href={'https://sandiegounified.org'}>
            <img src="/logo-sdusd.png" style={{ height: '5vh', verticalAlign: 'middle', marginRight: '20px', marginLeft: '30px' }} />
          </Link>
          <Link href={'https://sdmts.com'}>
            <img src="/logo-sdmts.png" style={{ height: '5vh', verticalAlign: 'middle' }} />
          </Link>
        </span>
      </div>
      <div className='navLinks'>
        <Link href={'/'}>Home</Link>
        <Link href={'/map'}>Map</Link>
        <Link href={'/faq'}>FAQ</Link>
      </div>
    </nav>
    <AnimatePresence initial={false} mode={'wait'}>
      <motion.div
        key={asPath}
        variants={{
          out: {
            opacity: 0.3,
            transition: {
              duration: 0.1,
            },
          },
          in: {
            opacity: 1,
            transition: {
              duration: 0.1,
            },
          },
        }}
        animate='in'
        initial='out'
        exit='out'
      >
        <Component {...pageProps} />
      </motion.div>
    </AnimatePresence>
  </>
}
