import { Link } from 'react-router-dom'
import Cta from '../components/Cta'
import Meta from '../components/Meta'
import { ABOUT_FACTS, FOUNDER, MISSION, MISSION_OUTCOMES, VISION } from '../data/about'

export default function About() {
  return (
    <>
      <Meta
        title="About — Beehive Communication Club"
        description="Beehive is a training organization started in August 2012, training school students, college students and corporate resources on Communicative English and other Soft Skills."
      />

      {/* OPENING STATEMENT */}
      <section className="ab-open">
        <div className="comb"></div>
        <div className="wrap ab-open-in">
          <div className="crumb">
            <Link to="/">Home</Link> / About
          </div>
          <div className="ab-open-grid">
            <div className="ab-year" aria-hidden="true">
              20<span>12</span>
            </div>
            <div>
              <span className="eyebrow">ABOUT BEEHIVE</span>
              <h1>
                Training in <em>communicative English</em> and soft skills.
              </h1>
            </div>
          </div>
        </div>

        <dl className="wrap ab-facts">
          {ABOUT_FACTS.map((f) => (
            <div key={f.label}>
              <dt>{f.label}</dt>
              <dd>{f.value}</dd>
            </div>
          ))}
        </dl>
      </section>

      {/* FOUNDER */}
      <section className="ab-founder">
        <div className="wrap ab-founder-in">
          <div className="ab-founder-txt">
            <span className="ab-kick">HE BELIEVES</span>
            <p className="ab-belief">&ldquo;{FOUNDER.belief}&rdquo;</p>
            <p className="ab-founder-body">{FOUNDER.body}</p>
            <div className="ab-name">
              <b>{FOUNDER.name}</b>
              <span>{FOUNDER.role}</span>
            </div>
          </div>
          <figure className="ab-portrait">
            <img src={FOUNDER.img} alt={`${FOUNDER.name}, ${FOUNDER.role}`} loading="lazy" />
          </figure>
        </div>
      </section>

      {/* MISSION */}
      <section className="sec">
        <div className="wrap ab-mv">
          <div className="ab-mv-label">
            <span>01</span>
            <h2>Our Mission</h2>
          </div>
          <div>
            <p className="ab-mission">{MISSION}</p>
            <ul className="ab-outcomes">
              {MISSION_OUTCOMES.map((o) => (
                <li key={o}>{o}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* VISION */}
      <section className="sec sec-line">
        <div className="wrap ab-mv">
          <div className="ab-mv-label">
            <span>02</span>
            <h2>Our Vision</h2>
          </div>
          <ol className="ab-vision">
            {VISION.map((v) => (
              <li key={v}>{v}</li>
            ))}
          </ol>
        </div>
      </section>

      <Cta
        title="Work with us"
        body="Call 9750207464 / 8778593044 or email hr@beehivecommunicationclub.com."
        action="Contact us"
      />
    </>
  )
}
