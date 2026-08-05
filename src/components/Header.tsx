import { profile } from '../data/portfolio';
import { ThemeToggle } from './ThemeToggle';

type HeaderProps = {
  theme: 'light' | 'dark';
  onToggleTheme: () => void;
};

const navItems = ['About', 'Projects', 'Experience', 'Skills', 'Contact'];

export const Header = ({ theme, onToggleTheme }: HeaderProps) => {
  return (
    <header className="sticky top-0 z-30 border-b border-paper-line bg-paper/92 backdrop-blur dark:border-editorial-line dark:bg-editorial-dark/92">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-5 px-4 py-4 sm:px-6 lg:px-8">
        <a href="#top" className="font-serif text-xl font-black uppercase leading-none text-paper-ink transition hover:text-paper-accent dark:text-editorial-ink dark:hover:text-editorial-accent">
          {profile.name}
        </a>
        <nav className="hidden items-center gap-5 font-sans text-xs font-bold uppercase tracking-[0.18em] text-paper-muted dark:text-editorial-muted md:flex">
          {navItems.map((item) => (
            <a key={item} href={`#${item.toLowerCase()}`} className="underline-offset-4 transition hover:text-paper-accent hover:underline dark:hover:text-editorial-accent">
              {item}
            </a>
          ))}
        </nav>
        <ThemeToggle theme={theme} onToggle={onToggleTheme} />
      </div>
    </header>
  );
};
