import { type Metadata } from 'next'
import { type StaticImageData } from 'next/image'

import { Card } from '@/components/Card'
import { SimpleLayout } from '@/components/SimpleLayout'
import logoAnimaginary from '@/assets/images/logos/animaginary.svg'
import { SectionLayout } from '@/components/SectionLayout'
import { ProjectImageGallery } from '@/components/ProjectImageGallery'

import msRemitPhoto1 from '@/assets/images/projects/ms-remit/photo-1.png'
import msRemitPhoto2 from '@/assets/images/projects/ms-remit/photo-2.png'
import msRemitPhoto3 from '@/assets/images/projects/ms-remit/photo-3.png'
import rextlabPhoto1 from '@/assets/images/projects/rextlab/photo-1.png'
import rextlabPhoto2 from '@/assets/images/projects/rextlab/photo-2.png'
import rextlabPhoto3 from '@/assets/images/projects/rextlab/photo-3.png'
import juvenusPhoto1 from '@/assets/images/projects/juvenus/photo-1.png'
import juvenusPhoto2 from '@/assets/images/projects/juvenus/photo-2.png'
import juvenusPhoto3 from '@/assets/images/projects/juvenus/photo-3.png'
import wonYonePhoto1 from '@/assets/images/projects/won-yone/photo-1.png'
import wonYonePhoto2 from '@/assets/images/projects/won-yone/photo-2.png'
import wonYonePhoto3 from '@/assets/images/projects/won-yone/photo-3.png'
import iorCarrerPhoto1 from '@/assets/images/projects/zwe/photo-1.png'
import iorCarrerPhoto2 from '@/assets/images/projects/zwe/photo-2.png'

export interface Project {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  liveUrl?: string;
  githubUrl?: string;
  // Drop screenshots in src/assets/images/projects/, import them at the top
  // of this file, and add them here — the card switches from the
  // "coming soon" placeholder to the image grid automatically.
  images?: StaticImageData[];
  // 'internal': confidential in-house tool (may still have a liveUrl pointing
  // to a company case-study/info page rather than the live app itself).
  // 'unlaunched': built for a client/product but not live yet.
  // omitted: publicly live project.
  status?: 'internal' | 'unlaunched';
  featured: boolean;
}
const projects = [
  {
    name: 'Tasqi',
    description:
      'A sweet little task & board manager — multi-board Kanban to-do app with subtasks, due dates, search/filter, overdue reminders, drag-and-drop, recurring tasks, and board sharing, built on Next.js and Firebase.',
    link: { href: 'https://github.com/EaintHmoo/my-todo-list', label: 'github.com' },
    logo: logoAnimaginary,
  },
    {
    name: 'Project Management',
    description:
      'A multi-tenant team collaboration SaaS platform: organizations/teams, projects, Kanban-style tasks, meetings, and notifications. Built as a Laravel modular monolith backend with a Next.js frontend',
    link: { href: 'https://github.com/EaintHmoo/project_management', label: 'github.com' },
    logo: logoAnimaginary,
  },
]

const expProjects: Project[] = [
  {
    id: '1',
    title: 'MsRemit – Money Transfer Application',
    description: "money transfer platform for users in Myanmar, Thailand, and Australia, featuring Twilio-based OTP authentication, KYC-verified registration, and an admin system for reviewing and approving/rejecting transactions.",
    technologies: ['PHP', 'Laravel', 'Mysql', 'JavaScript', 'Next.js', 'Tailwind CSS'],
    liveUrl: '',
    githubUrl: '',
    images: [msRemitPhoto1, msRemitPhoto2, msRemitPhoto3],
    status: 'unlaunched',
    featured: true
  },
  {
    id: '2',
    title: 'Won Yone - Fashion House Management',
    description: "Built a full-stack platform centralizing sales, customer, order, stock, and product management with employee, expense, and process modules, featuring role-based access, real-time reporting, and scalable architecture.",
    technologies: ['PHP', 'Laravel', 'Mysql', 'JavaScript', 'Tailwind CSS'],
    liveUrl: 'https://www.sourcecode.com.mm/won-yone/',
    githubUrl: '',
    images: [wonYonePhoto1, wonYonePhoto2, wonYonePhoto3],
    status: 'internal',
    featured: true
  },
  {
    id: '3',
    title: 'The District Coffee Lounge',
    description: 'Developed and maintained a POS system for four branches with mobile app integration, enabling order and sales tracking, menu browsing, rewards, and real-time updates across all locations.',
    technologies: ['Flutter', 'Onesignal', 'PHP', 'JavaScript', 'Laravel', 'Mysql','Bootstrap.'],
    liveUrl: 'https://www.sourcecode.com.mm/the-district-coffee-lounge-mobile-application/',
    githubUrl: '',
    featured: true
  },
  {
    id: '4',
    title: 'HtaWaRa - Educational Application',
    description: 'Developed a secure, scalable app providing articles, videos, podcasts, games, and certified courses on sexuality education, featuring user authentication, content management, and interactive learning tools.',
    technologies: ['Flutter', 'PHP', 'JavaScript', 'Laravel', 'Mysql','Bootstrap'],
    liveUrl: 'https://www.htawara.app/',
    githubUrl: 'https://github.com/EaintHmoo',
    featured: true
  },
  {
    id: '5',
    title: 'Promethia',
    description: 'A streamlined platform for managing tenders, RFQs, and bids with secure submission, supplier management, real-time notifications, and collaboration tools. It simplifies procurement, lowers costs, and opens opportunities for smaller suppliers.',
    technologies: ['React.js', 'PHP', 'Laravel', 'MySQL'],
    liveUrl: 'https://mptc.soisoft.com/',
    githubUrl: 'https://github.com/EaintHmoo',
    featured: true
  },
  {
    id: '6',
    title: 'KoKyarGyi Ecommerce Application',
    description: 'E-commerce website for jewelry business with product catalog, shopping cart.',
    technologies: ['PHP', 'JavaScript', 'Laravel', 'Mysql','Bootstrap'],
    liveUrl: 'https://kokyargyijade.com/',
    githubUrl: 'https://github.com/EaintHmoo',
    featured: true
  },
  {
    id: '7',
    title: 'Rextlab – Real Estate Investment Platform ',
    description: "Rextlab is a real estate investment platform that gives users interactive simulations and dynamic reports—covering repayment ratios, rent-vs-buy analysis, profit forecasts, and comparisons with alternative investments.",
    technologies: ['PHP', 'Laravel', 'Mysql', 'JavaScript', 'Bootstrap'],
    liveUrl: '',
    githubUrl: '',
    images: [rextlabPhoto1, rextlabPhoto2, rextlabPhoto3],
    status: 'internal',
    featured: true
  },
  {
    id: '8',
    title: 'IorCarrer – Job Seeker & Real Estate Platform',
    description: "This project is a  platform combining job listings and real estate postings, exposing a REST API for a companion mobile app and covering modules for user management, profiles, listings, and user-owned posts.",
    technologies: ['PHP', 'Laravel', 'Mysql', 'JavaScript', 'Bootstrap'],
    liveUrl: '',
    githubUrl: '',
    images: [iorCarrerPhoto1, iorCarrerPhoto2],
    status: 'unlaunched',
    featured: true
  },
  {
    id: '9',
    title: 'Juvenus – POS Application',
    description: "Juvenus is a POS application with an integrated points-and-rewards loyalty system, a REST API for real-time mobile sales tracking, and modules for stock management, draft sales, and gift cards.",
    technologies: ['PHP', 'Laravel', 'Mysql', 'JavaScript', 'React.js', 'Material UI'],
    liveUrl: '',
    githubUrl: '',
    images: [juvenusPhoto1, juvenusPhoto2, juvenusPhoto3],
    status: 'internal',
    featured: true
  },
];

