import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

type SkillItemProps = {
  item: {
    name: string;
    level: string;
  };
};
export function SkillItem({item}: SkillItemProps){
  return (
    <div className='flex'>
        <div className='mr-2 mt-2'>
        <FontAwesomeIcon icon={item.icon} className='text-2xl'/>
        </div>
        <div>
          <h5 className='text-lg'>{ item.name }</h5>
          <p className="italic text-sm text-zinc-600 dark:text-zinc-400">
            { item.level }
          </p>
        </div>
    </div>
  )
}