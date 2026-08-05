import type { ReactNode } from 'react';
import { useReveal } from '../hooks/useReveal';

type SectionProps = {
  id: string;
  kicker: string;
  title: string;
  children: ReactNode;
  className?: string;
};

export const Section = ({ id, kicker, title, children, className = '' }: SectionProps) => {
  const { ref, isVisible } = useReveal<HTMLElement>();

  return (
    <section
      id={id}
      ref={ref}
      className={`border-t border-paper-line py-12 transition-all duration-700 ease-out dark:border-editorial-line md:py-16 ${
        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'
      } ${className}`}
    >
      <div className="mb-8 flex flex-col gap-2 border-b border-paper-line pb-4 dark:border-editorial-line md:flex-row md:items-end md:justify-between">
        <div>
          <p className="font-sans text-xs font-bold uppercase tracking-[0.28em] text-paper-accent dark:text-editorial-accent">
            {kicker}
          </p>
          <h2 className="mt-2 font-serif text-3xl font-black leading-none text-paper-ink dark:text-editorial-ink sm:text-4xl">
            {title}
          </h2>
        </div>
        <p className="font-serif text-sm italic text-paper-muted dark:text-editorial-muted">Filed for review</p>
      </div>
      {children}
    </section>
  );
};
