import { useLayoutEffect, useRef, useState } from 'react';
import { flushSync } from 'react-dom';
import { Moon, Sun } from 'lucide-react';
import './ThemeToggle.css';

function supportsViewTransition() {
  return typeof document.startViewTransition === 'function';
}

export default function ThemeToggle({ theme, onToggle }) {
  const isDark = theme === 'dark';
  const buttonRef = useRef(null);
  const [animating, setAnimating] = useState(false);

  useLayoutEffect(() => {
    if (!animating) return undefined;
    const timeout = window.setTimeout(() => setAnimating(false), 700);
    return () => window.clearTimeout(timeout);
  }, [animating]);

  const handleClick = () => {
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (!supportsViewTransition() || reduceMotion) {
      onToggle();
      return;
    }

    const rect = buttonRef.current?.getBoundingClientRect();
    const x = rect ? rect.left + rect.width / 2 : window.innerWidth - 48;
    const y = rect ? rect.top + rect.height / 2 : 24;
    const radius = Math.hypot(Math.max(x, window.innerWidth - x), Math.max(y, window.innerHeight - y));

    document.documentElement.style.setProperty('--theme-x', `${x}px`);
    document.documentElement.style.setProperty('--theme-y', `${y}px`);
    document.documentElement.style.setProperty('--theme-r', `${radius}px`);

    const transition = document.startViewTransition(() => {
      flushSync(() => onToggle());
    });

    setAnimating(true);
    transition.finished.finally(() => setAnimating(false));
  };

  return (
    <button
      ref={buttonRef}
      type="button"
      className="theme-toggle"
      onClick={handleClick}
      aria-label="Dark theme"
      aria-pressed={isDark}
      title={`Switch to ${isDark ? 'light' : 'dark'} theme`}
    >
      <span className="theme-toggle__icon" aria-hidden="true">
        {isDark ? <Moon size={14} strokeWidth={1.6} /> : <Sun size={14} strokeWidth={1.6} />}
      </span>
      <span className="theme-toggle__label" aria-hidden="true">
        {isDark ? 'Night' : 'Day'}
      </span>
    </button>
  );
}
