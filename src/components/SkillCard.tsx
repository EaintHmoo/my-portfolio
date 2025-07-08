import clsx from 'clsx';

type SkillCardProps = {
  className?: string;
  children: React.ReactNode;
};
export function SkillCard({className, children}: SkillCardProps){
  return (
    <div
      className={clsx(className, 'overflow-hidden rounded-2xl bg-gray-50 dark:bg-zinc-800 border-1 border-gray-200 dark:border-gray-800 shadow-lg shadow-zinc-100 dark:shadow-zinc-800')}
    >
      <div className="px-4 py-5 sm:p-10">
      {children}
      </div>
    </div>
  )
}