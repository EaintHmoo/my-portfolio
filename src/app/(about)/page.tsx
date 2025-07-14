import { type Metadata } from 'next'
import { Introduction } from '@/components/Introduction'
import { AboutMe } from '@/components/AboutMe'


export const metadata: Metadata = {
  title: 'About',
  description:
    'I’m Eaint Hmoo. I live in Yangon City, where I design the future.',
}

export default function About() {
  return (
    <>
      <Introduction/>
      <AboutMe/>
    </>
  )
}
