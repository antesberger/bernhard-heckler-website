import Link from 'next/link'
import Burger from './Burger'
import {
  useState,
  MutableRefObject,
  useEffect,
  useRef,
  useCallback,
} from 'react'

type Props = {
  heroRef?: MutableRefObject<HTMLDivElement>
}

export default function Navigation({ heroRef }: Props) {
  const [active, setActive] = useState(false)
  const [inverted, setInverted] = useState(false)
  const navbarRef = useRef<HTMLDivElement | null>(null)
  const [windowWidth, setWindowWidth] = useState(null)

  const handleScroll = useCallback(() => {
    setInverted(
      (heroRef ? heroRef.current.clientHeight : 0) -
        navbarRef.current.clientHeight <
        window.scrollY
    )
  }, [heroRef])

  useEffect(() => {
    handleScroll()
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
      text: 'Starke Texte',
      href: '/journalismus',
    },
  ]

  useEffect(() => {
    setWindowWidth(window.innerWidth)
    window.addEventListener('resize', () => setWindowWidth(window.innerWidth))
  }, [])

  return (
    <nav
      ref={navbarRef}
      className={`sticky h-nav top-0 z-20 flex items-center justify-between w-full px-sm transition-all duration-200 ${
        inverted ? 'text-black bg-white' : 'text-white'
      } ${active && windowWidth < 768 && 'bg-white text-black'}`}
    >
      <div className='flex justify-between items-center w-full'>
        <Link href='/'>
          <a>
            <h1 className='font-bold text-xl mb-0'>Bernhard Heckler</h1>
          </a>
        </Link>
        <ul
          style={
            windowWidth < 768
              ? active
                ? {
                    top: navbarRef.current ? navbarRef.current.clientHeight : 0,
                  }
                : { top: '-120%' }
              : {}
          }
          className={`z-n1 md:z-20 transition-all duration-200 flex left-0 md:space-x-md absolute md:relative w-full md:w-auto flex-col md:flex-row bg-white md:bg-transparent p-sm space-y-md md:space-y-0 ${
            windowWidth < 768
              ? active
                ? 'text-black opacity-100'
                : 'opacity-0 md:opacity-100'
              : ''
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
