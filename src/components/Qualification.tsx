'use client';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase, faUserGraduate } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
import { QualificationDotLine } from '@/components/QualificationDotline';


const EDUCATIONS = [
    {
        name: 'Web Development Course',
        institue : 'Host Myanmar Mandalay',
        timeline : '2020 - 2021'
    },
    {
        name: 'Bachelor Of Engineering',
        institue : 'University of Technology (Yatanarpon Cyber City)  ',
        timeline : '2016 - 2022'
    },
];

const EXPERINECES = [   
    {
        name: 'Software Engineer',
        institue : 'Source Code Myanmar Co.,Ltd.',
        timeline : 'Apr, 2024 – Current '
    },
    {
        name: 'Junior Software Engineer',
        institue : 'Host Myanmar Co.,Ltd.',
        timeline : 'Jan, 2021 – Sep, 2023'
    },
    {
        name: 'Graduation Internship Program',
        institue : 'Koe Koe Tech Co.,Ltd.',
        timeline : 'Oct,2019 – Dec, 2019'
    },
];


export function Qualification(){
    const [isEucation, setIsEucation] = useState(true);
    return (
        <>
        <div className='w-full sm:w-80 mx-auto flex justify-between'>
            {/* Qualification Title */}
            <div onClick={()=>setIsEucation(true)} className='flex gap-2 cursor-pointer hover:text-teal-600 items-center text-xl sm:text-2xl '>
                <FontAwesomeIcon icon={faUserGraduate} className='w-5' />
                <span>
                    Education
                </span>
            </div>
            <div onClick={()=>setIsEucation(false)}  className='flex gap-2 cursor-pointer hover:text-teal-600 items-center text-xl sm:text-2xl'>
                <FontAwesomeIcon icon={faBriefcase} className='w-5' />
                <span>
                    Experience
                </span>
            </div>
        </div>

        <div className='mt-4'>
            {
                isEucation && (
                    EDUCATIONS.map((item,index)=> <QualificationDotLine key={index} direction={index % 2 === 0 ? 'right':'left'} item={item}/>)
                )
            }

            {
                !isEucation && (
                    EXPERINECES.map((item,index)=> <QualificationDotLine key={index} direction={index % 2 === 0 ? 'right':'left'} item={item}/>)
                )
            }
        </div>
        </>
    )
}

