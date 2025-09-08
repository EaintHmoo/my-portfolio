import { faCalendar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

type QualificationDotLineProps = {
  direction: 'left' | 'right';
  item: {
    name: string;
    institue: string;
    timeline: string;
    type: string;
  };
};
export function QualificationDotLine({direction = 'left',item}: QualificationDotLineProps){
  const leftSide = direction === 'left' ? (
    <div className="rounded text-right">
        <h3 className="text-base font-semibold">{item.name}</h3>
        <span className="text-sm block">{item.institue}</span>
        <div className="text-sm flex justify-end items-center gap-2 mt-2">
            <FontAwesomeIcon icon={faCalendar} className="w-4" />
            {item.timeline}
        </div>
    </div>
  ): <div className=""></div>;

  const rightSide = direction === 'right' ? (
    <div className="rounded text-left">
        <h3 className="text-base font-semibold">{item.name}</h3>
        <span className="text-sm block">{item.institue}</span>
        <div className="text-sm flex justify-start items-center gap-2 mt-2">
            <FontAwesomeIcon icon={faCalendar} className="w-4" />
            {item.timeline}
        </div>
    </div>
  ) : <div className=""></div>;

  return (
    <div className="grid justify-center grid-cols-[1fr_max-content_1fr] gap-4">
        {/* Left Side (Education Entry) */}
        {leftSide}

        {/* Center Line (Dot + Vertical Line) */}
        <div className="flex flex-col items-center">
            {/* Dot */}
            <span className="w-4 h-4 bg-zinc-600 rounded-full border-2 border-white z-10"></span>
            {/* Line */}
            <span className="w-px flex-1 bg-zinc-600"></span>
        </div>

        {/* Right Side (empty or next entry) */}
        {rightSide}
    </div>
  )
}