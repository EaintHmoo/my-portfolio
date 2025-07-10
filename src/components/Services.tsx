import { faFileCode } from '@fortawesome/free-solid-svg-icons';
import { SerivceCard } from './ServiceCard';

const EDUCATIONS = [
    {
        'icon' : faFileCode,
        'name' : 'Custom Web Design',
        'description' : 'Clean, user-focused interfaces that work seamlessly across all devices.'
    },
    {
        'icon' : faFileCode,
        'name' : 'Frontend Development',
        'description' : 'Built with React.js and Next.js for fast, interactive, and SEO-friendly experiences.'
    },
    {
        'icon' : faFileCode,
        'name' : 'Backend Development',
        'description' : 'Robust and secure APIs using PHP and Laravel, optimized for performance and maintainability.'
    },
    {
        'icon' : faFileCode,
        'name' : 'Full-Stack Solutions',
        'description' : ' From database architecture to deployment — I handle it all.'
    }
];


export function Services(){
    return (
        <div className='w-full grid grid-cols-1 sm:grid-cols-3 gap-10'>
             {
                EDUCATIONS.map((item)=><SerivceCard item={item}/>)
             }
        </div>
    )
}

