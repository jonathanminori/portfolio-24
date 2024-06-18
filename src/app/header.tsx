import TransitionLink from '@/components/TransitionLink'

export default function Header() {
  return (
    <header className='fixed right-0 top-0 z-20 px-8 py-4'>
      <nav>
        <ul className='flex items-center space-x-8'>
          <li>
            <TransitionLink href='/' label='Profile' />
          </li>
          <li>
            <TransitionLink href='/works' label='Works' />
          </li>
        </ul>
      </nav>
    </header>
  )
}
