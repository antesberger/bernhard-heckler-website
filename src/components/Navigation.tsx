import Link from 'next/link'
import { useRouter } from 'next/router'
import Burger from './Burger'
import { useState } from 'react'

export default function Navigation() {
  const router = useRouter()
  const [active, setActive] = useState(false)

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
    <nav className='absolute z-10 flex justify-center w-full p-s absolute text-white'>
      <Burger active={active} onClick={() => setActive(!active)} />
      <div className='flex justify-between items-center w-full max-w-xl'>
        <Link href='/'>
          <a>
            <h1 className='font-bold text-xl'>Bernhard Heckler</h1>
          </a>
        </Link>
        <ul className='flex space-x-s'>
          {links.map((link, index) => (
            <li key={index}>
              <Link href={link.href}>
                <a
                  className={`font-semibold text-md base ${
                    router.pathname.startsWith(link.href) ? 'nav-active' : null
                  }`}
                >
                  {link.text}
                </a>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  )
}
