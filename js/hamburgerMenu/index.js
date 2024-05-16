'use client'

import Link from 'next/link'
import { useState } from 'react'

const HamburgerMenu = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false)

  const handleHamburgerMenu = () => {
    setIsOpen(!isOpen)
  }

  return (
    <>
      {/* hamburger button */}
      <button
        type='button'
        className='z-50 space-y-2 p-2 mr-4 hover:opacity-50'
        onClick={handleHamburgerMenu}
      >
        <span
          className={
            isOpen
              ? 'block w-8 h-0.5 bg-white duration-300 translate-y-2.5 rotate-45'
              : 'block w-8 h-0.5 bg-white duration-300'
          }
        ></span>
        <span
          className={
            isOpen ? 'block opacity-0 duration-300' : 'block w-8 h-0.5 bg-white duration-300'
          }
        ></span>
        <span
          className={
            isOpen
              ? 'block w-8 h-0.5 bg-white duration-300 -rotate-45'
              : 'block w-8 h-0.5 bg-white duration-300'
          }
        ></span>
      </button>

      {/* contents in hamburger button */}
      <nav
        className={
          isOpen
            ? 'absolute bg-gray-400 h-full w-full mx-auto pt-44 duration-300'
            : 'absolute bg-gray-400 opacity-0 h-full w-full mx-auto pt-44 duration-300 invisible'
        }
      >
        <ul className='text-xl underline'>
          <li className='text-center'>
            <Link
              className='block w-fit mx-auto mt-3 hover:opacity-75'
              href={'/'}
              onClick={() => setIsOpen(false)}
            >
              ハンバーガーメニューの中のコンテンツ
            </Link>
          </li>
        </ul>
      </nav>
    </>
  )
}

export default HamburgerMenu
