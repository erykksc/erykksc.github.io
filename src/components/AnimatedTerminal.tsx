import { useEffect, useMemo, useState } from 'react';
import type { CSSProperties, KeyboardEvent } from 'react';
import { projectPreviews } from '../data/portfolio';
import type { TerminalSection } from '../data/portfolio';

type Props = {
  sections: TerminalSection[];
  promptSpeedMs: number;
  cursorBlinkMs: number;
};

type TerminalPhase = 'command' | 'output' | 'done';
type TerminalWindowState = 'open' | 'closed' | 'minimized';

type TerminalHistoryItem = {
  command: string;
  output: string;
  showProjectsAction?: boolean;
};

function getTechnologyBadgeClass(tag: string) {
  const slug = tag.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
  return `project-preview-tag project-preview-tag--${slug || 'default'}`;
}

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

export default function AnimatedTerminal({ sections, promptSpeedMs, cursorBlinkMs }: Props) {
  const reducedMotion = useReducedMotion();
  const [openSlugs, setOpenSlugs] = useState(() => sections.map((item) => item.slug));
  const [activeSlug, setActiveSlug] = useState<string | undefined>(sections[0]?.slug);
  const openSections = sections.filter((item) => openSlugs.includes(item.slug));
  const closedSection = sections.find((item) => !openSlugs.includes(item.slug));
  const section = openSections.find((item) => item.slug === activeSlug) ?? openSections[0];
  const command = section ? section.command : 'no tabs open';
  const output = useMemo(
    () => section?.lines.join('\n') ?? 'Press + to reopen a portfolio section.',
    [section?.lines],
  );
  const [visibleCommand, setVisibleCommand] = useState('');
  const [visibleOutput, setVisibleOutput] = useState('');
  const [phase, setPhase] = useState<TerminalPhase>('command');
  const [interactiveCommand, setInteractiveCommand] = useState('');
  const [interactiveHistory, setInteractiveHistory] = useState<TerminalHistoryItem[]>([]);
  const [isProjectWindowOpen, setIsProjectWindowOpen] = useState(false);
  const [terminalWindowState, setTerminalWindowState] = useState<TerminalWindowState>('open');
  const [isMaximized, setIsMaximized] = useState(false);
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

  function getInteractiveOutput(enteredCommand: string) {
    if (enteredCommand === command) return output;
    if (enteredCommand === 'ls' && section) return section.files.join('\n');
    if (
      section?.slug === 'projects'
      && ['cd projects', 'cd projects/'].includes(enteredCommand)
    ) {
      setIsProjectWindowOpen(true);
      return '';
    }
    if (section?.slug === 'projects' && ['ls projects', 'ls projects/'].includes(enteredCommand)) return '';
    if (section?.slug === 'projects' && enteredCommand === 'cat highlights.txt') return output;

    return 'command unknown';
  }

  function runInteractiveCommand() {
    const enteredCommand = interactiveCommand.trim().replace(/\s+/g, ' ');
    if (!enteredCommand) return;

    setInteractiveHistory((currentHistory) => [
      ...currentHistory,
      {
        command: interactiveCommand,
        output: getInteractiveOutput(enteredCommand),
        showProjectsAction: section?.slug === 'projects' && ['ls projects', 'ls projects/'].includes(enteredCommand),
      },
    ]);
    setInteractiveCommand('');
  }

  function closeTerminal() {
    setIsProjectWindowOpen(false);
    setIsMaximized(false);
    setTerminalWindowState('closed');
  }

  function minimizeTerminal() {
    setIsProjectWindowOpen(false);
    setTerminalWindowState('minimized');
  }

  function openTerminal() {
    setTerminalWindowState('open');
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
      setInteractiveCommand('');
      setInteractiveHistory([]);
      return;
    }

    setVisibleCommand('');
    setVisibleOutput('');
    setPhase('command');
    setInteractiveCommand('');
    setInteractiveHistory([]);

    let commandIndex = 0;
    const commandTimer = window.setInterval(() => {
      commandIndex += 1;
      setVisibleCommand(command.slice(0, commandIndex));

      if (commandIndex >= command.length) {
        window.clearInterval(commandTimer);
        setVisibleOutput(output);
        setPhase('done');
      }
    }, promptSpeedMs);

    return () => {
      window.clearInterval(commandTimer);
    };
  }, [command, output, promptSpeedMs, reducedMotion]);

  useEffect(() => {
    if (phase !== 'done' || isProjectWindowOpen || terminalWindowState !== 'open') return;

    const onKeyDown = (event: globalThis.KeyboardEvent) => {
      if (event.defaultPrevented || event.altKey || event.metaKey) return;

      if (event.ctrlKey) {
        if (event.key.toLowerCase() === 'u') {
          event.preventDefault();
          setInteractiveCommand('');
        }
        return;
      }

      if (event.key === 'Backspace') {
        event.preventDefault();
        setInteractiveCommand((currentCommand) => currentCommand.slice(0, -1));
        return;
      }

      if (event.key === 'Enter') {
        event.preventDefault();
        runInteractiveCommand();
        return;
      }

      if (event.key.length === 1) {
        event.preventDefault();
        setInteractiveCommand((currentCommand) => `${currentCommand}${event.key}`);
      }
    };

    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [command, interactiveCommand, isProjectWindowOpen, output, phase, terminalWindowState]);

  if (terminalWindowState === 'closed') {
    return (
      <button className="terminal-reopen-action" type="button" onClick={openTerminal}>
        Open Terminal
      </button>
    );
  }

  if (terminalWindowState === 'minimized') {
    return (
      <button className="terminal-minimized-action" type="button" aria-label="Restore terminal" onClick={openTerminal}>
        <span className="terminal-minimized-icon" aria-hidden="true">
          <span className="terminal-minimized-titlebar" />
          <span className="terminal-minimized-prompt">&gt;_</span>
        </span>
        <span>Terminal</span>
      </button>
    );
  }

  return (
    <section
      className={`terminal-shell terminal-shell--enhanced${isMaximized ? ' terminal-shell--maximized' : ''}`}
      aria-labelledby="terminal-heading-enhanced"
    >
      <h2 id="terminal-heading-enhanced" className="sr-only">Software developer portfolio terminal</h2>
      <div className="terminal-chrome">
        <div className="terminal-titlebar">
          <div className="terminal-controls">
            <button
              className="terminal-control terminal-control--close"
              type="button"
              aria-label="Close terminal"
              onClick={closeTerminal}
            />
            <button
              className="terminal-control terminal-control--minimize"
              type="button"
              aria-label="Minimize terminal"
              onClick={minimizeTerminal}
            />
            <button
              className="terminal-control terminal-control--zoom"
              type="button"
              aria-label={isMaximized ? 'Restore terminal size' : 'Maximize terminal'}
              aria-pressed={isMaximized}
              onClick={() => setIsMaximized((currentValue) => !currentValue)}
            />
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
            <span className="terminal-prompt" aria-hidden="true">&gt;</span>{' '}
            <span className="terminal-typed-command">
              <span>{visibleCommand}</span>
              {phase === 'command' && <span className="terminal-cursor terminal-cursor--typing" aria-hidden="true" />}
            </span>
          </p>
          <pre className="terminal-lines">{visibleOutput}</pre>
          {section?.slug === 'projects' && phase === 'done' && (
            <button className="terminal-projects-action" type="button" onClick={() => setIsProjectWindowOpen(true)}>
              View All Projects
            </button>
          )}
          {phase === 'done' && interactiveHistory.map((item, index) => (
            <div className="terminal-history-item" key={`${item.command}-${index}`}>
              <p className="terminal-command terminal-command--next">
                &gt; <span className="terminal-typed-command">{item.command}</span>
              </p>
              {item.output && <pre className="terminal-lines terminal-lines--history">{item.output}</pre>}
              {item.showProjectsAction && (
                <button className="terminal-projects-action" type="button" onClick={() => setIsProjectWindowOpen(true)}>
                  View All Projects
                </button>
              )}
            </div>
          ))}
          {phase === 'done' && (
            <p className="terminal-command terminal-command--next">
              &gt; <span className="terminal-typed-command">{interactiveCommand}</span><span className="terminal-cursor" aria-hidden="true" />
            </p>
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
                    <div className="project-preview-title-row">
                      <h4>{project.title}</h4>
                      <span className="project-preview-year">{project.year}</span>
                    </div>
                    <ul className="project-preview-tags" aria-label={`${project.title} technologies`}>
                      {project.tags.map((tag) => <li className={getTechnologyBadgeClass(tag)} key={tag}>{tag}</li>)}
                    </ul>
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
