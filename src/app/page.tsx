'use client'

import { useEffect } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'
import { gsap } from 'gsap'
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { ScrollSmoother } from 'gsap/ScrollSmoother'
import { ArrowUpRight } from 'lucide-react'

gsap.registerPlugin(useGSAP, ScrollTrigger, ScrollSmoother)

export default function Home() {
  const [emblaRef] = useEmblaCarousel({ loop: true }, [Autoplay()])
  useEffect(() => {
    ScrollSmoother.create({
      wrapper: '#wrapper',
      content: '#content',
      smooth: 1.2,
      effects: false,
      normalizeScroll: true,
      ignoreMobileResize: true
    })
  }, [])
  return (
    <div id='wrapper' className='container z-0'>
      <div id='content' className='prose pb-96 pt-24 text-xl font-normal'>
        <article
          id='intro'
          className='mb-14 text-neutral-900 dark:text-neutral-100'
        >
          <h1 className='text-base font-medium'>
            Jonathan Minori
            <br />
            <span className='text-sm font-normal opacity-60'>
              Design Director based in Portland, Oregon
            </span>
          </h1>
        </article>
        <article id='bio' className='mb-24 text-black dark:text-zinc-200'>
          <h2 className='info-headline sr-only'>Bio</h2>
          <p>
            I'm a hands-on design leader and startup founder with two decades of
            experience driving innovation and creative excellence.
          </p>
          <p>
            I've held pivotal roles across design, product, engineering, and
            marketing, excelling at the intersection of brand and product
            experiences, particularly in the realm of emerging technologies.
          </p>
        </article>
        <article id='curently' className='mb-24 text-black dark:text-zinc-200'>
          <h2 className='info-headline'>Currently</h2>
          <p>
            I work as a fractional design leader with startups and Fortune 100
            companies across fintech, blockchain, creative tools, and climate.
            My speciality is in product design, strategy, and creative
            leadership.
          </p>
          <p>
            I look for opportunities where I can help deliver exceptional
            product experiences and foster a culture of innovation and
            excellence.
          </p>
          <div className='embla' ref={emblaRef}>
            <div className='embla__container'>
              <div className='embla__slide'>
                <p>
                  Jonathan has been an invaluable partner as our fractional
                  design leader over the last quarter. He quickly developed up a
                  deep understanding of our target customer, product vision, and
                  company context. Jonathan had a knack for reframing a
                  strategic opportunity with a razor sharp “obvious when you
                  hear it” analogy or mental model. He’s a fantastic
                  communicator that keeps his partners informed of day-to-day
                  execution through timely, lightweight updates. Jonathan also
                  played a key role in hiring our first full-time design leader.
                  He had great intuition for the profile we needed and expertly
                  assessed our candidate pool. We’re in a much stronger position
                  today because of Jonathan’s many contributions to our team.
                </p>
              </div>
              <div className='embla__slide'>Slide 2</div>
              <div className='embla__slide'>Slide 3</div>
            </div>
          </div>
        </article>
        <article id='extra' className='mb-24 text-black dark:text-zinc-200'>
          <h2 className='info-headline'>Extracurriculars</h2>
          <div className='grid grid-cols-1 gap-2 sm:grid-cols-2'>
            <a
              href='https://adplist.org/mentors/jonathan-minori'
              title='View my ADPList profile'
              className='no-underline'
            >
              <div
                id='able'
                className='flex w-full flex-col justify-between rounded-xl bg-slate-900'
              >
                <div className='aspect-4/3 w-full'></div>
                <div className='px-8 pb-3'>
                  <h3 className='mb-1.5 text-xl font-medium text-white'>
                    ADPList
                  </h3>
                  <p className='text-base leading-snug text-white opacity-80'>
                    1,000+ minutes mentoring designers to land their next role
                    or pursue a career in freelance.
                  </p>
                </div>
              </div>
            </a>
            <a
              href='http://www.ableworks.co'
              title='Able'
              className='no-underline'
            >
              <div
                id='able'
                className='aspect-4/3 flex w-full flex-col justify-between rounded-xl bg-[#FCFFDE]'
              >
                <div className='aspect-4/3 w-full'></div>
                <div className='px-8 pb-3'>
                  <h3 className='mb-1.5 text-xl font-medium'>Able</h3>
                  <p className='text-base leading-snug opacity-80'>
                    Easily record and share AI-edited instructional videos with
                    your frontline teams.
                  </p>
                </div>
              </div>
            </a>
            <a
              href='http://www.picklethumbs.com'
              title='Pickle Thumbs'
              className='no-underline'
            >
              <div
                id='pickle-thumbs'
                className='flex w-full flex-col justify-between rounded-xl bg-[#08A24B]'
              >
                <div className='aspect-4/3 w-full'></div>
                <div className='px-8 pb-3'>
                  <h3 className='mb-1.5 text-xl font-medium text-white'>
                    Pickle Thumbs
                  </h3>
                  <p className='text-base leading-snug text-white opacity-80'>
                    Making things to help gardeners find their green thumb.
                  </p>
                </div>
              </div>
            </a>
            <div
              id='secret'
              className='flex h-full w-full select-none items-center justify-center rounded-xl border border-dashed border-neutral-500/10 text-sm text-neutral-700/20'
            >
              Coming Soon
            </div>
          </div>
        </article>
        <article id='core' className='mb-24 text-black dark:text-zinc-200'>
          <h2 className='info-headline'>Core Skills</h2>
          <p>
            Product Design, Product Strategy, Prototyping, Creative Direction,
            User Research, Design Systems, Creative Leadership, Talent
            Development
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
        <article id='contact' className='text-black dark:text-zinc-200'>
          <h2 className='info-headline'>Connect</h2>
          <ul className='m-0 list-outside list-none p-0 font-sans'>
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
    </div>
  )
}
