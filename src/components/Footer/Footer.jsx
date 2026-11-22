import { ArrowUp } from 'lucide-react';
import { profile } from '../../data/profile';

import './Footer.css';

const LINKS = [
  { label: 'GitHub', href: profile.github },
  { label: 'LinkedIn', href: profile.linkedin },
  { label: 'Email', href: `mailto:${profile.email}` },
];

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <div className="footer__brand">
          <span className="footer__mark" aria-hidden="true">
            mib
          </span>
          <div className="footer__identity">
            <span className="footer__name">{profile.name}</span>
            <span className="footer__role label label--tight">
              {profile.role} · {profile.location}
            </span>
          </div>
        </div>

        <nav className="footer__links" aria-label="Elsewhere">
          {LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              {...(link.label !== 'Email' ? { target: '_blank', rel: 'noreferrer noopener' } : {})}
            >
              {link.label}
              {link.label !== 'Email' ? (
                <span className="sr-only"> (opens in a new tab)</span>
              ) : null}
            </a>
          ))}
        </nav>

        <div className="footer__end">
          <p className="footer__copyright">
            <span aria-hidden="true">©</span> {new Date().getFullYear()} {profile.name}. Built with
            React, Vite and intent.
          </p>
          <a className="footer__top" href="#top">
            Back to top
            <ArrowUp size={12} strokeWidth={1.8} aria-hidden="true" />
          </a>
        </div>
      </div>

      <div className="footer__wordmark" aria-hidden="true">
        <span>Gabrial</span>
      </div>
    </footer>
  );
}
