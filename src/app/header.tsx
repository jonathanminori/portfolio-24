import TransitionLink from '@/components/TransitionLink'

export default function Header() {
  return (
    <header className='px-8 py-4'>
      <div className='flex justify-end'>
        <nav>
          <ul className='flex items-center space-x-8'>
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
