import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import clsx from 'clsx';

type ServiceCardProps = {
  className?: string;
  item: {
    name: string;
    description: string;
  }
};
export function SerivceCard({className,item}: ServiceCardProps){
  return (
    <div
      className={clsx(className, 'overflow-hidden rounded-2xl hover:rotate-3 duration-100 bg-gray-50 dark:bg-zinc-800 border-1 border-gray-200 dark:border-gray-800 shadow-md shadow-zinc-100 dark:shadow-teal-500/50')}
    >
      <div className="px-4 py-5 sm:p-10">
      <span>
        <FontAwesomeIcon icon={item.icon} className='w-10'/>
      </span>
      <h5 className="text-xl sm:text-2xl my-4">{item.name}</h5>
      <p>{item.description}</p>
      </div>
    </div>
  )
}