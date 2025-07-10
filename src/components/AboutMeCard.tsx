import clsx from 'clsx';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

type AboutMeCardProps = {
  className?: string;
  item: {
    description: string;
    frequency: string;
  };
};
export function AboutMeCard({className, item}: AboutMeCardProps){
  return (
    <div key={item.description} 
    className={clsx(className, 'overflow-hidden w-full  rounded-2xl bg-gray-50 dark:bg-zinc-800 border-1 border-gray-200 dark:border-gray-800 shadow-md shadow-zinc-100 dark:shadow-teal-600/50')}>
        <div className="px-4 py-5 sm:p-10 text-center">
            <div className='flex justify-around'>
              <FontAwesomeIcon icon={item.icon} className='w-10'/>
            </div>
            <h5 className='text-lg text-bold mt-2'>
              { item.description }
            </h5>
            <p className='italic text-sm text-zinc-600 dark:text-zinc-400'>
              {
                item.frequency
              }
            </p>
        </div>
    </div>
  )
}