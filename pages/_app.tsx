import '../styles/globals.css'
import '../styles/home.css'
import '../styles/navBar.css'
import '../styles/hamburgerMenu.css'
import type { AppProps } from 'next/app'


function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
export default MyApp
