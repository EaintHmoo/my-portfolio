'use client';
import { Container } from '@/components/Container'
import { motion } from "motion/react";

export function SectionLayout({
  title,
  intro,
  children,
  id,
}: {
  title: string
  intro: string
  children?: React.ReactNode
  id?: string,
}) {
  return (
    <Container className="mt-16 sm:mt-32" id={id || ''}>
      <motion.div
      initial={{opacity:0}}
      whileInView={{opacity:1}}
      transition={{duration: 1}}>
      <header className="text-center">
        <motion.h1
        initial={{opacity:0, y:-30}}
        whileInView={{opacity:1, y:0}}
        transition={{duration: 1, delay: 0.3}}
         className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl ">
          {title}
        </motion.h1>
        <motion.p
        initial={{opacity:0, y:-30}}
        whileInView={{opacity:1, y:0}}
        transition={{duration: 1, delay: 0.5}}
         className="mt-2 italic text-base text-zinc-600 dark:text-zinc-400">
          {intro}
        </motion.p>
      </header>
      {children && <div className="mt-16 sm:mt-20">{children}</div>}
      </motion.div>
    </Container>
  )
}
