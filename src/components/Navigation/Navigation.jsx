import { useEffect, useRef, useState } from 'react';
import { Menu, X } from 'lucide-react';
import ThemeToggle from './ThemeToggle';
import './Navigation.css';

const LINKS = [
  { id: 'about', label: 'About' },
  { id: 'education', label: 'Education' },
  { id: 'projects', label: 'Projects' },
  { id: 'stack', label: 'Stack' },
  { id: 'contact', label: 'Contact' },
];

export default function Navigation({ theme, onToggleTheme }) {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState('');
  const [scrolled, setScrolled] = useState(false);
  const panelRef = useRef(null);
  const menuButtonRef = useRef(null);
  const firstLinkRef = useRef(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const sections = LINKS.map((link) => document.getElementById(link.id)).filter(Boolean);
    if (!sections.length) return undefined;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) setActive(visible.target.id);
      },
      { rootMargin: '-45% 0px -45% 0px', threshold: [0, 0.2, 0.6, 1] }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!open) return undefined;

    /* Move focus into the opened panel so keyboard and screen-reader
       users land on the first destination instead of the page top. */
    const focusTimer = window.setTimeout(() => firstLinkRef.current?.focus(), 60);

    const onKeyDown = (event) => {
      if (event.key === 'Escape') {
        setOpen(false);
        menuButtonRef.current?.focus();
      }
    };

    const onPointerDown = (event) => {
      if (panelRef.current && !panelRef.current.contains(event.target)) setOpen(false);
    };

    document.addEventListener('keydown', onKeyDown);
    document.addEventListener('pointerdown', onPointerDown);
    return () => {
      window.clearTimeout(focusTimer);
      document.removeEventListener('keydown', onKeyDown);
      document.removeEventListener('pointerdown', onPointerDown);
    };
  }, [open]);

  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth > 720) setOpen(false);
    };
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  return (
    <nav
      className={`nav${scrolled ? ' nav--scrolled' : ''}${open ? ' nav--open' : ''}`}
      aria-label="Primary"
    >
      <div className="nav__inner container">
        <a className="nav__brand" href="#top" aria-label="Muaz Islam Babar — back to top">
          <span className="nav__mark" aria-hidden="true">
            mib
          </span>
          <span className="nav__name">
            Muaz&nbsp;Islam&nbsp;Babar
            <span className="nav__dot" aria-hidden="true" />
          </span>
        </a>

        <div className="nav__end" ref={panelRef}>
          <ul className="nav__links" id="nav-links" role="list">
            {LINKS.map((link, index) => (
              <li key={link.id}>
                <a
                  ref={index === 0 ? firstLinkRef : undefined}
                  className={`nav__link${active === link.id ? ' is-active' : ''}`}
                  href={`#${link.id}`}
                  aria-current={active === link.id ? 'location' : undefined}
                  onClick={() => setOpen(false)}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          <span className="nav__divider" aria-hidden="true" />

          <ThemeToggle theme={theme} onToggle={onToggleTheme} />

          <button
            ref={menuButtonRef}
            type="button"
            className="nav__menu"
            aria-expanded={open}
            aria-controls="nav-links"
            aria-label={open ? 'Close navigation menu' : 'Open navigation menu'}
            onClick={() => setOpen((value) => !value)}
          >
            {open ? <X size={16} strokeWidth={1.6} aria-hidden="true" /> : <Menu size={16} strokeWidth={1.6} aria-hidden="true" />}
          </button>
        </div>
      </div>
    </nav>
  );
}
