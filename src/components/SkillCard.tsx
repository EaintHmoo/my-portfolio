'use client';
import { motion } from "motion/react";
import clsx from 'clsx';

type SkillCardProps = {
  title?: string;
  className?: string;
  children: React.ReactNode;
};
export function SkillCard({title,className, children}: SkillCardProps){
  return (
    <motion.div
    initial={{scale: 0.9}}
    whileInView={{scale: 1}}
    transition={{ duration: 0.6, delay: 0.2}}
      className={clsx(className, 'overflow-hidden rounded-2xl bg-gray-50 dark:bg-zinc-800 border-1 border-gray-200 dark:border-gray-800 shadow-md shadow-zinc-100 dark:shadow-teal-500/50')}
    >
      <div className="px-4 py-5 sm:p-10">
      { title && <h1 className="text-xl sm:text-2xl font-bold mb-4">{title}</h1>}
      {children}
      </div>
    </motion.div>
  )
}