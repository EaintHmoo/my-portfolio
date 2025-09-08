'use client';
import { motion } from "motion/react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase, faUserGraduate } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
import { QualificationDotLine } from '@/components/QualificationDotline';


const EDUCATIONS = [
    {
        name: 'Web Development Course',
        institue : 'Host Myanmar Mandalay',
        timeline : '2020 - 2021',
        type: 'edu',
    },
    {
        name: 'Bachelor Of Engineering',
        institue : 'University of Technology (Yatanarpon Cyber City)  ',
        timeline : '2016 - 2022',
        type: 'edu',
    },
];

const EXPERINECES = [   
    {
        name: 'Software Engineer',
        institue : 'Source Code Myanmar Co.,Ltd.',
        timeline : 'Apr, 2024 – Current ',
        type: 'exp',
    },
    {
        name: 'Junior Software Engineer',
        institue : 'Host Myanmar Co.,Ltd.',
        timeline : 'Jan, 2021 – Sep, 2023',
        type: 'exp',
    },
    {
        name: 'Graduation Internship Program',
        institue : 'Koe Koe Tech Co.,Ltd.',
        timeline : 'Oct,2019 – Dec, 2019',
        type: 'exp',
    },
];


export function Qualification(){
    const [isEucation, setIsEucation] = useState(true);
    return (
        <>
        <motion.div
        initial={{opacity:0, y: -30}}
        whileInView={{opacity:1, y:0}}
        transition={{duration: 1, delay:0.5}}
         className='w-full sm:w-80 mx-auto flex justify-between'>
            {/* Qualification Title */}
            <div onClick={()=>setIsEucation(true)} className='flex gap-2 cursor-pointer hover:text-teal-600 items-center text-xl sm:text-2xl '>
                <FontAwesomeIcon icon={faUserGraduate} className='w-5'/>
                <span>
                    Education
                </span>
            </div>
            <div onClick={()=>setIsEucation(false)}  className='flex gap-2 cursor-pointer hover:text-teal-600 items-center text-xl sm:text-2xl'>
                <FontAwesomeIcon icon={faBriefcase} className='w-5'/>
                <span>
                    Experience
                </span>
            </div>
        </motion.div>

        <motion.div
        initial={{opacity:0, y: -30}}
        whileInView={{opacity:1, y:0}}
        transition={{duration: 1, delay:0.6}}
         className='mt-4'>
            {
                isEucation && (
                    EDUCATIONS.map((item,index)=> <QualificationDotLine key={index} direction={index % 2 === 0 ? 'left':'right'} item={item}/>)
                )
            }

            {
                !isEucation && (
                    EXPERINECES.map((item,index)=> <QualificationDotLine key={index} direction={index % 2 === 0 ? 'left':'right'} item={item}/>)
                )
            }
        </motion.div>
        </>
    )
}

