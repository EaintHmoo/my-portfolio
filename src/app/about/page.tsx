import { type Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import clsx from 'clsx'


import { Container } from '@/components/Container'
import {
  GitHubIcon,
  InstagramIcon,
  LinkedInIcon,
  XIcon,
} from '@/components/SocialIcons'
import portraitImage from '@/images/portrait.jpg'
import { SectionLayout } from '@/components/SectionLayout'
import { faAward, faHeadphones, faSuitcase } from '@fortawesome/free-solid-svg-icons'
import { AboutMeCard } from '@/components/AboutMeCard'

function SocialLink({
  className,
  href,
  children,
  icon: Icon,
}: {
  className?: string
  href: string
  icon: React.ComponentType<{ className?: string }>
  children: React.ReactNode
}) {
  return (
    <li className={clsx(className, 'flex')}>
      <Link
        href={href}
        className="group flex text-sm font-medium text-zinc-800 transition hover:text-teal-500 dark:text-zinc-200 dark:hover:text-teal-500"
      >
        <Icon className="h-6 w-6 flex-none fill-zinc-500 transition group-hover:fill-teal-500" />
        <span className="ml-4">{children}</span>
      </Link>
    </li>
  )
}

function MailIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        fillRule="evenodd"
        d="M6 5a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H6Zm.245 2.187a.75.75 0 0 0-.99 1.126l6.25 5.5a.75.75 0 0 0 .99 0l6.25-5.5a.75.75 0 0 0-.99-1.126L12 12.251 6.245 7.187Z"
      />
    </svg>
  )
}

const ABOUTME = [
  {
    'icon': faAward,
    'description': 'Experience',
    'frequency': '4 + Years',
  },
  {
    'icon': faSuitcase,
    'description': 'Completed',
    'frequency': '10 + Projects',
  },
  {
    'icon': faHeadphones,
    'description': 'Support',
    'frequency': 'Online 24/7',
  },
]

export const metadata: Metadata = {
  title: 'About',
  description:
    'I’m Eaint Hmoo. I live in Yangon City, where I design the future.',
}

export default function About() {
  return (
    <>
    <Container className="mt-16 sm:mt-32">
      <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12">
        <div className="lg:pl-20">
          <div className="max-w-xs px-2.5 lg:max-w-none">
            <Image
              src={portraitImage}
              alt=""
              sizes="(min-width: 1024px) 32rem, 20rem"
              className="aspect-square rotate-3 rounded-2xl bg-zinc-100 object-cover dark:bg-zinc-800"
            />
          </div>
        </div>
        <div className="lg:order-first lg:row-span-2">
          <h1 className="text-4xl font-bold tracking-tight text-zinc-800 sm:text-5xl dark:text-zinc-100">
            Hello, I am Eaint Hmoo Aung. 👋
          </h1>
          <h5 className='text-2xl flex items-center gap-3 mt-4 font-light text-zinc-800 sm:text-3xl dark:text-zinc-100'>
              <hr className='w-14 text-zinc-300 border-1'/> Software Engineer
          </h5>
          <div className="mt-6 space-y-7 text-base text-zinc-600 dark:text-zinc-400">
          <p>
            I’m a passionate Software Developer based in Myanmar with a strong focus on backend development. I love building efficient, scalable, and user-friendly applications that solve real-world problems.
          </p>
          <p>
            My core stack includes PHP (Laravel), JavaScript (React & Next.js), and I’m expanding my skills in DevOps to bridge development and deployment seamlessly. With over 4 years of professional experience, I take pride in writing clean, maintainable code and delivering high-quality solutions.
          </p>
          <p>
            I’m always eager to explore new technologies, collaborate with diverse teams, and continuously grow as a developer. Thanks for visiting — and welcome to my portfolio!
          </p>
          </div>
        </div>
        <div className="lg:pl-20">
          <ul role="list">
            <SocialLink href="#" icon={InstagramIcon} className="mt-4">
              Follow on Instagram
            </SocialLink>
            <SocialLink href="https://github.com/EaintHmoo" icon={GitHubIcon} className="mt-4">
              Follow on GitHub
            </SocialLink>
            <SocialLink href="https://www.linkedin.com/in/eaint-hmoo-aung-82278a1b7/" icon={LinkedInIcon} className="mt-4">
              Follow on LinkedIn
            </SocialLink>
            <SocialLink
              href="mailto:eainthmooaung@gmail.com"
              icon={MailIcon}
              className="mt-8 border-t border-zinc-100 pt-8 dark:border-zinc-700/40"
            >
              eainthmooaung@gmail.com
            </SocialLink>
          </ul>
        </div>
      </div>
    </Container>
    <SectionLayout
    title="About Me"
    intro="My introduction"
    >
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-10 lg:gap-20">
          <div className="max-w-xs lg:max-w-none mx-auto">
            <Image
              src={portraitImage}
              alt=""
              sizes="(min-width: 1024px) 32rem, 20rem"
              className="aspect-square rounded-2xl bg-zinc-100 object-cover dark:bg-zinc-800"
            />
          </div>
          <div className="sm:col-span-2 sm:col-start-2">
            <div className="flex flex-col gap-5">
                <div className='flex gap-5'>
                {
                  ABOUTME.map(item=><AboutMeCard item={item}/>)
                }
                </div>
                
                <div>
                  <button className="dark:bg-gray-50 px-10 py-4 text-center text-zinc-100 dark:text-zinc-800 bg-zinc-800 border-1 rounded-2xl dark:border-gray-200 border-gray-800 shadow-lg  ">
                      Download CV
                  </button>
                </div>
            </div>
          </div>
      </div>
    </SectionLayout>
    </>
  )
}
