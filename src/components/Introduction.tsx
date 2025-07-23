'use client';
import { motion } from "motion/react";
import { Container } from '@/components/Container'
import {
  GitHubIcon,
  InstagramIcon,
  LinkedInIcon,
  XIcon,
} from '@/components/SocialIcons';
import { SocialLink } from '@/components/SocialLink'
import { MailIcon } from '@/components/Icons'
import Image from 'next/image'
import portraitImage from '@/images/photos/my-photo.jpg'

export function Introduction()
{
    return (
        <Container className="mt-16 sm:mt-32">
        <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12">
            <div className="lg:pl-20">
            <motion.div
            initial={{scale:0}}
            whileInView={{scale:1}}
            transition={{ duration: 0.8,delay:0.2, type:'spring', stiffness:100}}
             className="max-w-xs px-2.5 lg:max-w-none">
                <Image
                src={portraitImage}
                alt=""
                sizes="(min-width: 1024px) 32rem, 20rem"
                className="aspect-square rotate-3 rounded-2xl bg-zinc-100 object-cover dark:bg-zinc-800"
                />
            </motion.div>
            </div>
            <div className="lg:order-first lg:row-span-2">
                <motion.h1
                initial={{ opacity:0, y:-30 }}
                whileInView={{ opacity:1, y:0 }} 
                transition={{duration: 1, ease: "easeOut", delay: 0.2}} 
                 className="text-4xl font-bold tracking-tight text-zinc-800 sm:text-5xl dark:text-zinc-100">
                Hello, I am Eaint Hmoo Aung. 👋
                </motion.h1>
                <motion.h5
                initial={{ opacity:0, x:-30 }}
                whileInView={{ opacity:1, x:0 }} 
                transition={{duration: 1, ease: "easeOut", delay: 0.3}} 
                 className='text-2xl flex items-center gap-3 mt-4 font-light text-zinc-800 sm:text-3xl dark:text-zinc-100'>
                    <hr className='w-14 text-zinc-300 border-1'/> Software Engineer
                </motion.h5>
                <div className="mt-6 space-y-7 text-base text-zinc-600 dark:text-zinc-400">
                <motion.p
                initial={{ opacity:0, y:30 }}
                whileInView={{ opacity:1, y:0 }} 
                transition={{duration: 1, ease: "easeOut", delay: 0.3}} >
                I’m a passionate Software Developer based in Myanmar with a strong focus on backend development. I love building efficient, scalable, and user-friendly applications that solve real-world problems.
                </motion.p>
                <motion.p
                initial={{ opacity:0, y:30 }}
                whileInView={{ opacity:1, y:0 }} 
                transition={{duration: 1, ease: "easeOut", delay: 0.4}} >
                My core stack includes PHP (Laravel), JavaScript (React & Next.js), and I’m expanding my skills in DevOps to bridge development and deployment seamlessly. With over 4 years of professional experience, I take pride in writing clean, maintainable code and delivering high-quality solutions.
                </motion.p>
                <motion.p
                initial={{ opacity:0, y:30 }}
                whileInView={{ opacity:1, y:0 }} 
                transition={{duration: 1, ease: "easeOut", delay: 0.5}} >
                I’m always eager to explore new technologies, collaborate with diverse teams, and continuously grow as a developer. Thanks for visiting — and welcome to my portfolio!
                </motion.p>
                </div>
            </div>
            <div className="lg:pl-20">
            <ul role="list">
                <SocialLink delay={0.1} href="#" icon={InstagramIcon} className="mt-4">
                Follow on Instagram
                </SocialLink>
                <SocialLink delay={0.2} href="https://github.com/EaintHmoo" icon={GitHubIcon} className="mt-4">
                Follow on GitHub
                </SocialLink>
                <SocialLink delay={0.3} href="https://www.linkedin.com/in/eaint-hmoo-aung-82278a1b7/" icon={LinkedInIcon} className="mt-4">
                Follow on LinkedIn
                </SocialLink>
                <SocialLink
                delay={0.4}
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
    );
}