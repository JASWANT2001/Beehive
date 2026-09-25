import { Link, useParams } from 'react-router-dom'
import Cta from '../components/Cta'
import Meta from '../components/Meta'
import { PROGRAMME_BY_SLUG, PROGRAMME_PAGES, type ProgrammeSection } from '../data/programmes'
import NotFound from './NotFound'

function Section({ s }: { s: ProgrammeSection }) {
  return (
    <div className="pg-block">
      <h2 className="pg-h">{s.title}</h2>
      {s.style === 'cards' ? (
        <ol className="pg-cards">
          {s.items.map((it, i) => (
            <li key={it.text}>
              <span className="pg-cards-n">{String(i + 1).padStart(2, '0')}</span>
              {it.label ? (
                <>
                  <b>{it.label}</b>
                  <p>{it.text}</p>
                </>
              ) : (
                <b>{it.text}</b>
              )}
            </li>
          ))}
        </ol>
      ) : s.style === 'checks' ? (
        <ul className="pg-checks">
          {s.items.map((it) => (
            <li key={it.text}>
              <span className="pg-tick" aria-hidden="true">
                &#10003;
              </span>
              <div>
                {it.label ? <b>{it.label}</b> : null}
                <p>{it.text}</p>
              </div>
            </li>
          ))}
        </ul>
      ) : (
        <ul className="pg-chips">
          {s.items.map((it) => (
            <li key={it.text}>{it.text}</li>
          ))}
        </ul>
      )}
    </div>
  )
}

export default function Programme() {
  const { slug = '' } = useParams()
  const p = PROGRAMME_BY_SLUG[slug]
  if (!p) return <NotFound />

  const idx = PROGRAMME_PAGES.indexOf(p)
  const prev = PROGRAMME_PAGES[(idx - 1 + PROGRAMME_PAGES.length) % PROGRAMME_PAGES.length]
  const next = PROGRAMME_PAGES[(idx + 1) % PROGRAMME_PAGES.length]

  return (
    <>
      <Meta
        title={`${p.name} — Beehive Communication Club`}
        description={`${p.tagline} ${p.intro[0]}`.slice(0, 300)}
      />

      {/* HERO */}
      <section className="pg-hero">
        <div className="pg-hero-bg">
          <img src={p.banner} alt="" />
        </div>
        <div className="pg-hero-veil"></div>
        <div className="comb"></div>
        <div className="wrap pg-hero-in">
          <div className="crumb">
            <Link to="/">Home</Link> / <Link to="/services">Services</Link> / {p.name}
          </div>
          <span className="eyebrow">{p.kicker}</span>
          <h1>{p.name}</h1>
          <p className="pg-tagline">{p.tagline}</p>
          <ul className="pg-hero-facts">
            {p.facts.map((f) => (
              <li key={f.label}>
                <span>{f.label}</span>
                {f.value}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* BODY */}
      <section className="sec">
        <div className="wrap pg-body">
          <div className="pg-main">
            <div className="pg-intro">
              {p.intro.map((t, i) => (
                <p key={i} className={i === 0 ? 'pg-lead' : undefined}>
                  {t}
                </p>
              ))}
            </div>

            {p.highlights ? (
              <div className="pg-highlights">
                {p.highlights.map((h) => (
                  <div key={h.label}>
                    <b>{h.value}</b>
                    <span>{h.label}</span>
                  </div>
                ))}
              </div>
            ) : null}

            {p.sections?.map((s) => <Section key={s.title} s={s} />)}

            {p.courses ? (
              <div className="pg-block">
                <h2 className="pg-h">Our course offerings</h2>
                <div className="pg-courses">
                  {p.courses.map((c) => {
                    const cp = PROGRAMME_BY_SLUG[c]
                    return (
                      <Link key={c} to={`/services/${c}`} className="pg-course">
                        <img src={cp.img} alt="" loading="lazy" />
                        <div>
                          <span className="pg-course-k">{cp.kicker}</span>
                          <h3>{cp.name}</h3>
                          <p>{cp.tagline}</p>
                          <span className="pg-more">Know more &rarr;</span>
                        </div>
                      </Link>
                    )
                  })}
                </div>
              </div>
            ) : null}
          </div>

          <aside className="pg-side">
            <figure className="pg-photo">
              <img src={p.img} alt={p.name} loading="lazy" />
            </figure>
            <div className="pg-card">
              <span className="pg-card-k">AT A GLANCE</span>
              <dl>
                {p.facts.map((f) => (
                  <div key={f.label}>
                    <dt>{f.label}</dt>
                    <dd>{f.value}</dd>
                  </div>
                ))}
              </dl>
              <Link to="/contact" className="cta-btn pg-enquire">
                <span>Enquire about {p.name}</span>
                <span className="cta-btn-arrow" aria-hidden="true">
                  &rarr;
                </span>
              </Link>
            </div>
          </aside>
        </div>
      </section>

      {p.closing ? (
        <section className="pg-closing">
          <div className="wrap">
            <p>{p.closing}</p>
          </div>
        </section>
      ) : null}

      {/* PREV / NEXT */}
      <nav className="wrap pg-pager" aria-label="More programmes">
        <Link to={`/services/${prev.slug}`}>
          <span>&larr; Previous</span>
          <b>{prev.name}</b>
        </Link>
        <Link to="/services" className="pg-pager-all">
          All programmes
        </Link>
        <Link to={`/services/${next.slug}`} className="pg-pager-next">
          <span>Next &rarr;</span>
          <b>{next.name}</b>
        </Link>
      </nav>

      <Cta
        title={`Interested in ${p.name}?`}
        body="Call 9750207464 or 8778593044, or write to hr@beehivecommunicationclub.com."
        action="Contact us"
      />
    </>
  )
}
