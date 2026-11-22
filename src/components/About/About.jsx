import Reveal from '../Reveal';
import Figure from '../Figure';
import SectionHeading from '../SectionHeading';
import EngineeringPhilosophy from '../EngineeringPhilosophy/EngineeringPhilosophy';
import { aboutParagraphs, personalInfo, interests } from '../../data/profile';
import { aboutPortrait } from '../../lib/assets';

import './About.css';

export default function About() {
  return (
    <section className="section about" id="about" aria-labelledby="about-title">
      <div className="container">
        <Reveal>
          <SectionHeading
            id="about"
            index="01"
            label="Introduction"
            meta="Computer Science · Full-Stack"
            lines={[
              { text: 'A software developer' },
              { text: 'who thinks in systems.', accent: true },
            ]}
          />
        </Reveal>

        <div className="about__grid grid-12">
          <div className="about__copy">
            {aboutParagraphs.map((paragraph, index) => (
              <Reveal
                key={paragraph.slice(0, 24)}
                delay={index * 0.05}
                as="p"
                className="about__paragraph"
              >
                {paragraph}
              </Reveal>
            ))}

            <Reveal delay={0.14} className="about__details">
              <h3 className="about__label label label--tight">Details</h3>
              <dl className="about__list">
                {personalInfo.map((item) => (
                  <div className="about__row" key={item.label}>
                    <dt>{item.label}</dt>
                    <dd>{item.value}</dd>
                  </div>
                ))}
              </dl>
            </Reveal>
          </div>

          <div className="about__aside">
            <Reveal delay={0.08}>
              <Figure
                src={aboutPortrait}
                alt="Portrait of Muaz Islam Babar, Computer Science undergraduate and full-stack developer."
                tone="sand"
                ratio="4 / 5"
                caption="Muaz Islam Babar — Multan, Pakistan"
              />
            </Reveal>

            <Reveal delay={0.12} className="about__interests">
              <h3 className="about__label label label--tight">Interests</h3>
              <ul className="about__tags">
                {interests.map((interest) => (
                  <li key={interest} className="about__tag">
                    {interest}
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </div>

        <EngineeringPhilosophy />
      </div>
    </section>
  );
}
