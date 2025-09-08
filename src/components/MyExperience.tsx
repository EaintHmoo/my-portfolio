import React from 'react'
import { Calendar, MapPin, ExternalLink } from 'lucide-react';
import Link from 'next/link';

export interface Experience {
  id: string;
  position: string;
  company: string;
  link: string;
  location: string;
  startDate: string;
  endDate: string;
  description: string[];
  technologies: string[];
}

const experiences: Experience[] = [
  {
    id: '1',
    position: 'Full Stack Developer',
    company: 'Source Code Myanmar Co.,Ltd.',
    link: 'https://sourcecode.com.mm/',
    location: 'Yangon, Myanmar',
    startDate: 'Apr 2024 ',
    endDate: 'Present',
    description: [
      'Developed and maintained web applications (POS, Social App, Royalty System) using Laravel and React.js',
      'Collaborated with cross-functional and mobile teams to deliver seamless, high-quality solutions',
      'Designed and implemented APIs, optimized performance, and improved user experience across platforms',
      'Applied best practices for code quality, scalability, and maintainability in all projects'
    ],
    technologies: ['React.js', 'TypeScript','PHP', 'Laravel', 'JavaScript','Bootstrap','Tailwind CSS', 'MysqlSQL', 'AWS (EC2,S3)', 'Linux']
  },
  {
    id: '2',
    position: 'Full Stack Developer',
    company: 'Host Myanmar Co.,Ltd.',
    link: 'https://www.hostmyanmar.net/',
    location: 'Yangon, Myanmar',
    startDate: 'Jan 2021 ',
    endDate: 'Sep 2023',
    description: [
      'Developed responsive web applications using modern JavaScript frameworks',
      'Built RESTful APIs and integrated third-party services',
      'Worked closely with designers to implement pixel-perfect UI/UX',
      'Optimized application performance and user experience'
    ],
    technologies: ['PHP', 'Laravel', 'JavaScript', 'CSS','Bootstrap', 'MysqlSQL']
  },
  {
    id: '3',
    position: 'Graduation Internship Program',
    company: 'Koe Koe Tech Co.,Ltd.',
    link: '',
    location: 'Yangon, Myanmar',
    startDate: 'Oct 2019 ',
    endDate: 'Dec 2019',
    description: [
      'Assisted in developing and maintaining applications using C# and .NET framework',
      'Gained hands-on experience in debugging, testing, and collaborating with the development team to improve software functionality',
    ],
    technologies: ['C#', 'JavaScript', 'CSS', 'Bootstrap']
  }
];

const MyExperience = () => {
  return (
    <div className="container mx-auto">
        <div className="max-w-6xl mx-auto">
            <div className="relative">
                {/* Timeline Line */}
                <div className="absolute left-2 md:left-1/2 transform md:-translate-x-1/2 top-0 bottom-0 w-0.5 bg-zinc-300"></div>

                <div className="space-y-12">
                {experiences.map((exp, index) => (
                    <div 
                    key={exp.id}
                    className={`relative flex flex-col md:flex-row items-start ${
                        index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                    }`}
                    >
                    {/* Timeline Dot */}
                    <div className="absolute -top-[0.2rem] md:left-1/2 transform md:-translate-x-1/2 w-5 h-5 bg-zinc-600 rounded-full border-2 border-white shadow-lg z-10"></div>

                    <div className={`w-full md:w-5/12`}>
                        <div className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 p-8 ml-9 md:ml-0 hover:-translate-y-2">
                        <div className="flex items-start justify-between mb-4">
                            <div>
                            <h3 className="text-xl font-bold text-gray-900 mb-2">
                                {exp.position}
                            </h3>
                            <h4 className="text-lg font-semibold text-gray-600 mb-3 flex items-center gap-2">
                                {exp.company}
                                <Link href={exp.link}>
                                <ExternalLink size={16} className="opacity-50" />
                                </Link>
                            </h4>
                            </div>
                        </div>

                        <div className="flex flex-wrap gap-4 text-sm text-gray-500 mb-4">
                            <div className="flex items-center gap-1">
                            <Calendar size={16} />
                            <span>{exp.startDate} - {exp.endDate}</span>
                            </div>
                            <div className="flex items-center gap-1">
                            <MapPin size={16} />
                            <span>{exp.location}</span>
                            </div>
                        </div>

                        <ul className="space-y-2 mb-6">
                            {exp.description.map((desc, i) => (
                            <li key={i} className="text-gray-600 flex items-start gap-2">
                                <span className="text-gray-500 mt-1.5">•</span>
                                {desc}
                            </li>
                            ))}
                        </ul>

                        <div className="flex flex-wrap gap-2">
                            {exp.technologies.map((tech, i) => (
                            <span 
                                key={i}
                                className="px-3 py-1 bg-gray-50 text-gray-700 rounded-full text-xs font-medium"
                            >
                                {tech}
                            </span>
                            ))}
                        </div>
                        </div>
                    </div>

                    <div className="hidden md:block w-2/12"></div>
                    </div>
                ))}
                </div>
            </div>
        </div>
    </div>
  )
}

export default MyExperience