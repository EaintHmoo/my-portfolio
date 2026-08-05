import { Header } from './components/Header';
import { Section } from './components/Section';
import { experience, profile, projects, skills } from './data/portfolio';
import { useTheme } from './hooks/useTheme';

const contactLinks = [
  { label: 'Email', value: profile.email, href: `mailto:${profile.email}` },
  { label: 'Phone', value: profile.phone, href: `tel:${profile.phone}` },
  { label: 'LinkedIn', value: 'linkedin.com/in/eaint-hmoo-aung-82278a1b7', href: profile.linkedin },
];

const LeadRule = () => (
  <div className="my-5 grid grid-cols-[1fr_auto_1fr] items-center gap-3 text-paper-accent dark:text-editorial-accent">
    <span className="h-px bg-current" />
    <span className="font-serif text-lg leading-none">Edition 2026</span>
    <span className="h-px bg-current" />
  </div>
);

function App() {
  const { theme, toggleTheme } = useTheme();

  return (
    <div id="top" className="min-h-screen bg-paper text-paper-ink transition-colors duration-300 dark:bg-editorial-dark dark:text-editorial-ink">
      <div className="pointer-events-none fixed inset-0 opacity-[0.18] mix-blend-multiply dark:opacity-[0.08] dark:mix-blend-screen paper-grain" />
      <Header theme={theme} onToggleTheme={toggleTheme} />

      <main className="relative mx-auto max-w-7xl px-4 pb-12 sm:px-6 lg:px-8">
        <section className="grid gap-8 py-10 md:grid-cols-[minmax(0,1.4fr)_minmax(280px,0.6fr)] md:py-14">
          <div className="border-b border-t border-paper-ink py-6 dark:border-editorial-ink md:border-b">
            <p className="mb-4 font-sans text-xs font-bold uppercase tracking-[0.3em] text-paper-accent dark:text-editorial-accent">
              Full Stack Developer
            </p>
            <h1 className="max-w-5xl font-serif text-5xl font-black uppercase leading-[0.9] text-paper-ink dark:text-editorial-ink sm:text-6xl lg:text-8xl">
              {profile.name}
            </h1>
            <LeadRule />
            <div className="grid gap-6 md:grid-cols-[1fr_0.55fr]">
              <p className="max-w-3xl font-serif text-2xl leading-snug text-paper-ink dark:text-editorial-ink sm:text-3xl">
                Building practical web systems where polished interfaces, secure workflows, and reliable backends meet.
              </p>
              <div className="border-l border-paper-line pl-5 font-sans text-sm leading-6 text-paper-muted dark:border-editorial-line dark:text-editorial-muted">
                {profile.summary}
              </div>
            </div>
            <div className="mt-8 grid grid-cols-2 gap-px border border-paper-line bg-paper-line dark:border-editorial-line dark:bg-editorial-line sm:grid-cols-4">
              {profile.highlights.map((item) => (
                <div key={item} className="bg-paper px-4 py-4 text-center dark:bg-editorial-dark">
                  <p className="font-serif text-xl font-black text-paper-accent dark:text-editorial-accent">{item.split(' ')[0]}</p>
                  <p className="mt-1 font-sans text-xs uppercase tracking-[0.18em] text-paper-muted dark:text-editorial-muted">
                    {item.split(' ').slice(1).join(' ') || 'focus'}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <aside className="border border-paper-line p-3 shadow-editorial dark:border-editorial-line dark:shadow-editorial-dark">
            <div className="overflow-hidden border border-paper-line bg-white dark:border-editorial-line dark:bg-[#171717]">
              <img
                src="/resume-preview.png"
                alt="Resume preview for Eaint Hmoo Aung"
                className="h-[360px] w-full object-cover object-top grayscale transition duration-500 hover:grayscale-0 sm:h-[460px] md:h-full"
              />
            </div>
            <p className="mt-3 border-t border-paper-line pt-3 font-serif text-sm italic text-paper-muted dark:border-editorial-line dark:text-editorial-muted">
              Resume source converted into a digital newspaper portfolio.
            </p>
          </aside>
        </section>

        <Section id="about" kicker="Profile" title="About Me">
          <div className="columns-1 gap-10 font-sans text-base leading-8 text-paper-muted dark:text-editorial-muted md:columns-2">
            <p>
              I am a full-stack developer focused on shipping maintainable web applications for real business workflows. My
              experience spans customer-facing interfaces, admin panels, authentication flows, reporting, and API-connected
              mobile ecosystems.
            </p>
            <p>
              I enjoy building software that feels organized from both sides: clean experiences for users and clear, scalable
              structures for teams maintaining the product over time.
            </p>
          </div>
        </Section>

        <Section id="projects" kicker="Latest Work" title="Projects">
          <div className="grid gap-px border border-paper-line bg-paper-line dark:border-editorial-line dark:bg-editorial-line md:grid-cols-2 xl:grid-cols-3">
            {projects.map((project, index) => (
              <article
                key={project.name}
                className="group bg-paper p-5 transition duration-300 hover:-translate-y-1 hover:shadow-editorial dark:bg-editorial-dark dark:hover:shadow-editorial-dark"
              >
                <p className="font-sans text-xs font-bold uppercase tracking-[0.24em] text-paper-accent dark:text-editorial-accent">
                  No. {String(index + 1).padStart(2, '0')}
                </p>
                <h3 className="mt-4 font-serif text-2xl font-black text-paper-ink transition group-hover:text-paper-accent dark:text-editorial-ink dark:group-hover:text-editorial-accent">
                  {project.name}
                </h3>
                <p className="mt-1 font-sans text-sm font-semibold uppercase tracking-[0.12em] text-paper-muted dark:text-editorial-muted">
                  {project.type}
                </p>
                <p className="mt-4 font-sans text-sm leading-7 text-paper-muted dark:text-editorial-muted">{project.description}</p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {project.stack.map((item) => (
                    <span key={item} className="border border-paper-line px-2 py-1 font-sans text-xs font-semibold text-paper-ink dark:border-editorial-line dark:text-editorial-ink">
                      {item}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </Section>

        <Section id="experience" kicker="Career" title="Experience">
          {experience.map((item) => (
            <article key={item.company} className="grid gap-6 md:grid-cols-[0.35fr_1fr]">
              <div>
                <p className="font-serif text-2xl font-black text-paper-ink dark:text-editorial-ink">{item.company}</p>
                <p className="mt-2 font-sans text-sm font-bold uppercase tracking-[0.16em] text-paper-accent dark:text-editorial-accent">
                  {item.period}
                </p>
              </div>
              <div className="border-l border-paper-line pl-6 dark:border-editorial-line">
                <h3 className="font-serif text-3xl font-black text-paper-ink dark:text-editorial-ink">{item.role}</h3>
                <p className="mt-3 font-sans leading-8 text-paper-muted dark:text-editorial-muted">{item.summary}</p>
                <ul className="mt-5 space-y-3 font-sans text-sm leading-7 text-paper-muted dark:text-editorial-muted">
                  {item.bullets.map((bullet) => (
                    <li key={bullet} className="border-t border-paper-line pt-3 dark:border-editorial-line">
                      {bullet}
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </Section>

        <Section id="skills" kicker="Toolkit" title="Skills">
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {skills.map((skill) => (
              <article key={skill.group} className="border border-paper-line p-5 dark:border-editorial-line">
                <h3 className="font-serif text-2xl font-black text-paper-ink dark:text-editorial-ink">{skill.group}</h3>
                <div className="mt-5 flex flex-wrap gap-2">
                  {skill.items.map((item) => (
                    <span key={item} className="bg-paper-line px-2 py-1 font-sans text-xs font-bold text-paper-muted dark:bg-editorial-line dark:text-editorial-muted">
                      {item}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </Section>

        <Section id="contact" kicker="Contact" title="Let’s Build">
          <div className="grid gap-8 md:grid-cols-[1fr_1.2fr]">
            <p className="font-serif text-3xl leading-tight text-paper-ink dark:text-editorial-ink">
              Available for full-stack web roles, product teams, and practical systems that need thoughtful execution.
            </p>
            <div className="grid gap-px border border-paper-line bg-paper-line dark:border-editorial-line dark:bg-editorial-line">
              {contactLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="group grid gap-1 bg-paper p-4 font-sans transition hover:text-paper-accent dark:bg-editorial-dark dark:hover:text-editorial-accent sm:grid-cols-[0.24fr_1fr]"
                >
                  <span className="text-xs font-bold uppercase tracking-[0.2em] text-paper-muted dark:text-editorial-muted">{link.label}</span>
                  <span className="break-words underline-offset-4 group-hover:underline">{link.value}</span>
                </a>
              ))}
            </div>
          </div>
        </Section>
      </main>

      <footer className="relative border-t border-paper-ink py-6 text-center font-sans text-xs uppercase tracking-[0.22em] text-paper-muted dark:border-editorial-line dark:text-editorial-muted">
        Eaint Hmoo Aung Portfolio
      </footer>
    </div>
  );
}

export default App;
