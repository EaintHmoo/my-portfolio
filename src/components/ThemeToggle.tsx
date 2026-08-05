type ThemeToggleProps = {
  theme: 'light' | 'dark';
  onToggle: () => void;
};

export const ThemeToggle = ({ theme, onToggle }: ThemeToggleProps) => {
  return (
    <button
      type="button"
      onClick={onToggle}
      aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
      className="group inline-flex h-10 w-10 items-center justify-center border border-paper-ink text-paper-ink transition hover:border-paper-accent hover:text-paper-accent dark:border-editorial-ink dark:text-editorial-ink dark:hover:border-editorial-accent dark:hover:text-editorial-accent"
    >
      {theme === 'dark' ? (
        <svg viewBox="0 0 24 24" aria-hidden="true" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.8">
          <circle cx="12" cy="12" r="4" />
          <path d="M12 2v3M12 19v3M4.93 4.93l2.12 2.12M16.95 16.95l2.12 2.12M2 12h3M19 12h3M4.93 19.07l2.12-2.12M16.95 7.05l2.12-2.12" />
        </svg>
      ) : (
        <svg viewBox="0 0 24 24" aria-hidden="true" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.8">
          <path d="M21 14.2A7.5 7.5 0 0 1 9.8 3 8.6 8.6 0 1 0 21 14.2Z" />
        </svg>
      )}
    </button>
  );
};
