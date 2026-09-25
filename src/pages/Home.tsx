import { Link } from 'react-router-dom'
import Clients from '../components/Clients'
import CountUp from '../components/CountUp'
import Cta from '../components/Cta'
import Meta from '../components/Meta'
import SecHead from '../components/SecHead'
import { IMG } from '../data/site'
import {
  AWARD,
  CREDENTIALS,
  DIRECTOR,
  EVENTS,
  GALLERY,
  PROGRAMMES,
  RIBBON,
  SERVICES,
  SUCCESS,
  TESTIMONIALS,
  VIDEO,
} from '../data/home'

// Events of BCC layout: 'panels' (hover-expand strips) or 'mosaic' (photo grid).
const EVENTS_LAYOUT: 'panels' | 'mosaic' = 'panels'

export default function Home() {
  return (
    <>
      <Meta
        title="Beehive Communication Club — English Communication Training, Virudhunagar"
        description="Beehive Communication Club trains school students, teachers and professionals in English communication. Authorised Cambridge English training partner, Virudhunagar, Tamil Nadu."
      />

      {/* HERO */}
      <section className="vhero">
        <div className="vhero-bg">
          <img src={`${IMG}/image/bccbanner2.jpeg`} alt="" />
        </div>
        <div className="vhero-veil"></div>
        <div className="comb"></div>

        <div className="wrap vhero-in">
          <span className="eyebrow">BEEHIVE COMMUNICATION CLUB · VIRUDHUNAGAR</span>
          <h1>
            Great messages are conveyed <span className="pause">&#8214;</span> between words.
          </h1>
          <p className="vhero-sub">
            Making communication skills a tasty dish for all.
          </p>
          <div className="btns">
            <Link to="/contact" className="btn btn-solid">
              Work with us
            </Link>
            <Link to="/about" className="btn btn-ghost">
              About us
            </Link>
          </div>
        </div>

        <div className="ribbon">
          <div className="wrap ribbon-in">
            {RIBBON.map((r) => (
              <div key={r.title}>
                <b>{r.title}</b>
                <span>{r.note}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* DIRECTOR'S MESSAGE */}
      <section className="spread">
        <div className="spread-img">
          <img src={DIRECTOR.img} alt={`${DIRECTOR.name}, Director`} loading="lazy" />
        </div>
        <div className="spread-txt">
          <h2 className="spread-title">{DIRECTOR.title}</h2>
          <blockquote>{DIRECTOR.quote}</blockquote>
          {DIRECTOR.paras.map((p) => (
            <p key={p}>{p}</p>
          ))}
          <div className="spread-sign">
            <b>{DIRECTOR.name}</b>
            <span>{DIRECTOR.role}</span>
          </div>
        </div>
      </section>

      {/* OUR SERVICES */}
      <section className="sec">
        <div className="wrap">
          <SecHead title="Our services" />
          <div className="grid-5 grid-5-links">
            {SERVICES.map((s) => (
              <Link key={s.title} to={s.to}>
                <h3>{s.title}</h3>
                <p>{s.body}</p>
                <span className="more">Know more &rarr;</span>
              </Link>
            ))}
          </div>
          <a className="home-video" href={VIDEO.href} target="_blank" rel="noopener noreferrer">
            <img src={VIDEO.img} alt="" loading="lazy" />
            <span>&#9654; Watch video</span>
          </a>
        </div>
      </section>

      {/* PROGRAMMES OFFERED */}
      <section className="sec sec-line">
        <div className="wrap">
          <SecHead title="Programmes offered">
            For students, teachers, adults and teams.
          </SecHead>
          <div className="prog">
            {PROGRAMMES.map((p) => (
              <article key={p.title}>
                <span className="tag">{p.tag}</span>
                <h3>{p.title}</h3>
                <p>{p.body}</p>
                <Link to={p.to} className="more">
                  Read more
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* EVENTS OF BCC */}
      <section className="sec sec-line">
        <div className="wrap">
          <SecHead title="Events of BCC" />
          {EVENTS_LAYOUT === 'panels' ? (
            <div className="ev-panels">
              {EVENTS.map((e, i) => (
                <Link key={e.title} to="/gallery" className="ev-panel">
                  <img src={e.img} alt="" loading="lazy" />
                  <span className="ev-num">{String(i + 1).padStart(2, '0')}</span>
                  <span className="ev-vlabel" aria-hidden="true">{e.title}</span>
                  <div className="ev-cap">
                    <div className="ev-meta">{e.meta}</div>
                    <h3>{e.title}</h3>
                  </div>
                </Link>
              ))}
            </div>
          ) : (
            <div className="ev-mosaic">
              {EVENTS.map((e, i) => (
                <Link key={e.title} to="/gallery" className="ev-tile">
                  <img src={e.img} alt="" loading="lazy" />
                  <span className="ev-num">{String(i + 1).padStart(2, '0')}</span>
                  <div className="ev-cap">
                    <div className="ev-meta">{e.meta}</div>
                    <h3>{e.title}</h3>
                  </div>
                </Link>
              ))}
            </div>
          )}
          <div className="btns" style={{ marginTop: 34 }}>
            <Link to="/gallery" className="btn btn-ghost">
              View more
            </Link>
          </div>
        </div>
      </section>

      {/* OUR SUCCESS & AWARD */}
      <section className="sec sec-yellow">
        <div className="wrap">
          <SecHead title="Our success & award" />
          <div className="win">
            <figure className="win-award">
              <img src={AWARD.img} alt={AWARD.title} loading="lazy" />
              <figcaption>
                <span className="win-kicker">&#9733; {AWARD.kicker}</span>
                <h3>{AWARD.title}</h3>
                <span className="win-note">{AWARD.note}</span>
                <span className="win-badge">{AWARD.badge}</span>
              </figcaption>
            </figure>
            <div className="win-stats">
              {SUCCESS.map((s, i) => (
                <div key={s.label} className="win-stat">
                  <span className="win-idx">{String(i + 1).padStart(2, '0')}</span>
                  <b>
                    <CountUp value={s.value} />
                  </b>
                  <span className="win-label">{s.label}</span>
                  <span className="win-sub">{s.note}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* PHOTO GALLERY */}
      <section className="sec">
        <div className="wrap">
          <div className="hgal-head">
            <div>
              <span className="hgal-kick">OUR MOMENTS</span>
              <h2>Photo gallery</h2>
            </div>
            <Link to="/gallery" className="hgal-all">
              View full gallery &rarr;
            </Link>
          </div>
          <div className="hgal">
            {GALLERY.map((g) => (
              <Link key={g.title} to="/gallery" className="hgal-item">
                <div className="hgal-img">
                  <img src={g.img} alt={g.title} loading="lazy" />
                </div>
                <b>{g.title}</b>
                <span>{g.caption}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* OUR EVENTS AND INITIATIVES */}
      <section className="sec sec-line">
        <div className="wrap">
          <SecHead title="Our events and initiatives" />
          <div className="creds">
            {CREDENTIALS.map((c) => (
              <article key={c.title}>
                <img src={c.img} alt="" loading="lazy" />
                <div>
                  <h3>{c.title}</h3>
                  <p>{c.body}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* OUR CLIENTS */}
      <section className="sec sec-white">
        <div className="wrap">
          <SecHead title="Our clients" />
          <Clients />
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="sec">
        <div className="wrap">
          <SecHead title="Our testimonials" />
          <div className="tst">
            {TESTIMONIALS.map((t) => (
              <article key={t.name}>
                <div className="qm">&ldquo;</div>
                <p>{t.body}</p>
                <div className="who">
                  <img src={t.img} alt="" loading="lazy" />
                  <div>
                    <b>{t.name}</b>
                    <span>{t.place}</span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* GET IN TOUCH */}
      <Cta
        title="Get in touch"
        body="Call 9750207464 / 8778593044 or email hr@beehivecommunicationclub.com."
        action="Contact us"
      />
    </>
  )
}
