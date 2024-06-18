'use client'

import { useState, useEffect } from 'react'
import TransitionLink from '@/components/TransitionLink'
import { Moon, SunMedium } from 'lucide-react'

export default function Header() {
  const [darkMode, setDarkMode] = useState(false)

  useEffect(() => {
    const storedTheme = localStorage.getItem('theme')
    const prefersDarkScheme = window.matchMedia(
      '(prefers-color-scheme: dark)'
    ).matches

    if (storedTheme === 'dark' || (!storedTheme && prefersDarkScheme)) {
      document.documentElement.classList.add('dark')
      setDarkMode(true)
    } else {
      document.documentElement.classList.remove('dark')
      setDarkMode(false)
    }
  }, [])

  const toggleDarkMode = () => {
    const newDarkMode = !darkMode
    if (newDarkMode) {
      localStorage.setItem('theme', 'dark')
      document.documentElement.classList.add('dark')
    } else {
      localStorage.setItem('theme', 'light')
      document.documentElement.classList.remove('dark')
    }
    setDarkMode(newDarkMode)
  }
  return (
    <header className='fixed right-0 top-0 z-20 px-8 py-4'>
      <nav>
        <ul className='flex space-x-8'>
          <li>
            <TransitionLink href='/' label='Profile' />
          </li>
          <li>
            <TransitionLink href='/works' label='Works' />
          </li>
          <li className='mt-[2px]'>
            <button
              onClick={() => toggleDarkMode()}
              className='text-black hover:opacity-60 dark:text-neutral-200'
            >
              {darkMode && (
                <SunMedium size={13} strokeWidth={1.25} absoluteStrokeWidth />
              )}
              {!darkMode && (
                <Moon size={13} strokeWidth={1.25} absoluteStrokeWidth />
              )}
            </button>
          </li>
        </ul>
      </nav>
    </header>
  )
}
