import Link from 'next/link'
import { useRouter } from 'next/router'
import Burger from './Burger'
import { useState, MutableRefObject, useEffect, useRef } from 'react'

type Props = {
  heroRef?: MutableRefObject<HTMLDivElement>
}

export default function Navigation({ heroRef }: Props) {
  const router = useRouter()
  const [active, setActive] = useState(false)
  const [heroHeight, setHeroHeight] = useState<number | undefined>()
  const [inverted, setInverted] = useState(false)
  const navbarRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    if (heroRef) {
      const heroHeight = heroRef.current.clientHeight
      setHeroHeight(heroHeight)
    } else {
      setHeroHeight(0)
      setInverted(true)
    }
  }, [heroRef])

  const handleScroll = () => {
    setInverted(heroHeight - navbarRef.current.clientHeight < window.scrollY)
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true })

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  const links = [
    {
      text: 'Tagebuch',
      href: '/tagebuch',
    },
    {
      text: 'Essays/Reportagen',
      href: '/journalismus',
    },
  ]

  return (
    <nav
      ref={navbarRef}
      className={`sticky h-nav top-0 z-10 flex items-center justify-between w-full px-sm transition-all ${
        inverted ? 'text-black bg-white' : 'text-white'
      } ${active ? 'bg-white text-black' : ''}`}
    >
      <div className='flex justify-between items-center w-full'>
        <Link href='/'>
          <a>
            <h1 className='font-bold text-xl mb-0'>Bernhard Heckler</h1>
          </a>
        </Link>
        <ul
          style={
            active
              ? {
                  top: navbarRef.current ? navbarRef.current.clientHeight : 0,
                }
              : { top: '-120%' }
          }
          className={`transition-all flex left-0 md:space-x-md absolute md:relative w-full md:w-auto flex-col md:flex-row bg-white md:bg-transparent p-sm space-y-md md:space-y-0 ${
            active ? 'text-black' : ''
          }`}
        >
          {links.map((link, index) => (
            <li key={index}>
              <Link href={link.href}>
                <a className='font-semibold text-md base'>{link.text}</a>
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <div className='m-sm'>
        <Burger
          inverted={inverted}
          active={active}
          onClick={() => setActive(!active)}
        />
      </div>
    </nav>
  )
}
