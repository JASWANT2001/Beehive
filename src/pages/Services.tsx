import { Link } from 'react-router-dom'
import Cta from '../components/Cta'
import Meta from '../components/Meta'
import { SERVICES } from '../data/services'

export default function Services() {
  return (
    <>
      <Meta
        title="Our Services — Beehive Communication Club"
        description="One-on-one coaching, group coaching, year-long school programmes, crash courses and Cambridge English certification from Beehive Communication Club."
      />

      {/* OPENING STATEMENT */}
      <section className="sv-open">
        <div className="comb"></div>
        <div className="wrap sv-open-in">
          <div className="crumb">
            <Link to="/">Home</Link> / Services
          </div>
          <div className="sv-open-grid">
            <div className="sv-count" aria-hidden="true">
              05
            </div>
            <div>
              <span className="eyebrow">WHAT WE DO</span>
              <h1>
                Five ways we get people <em>speaking.</em>
              </h1>
              <p className="sv-hook">
                Everything we run is one of five services. Pick the one that fits how you want to
                learn — each opens a full page with the programmes behind it.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* THE FIVE SERVICES */}
      <section className="sec">
        <div className="wrap">
          <ol className="sv-list">
            {SERVICES.map((s, i) => (
              <li key={s.id}>
                <Link to={`/services/${s.id}`} className="sv-line">
                  <span className="sv-line-n" aria-hidden="true">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <span className="sv-line-txt">
                    <b>{s.name}</b>
                    <span className="sv-line-lead">{s.lead}</span>
                  </span>
                  <span className="sv-line-go" aria-hidden="true">
                    &rarr;
                  </span>
                </Link>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <Cta
        title="Not sure which one fits?"
        body="Tell us who the learners are. We will point you to the right one."
        action="Talk to our team"
      />
    </>
  )
}
