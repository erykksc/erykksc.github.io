import { useEffect, useMemo, useState } from 'react';
import type { CSSProperties } from 'react';
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
  const [activeSlug, setActiveSlug] = useState(sections[0]?.slug);
  const section = sections.find((item) => item.slug === activeSlug) ?? sections[0];
  const command = `> ${section.command}`;
  const output = useMemo(() => section.lines.join('\n'), [section.lines]);
  const [visibleCommand, setVisibleCommand] = useState('');
  const [visibleOutput, setVisibleOutput] = useState('');
  const [phase, setPhase] = useState<TerminalPhase>('command');

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

        <div className="terminal-tabs" role="tablist" aria-label="Portfolio sections">
          {sections.map((item) => {
            const isActive = item.slug === section.slug;

            return (
              <button
                className={`terminal-tab${isActive ? ' terminal-tab--active' : ''}`}
                type="button"
                role="tab"
                aria-selected={isActive}
                onClick={() => setActiveSlug(item.slug)}
              >
                <span>{item.label}</span>
                {isActive && (
                  <svg className="terminal-tab-close" viewBox="0 0 16 16" aria-hidden="true">
                    <path d="M4.25 4.25L11.75 11.75M11.75 4.25L4.25 11.75" />
                  </svg>
                )}
              </button>
            );
          })}
          <button className="terminal-tab-add" type="button" aria-label="Add terminal tab">
            <svg viewBox="0 0 16 16" aria-hidden="true">
              <path d="M8 3.25V12.75M3.25 8H12.75" />
            </svg>
          </button>
        </div>
      </div>

      <div className="terminal-screen" style={{ '--terminal-cursor-blink': `${cursorBlinkMs}ms` } as CSSProperties}>
        <div className="terminal-output" aria-live="polite">
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
        </div>
      </div>
    </section>
  );
}