const liveProjects = expProjects.filter((project) => !project.status)
const internalProjects = expProjects.filter((project) => project.status === 'internal')
const unlaunchedProjects = expProjects.filter((project) => project.status === 'unlaunched')

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
          {liveProjects.map((project) => (
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
    <SectionLayout
    title="Enterprise & Internal Projects"
    intro="Confidential in-house systems built for internal operations — no public link, but here's what they do"
    >
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {internalProjects.map((project) => (
            <div
              key={project.id}
              className="bg-gray-50 dark:bg-zinc-800 border-1 border-gray-200 dark:border-gray-800 shadow-zinc-100 dark:shadow-teal-500/50 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden hover:-translate-y-2"
            >
              {project.images && project.images.length > 0 ? (
                <ProjectImageGallery images={project.images} title={project.title} />
              ) : (
                <div className="flex h-40 items-center justify-center border-b border-dashed border-gray-300 dark:border-gray-700 text-sm text-zinc-400">
                  Screenshots coming soon
                </div>
              )}
              <div className="p-8">
                <span className="inline-flex items-center gap-1 rounded-full bg-white ring-1 ring-zinc-100 dark:bg-zinc-900 dark:ring-zinc-300/20 px-3 py-1 text-xs font-medium text-zinc-500 dark:text-zinc-400 mb-4">
                  🔒 Internal / Confidential
                </span>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-zinc-100 mb-4">
                  {project.title}
                </h3>
                <p className="text-zinc-600 dark:text-zinc-300 mb-6 leading-relaxed">
                  {project.description}
                </p>
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="relative z-10 mb-6 flex items-center text-sm font-medium text-zinc-400 transition hover:text-teal-500 dark:text-zinc-200"
                  >
                    <LinkIcon className="h-5 w-5 flex-none" />
                    <span className="ml-2">Case Study</span>
                  </a>
                )}
                <div className="flex flex-wrap gap-2 mt-6">
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
    <SectionLayout
    title="Not Yet Launched"
    intro="Client projects I built that haven't gone live yet — awaiting release, not held back for confidentiality"
    >
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {unlaunchedProjects.map((project) => (
            <div
              key={project.id}
              className="bg-gray-50 dark:bg-zinc-800 border-1 border-gray-200 dark:border-gray-800 shadow-zinc-100 dark:shadow-teal-500/50 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden hover:-translate-y-2"
            >
              {project.images && project.images.length > 0 ? (
                <ProjectImageGallery images={project.images} title={project.title} />
              ) : (
                <div className="flex h-40 items-center justify-center border-b border-dashed border-gray-300 dark:border-gray-700 text-sm text-zinc-400">
                  Screenshots coming soon
                </div>
              )}
              <div className="p-8">
                <span className="inline-flex items-center gap-1 rounded-full bg-white ring-1 ring-zinc-100 dark:bg-zinc-900 dark:ring-zinc-300/20 px-3 py-1 text-xs font-medium text-zinc-500 dark:text-zinc-400 mb-4">
                  🚧 Not Yet Launched
                </span>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-zinc-100 mb-4">
                  {project.title}
                </h3>
                <p className="text-zinc-600 dark:text-zinc-300 mb-6 leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
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
