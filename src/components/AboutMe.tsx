'use client';
import { motion } from "motion/react";
import Image from 'next/image'
import portraitImage from '@/images/portrait.jpg'
import { SectionLayout } from '@/components/SectionLayout'
import { faAward, faHeadphones, faSuitcase } from '@fortawesome/free-solid-svg-icons'
import { AboutMeCard } from '@/components/AboutMeCard'

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
  

export function AboutMe()
{
    return (
        <SectionLayout
        title="About Me"
        intro="My introduction"
        >
        <div
         className="grid grid-cols-1 sm:grid-cols-3 gap-10 lg:gap-20">
            <motion.div
            initial={{opacity:0,scale:0.8}}
            whileInView={{opacity:1,scale:1}}
            transition={{ duration: 0.6}}
            className="max-w-xs lg:max-w-none mx-auto">
                <Image
                src={portraitImage}
                alt=""
                sizes="(min-width: 1024px) 32rem, 20rem"
                className="aspect-square rounded-2xl bg-zinc-100 object-cover dark:bg-zinc-800"
                />
            </motion.div>
            <div className="sm:col-span-2 sm:col-start-2">
                <div className="flex flex-col justify-between h-full gap-10 text-center sm:text-start">
                    <motion.div 
                    initial={{opacity:0}}
                    whileInView={{opacity:1}}
                    transition={{ duration: 0.6}}
                    className='flex gap-5'>
                    {
                        ABOUTME.map((item,index)=><AboutMeCard key={index} item={item}/>)
                    }
                    </motion.div>
                    
                    <motion.div
                    initial={{scale: 0.9}}
                    whileInView={{scale: 1}}
                    transition={{ duration: 0.6, delay: 0.3}}>
                    <a href='/avatar.jpg' download className="dark:bg-gray-50 px-10 py-4 text-center text-zinc-100 dark:text-zinc-800 bg-zinc-800 border-1 rounded-2xl dark:border-gray-200 border-gray-800 shadow-lg hover:bg-zinc-800/95 dark:hover:bg-gray-50/85 transaction duration-50 ">
                        Download CV
                    </a>
                    </motion.div>
                </div>
            </div>
        </div>
        </SectionLayout>
    )
}