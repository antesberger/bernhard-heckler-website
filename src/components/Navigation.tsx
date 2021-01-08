import Link from 'next/link'
import { useRouter } from 'next/router'
import Burger from './Burger'
import { useState } from 'react'

export default function Navigation() {
  const router = useRouter()
  const [active, setActive] = useState(false)
  return (
    <nav className='flex justify-center w-full p-s absolute text-white'>
      <Burger active={active} onClick={() => setActive(!active)} />
      <div className='flex justify-between items-center w-full max-x-xl'>
        <Link href='/'>
          <a>
            <h1 className='font-bold text-xl'>Bernhard Heckler</h1>
          </a>
        </Link>
        <ul className='flex space-x-s'>
          <li>
            <Link href='/posts'>
              <a
                className={
                  router.pathname.startsWith('/posts') ? 'active' : null
                }
              >
                Aktuelles
              </a>
            </Link>
          </li>
          <li>
            <Link href='/posts'>
              <a>Reportagen</a>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}
