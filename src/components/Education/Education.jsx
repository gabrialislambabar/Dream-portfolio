import Reveal from '../Reveal';
import Figure from '../Figure';
import SectionHeading from '../SectionHeading';
import { degree, priorEducation, independentLearning, direction } from '../../data/education';
import { educationImage } from '../../lib/assets';

import './Education.css';

export default function Education() {
  return (
    <section className="section section--ruled education" id="education" aria-labelledby="education-title">
      <div className="container">
        <Reveal>
          <SectionHeading
            id="education"
            index="02"
            label="Education & direction"
            meta="Multan · Graduating 2027"
            lines={[
              { text: 'Learning with direction.' },
              { text: 'Building with purpose.', accent: true },
            ]}
          />
        </Reveal>

        <div className="education__grid">
          <div className="education__left">
            <Reveal className="education__degree" delay={0.04}>
              <span className="label label--accent">Degree</span>
              <h3 className="education__degree-title">{degree.title}</h3>
              <p className="education__institution">{degree.institution}</p>
              <ul className="education__details">
                {degree.details.map((detail) => (
                  <li key={detail}>
                    <span className="education__bullet" aria-hidden="true" />
                    {detail}
                  </li>
                ))}
              </ul>

              <dl className="education__prior">
                {priorEducation.map((item) => (
                  <div className="education__prior-row" key={item.label}>
                    <dt className="label label--tight">{item.label}</dt>
                    <dd>{item.value}</dd>
                  </div>
                ))}
              </dl>
            </Reveal>

            <Reveal className="education__learning" delay={0.1}>
              <span className="label">Independent learning</span>
              <ul className="education__sources">
                {independentLearning.map((item) => (
                  <li key={item.source}>
                    <span className="education__source">{item.source}</span>
                    <span className="education__focus">{item.focus}</span>
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>

          <Reveal className="education__figure" delay={0.08}>
            <Figure
              src={educationImage}
              alt="Study environment — desk with notes, keyboard and a Linux terminal."
              tone="sky"
              ratio="4 / 5"
              caption="Campus years — Muhammad Nawaz Sharif University of Agriculture"
              pendingLabel="Image pending"
            />
          </Reveal>

          <Reveal as="blockquote" className="education__direction" delay={0.14}>
            <span className="label label--tight education__direction-label">Engineering direction</span>
            <p className="education__direction-lead">{direction[0]}</p>
            <div className="education__direction-rest">
              {direction.slice(1).map((paragraph) => (
                <p key={paragraph.slice(0, 20)}>{paragraph}</p>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
