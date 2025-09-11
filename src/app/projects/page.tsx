import { type Metadata } from 'next'

import { Card } from '@/components/Card'
import { SimpleLayout } from '@/components/SimpleLayout'
import logoAnimaginary from '@/images/logos/animaginary.svg'
import { SectionLayout } from '@/components/SectionLayout'

export interface Project {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  liveUrl?: string;
  githubUrl?: string;
  featured: boolean;
}
const projects = [
  {
    name: 'My Porfolio',
    description:
      'Porfolio site, implemented by nextjs, tailwind css and typescript.',
    link: { href: 'https://github.com/EaintHmoo/my-portfolio', label: 'github.com' },
    logo: logoAnimaginary,
  },
  {
    name: 'Movie App',
    description:
      'Movie site, implemented by reactjs, php, laravel.',
    link: { href: 'https://github.com/EaintHmoo/movie_app', label: 'github.com' },
    logo: logoAnimaginary,
  },
  {
    name: 'Todo App',
    description:
      'Movie site, implemented by nextjs, tailwind css and typescript.',
    link: { href: 'https://github.com/EaintHmoo/my-todo-list', label: 'github.com' },
    logo: logoAnimaginary,
  },
]

const expProjects: Project[] = [
  {
    id: '1',
    title: 'Won Yone - Fashion House Management',
    description: "Built a full-stack platform centralizing sales, customer, order, stock, and product management with employee, expense, and process modules, featuring role-based access, real-time reporting, and scalable architecture.",
    technologies: ['PHP', 'Laravel', 'Mysql', 'JavaScript', 'Tailwind CSS'],
    liveUrl: 'https://www.sourcecode.com.mm/won-yone/',
    githubUrl: '',
    featured: true
  },
  {
    id: '2',
    title: 'The District Coffee Lounge',
    description: 'Developed and maintained a POS system for four branches with mobile app integration, enabling order and sales tracking, menu browsing, rewards, and real-time updates across all locations.',
    technologies: ['Flutter', 'Onesignal', 'PHP', 'JavaScript', 'Laravel', 'Mysql','Bootstrap.'],
    liveUrl: 'https://www.sourcecode.com.mm/the-district-coffee-lounge-mobile-application/',
    githubUrl: '',
    featured: true
  },
  {
    id: '3',
    title: 'HtaWaRa - Educational Application',
    description: 'Developed a secure, scalable app providing articles, videos, podcasts, games, and certified courses on sexuality education, featuring user authentication, content management, and interactive learning tools.',
    technologies: ['Flutter', 'PHP', 'JavaScript', 'Laravel', 'Mysql','Bootstrap'],
    liveUrl: 'https://www.htawara.app/',
    githubUrl: 'https://github.com/EaintHmoo',
    featured: true
  },
  {
    id: '4',
    title: 'Promethia',
    description: 'A streamlined platform for managing tenders, RFQs, and bids with secure submission, supplier management, real-time notifications, and collaboration tools. It simplifies procurement, lowers costs, and opens opportunities for smaller suppliers.',
    technologies: ['React.js', 'PHP', 'Laravel', 'MySQL'],
    liveUrl: 'https://mptc.soisoft.com/',
    githubUrl: 'https://github.com/EaintHmoo',
    featured: true
  },
  {
    id: '5',
    title: 'KoKyarGyi Ecommerce Application',
    description: 'E-commerce website for jewelry business with product catalog, shopping cart.',
    technologies: ['PHP', 'JavaScript', 'Laravel', 'Mysql','Bootstrap'],
    liveUrl: 'https://kokyargyijade.com/',
    githubUrl: 'https://github.com/EaintHmoo',
    featured: true
  },
];

function LinkIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        d="M15.712 11.823a.75.75 0 1 0 1.06 1.06l-1.06-1.06Zm-4.95 1.768a.75.75 0 0 0 1.06-1.06l-1.06 1.06Zm-2.475-1.414a.75.75 0 1 0-1.06-1.06l1.06 1.06Zm4.95-1.768a.75.75 0 1 0-1.06 1.06l1.06-1.06Zm3.359.53-.884.884 1.06 1.06.885-.883-1.061-1.06Zm-4.95-2.12 1.414-1.415L12 6.344l-1.415 1.413 1.061 1.061Zm0 3.535a2.5 2.5 0 0 1 0-3.536l-1.06-1.06a4 4 0 0 0 0 5.656l1.06-1.06Zm4.95-4.95a2.5 2.5 0 0 1 0 3.535L17.656 12a4 4 0 0 0 0-5.657l-1.06 1.06Zm1.06-1.06a4 4 0 0 0-5.656 0l1.06 1.06a2.5 2.5 0 0 1 3.536 0l1.06-1.06Zm-7.07 7.07.176.177 1.06-1.06-.176-.177-1.06 1.06Zm-3.183-.353.884-.884-1.06-1.06-.884.883 1.06 1.06Zm4.95 2.121-1.414 1.414 1.06 1.06 1.415-1.413-1.06-1.061Zm0-3.536a2.5 2.5 0 0 1 0 3.536l1.06 1.06a4 4 0 0 0 0-5.656l-1.06 1.06Zm-4.95 4.95a2.5 2.5 0 0 1 0-3.535L6.344 12a4 4 0 0 0 0 5.656l1.06-1.06Zm-1.06 1.06a4 4 0 0 0 5.657 0l-1.061-1.06a2.5 2.5 0 0 1-3.535 0l-1.061 1.06Zm7.07-7.07-.176-.177-1.06 1.06.176.178 1.06-1.061Z"
        fill="currentColor"
      />
    </svg>
  )
}

export const metadata: Metadata = {
  title: 'Projects',
  description: 'Things I’ve made trying to put my dent in the universe.',
}

export default function Projects() {
  return (
    <>
    <SimpleLayout
      title="Things I’ve made trying to put my dent in the universe."
      intro="Over the years, I’ve developed numerous internal operational web apps. Due to confidentiality, I can’t publicly share all of them, but I’ve included descriptions of some projects featured on my company’s site. In addition, I’ve built several practice projects to sharpen my skills — feel free to explore the code and contribute your ideas or suggestions for improvement!"
    >
      <ul
        role="list"
        className="grid grid-cols-1 gap-x-12 gap-y-16 sm:grid-cols-2 lg:grid-cols-3"
      >
        {projects.map((project) => (
          <Card as="li" key={project.name}>
            <h2 className="mt-6 text-base font-semibold text-zinc-800 dark:text-zinc-100">
              <Card.Link href={project.link.href}>{project.name}</Card.Link>
            </h2>
            <Card.Description>{project.description}</Card.Description>
            <p className="relative z-10 mt-6 flex text-sm font-medium text-zinc-400 transition group-hover:text-teal-500 dark:text-zinc-200">
              <LinkIcon className="h-6 w-6 flex-none" />
              <span className="ml-2">{project.link.label}</span>
            </p>
          </Card>
        ))}
      </ul>
    </SimpleLayout>
    <SectionLayout
    title="My Projects"
    intro="A showcase of my recent work and personal projects"
    >
        {/* My Projects */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {expProjects.map((project) => (
            <div 
              key={project.id}
              className="bg-gray-50 dark:bg-zinc-800 border-1 border-gray-200 dark:border-gray-800 shadow-zinc-100 dark:shadow-teal-500/50 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden hover:-translate-y-2"
            >
              <div className="p-8">
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                <h3 className="text-2xl font-bold text-gray-900 dark:text-zinc-100 hover:text-teal-500 dark:hover:text-teal-400 mb-4">
                  {project.title} 🔗
                </h3>
                </a>
                <p className="text-zinc-600 dark:text-zinc-300 mb-6 leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, i) => (
                    <span 
                      key={i}
                      className="px-3 py-1 bg-white ring-1 ring-zinc-100 dark:bg-zinc-900 dark:ring-zinc-300/20 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

    </SectionLayout>
  </>
  )
}
