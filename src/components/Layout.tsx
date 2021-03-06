import Head from 'next/head'
import Navigation from './Navigation'
import { MutableRefObject } from 'react'

type Props = {
  children: React.ReactNode[]
  heroRef?: MutableRefObject<HTMLDivElement>
}

export default function Layout({ children, heroRef }: Props) {
  return (
    <div className='root'>
      <Head>
        <meta charSet='utf-8' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='manifest' href='/site.webmanifest' />
        <link rel='apple-touch-icon' href='/icon.png' />
        <meta name='theme-color' content='#fff' />
      </Head>
      <Navigation heroRef={heroRef} />
      <main>{children}</main>
    </div>
  )
}
