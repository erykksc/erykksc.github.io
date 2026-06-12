import { useEffect, useMemo, useRef, useState } from 'react';
import type { CSSProperties, KeyboardEvent } from 'react';
import { projectPreviews } from '../data/projects';
import { getTagStyle } from '../data/tag-colors';
import type { TerminalSection } from '../data/terminal';

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

type TerminalTabState = {
  visibleCommand: string;
  visibleOutput: string;
  phase: TerminalPhase;
  interactiveCommand: string;
  interactiveHistory: TerminalHistoryItem[];
  hasIntroPlayed: boolean;
};

function createTerminalTabState(): TerminalTabState {
  return {
    visibleCommand: '',
    visibleOutput: '',
    phase: 'command',
    interactiveCommand: '',
    interactiveHistory: [],
    hasIntroPlayed: false,
  };
}

function getTechnologyBadgeClass() {
  return 'project-preview-tag';
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

export default function AnimatedTerminal({
  sections,
  promptSpeedMs,
  cursorBlinkMs,
}: Props) {
  const reducedMotion = useReducedMotion();
  const animatingSlugs = useRef(new Set<string>());
  const hasIntroPlayedRef = useRef(new Set<string>());
  const [openSlugs, setOpenSlugs] = useState(() =>
    sections.map((item) => item.slug)
  );
  const [activeSlug, setActiveSlug] = useState<string | undefined>(
    sections[0]?.slug
  );
  const openSections = sections.filter((item) => openSlugs.includes(item.slug));
  const closedSection = sections.find((item) => !openSlugs.includes(item.slug));
  const section =
    openSections.find((item) => item.slug === activeSlug) ?? openSections[0];
  const command = section ? section.command : 'no tabs open';
  const output = useMemo(
    () => section?.lines.join('\n') ?? 'Press + to reopen a portfolio section.',
    [section?.lines]
  );
  const [tabStates, setTabStates] = useState<Record<string, TerminalTabState>>(
    {}
  );
  const [isProjectWindowOpen, setIsProjectWindowOpen] = useState(false);
  const [terminalWindowState, setTerminalWindowState] =
    useState<TerminalWindowState>('open');
  const [isMaximized, setIsMaximized] = useState(false);
  const activeTabState = section ? tabStates[section.slug] : undefined;
  const visibleCommand = section
    ? (activeTabState?.visibleCommand ?? '')
    : command;
  const visibleOutput = section
    ? (activeTabState?.visibleOutput ?? '')
    : output;
  const phase = section ? (activeTabState?.phase ?? 'command') : 'done';
  const interactiveCommand = section
    ? (activeTabState?.interactiveCommand ?? '')
    : '';
  const interactiveHistory = section
    ? (activeTabState?.interactiveHistory ?? [])
    : [];
  const tabGridStyle = {
    gridTemplateColumns: closedSection
      ? `repeat(${openSections.length}, minmax(0, 1fr)) 3.25rem`
      : `repeat(${openSections.length}, minmax(0, 1fr))`,
  } as CSSProperties;

  function closeTab(slug: string) {
    animatingSlugs.current.delete(slug);
    hasIntroPlayedRef.current.delete(slug);
    setTabStates((currentStates) => {
      const nextStates = { ...currentStates };
      delete nextStates[slug];
      return nextStates;
    });

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
        .filter(
          (slug) => currentSlugs.includes(slug) || slug === closedSection.slug
        );

      return nextSlugs;
    });
    setActiveSlug(closedSection.slug);
  }

  function onTabKeyDown(event: KeyboardEvent<HTMLDivElement>, slug: string) {
    if (event.key !== 'Enter' && event.key !== ' ') return;

    event.preventDefault();
    setActiveSlug(slug);
  }

  function closeTerminal() {
    setIsProjectWindowOpen(false);
    setIsMaximized(false);
    setOpenSlugs(sections.map((item) => item.slug));
    setActiveSlug(sections[0]?.slug);
    setTabStates({});
    animatingSlugs.current.clear();
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
    if (terminalWindowState !== 'open') return;
    if (!section) return;

    const slug = section.slug;
    const slugs = animatingSlugs.current;
    const playedSlugs = hasIntroPlayedRef.current;
    if (playedSlugs.has(slug) || slugs.has(slug)) return;

    if (reducedMotion) {
      setTabStates((currentStates) => ({
        ...currentStates,
        [slug]: {
          ...(currentStates[slug] ?? createTerminalTabState()),
          visibleCommand: command,
          visibleOutput: output,
          phase: 'done',
          hasIntroPlayed: true,
        },
      }));
      playedSlugs.add(slug);
      return;
    }

    slugs.add(slug);
    setTabStates((currentStates) => ({
      ...currentStates,
      [slug]: {
        ...(currentStates[slug] ?? createTerminalTabState()),
        visibleCommand: '',
        visibleOutput: '',
        phase: 'command',
      },
    }));

    let commandIndex = 0;
    const commandTimer = window.setInterval(() => {
      commandIndex += 1;
      setTabStates((currentStates) => {
        const currentState = currentStates[slug] ?? createTerminalTabState();

        return {
          ...currentStates,
          [slug]: {
            ...currentState,
            visibleCommand: command.slice(0, commandIndex),
          },
        };
      });

      if (commandIndex >= command.length) {
        window.clearInterval(commandTimer);
        slugs.delete(slug);
        playedSlugs.add(slug);
        setTabStates((currentStates) => {
          const currentState = currentStates[slug] ?? createTerminalTabState();

          return {
            ...currentStates,
            [slug]: {
              ...currentState,
              visibleCommand: command,
              visibleOutput: output,
              phase: 'done',
              hasIntroPlayed: true,
            },
          };
        });
      }
    }, promptSpeedMs);

    return () => {
      window.clearInterval(commandTimer);
      if (!slugs.has(slug)) return;

      slugs.delete(slug);
      playedSlugs.add(slug);
      setTabStates((currentStates) => {
        const currentState = currentStates[slug];
        if (!currentState) return currentStates;

        return {
          ...currentStates,
          [slug]: {
            ...currentState,
            visibleCommand: command,
            visibleOutput: output,
            phase: 'done',
            hasIntroPlayed: true,
          },
        };
      });
    };
  }, [
    command,
    output,
    promptSpeedMs,
    reducedMotion,
    section,
    terminalWindowState,
  ]);

  useEffect(() => {
    if (
      phase !== 'done' ||
      isProjectWindowOpen ||
      terminalWindowState !== 'open'
    )
      return;

    function getInteractiveOutput(enteredCommand: string) {
      if (enteredCommand === command) return output;

      const [commandName = '', ...args] = enteredCommand.split(' ');
      const firstArg = args[0];

      if (commandName === 'ls' && args.length === 0 && section)
        return section.files.join('\n');
      if (
        section?.slug === 'projects' &&
        commandName === 'cd' &&
        args.length === 1 &&
        ['projects', 'projects/'].includes(firstArg)
      ) {
        setIsProjectWindowOpen(true);
        return '';
      }

      if (
        section?.slug === 'projects' &&
        commandName === 'ls' &&
        args.length === 1 &&
        ['projects', 'projects/'].includes(firstArg)
      )
        return '';

      if (commandName === 'cat' && args.length === 0)
        return 'cat <FILE> - prints content of the file';
      if (
        commandName === 'cat' &&
        args.length === 1 &&
        section?.files.includes(firstArg)
      )
        return output;

      if (['cat', 'cd', 'ls'].includes(commandName)) return 'permission denied';

      return 'command unknown';
    }

    function runInteractiveCommand() {
      if (!section) return;

      const slug = section.slug;
      const rawCommand = interactiveCommand;
      const enteredCommand = rawCommand.trim().replace(/\s+/g, ' ');
      if (!enteredCommand) return;

      const historyItem = {
        command: rawCommand,
        output: getInteractiveOutput(enteredCommand),
        showProjectsAction:
          section.slug === 'projects' &&
          ['ls projects', 'ls projects/'].includes(enteredCommand),
      };

      setTabStates((currentStates) => {
        const currentState = currentStates[slug] ?? createTerminalTabState();

        return {
          ...currentStates,
          [slug]: {
            ...currentState,
            interactiveCommand: '',
            interactiveHistory: [
              ...currentState.interactiveHistory,
              historyItem,
            ],
          },
        };
      });
    }

    const onKeyDown = (event: globalThis.KeyboardEvent) => {
      if (event.defaultPrevented || event.altKey || event.metaKey) return;

      if (event.ctrlKey) {
        if (event.key.toLowerCase() === 'u') {
          event.preventDefault();
          if (section) {
            setTabStates((currentStates) => {
              const currentState =
                currentStates[section.slug] ?? createTerminalTabState();

              return {
                ...currentStates,
                [section.slug]: {
                  ...currentState,
                  interactiveCommand: '',
                },
              };
            });
          }
        }
        return;
      }

      if (event.key === 'Backspace') {
        event.preventDefault();
        if (section) {
          setTabStates((currentStates) => {
            const currentState =
              currentStates[section.slug] ?? createTerminalTabState();

            return {
              ...currentStates,
              [section.slug]: {
                ...currentState,
                interactiveCommand: currentState.interactiveCommand.slice(
                  0,
                  -1
                ),
              },
            };
          });
        }
        return;
      }

      if (event.key === 'Enter') {
        event.preventDefault();
        runInteractiveCommand();
        return;
      }

      if (event.key.length === 1) {
        event.preventDefault();
        if (section) {
          setTabStates((currentStates) => {
            const currentState =
              currentStates[section.slug] ?? createTerminalTabState();

            return {
              ...currentStates,
              [section.slug]: {
                ...currentState,
                interactiveCommand: `${currentState.interactiveCommand}${event.key}`,
              },
            };
          });
        }
      }
    };

    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [
    command,
    interactiveCommand,
    isProjectWindowOpen,
    output,
    phase,
    section,
    terminalWindowState,
  ]);

  if (terminalWindowState === 'closed') {
    return (
      <button
        className="btn-hover focus-ring terminal-reopen-action inline-flex items-center justify-center min-h-15 px-5 py-3.5 border-3 border-border rounded-xl bg-primary text-primary-foreground shadow-hard cursor-pointer font-mono font-black tracking-wide uppercase"
        type="button"
        onClick={openTerminal}
      >
        Open Terminal
      </button>
    );
  }

  if (terminalWindowState === 'minimized') {
    return (
      <button
        className="btn-hover focus-ring terminal-minimized-action inline-flex items-center justify-center gap-3 px-4 py-3.5 border-3 border-border rounded-2xl bg-primary text-primary-foreground shadow-hard cursor-pointer font-mono font-black tracking-wide uppercase"
        type="button"
        aria-label="Restore terminal"
        onClick={openTerminal}
      >
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
      <h2 id="terminal-heading-enhanced" className="sr-only">
        Software developer portfolio terminal
      </h2>
      <div className="terminal-chrome">
        <div className="terminal-titlebar">
          <div className="terminal-controls">
            <button
              className="terminal-control terminal-control--close"
              type="button"
              aria-label="Close terminal"
              data-hint="Close"
              title="Close terminal"
              onClick={closeTerminal}
            />
            <button
              className="terminal-control terminal-control--minimize"
              type="button"
              aria-label="Minimize terminal"
              data-hint="Minimize"
              title="Minimize terminal"
              onClick={minimizeTerminal}
            />
            <button
              className="terminal-control terminal-control--zoom"
              type="button"
              aria-label={
                isMaximized ? 'Restore terminal size' : 'Maximize terminal'
              }
              aria-pressed={isMaximized}
              data-hint={isMaximized ? 'Restore' : 'Maximize'}
              title={
                isMaximized ? 'Restore terminal size' : 'Maximize terminal'
              }
              onClick={() => setIsMaximized((currentValue) => !currentValue)}
            />
          </div>
          <p>portfolio.local</p>
        </div>

        <div
          className="terminal-tabs"
          role="tablist"
          aria-label="Portfolio sections"
          style={tabGridStyle}
        >
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
                  <svg
                    className="terminal-tab-close"
                    viewBox="0 0 16 16"
                    aria-hidden="true"
                  >
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

      <div
        className="terminal-screen"
        style={
          { '--terminal-cursor-blink': `${cursorBlinkMs}ms` } as CSSProperties
        }
      >
        <div
          id="terminal-output-panel"
          className="terminal-output"
          aria-live="polite"
        >
          <p className="terminal-command">
            <span className="terminal-prompt" aria-hidden="true">
              &gt;
            </span>{' '}
            <span className="terminal-typed-command">
              <span>{visibleCommand}</span>
              {phase === 'command' && (
                <span
                  className="terminal-cursor terminal-cursor--typing"
                  aria-hidden="true"
                />
              )}
            </span>
          </p>
          <pre className="terminal-lines">{visibleOutput}</pre>
          {section?.slug === 'projects' && phase === 'done' && (
            <button
              className="terminal-projects-action flex items-center justify-center w-[min(16rem,100%)] mx-auto mt-[1.35rem] px-4 py-[0.9rem] border-3 border-border rounded-[0.65rem] bg-primary text-primary-foreground shadow-hard cursor-pointer font-mono font-black tracking-[0.04em] uppercase transition-all duration-150 hover:bg-accent hover:text-foreground hover:shadow-[3px_3px_0_var(--color-border)] hover:translate-x-1 hover:translate-y-1 focus-visible:bg-accent focus-visible:text-foreground focus-visible:shadow-[3px_3px_0_var(--color-border)] focus-visible:translate-x-1 focus-visible:translate-y-1 focus-visible:outline-[3px] focus-visible:outline-border focus-visible:outline-offset-[3px]"
              type="button"
              onClick={() => setIsProjectWindowOpen(true)}
            >
              View All Projects
            </button>
          )}
          {phase === 'done' &&
            interactiveHistory.map((item, index) => (
              <div
                className="terminal-history-item"
                key={`${item.command}-${index}`}
              >
                <p className="terminal-command terminal-command--next">
                  &gt;{' '}
                  <span className="terminal-typed-command">{item.command}</span>
                </p>
                {item.output && (
                  <pre className="terminal-lines terminal-lines--history">
                    {item.output}
                  </pre>
                )}
                {item.showProjectsAction && (
                  <button
                    className="btn-hover focus-ring terminal-projects-action flex items-center justify-center w-[min(16rem,100%)] mx-auto mt-5 px-4 py-3.5 border-3 border-border rounded-xl bg-primary text-primary-foreground shadow-hard cursor-pointer font-mono font-black tracking-wide uppercase"
                    type="button"
                    onClick={() => setIsProjectWindowOpen(true)}
                  >
                    View All Projects
                  </button>
                )}
              </div>
            ))}
          {phase === 'done' && (
            <p className="terminal-command terminal-command--next">
              &gt;{' '}
              <span className="terminal-typed-command">
                {interactiveCommand}
              </span>
              <span className="terminal-cursor" aria-hidden="true" />
            </p>
          )}
        </div>
      </div>

      {isProjectWindowOpen && (
        <div
          className="project-window-backdrop"
          role="presentation"
          onMouseDown={() => setIsProjectWindowOpen(false)}
        >
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
                      <span className="project-preview-year">
                        {project.year}
                      </span>
                    </div>
                    <ul
                      className="project-preview-tags"
                      aria-label={`${project.title} technologies`}
                    >
                      {project.tags.map((tag) => (
                        <li
                          className={getTechnologyBadgeClass()}
                          style={getTagStyle(tag)}
                          key={tag}
                        >
                          {tag}
                        </li>
                      ))}
                    </ul>
                    <p>{project.description}</p>
                    {project.sourceHref && (
                      <a
                        className="btn-hover focus-ring inline-flex self-start mt-auto px-3 py-2 border-2 border-border rounded-lg bg-primary text-primary-foreground shadow-hard-sm text-xs font-black no-underline uppercase"
                        href={project.sourceHref}
                        target="_blank"
                        rel="noreferrer"
                      >
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
