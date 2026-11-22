import { ArrowUpRight } from 'lucide-react';
import Reveal from '../Reveal';
import Figure from '../Figure';
import { GithubMark } from '../BrandIcons';
import { projectImage } from '../../lib/assets';

import './ProjectItem.css';

export default function ProjectItem({ project, index = 0 }) {
  const poster = projectImage(project);
  const mediaSpan = project.mediaSpan ?? 6;
  const textSpan = 12 - mediaSpan - 1;

  const mediaColumn = project.flip ? 13 - mediaSpan : 1;
  const textColumn = project.flip ? 1 : mediaSpan + 2;

  return (
    <Reveal
      as="article"
      className={`project project--${project.emphasis}`}
      delay={index * 0.03}
      style={{ '--media-span': mediaSpan, '--text-span': textSpan }}
    >
      <div
        className="project__media"
        style={{
          gridColumn: `${mediaColumn} / span ${mediaSpan}`,
          gridRow: 1,
        }}
      >
        <Figure
          src={poster}
          alt={project.imageAlt ?? `${project.name} — project screenshot.`}
          tone={project.poster}
          ratio="4 / 3"
          caption={`${project.kind} · ${project.year}`}
          pendingLabel="Screenshot pending"
          overlay={<span className="project__badge label label--tight">{project.id}</span>}
        />
      </div>

      <div
        className="project__body"
        style={{
          gridColumn: `${textColumn} / span ${textSpan}`,
          gridRow: 1,
        }}
      >
        <div className="project__head">
          <h3 className="project__name">{project.name}</h3>
          <span className="project__status label label--tight">{project.status}</span>
        </div>

        <p className="project__description">{project.description}</p>

        {project.note ? (
          <div className="project__note">
            <span className="label label--tight">{project.note.label}</span>
            <p>{project.note.text}</p>
          </div>
        ) : null}

        {project.attribution ? (
          <p className="project__attribution">
            <span aria-hidden="true">*</span> {project.attribution}
          </p>
        ) : null}

        <ul className="project__tech" aria-label={`${project.name} technologies`}>
          {project.tech.map((tech) => (
            <li key={tech}>{tech}</li>
          ))}
        </ul>

        <div className="project__links">
          <a
            className="source-btn"
            href={project.repo}
            target="_blank"
            rel="noreferrer noopener"
          >
            <span className="source-btn__icon" aria-hidden="true">
              <GithubMark size={15} />
            </span>
            <span className="source-btn__label">View source</span>
            <span className="source-btn__arrow" aria-hidden="true">
              <ArrowUpRight size={13} strokeWidth={1.9} />
            </span>
            <span className="sr-only"> (opens {project.name} on GitHub in a new tab)</span>
          </a>

          {project.live ? (
            <a className="source-btn source-btn--ghost" href={project.live} target="_blank" rel="noreferrer noopener">
              <span className="source-btn__label">Live site</span>
              <span className="source-btn__arrow" aria-hidden="true">
                <ArrowUpRight size={13} strokeWidth={1.9} />
              </span>
            </a>
          ) : null}
        </div>
      </div>
    </Reveal>
  );
}
