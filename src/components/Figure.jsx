import { useState } from 'react';
import './Figure.css';

export default function Figure({
  src,
  alt,
  tone = 'sand',
  ratio = '4 / 5',
  priority = false,
  caption,
  pendingLabel = 'Image pending',
  overlay,
  className = '',
  children,
}) {
  const [loaded, setLoaded] = useState(false);

  return (
    <figure className={`figure ${className}`.trim()}>
      <div className="figure__media" style={{ '--ratio': ratio }}>
        {src ? (
          <img
            className={`figure__img${loaded ? ' is-loaded' : ''}`}
            src={src}
            alt={alt}
            loading={priority ? 'eager' : 'lazy'}
            decoding={priority ? 'sync' : 'async'}
            fetchPriority={priority ? 'high' : 'auto'}
            onLoad={() => setLoaded(true)}
          />
        ) : (
          <div
            className={`figure__placeholder figure__placeholder--${tone}`}
            role="img"
            aria-label={alt}
          >
            <span className="figure__pending">{pendingLabel}</span>
          </div>
        )}
        {overlay}
      </div>
      {caption ? <figcaption className="figure__caption label label--tight">{caption}</figcaption> : null}
      {children}
    </figure>
  );
}
