import { Link, useParams } from 'react-router-dom'
import Meta from '../components/Meta'
import { SERVICES, SERVICE_BY_ID } from '../data/services'
import NotFound from './NotFound'

export default function Service() {
  const { slug = '' } = useParams()
  const s = SERVICE_BY_ID[slug]
  if (!s) return <NotFound />

  const idx = SERVICES.indexOf(s)
  const no = String(idx + 1).padStart(2, '0')
  const next = SERVICES[(idx + 1) % SERVICES.length]

  return (
    <>
      <Meta
        title={`${s.name} — Beehive Communication Club`}
        description={`${s.lead} ${s.summary}`.slice(0, 300)}
      />

      {/* HEADER — the service's number carries over from the list page */}
      <section className="sd-hero">
        <div className="comb"></div>
        <span className="sd-ghost" aria-hidden="true">
          {no}
        </span>
        <div className="wrap sd-hero-in">
          <div className="crumb">
            <Link to="/">Home</Link> / <Link to="/services">Services</Link> / {s.name}
          </div>
          <span className="sd-kick">
            <i aria-hidden="true">{no}</i>
            {s.kicker}
          </span>
          <h1>{s.name}</h1>
          <p className="sd-lead">{s.lead}</p>
        </div>
      </section>

      {/* SPEC STRIP */}
      <section className="sd-spec-sec">
        <div className="wrap">
          <dl className="sd-spec">
            {s.facts.map((f) => (
              <div key={f.label}>
                <dt>{f.label}</dt>
                <dd>{f.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* BODY */}
      <section className="sd-body-sec">
        <div className="wrap sd-body">
          <p className="sd-summary">{s.summary}</p>
          <ol className="sd-points">
            {s.points.map((t, i) => (
              <li key={t}>
                <i aria-hidden="true">{String(i + 1).padStart(2, '0')}</i>
                <span>{t}</span>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* FOOT */}
      <section className="sd-foot-sec">
        <div className="wrap sd-foot">
          <div>
            <p className="sd-foot-q">Think this is the one?</p>
            <Link to="/contact" className="btn btn-solid">
              Enquire about this
            </Link>
          </div>
          <Link to={`/services/${next.id}`} className="sd-next">
            <span>Next service</span>
            <b>
              {next.name} <i aria-hidden="true">&rarr;</i>
            </b>
          </Link>
        </div>
      </section>
    </>
  )
}
