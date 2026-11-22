import Reveal from '../Reveal';
import SectionHeading from '../SectionHeading';
import { skillGroups } from '../../data/skills';

import './TechStack.css';

export default function TechStack() {
  return (
    <section className="section section--ruled stack" id="stack" aria-labelledby="stack-title">
      <div className="container">
        <Reveal>
          <SectionHeading
            id="stack"
            index="05"
            label="The stack under the hood"
            meta="Six working disciplines, carried from first sketch to shipped system."
            lines={[{ text: 'The stack' }, { text: 'under the hood.', accent: true }]}
          />
        </Reveal>

        <div className="stack__grid">
          {skillGroups.map((group, index) => (
            <Reveal as="article" className="stack__card" key={group.id} delay={index * 0.03}>
              <header className="stack__card-head">
                <span className="stack__code">{group.id}</span>
                <span className="stack__count label label--tight">
                  {String(group.items.length).padStart(2, '0')} skills
                </span>
              </header>

              <h3 className="stack__card-title">{group.title}</h3>

              <ul className="stack__chips" aria-label={`${group.title} skills`}>
                {group.items.map((item) => (
                  <li className="stack__chip" key={item}>
                    {item}
                  </li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
