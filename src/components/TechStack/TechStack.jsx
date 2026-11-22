import { useEffect, useRef, useState } from 'react';
import Reveal from '../Reveal';
import SectionHeading from '../SectionHeading';
import Constellation from '../Constellation/Constellation';
import { skillGroups } from '../../data/skills';
import { constellations } from '../../data/constellations';

import './TechStack.css';

const canHover = () => window.matchMedia('(hover: hover)').matches;

/* How long the trace takes to finish, so the touch version can wait
   for it before fading out. Mirrors the Constellation timings. */
function formationMs(starCount) {
  return Math.max(starCount - 1, 0) * 75 + 520;
}

export default function TechStack() {
  const [activeId, setActiveId] = useState(null);
  const dismissTimer = useRef(null);

  const clearTimer = () => {
    if (dismissTimer.current !== null) {
      window.clearTimeout(dismissTimer.current);
      dismissTimer.current = null;
    }
  };

  useEffect(() => clearTimer, []);

  const show = (id) => {
    clearTimer();
    setActiveId(id);
  };

  const hide = () => {
    clearTimer();
    setActiveId(null);
  };

  /* Touch screens: hold the finished constellation for 2s, then let it
     fade. Hover/focus keeps it visible for as long as it is held. */
  const showThenDismiss = (id) => {
    clearTimer();
    setActiveId(id);

    const count = constellations[id]?.stars.length ?? 0;
    dismissTimer.current = window.setTimeout(() => {
      dismissTimer.current = null;
      setActiveId((current) => (current === id ? null : current));
    }, formationMs(count) + 2000);
  };

  return (
    <section className="section section--ruled stack" id="stack" aria-labelledby="stack-title">
      <div className="container">
        <Reveal>
          <SectionHeading
            id="stack"
            index="04"
            label="The stack under the hood"
            meta="Six working disciplines, carried from first sketch to shipped system."
            lines={[{ text: 'The stack' }, { text: 'under the hood.', accent: true }]}
          />
        </Reveal>

        <div className="stack__grid">
          {skillGroups.map((group, index) => {
            const constellation = constellations[group.id];
            const isActive = activeId === group.id;

            return (
              <Reveal
                as="article"
                className={`stack__card${isActive ? ' is-active' : ''}`}
                key={group.id}
                delay={index * 0.03}
                tabIndex={0}
                aria-label={`${group.title}, ${group.items.length} skills`}
                onMouseEnter={() => {
                  if (canHover()) show(group.id);
                }}
                onMouseLeave={() => {
                  if (canHover()) hide();
                }}
                onFocus={(event) => {
                  /* Only keyboard focus traces it; a touch tap should
                     go through the click toggle instead. */
                  if (event.target.matches(':focus-visible')) show(group.id);
                }}
                onBlur={hide}
                onClick={() => {
                  if (canHover()) return;

                  if (activeId === group.id) {
                    hide();
                  } else {
                    showThenDismiss(group.id);
                  }
                }}
              >
                {constellation ? (
                  <Constellation
                    stars={constellation.stars}
                    lines={constellation.lines}
                    active={isActive}
                  />
                ) : null}

                <div className="stack__card-content">
                  <header className="stack__card-head">
                    <span className="stack__code">{group.id}</span>
                    <span className="stack__count label label--tight">
                      {String(group.items.length).padStart(2, '0')} skills
                    </span>
                  </header>

                  <h3 className="stack__card-title">{group.title}</h3>

                  <ul className="stack__chips" role="list" aria-label={`${group.title} skills`}>
                    {group.items.map((item) => (
                      <li className="stack__chip" key={item}>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
