import TransitionLink from '@/components/TransitionLink'

export default function Header() {
  return (
    <header className=''>
      <div className='container flex items-center justify-between py-4'>
        Jonathan Minori
        <nav>
          <ul className='flex space-x-4'>
            <li>
              <TransitionLink href='/' label='Profile' />
            </li>
            <li>
              <TransitionLink href='/work' label='Work' />
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}
