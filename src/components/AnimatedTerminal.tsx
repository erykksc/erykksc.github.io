import { useEffect, useMemo, useState } from 'react';
import type { TerminalSection } from '../data/portfolio';

type Props = {
  section: TerminalSection;
  promptSpeedMs: number;
  outputSpeedMs: number;
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

export default function AnimatedTerminal({ section, promptSpeedMs, outputSpeedMs }: Props) {
  const reducedMotion = useReducedMotion();
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
    <div className="terminal-output terminal-output--enhanced" aria-live="polite">
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
  );
}
