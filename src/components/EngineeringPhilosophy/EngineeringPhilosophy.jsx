import Reveal from '../Reveal';
import { philosophy } from '../../data/profile';
import './EngineeringPhilosophy.css';

export default function EngineeringPhilosophy() {
  return (
    <Reveal as="section" className="philosophy" aria-labelledby="philosophy-title">
      <div className="philosophy__head">
        <span className="label">Engineering philosophy</span>
        <span className="label label--tight philosophy__mark">01 — 03</span>
      </div>

      <div className="philosophy__body">
        <h3 className="philosophy__title" id="philosophy-title">
          <span className="display__line">{philosophy.heading[0]}</span>
          <span className="display__line display__line--accent">{philosophy.heading[1]}</span>
        </h3>

        <div className="philosophy__text">
          {philosophy.body.map((paragraph) => (
            <p key={paragraph.slice(0, 20)}>{paragraph}</p>
          ))}
        </div>
      </div>
    </Reveal>
  );
}
