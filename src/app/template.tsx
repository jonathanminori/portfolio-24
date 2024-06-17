'use client'

import { useEffect } from 'react'
import { animatePageIn } from '@/utils/animations'

export default function Template({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    animatePageIn()
  }, [])

  return (
    <div>
      <div
        id='transition-element'
        className='z-100 fixed left-0 top-0 h-screen w-screen bg-black'
      ></div>
      {children}
    </div>
  )
}
