import 'normalize.css'
import { AppProps } from 'next/app'
import 'tailwindcss/tailwind.css'
import '../../public/styles/global.css'

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
