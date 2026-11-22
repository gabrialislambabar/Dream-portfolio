import Reveal from '../Reveal';
import Figure from '../Figure';
import SectionHeading from '../SectionHeading';
import EngineeringPhilosophy from '../EngineeringPhilosophy/EngineeringPhilosophy';
import SkillsMarquee from '../SkillsMarquee/SkillsMarquee';
import { aboutParagraphs, personalInfo, profile } from '../../data/profile';
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
            label="Background &amp; working style"
            meta="Computer Science · Full-Stack"
            lines={[
              { text: 'A software Engineer' },
              { text: 'who thinks in systems', accent: true },
            ]}
          />
        </Reveal>
      </div>

      <Reveal className="about__marquee-wrap" delay={0.05}>
        <div className="container">
          <SkillsMarquee />
        </div>
      </Reveal>

      <div className="container">
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
              <p className="about__id">
                <span className="about__id-slash" aria-hidden="true">
                  /
                </span>
                <span className="about__id-name">{profile.name}</span>
                <span className="about__id-role">· {profile.role}</span>
              </p>

              <div className="about__details-head">
                <span className="label">Details</span>
                <span className="about__details-rule" aria-hidden="true" />
              </div>

              <dl className="about__facts">
                {personalInfo.map((item) => (
                  <div className="about__fact" key={item.label}>
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
          </div>
        </div>

        <EngineeringPhilosophy />
      </div>
    </section>
  );
}
