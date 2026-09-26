import { Link } from 'react-router-dom'
import CountUp from '../components/CountUp'
import Meta from '../components/Meta'
import SecHead from '../components/SecHead'
import Testimonials from '../components/Testimonials'
import { IMG } from '../data/site'
import {
  AWARD,
  DIRECTOR,
  EVENTS,
  GALLERY,
  SERVICES,
  SUCCESS,
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
            <Link to="/founders" className="btn btn-ghost">
              About us
            </Link>
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
          <SecHead title="Our services" action={{ to: '/services', label: 'View all services →' }} />
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

      {/* EVENTS OF BCC */}
      <section className="sec sec-line">
        <div className="wrap">
          <SecHead title="Events of BCC" action={{ to: '/gallery', label: 'View all events →' }} />
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
        </div>
      </section>

      {/* OUR SUCCESS & AWARD */}
      <section id="success" className="sec sec-yellow">
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
            {GALLERY.map((g, i) => (
              <Link key={g.title} to="/gallery" className="hgal-item">
                <img src={g.img} alt={g.title} loading="lazy" />
                <span className="hgal-tag">{g.tag}</span>
                <span className="hgal-idx">{String(i + 1).padStart(2, '0')}</span>
                <div className="hgal-cap">
                  <b>{g.title}</b>
                  <span>{g.caption}</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="sec">
        <div className="wrap">
          <SecHead title="Our testimonials" />
        </div>
        <Testimonials />
      </section>
    </>
  )
}
