import './SectionHeading.css';

export default function SectionHeading({ index, label, lines, meta, className = '', id }) {
  const headingId = id ? `${id}-title` : undefined;

  return (
    <header className={`sec-head ${className}`.trim()}>
      <div className="sec-head__top">
        <span className="label">
          {index ? <span className="sec-head__index">{index}</span> : null}
          {index ? <span aria-hidden="true" className="sec-head__dash" /> : null}
          {label}
        </span>
        {meta ? <span className="label label--tight sec-head__meta">{meta}</span> : null}
      </div>

      <h2 className="sec-head__title display display--sm" id={headingId}>
        {lines.map((line) => (
          <span
            key={line.text}
            className={`display__line${line.accent ? ' display__line--accent' : ''}`}
          >
            {line.text}
          </span>
        ))}
      </h2>
    </header>
  );
}
