import { useEffect, useMemo, useState } from 'react';
import type { CSSProperties, KeyboardEvent } from 'react';
import { projectPreviews } from '../data/portfolio';
import type { TerminalSection } from '../data/portfolio';

type Props = {
  sections: TerminalSection[];
  promptSpeedMs: number;
  outputSpeedMs: number;
  cursorBlinkMs: number;
};

type TerminalPhase = 'command' | 'output' | 'done';

function useReducedMotion() {
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    const query = window.matchMedia('(prefers-reduced-motion: reduce)');
    setReducedMotion(query.matches);

    const onChange = () => setReducedMotion(query.matches);
    query.addEventListener('change', onChange);
    return () => query.removeEventListener('change', onChange);
  }, []);

  return reducedMotion;
}

export default function AnimatedTerminal({ sections, promptSpeedMs, outputSpeedMs, cursorBlinkMs }: Props) {
  const reducedMotion = useReducedMotion();
  const [openSlugs, setOpenSlugs] = useState(() => sections.map((item) => item.slug));
  const [activeSlug, setActiveSlug] = useState<string | undefined>(sections[0]?.slug);
  const openSections = sections.filter((item) => openSlugs.includes(item.slug));
  const closedSection = sections.find((item) => !openSlugs.includes(item.slug));
  const section = openSections.find((item) => item.slug === activeSlug) ?? openSections[0];
  const command = section ? `> ${section.command}` : '> no tabs open';
  const output = useMemo(
    () => section?.lines.join('\n') ?? 'Press + to reopen a portfolio section.',
    [section?.lines],
  );
  const [visibleCommand, setVisibleCommand] = useState('');
  const [visibleOutput, setVisibleOutput] = useState('');
  const [phase, setPhase] = useState<TerminalPhase>('command');
  const [isProjectWindowOpen, setIsProjectWindowOpen] = useState(false);
  const tabGridStyle = {
    gridTemplateColumns: closedSection
      ? `repeat(${openSections.length}, minmax(0, 1fr)) 3.25rem`
      : `repeat(${openSections.length}, minmax(0, 1fr))`,
  } as CSSProperties;

  function closeTab(slug: string) {
    setOpenSlugs((currentSlugs) => {
      const nextSlugs = currentSlugs.filter((item) => item !== slug);

      if (slug === activeSlug) {
        const closingIndex = currentSlugs.indexOf(slug);
        setActiveSlug(nextSlugs[closingIndex] ?? nextSlugs[closingIndex - 1]);
      }

      return nextSlugs;
    });
  }

  function reopenTab() {
    if (!closedSection) return;

    setOpenSlugs((currentSlugs) => {
      const nextSlugs = sections
        .map((item) => item.slug)
        .filter((slug) => currentSlugs.includes(slug) || slug === closedSection.slug);

      return nextSlugs;
    });
    setActiveSlug(closedSection.slug);
  }

  function onTabKeyDown(event: KeyboardEvent<HTMLDivElement>, slug: string) {
    if (event.key !== 'Enter' && event.key !== ' ') return;

    event.preventDefault();
    setActiveSlug(slug);
  }

  useEffect(() => {
    if (!isProjectWindowOpen) return;

    const onKeyDown = (event: globalThis.KeyboardEvent) => {
      if (event.key === 'Escape') setIsProjectWindowOpen(false);
    };

    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [isProjectWindowOpen]);

  useEffect(() => {
    if (reducedMotion) {
      setVisibleCommand(command);
      setVisibleOutput(output);
      setPhase('done');
      return;
    }

    setVisibleCommand('');
    setVisibleOutput('');
    setPhase('command');

    let commandIndex = 0;
    let outputIndex = 0;
    let outputTimer: number | undefined;

    const commandTimer = window.setInterval(() => {
      commandIndex += 1;
      setVisibleCommand(command.slice(0, commandIndex));

      if (commandIndex >= command.length) {
        window.clearInterval(commandTimer);
        setPhase('output');
        outputTimer = window.setInterval(() => {
          outputIndex += 1;
          setVisibleOutput(output.slice(0, outputIndex));

          if (outputIndex >= output.length && outputTimer) {
            window.clearInterval(outputTimer);
            setPhase('done');
          }
        }, outputSpeedMs);
      }
    }, promptSpeedMs);

    return () => {
      window.clearInterval(commandTimer);
      if (outputTimer) window.clearInterval(outputTimer);
    };
  }, [command, output, outputSpeedMs, promptSpeedMs, reducedMotion]);

  return (
    <section className="terminal-shell terminal-shell--enhanced" aria-labelledby="terminal-heading-enhanced">
      <h2 id="terminal-heading-enhanced" className="sr-only">Software developer portfolio terminal</h2>
      <div className="terminal-chrome">
        <div className="terminal-titlebar" aria-hidden="true">
          <div className="terminal-controls">
            <span className="terminal-control terminal-control--close" />
            <span className="terminal-control terminal-control--minimize" />
            <span className="terminal-control terminal-control--zoom" />
          </div>
          <p>portfolio.local</p>
        </div>

        <div className="terminal-tabs" role="tablist" aria-label="Portfolio sections" style={tabGridStyle}>
          {openSections.map((item) => {
            const isActive = item.slug === section?.slug;

            return (
              <div
                key={item.slug}
                className={`terminal-tab${isActive ? ' terminal-tab--active' : ''}`}
                role="tab"
                tabIndex={0}
                aria-selected={isActive}
                aria-controls="terminal-output-panel"
                onClick={() => setActiveSlug(item.slug)}
                onKeyDown={(event) => onTabKeyDown(event, item.slug)}
              >
                <span>{item.label}</span>
                <button
                  className="terminal-tab-close-button"
                  type="button"
                  aria-label={`Close ${item.label} tab`}
                  onClick={(event) => {
                    event.stopPropagation();
                    closeTab(item.slug);
                  }}
                >
                  <svg className="terminal-tab-close" viewBox="0 0 16 16" aria-hidden="true">
                    <path d="M4.25 4.25L11.75 11.75M11.75 4.25L4.25 11.75" />
                  </svg>
                </button>
              </div>
            );
          })}
          {closedSection && (
            <button
              className="terminal-tab-add"
              type="button"
              aria-label={`Reopen ${closedSection.label} tab`}
              onClick={reopenTab}
            >
              <svg viewBox="0 0 16 16" aria-hidden="true">
                <path d="M8 3.25V12.75M3.25 8H12.75" />
              </svg>
            </button>
          )}
        </div>
      </div>

      <div className="terminal-screen" style={{ '--terminal-cursor-blink': `${cursorBlinkMs}ms` } as CSSProperties}>
        <div id="terminal-output-panel" className="terminal-output" aria-live="polite">
          <p className="terminal-command">
            {visibleCommand}
            {phase === 'command' && <span className="terminal-cursor" aria-hidden="true" />}
          </p>
          <pre className="terminal-lines">{visibleOutput}</pre>
          {phase === 'done' && (
            <p className="terminal-command terminal-command--next">
              &gt; <span className="terminal-cursor" aria-hidden="true" />
            </p>
          )}
          {section?.slug === 'projects' && phase === 'done' && (
            <button className="terminal-projects-action" type="button" onClick={() => setIsProjectWindowOpen(true)}>
              View All Projects
            </button>
          )}
        </div>
      </div>

      {isProjectWindowOpen && (
        <div className="project-window-backdrop" role="presentation" onMouseDown={() => setIsProjectWindowOpen(false)}>
          <section
            className="project-window"
            role="dialog"
            aria-modal="true"
            aria-labelledby="project-window-title"
            onMouseDown={(event) => event.stopPropagation()}
          >
            <button
              className="project-window-close"
              type="button"
              aria-label="Close projects window"
              onClick={() => setIsProjectWindowOpen(false)}
            >
              <svg viewBox="0 0 16 16" aria-hidden="true">
                <path d="M4.25 4.25L11.75 11.75M11.75 4.25L4.25 11.75" />
              </svg>
            </button>
            <p className="section-kicker">Selected work</p>
            <h3 id="project-window-title">Projects</h3>
            <div className="project-window-grid">
              {projectPreviews.map((project) => (
                <article className="project-preview-card" key={project.title}>
                  <div className="project-preview-image" aria-hidden="true">
                    <img src={project.image} alt="" loading="lazy" />
                  </div>
                  <div className="project-preview-copy">
                    <h4>{project.title}</h4>
                    <p>{project.description}</p>
                    {project.sourceHref && (
                      <a href={project.sourceHref} target="_blank" rel="noreferrer">
                        View source
                      </a>
                    )}
                  </div>
                </article>
              ))}
            </div>
          </section>
        </div>
      )}
    </section>
  );
}
