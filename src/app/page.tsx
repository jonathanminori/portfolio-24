import { ArrowUpRight } from 'lucide-react'

export default function Home() {
  return (
    <section className='container'>
      <div className='flex h-full flex-col justify-between'>
        <div className='prose font-serif text-2xl font-light tracking-tight'>
          <article id='intro' className='mb-10 text-black dark:text-zinc-200'>
            <h1 className='font-sans text-base font-medium tracking-normal'>
              Jonathan Minori
            </h1>
          </article>
          <article id='bio' className='mb-24 text-black dark:text-zinc-200'>
            <h2 className='info-headline sr-only'>Bio</h2>
            <p>
              I'm a hands-on design leader and startup founder with two decades
              of experience driving innovation and creative excellence.
            </p>
            <p>
              I've held pivotal roles across design, product, engineering, and
              marketing, excelling at the intersection of brand and product,
              particularly in the realm of emerging technologies.
            </p>
            <p>
              I seek opportunities where I can deliver exceptional product
              experiences and foster a culture of innovation and excellence.
            </p>
          </article>
          <article id='dayjob' className='mb-24 text-black dark:text-zinc-200'>
            <h2 className='info-headline'>Day Job</h2>
            <p>
              I work independently with B2B and B2C startups, as well as Fortune
              100 companies across fintech, blockchain, creative tools, and
              climate tech.
            </p>
            <p>
              I specialize in product design, strategy, and creative leadership,
              playing a key role in cross-functional teams.
            </p>
          </article>
          <article
            id='sidehustles'
            className='mb-24 text-black dark:text-zinc-200'
          >
            <h2 className='info-headline'>Extracurriculars</h2>
            <p>
              <a
                href='http://www.ableworks.co'
                title='Able'
                className='font-sans tracking-normal no-underline'
              >
                Able
              </a>
              &nbsp;&mdash; Easily record and share AI-edited instructional
              videos with your frontline teams.
            </p>
            <p>
              <a
                href='https://adplist.org/mentors/jonathan-minori'
                title='View my ADPList profile'
                className='font-sans tracking-normal no-underline'
              >
                ADPList
              </a>
              &nbsp;&mdash; Mentoring designers on landing their next role or
              pursuing a career in freelance.
            </p>
            <p>
              <a
                href='http://www.picklethumbs.com'
                title='Pickle Thumbs'
                className='font-sans tracking-normal no-underline'
              >
                Pickle Thumbs
              </a>
              &nbsp;&mdash; Making things to help gardeners find their green
              thumb.
            </p>
          </article>
          <article id='core' className='mb-24 text-black dark:text-zinc-200'>
            <h2 className='info-headline'>Core Skills</h2>
            <p>
              Creative Leadership, Experience Design, 0 to 1 Product Strategy,
              User Research, Talent Development, Design Systems, Creative/Art
              Direction
            </p>
          </article>
          <article
            id='recognized'
            className='mb-24 text-black dark:text-zinc-200'
          >
            <h2 className='info-headline'>Recognized</h2>
            <p>
              Cannes Cyber Lion, Fast Co. Design, Wired, SXSW, One Show,
              Communication Arts, Webby, IxDA, and multiple FWA Awards
            </p>
          </article>
          <article id='contact' className='mb-24 text-black dark:text-zinc-200'>
            <h2 className='info-headline'>Connect</h2>
            <ul className='m-0 list-outside list-none p-0 font-sans tracking-normal'>
              <li className='contact-list'>
                <a
                  href='mailto:jonathan.minori@gmail.com'
                  title='Email me'
                  className='contact-label group'
                >
                  <span className='text-black dark:text-zinc-200'>Email</span>
                  <ArrowUpRight
                    size={20}
                    strokeWidth={1.25}
                    absoluteStrokeWidth
                    className='contact-icon'
                  />
                </a>
              </li>
              <li className='contact-list'>
                <a
                  href='https://read.cv/mino'
                  title='My CV'
                  className='contact-label group'
                >
                  CV
                  <ArrowUpRight
                    size={20}
                    strokeWidth={1.25}
                    absoluteStrokeWidth
                    className='contact-icon'
                  />
                </a>
              </li>
              <li className='contact-list'>
                <a
                  href='https://www.linkedin.com/in/jonathanminori/'
                  title='Connect on LinkedIn'
                  className='contact-label group'
                >
                  LinkedIn
                  <ArrowUpRight
                    size={20}
                    strokeWidth={1.25}
                    absoluteStrokeWidth
                    className='contact-icon'
                  />
                </a>
              </li>
              <li className='contact-list'>
                <a
                  href='https://x.com/jonminori'
                  title='Connect on Twitter'
                  className='contact-label group'
                >
                  Twitter
                  <ArrowUpRight
                    size={20}
                    strokeWidth={1.25}
                    absoluteStrokeWidth
                    className='contact-icon'
                  />
                </a>
              </li>
            </ul>
          </article>
        </div>
        {/* <div className="to-white-0 dark:to-black-0 group flex-none select-none flex-col space-y-2 bg-gradient-to-t from-white from-0% via-white via-80% to-100% px-10 pb-10 pt-12 font-sans text-base font-medium dark:from-black dark:via-black">
              <svg
                width="10"
                height="2"
                viewBox="0 0 10 2"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="stroke-2 text-[#40E478] transition-all group-hover:animate-spin group-hover:stroke-1"
              >
                <path d="M0 1H10" stroke="currentColor" />
              </svg>
              <p>Available for contract and full time opportunities</p>
            </div> */}
      </div>
    </section>
  )
}
