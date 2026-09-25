import { Link } from 'react-router-dom'
import Cta from '../components/Cta'
import Meta from '../components/Meta'
import { GROUPS, type Course } from '../data/services'

// Running number across every group: 01 … 09.
const NUMBERED = GROUPS.flatMap((g) => g.courses).map((c, i) => [c.id, String(i + 1).padStart(2, '0')])
const NUM = Object.fromEntries(NUMBERED) as Record<string, string>

function CourseCard({ c }: { c: Course }) {
  return (
    <article className="sv-card" id={c.id}>
      <div className="sv-card-top">
        <span className="sv-num">{NUM[c.id]}</span>
        <ul className="sv-facts">
          {c.facts.map((f) => (
            <li key={f}>{f}</li>
          ))}
        </ul>
      </div>
      <h3>{c.name}</h3>
      <p className="sv-summary">{c.summary}</p>
      <ul className="sv-topics">
        {c.topics.map((t) => (
          <li key={t}>{t}</li>
        ))}
      </ul>
      <div className="sv-links">
        <Link to={`/services/${c.id}`} className="sv-more">
          Know more &rarr;
        </Link>
        {/* Enquire button hidden — uncomment to show it again.
        <Link to="/contact" className="sv-enquire">
          Enquire
        </Link>
        */}
      </div>
    </article>
  )
}

export default function Services() {
  return (
    <>
      <Meta
        title="Programmes Offered — Beehive Communication Club"
        description="Odyssey, Vista, Project Punch, Nurture, Aspirant Q, Proficient Communicator, Project Elite and corporate training from Beehive Communication Club."
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
              {String(NUMBERED.length).padStart(2, '0')}
            </div>
            <div>
              <span className="eyebrow">OUR PROGRAMMES</span>
              <h1>
                From first words to <em>confident voices.</em>
              </h1>
              <p className="sv-hook">
                Year-long school programmes, 50-hour courses and corporate sessions, built for
                students, teachers, adults and teams. Find the one that fits and we'll take it
                from there.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* PROGRAMME FINDER */}
      <section className="sv-finder-sec">
        <div className="wrap">
          <nav className="sv-finder" aria-label="Programmes">
            {GROUPS.map((g) => (
              <div key={g.id}>
                <span className="sv-finder-k">{g.kicker}</span>
                <ul>
                  {g.courses.map((c) => (
                    <li key={c.id}>
                      <Link to={`#${c.id}`}>
                        <span>{NUM[c.id]}</span>
                        {c.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </nav>
        </div>
      </section>

      {GROUPS.map((g) => (
        <section key={g.id} id={g.id} className="sv-group">
          <div className="sv-band">
            <div className="wrap sv-band-in">
              <div>
                <span className="sv-band-k">{g.kicker}</span>
                <h2>{g.title}</h2>
              </div>
              {g.intro ? (
                <div className="sv-band-side">
                  <p className="sv-band-intro">{g.intro}</p>
                  {g.id === 'in-house' ? (
                    <Link to="/services/in-house" className="sv-band-link">
                      About our in-house courses &rarr;
                    </Link>
                  ) : null}
                </div>
              ) : null}
            </div>
          </div>
          <div className="wrap sv-cards">
            {g.courses.map((c) => (
              <CourseCard key={c.id} c={c} />
            ))}
          </div>
        </section>
      ))}

      <Cta
        title="Not sure which programme fits?"
        body="Call 9750207464 or 8778593044, or write to hr@beehivecommunicationclub.com."
        action="Contact us"
      />
    </>
  )
}
