'use client'

import { useRouter, usePathname } from 'next/navigation'
import { animatePageOut } from '@/utils/animations'

export default function TransitionLink({
  href,
  label
}: {
  href: string
  label: string
}) {
  const router = useRouter()
  const pathname = usePathname()

  const handleClick = () => {
    if (pathname !== href) {
      animatePageOut(href, router)
    }
  }

  return (
    <button
      className='cursor-pointer rounded-xl border-[1px] border-black p-4 hover:bg-black hover:text-neutral-100'
      onClick={handleClick}
    >
      {label}
    </button>
  )
}
