import Reveal from '../Reveal';
import SectionHeading from '../SectionHeading';
import ProjectItem from './ProjectItem';
import { projects } from '../../data/projects';

import './Projects.css';

export default function Projects() {
  return (
    <section className="section section--ruled projects" id="projects" aria-labelledby="projects-title">
      <div className="container">
        <Reveal>
          <SectionHeading
            id="projects"
            index="04"
            label="Selected projects"
            meta="Two repositories · Learning by building"
            lines={[{ text: 'Projects worth' }, { text: 'building.', accent: true }]}
          />
        </Reveal>

        <Reveal className="projects__intro" delay={0.04}>
          <p>
            Each of these began as a question I wanted to answer in code. Both are public, and both
            are presented with my actual contribution stated plainly.
          </p>
          <a
            className="link-quiet projects__all"
            href="https://github.com/gabrialislambabar"
            target="_blank"
            rel="noreferrer noopener"
          >
            All repositories on GitHub
            <span className="sr-only"> (opens your GitHub profile in a new tab)</span>
          </a>
        </Reveal>

        <div className="projects__list">
          {projects.map((project, index) => (
            <div className="projects__item" key={project.slug}>
              <ProjectItem project={project} index={index} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
