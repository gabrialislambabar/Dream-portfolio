import Reveal from '../Reveal';

import './Masthead.css';

export default function Masthead() {
  return (
    <section className="masthead" aria-labelledby="masthead-name">
      <div className="container">
        <Reveal as="h1" className="masthead__name" id="masthead-name" distance={26}>
          <span className="masthead__line">Muaz</span>
          {' '}
          <span className="masthead__line">Islam Babar</span>
        </Reveal>

        <div className="masthead__foot">
          <Reveal delay={0.08}>
            <span className="masthead__role">Full-Stack Developer</span>
          </Reveal>

          <Reveal as="p" className="masthead__intro" delay={0.14}>
            Computer Science undergraduate building full-stack interfaces, Linux tooling, and small
            products that solve real problems.
          </Reveal>
        </div>
      </div>
    </section>
  );
}
