import { ArrowRight } from 'lucide-react';
import { skillGroups } from '../../data/skills';

import './SkillsMarquee.css';

const SKILLS = [...new Set(skillGroups.flatMap((group) => group.items))];

function SkillGroup({ hidden = false }) {
  return (
    <ul className="marquee__group" role="list" aria-hidden={hidden || undefined}>
      {SKILLS.map((skill) => (
        <li className="marquee__item" key={skill}>
          {skill}
        </li>
      ))}
    </ul>
  );
}

export default function SkillsMarquee() {
  return (
    <div className="marquee" role="region" aria-label="Skills and disciplines">
      <span className="marquee__label">
        <ArrowRight size={12} strokeWidth={1.9} aria-hidden="true" />
        Disciplines
      </span>

      <div className="marquee__viewport">
        <div className="marquee__rail">
          <SkillGroup />
          {/* Duplicate track so the loop is seamless. Hidden from
              assistive tech to avoid reading the list twice. */}
          <SkillGroup hidden />
        </div>
      </div>
    </div>
  );
}
