import { ArrowUp } from 'lucide-react';
import { motion, useReducedMotion } from 'motion/react';
import { profile } from '../../data/profile';

import './Footer.css';

export default function Footer() {
  const reduceMotion = useReducedMotion();

  return (
    <footer className="footer">
      <div className="container footer__inner">
        <p className="footer__copyright">
          <span aria-hidden="true">©</span> {new Date().getFullYear()} · Built with React, Vite and
          intent.
        </p>

        <div className="footer__actions">
          <a
            className="footer__link"
            href={profile.github}
            target="_blank"
            rel="noreferrer noopener"
          >
            GitHub
            <span className="sr-only"> (opens in a new tab)</span>
          </a>

          <a className="footer__top" href="#top">
            Back to top
            <ArrowUp size={12} strokeWidth={1.8} aria-hidden="true" />
          </a>
        </div>
      </div>

      <div className="footer__wordmark" aria-hidden="true">
        {reduceMotion ? (
          <span className="footer__wordmark-inner">Gabrial</span>
        ) : (
          /* The wrapper is observed, not the span: the span starts
             translated outside its own clipping container, so it would
             never register as in-view on its own. */
          <motion.div
            className="footer__wordmark-track"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '0px 0px -8% 0px' }}
          >
            <motion.span
              className="footer__wordmark-inner"
              variants={{ hidden: { y: '110%' }, visible: { y: '0%' } }}
              transition={{ duration: 1.05, ease: [0.22, 0.61, 0.36, 1] }}
            >
              Gabrial
            </motion.span>
          </motion.div>
        )}
      </div>
    </footer>
  );
}
