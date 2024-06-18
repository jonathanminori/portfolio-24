'use client'

import React, { useEffect } from 'react'
import gsap from 'gsap'

export default function Works() {
  useEffect(() => {
    gsap.set('.flair', { xPercent: -50, yPercent: -50 })
    const xSetter = gsap.quickSetter('.flair', 'x', 'px') //apply it to the #id element's x property and append a "px" unit
    const ySetter = gsap.quickSetter('.flair', 'y', 'px') //apply it to the #id element's y property and append a "px" unit
    const handleMouseMove = (e: MouseEvent) => {
      xSetter(e.x)
      ySetter(e.y)
    }
    window.addEventListener('mousemove', handleMouseMove)
    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
    }
  }, [])
  return (
    <section className='matrix absolute bottom-0 left-0 right-0 top-0 z-0'>
      <div className='flair fixed left-0 top-0 h-10 w-10 cursor-none rounded-full bg-red-100'></div>
    </section>
  )
}
