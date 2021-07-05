import '../styles/globals.css'

import type { AppProps } from 'next/app'

// eslint-disable-next-line react/destructuring-assignment
const MyApp = ({ Component, pageProps }: AppProps) => {
  return <Component {...pageProps} />
}

export default MyApp
