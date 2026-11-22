import Reveal from '../Reveal';
import SectionHeading from '../SectionHeading';
import { journey, journeyNotes } from '../../data/journey';

import './Journey.css';

export default function Journey() {
  return (
    <section className="section section--ruled journey" id="journey" aria-labelledby="journey-title">
      <div className="container">
        <Reveal>
          <SectionHeading
            id="journey"
            index="03"
            label="Engineering journey"
            meta="Six months · Self-directed"
            lines={[{ text: 'Six months of' }, { text: 'building and learning.', accent: true }]}
          />
        </Reveal>

        <div className="journey__layout">
          <Reveal className="journey__intro">
            <p className="journey__lede">
              Progress measured in things understood, not titles held. A short record of how I have
              been learning to build software — from first markup to systems and full-stack work.
            </p>

            <dl className="journey__notes">
              {journeyNotes.map((note) => (
                <div className="journey__note" key={note.label}>
                  <dt className="label label--tight">{note.label}</dt>
                  <dd>{note.value}</dd>
                </div>
              ))}
            </dl>
          </Reveal>

          <ol className="journey__list">
            {journey.map((step, index) => (
              <Reveal
                as="li"
                key={step.id}
                className={`journey__item${index === journey.length - 1 ? ' is-current' : ''}`}
                delay={index * 0.04}
              >
                <span className="journey__index num">{step.id}</span>
                <div className="journey__content">
                  <h3 className="journey__title">{step.title}</h3>
                  <p className="journey__detail">{step.detail}</p>
                </div>
                <span className="journey__status label label--tight">
                  {index === journey.length - 1 ? 'Current' : 'Completed'}
                </span>
              </Reveal>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
