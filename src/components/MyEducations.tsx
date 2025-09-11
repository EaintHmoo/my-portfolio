
const educationData = [
    {
      institution: 'University of Technology ( Yatanarpon Cyber City )',
      degree: 'Bachelor of Engineering',
      date: '2015 - 2022',
      description: 'Specialization in Computer Science. Completed thesis on Machine Learning.',
    },
    {
      institution: 'Web Development Course ( Host Myanmar Mandalay )',
      degree: 'Certificate of Web Development',
      date: '2020 - 2021',
      description: '',
    },
  ];


export interface EducationData {
    institution: string;
    degree: string;
    date: string;
    description: string;
}  

const EducationCard = ({ institution, degree, date, description } : EducationData) => (
    <div className="overflow-hidden p-8 rounded-2xl bg-gray-50 dark:bg-zinc-800 border-1 border-gray-200 dark:border-gray-800 shadow-md shadow-zinc-100 dark:shadow-teal-500/50 transition-transform transform hover:scale-105 duration-300">
        <div className="flex items-center mb-4">
        <div>
            <h3 className="text-xl md:text-2xl font-bold  mb-1">{institution}</h3>
            <p className="text-sm md:text-base italic">{degree}</p>
        </div>
        </div>
        <p className="text-base md:text-lg font-medium text-gray-400 mb-2">{date}</p>
        <p className="text-sm text-gray-500 leading-relaxed">{description}</p>
    </div>
);


const MyEducations = () => {
  return (
    <div className="py-12 px-4 sm:px-6 lg:px-8 font-sans antialiased">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {educationData.map((edu, index) => (
            <EducationCard
              key={index}
              institution={edu.institution}
              degree={edu.degree}
              date={edu.date}
              description={edu.description}
            />
          ))}
        </div>
    </div>
  )
}

export default MyEducations