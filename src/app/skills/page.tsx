import { type Metadata } from 'next'
import { SectionLayout } from '@/components/SectionLayout'
import { SkillCard } from '@/components/SkillCard'
import { faAws, faBootstrap, faCss, faCss3, faDocker, faGit, faHtml5, faJs, faLaravel, faMdb, faPhp, faPython, faReact } from '@fortawesome/free-brands-svg-icons'
import { faDatabase } from '@fortawesome/free-solid-svg-icons';
import { SkillItem } from '@/components/SkillItem';

export const metadata: Metadata = {
  title: 'Skills',
  description: 'My technological skill.',
}

const FRONTEND_SKILLS = [
  {
    'name' : 'Html',
    'level' : 'Basic',
    'icon' : faHtml5,
  },
  {
    'name' : 'CSS',
    'level' : 'Intermdiate',
    'icon' : faCss3, 
  },
  {
    'name' : 'Javascript',
    'level' : 'Intermdiate',
    'icon' : faJs,  
  },
  {
    'name' : 'Bootstrap',
    'level' : 'Intermdiate',
    'icon' : faBootstrap,
  },
  {
    'name' : 'Tailwind CSS',
    'level' : 'Intermdiate',
    'icon' : faCss,  
  },
  {
    'name' : 'React Js',
    'level' : 'Basic',
    'icon' : faReact,  
  },
  {
    'name' : 'Next Js',
    'level' : 'Basic',
    'icon' : faJs,  
  },

];


const BACKEND_SKILLS = [
  {
    'name' : 'PHP',
    'level' : 'Intermdiate',
    'icon' : faPhp,
  },
  {
    'name' : 'Mysql',
    'level' : 'Intermdiate',
    'icon' : faDatabase, 
  },
  {
    'name' : 'Laravel',
    'level' : 'Intermdiate',
    'icon' : faLaravel,  
  },
  {
    'name' : 'Mongodb',
    'level' : 'Basic',
    'icon' : faDatabase,
  },
  {
    'name' : 'Python',
    'level' : 'Basic',
    'icon' : faPython,  
  },
  {
    'name' : 'Firebase',
    'level' : 'Basic',
    'icon' : faReact,  
  },
];

const Other_SKILLS = [
  {
    'name' : 'Git',
    'level' : 'Intermdiate',
    'icon' : faGit,
  },
  {
    'name' : 'AWS',
    'level' : 'Basic',
    'icon' : faAws, 
  },
  {
    'name' : 'Docker',
    'level' : 'Basic',
    'icon' : faDocker,  
  },
];

export default function Projects() {
  return (
     <SectionLayout 
     title='Skills'
     intro='My technical level'
     >
      <div className='grid grid-cols-1 sm:grid-cols-2 gap-10'>
        <SkillCard>
            <div className='grid grid-cols-2 gap-2'>
              {
                  FRONTEND_SKILLS.map(item=>(
                    <SkillItem item={item}/>
                  ))
              }
            </div>
        </SkillCard>
        <SkillCard>
            <div className='grid grid-cols-2 gap-2'>
              {
                  BACKEND_SKILLS.map(item=>(
                    <SkillItem item={item}/>
                  ))
              }
            </div>
        </SkillCard>
        <SkillCard>
            <div className='grid grid-cols-2 gap-2'>
              {
                  Other_SKILLS.map(item=>(
                    <SkillItem item={item}/>
                  ))
              }
            </div>
        </SkillCard>
      </div>
        
     </SectionLayout>
  )
}
