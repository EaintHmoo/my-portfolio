'use client';
import Link from 'next/link'
import clsx from 'clsx'
import { motion } from "motion/react"

export function SocialLink({
  delay,
  className,
  href,
  children,
  icon: Icon,
}: {
  delay?: number | null,
  className?: string
  href: string
  icon: React.ComponentType<{ className?: string }>
  children: React.ReactNode
}) {
  return (
    <motion.li
      initial={{ opacity:0, y:100 }}
      whileInView={{ opacity:1, y:0 }}
      transition={{duration: 1, ease: "easeOut", delay: delay || 0}} 
      className={clsx(className, 'flex')}>
      <Link
        href={href}
        className="group flex text-sm font-medium text-zinc-800 transition hover:text-teal-500 dark:text-zinc-200 dark:hover:text-teal-500"
      >
        <Icon className="h-6 w-6 flex-none fill-zinc-500 transition group-hover:fill-teal-500" />
        <span className="ml-4">{children}</span>
      </Link>
    </motion.li>
  )
}