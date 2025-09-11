'use client';
import { motion } from "motion/react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import clsx from 'clsx';
import { IconProp } from '@fortawesome/fontawesome-svg-core';

type ServiceCardProps = {
  className?: string;
  item: {
    icon:IconProp,
    name: string;
    description: string;
  }
};
export function SerivceCard({className,item}: ServiceCardProps){
  return (
    <motion.div
    initial={{scale: 0.9}}
    whileInView={{scale: 1}}
    transition={{ duration: 0.6, delay: 0.2}}
      className={clsx(className, 'overflow-hidden rounded-2xl hover:rotate-3 duration-100 bg-gray-50 dark:bg-zinc-800 border-1 border-gray-200 dark:border-gray-800 shadow-md shadow-zinc-100 dark:shadow-teal-500/50')}
    >
      <div className="px-4 py-5 sm:p-10">
      <span>
        <FontAwesomeIcon icon={item.icon} className='w-10 text-5xl'/>
      </span>
      <h5 className="text-xl sm:text-2xl my-4">{item.name}</h5>
      <p>{item.description}</p>
      </div>
    </motion.div>
  )
}