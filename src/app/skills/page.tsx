import { type Metadata } from 'next'
import { SectionLayout } from '@/components/SectionLayout'
import { SkillCard } from '@/components/SkillCard'
import { faAws, faBootstrap, faCss, faCss3, faDocker, faGit, faHtml5, faJs, faLaravel, faPhp, faPython, faReact } from '@fortawesome/free-brands-svg-icons'
import { faDatabase } from '@fortawesome/free-solid-svg-icons';
import { SkillItem } from '@/components/SkillItem';
import { Qualification } from '@/components/Qualification';
import MyExperience from '@/components/MyExperience';
import MyEducations from '@/components/MyEducations';

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
    'name' : 'Laravel',
    'level' : 'Intermdiate',
    'icon' : faLaravel,  
  },
  {
    'name' : 'Python',
    'level' : 'Basic',
    'icon' : faPython,  
  },
];

const DATABASES = [
  {
    'name' : 'Mysql',
    'level' : 'Intermdiate',
    'icon' : faDatabase, 
  },
  {
    'name' : 'Mongodb',
    'level' : 'Basic',
    'icon' : faDatabase,
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



const educationData = [
  {
    institution: 'University of Technology',
    degree: 'Master of Science in Computer Science',
    date: '2022 - 2024',
    description: 'Specialization in Artificial Intelligence and Machine Learning. Completed thesis on natural language processing.',
  },
  {
    institution: 'State University',
    degree: 'Bachelor of Science in Software Engineering',
    date: '2018 - 2022',
    description: 'Graduated with honors. Active member of the university\'s competitive programming club.',
  },
  {
    institution: 'City College',
    degree: 'Associate of Arts in General Studies',
    date: '2016 - 2018',
    description: 'Focused on foundational courses in mathematics and logic, preparing for university-level studies.',
  },
];

export default function Skills() {
  return (
     <div>
      <SectionLayout 
      title='Skills'
      intro='My technical level'
      id="skills"
      >
        <div className='grid grid-cols-1 sm:grid-cols-2 gap-10'>
          <SkillCard title="Frontend Tech">
              <div className='grid grid-cols-2 gap-2'>
                {
                    FRONTEND_SKILLS.map(item=>(
                      <SkillItem item={item}/>
                    ))
                }
              </div>
          </SkillCard>
          <SkillCard title="Database">
              <div className='grid grid-cols-2 gap-2'>
                {
                    DATABASES.map(item=>(
                      <SkillItem item={item}/>
                    ))
                }
              </div>
          </SkillCard>
          <SkillCard title="Backend Tech">
              <div className='grid grid-cols-2 gap-2'>
                {
                    BACKEND_SKILLS.map(item=>(
                      <SkillItem item={item}/>
                    ))
                }
              </div>
          </SkillCard>
          <SkillCard title="Tools & DevOps">
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

        <SectionLayout
        title='My Education'
        intro='A showcase of my academic journey and achievements.'
        id="education"
          >
            <MyEducations/>   
        </SectionLayout>

        <SectionLayout
        title='Work Experience'
        intro="My professional journey and the amazing teams I've worked with"
        id="experience"
          >
           <MyExperience/> 
          </SectionLayout>
     </div>
  )
}
