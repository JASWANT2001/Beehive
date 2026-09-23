import { Link } from 'react-router-dom'
import Cta from '../components/Cta'
import Meta from '../components/Meta'
import { GROUPS, type Course } from '../data/services'

// Running number across every group: 01 … 09.
const NUMBERED = GROUPS.flatMap((g) => g.courses).map((c, i) => [c.id, String(i + 1).padStart(2, '0')])
const NUM = Object.fromEntries(NUMBERED) as Record<string, string>

function CourseBlock({ c }: { c: Course }) {
  return (
    <article className="sv-course" id={c.id}>
      <header className="sv-side">
        <span className="sv-num">{NUM[c.id]}</span>
        <h3>{c.name}</h3>
        <ul className="sv-facts">
          {c.facts.map((f) => (
            <li key={f}>{f}</li>
          ))}
        </ul>
        <Link to="/contact" className="sv-enquire">
          Enquire about {c.name} &rarr;
        </Link>
      </header>

      <div className="sv-main">
        <p className="sv-tagline">{c.tagline}</p>
        <div className="sv-paras">
          {c.paras.map((p) => (
            <p key={p}>{p}</p>
          ))}
        </div>

        {c.lists?.map((l) => {
          const detailed = l.items.some((i) => i.body)
          return (
            <div className="sv-list" key={l.heading}>
              <h4>{l.heading}</h4>
              {detailed ? (
                <dl className="sv-points">
                  {l.items.map((i) => (
                    <div key={i.title}>
                      <dt>{i.title}</dt>
                      <dd>{i.body}</dd>
                    </div>
                  ))}
                </dl>
              ) : (
                <ul className="sv-ticks">
                  {l.items.map((i) => (
                    <li key={i.title}>{i.title}</li>
                  ))}
                </ul>
              )}
            </div>
          )
        })}

        {c.closing ? <p className="sv-closing">{c.closing}</p> : null}
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

      {/* OPENING + PROGRAMME FINDER */}
      <section className="sv-open">
        <div className="comb"></div>
        <div className="wrap sv-open-in">
          <div className="crumb">
            <Link to="/">Home</Link> / Services
          </div>
          <span className="eyebrow">WHAT WE DO</span>
          <h1>Programmes offered</h1>
          <p className="sv-lead">
            For school students, teachers, college students, adults, working professionals and
            corporate teams. Pick a programme to jump to it.
          </p>

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
                <div className="sv-band-intro">
                  {g.intro.map((p) => (
                    <p key={p}>{p}</p>
                  ))}
                </div>
              ) : null}
            </div>
          </div>
          <div className="wrap">
            {g.courses.map((c) => (
              <CourseBlock key={c.id} c={c} />
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
