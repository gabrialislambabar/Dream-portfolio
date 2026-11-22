import { ArrowRight, ArrowUpRight, Mail, MapPin } from 'lucide-react';
import Reveal from '../Reveal';
import { profile } from '../../data/profile';

import './Contact.css';

const CHANNELS = [
  {
    label: 'Email',
    value: profile.email,
    href: `mailto:${profile.email}`,
    arrow: 'right',
  },
  {
    label: 'LinkedIn',
    value: 'linkedin.com/in/muaz-islam-babar',
    href: profile.linkedin,
    arrow: 'out',
  },
  {
    label: 'GitHub',
    value: 'github.com/gabrialislambabar',
    href: profile.github,
    arrow: 'out',
  },
];

const TOPICS = [
  { label: 'Collaboration', subject: 'Collaboration' },
  { label: 'Internship', subject: 'Internship enquiry' },
  { label: 'Junior role', subject: 'Junior full-stack role' },
  { label: 'Other', subject: 'Hello' },
];

export default function Contact() {
  return (
    <section className="section contact" id="contact" aria-labelledby="contact-title">
      <div className="container">
        <Reveal className="contact__panel">
          <span className="contact__stamp label label--tight">Vol. 01 — &rsquo;26</span>

          <header className="contact__eyebrow">
            <span className="label">
              <span className="contact__index">06</span>
              <span aria-hidden="true" className="contact__dash" />
              Contact &amp; availability
            </span>
          </header>

          <h2 className="contact__title display display--xl" id="contact-title">
            <span className="display__line">Let&rsquo;s build</span>
            <span className="display__line display__line--accent">something good.</span>
          </h2>

          <p className="contact__copy">
            Open to collaboration, internships and junior full-stack roles where craft and ownership
            matter. Based in Multan — available remote-first. I reply within a day.
          </p>

          <div className="contact__cards">
            <div className="contact__note-card">
              <div className="contact__note-head">
                <span className="label label--tight">
                  <Mail size={12} strokeWidth={1.9} aria-hidden="true" />
                  Send a note
                </span>
                <span className="label label--tight contact__note-meta">Direct submission</span>
              </div>

              <div className="contact__note-body">
                <p className="contact__note-copy">
                  No form to fill in. Pick a starting point below and your mail client opens with the
                  subject already set — name the team and what you would want me working on.
                </p>

                <ul className="contact__topics" role="list" aria-label="Start an email about">
                  {TOPICS.map((topic) => (
                    <li key={topic.label}>
                      <a
                        className="contact__topic"
                        href={`mailto:${profile.email}?subject=${encodeURIComponent(topic.subject)}`}
                      >
                        {topic.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              <a className="contact__send" href={`mailto:${profile.email}`}>
                <span>Compose email</span>
                <ArrowRight size={14} strokeWidth={2} aria-hidden="true" />
              </a>
            </div>

            <div className="contact__channels">
              <div className="contact__channels-head">
                <span className="label label--tight">
                  <Mail size={12} strokeWidth={1.9} aria-hidden="true" />
                  Correspondence
                </span>
                <span className="label label--tight contact__note-meta">Three channels</span>
              </div>

              <ul className="contact__channel-list" role="list">
                {CHANNELS.map((channel) => (
                  <li key={channel.label}>
                    <a
                      className="contact__channel"
                      href={channel.href}
                      {...(channel.arrow === 'out'
                        ? { target: '_blank', rel: 'noreferrer noopener' }
                        : {})}
                    >
                      <span className="label label--tight contact__channel-label">
                        {channel.label}
                      </span>
                      <span className="contact__channel-value">{channel.value}</span>
                      <span className="contact__channel-arrow" aria-hidden="true">
                        {channel.arrow === 'out' ? (
                          <ArrowUpRight size={14} strokeWidth={1.9} />
                        ) : (
                          <ArrowRight size={14} strokeWidth={1.9} />
                        )}
                      </span>
                    </a>
                  </li>
                ))}
              </ul>

              <div className="contact__located">
                <span className="label label--tight contact__channel-label">Located</span>
                <span className="contact__located-value">
                  <MapPin size={12} strokeWidth={1.8} aria-hidden="true" />
                  {profile.location} · {profile.coordinates}
                </span>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
