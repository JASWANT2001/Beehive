import { Link } from 'react-router-dom'
import Clients from '../components/Clients'
import Cta from '../components/Cta'
import Meta from '../components/Meta'
import SecHead from '../components/SecHead'
import { IMG } from '../data/site'
import {
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
            To take the practices of communication skills as a tasty dish to all and keep the minds
            open for exposures in that field.
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
          <div className="grid-5">
            {SERVICES.map((s) => (
              <div key={s.title}>
                <h3>{s.title}</h3>
                <p>{s.body}</p>
              </div>
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
            Programmes for school students, teachers, adults, professionals and corporate teams.
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
          <div className="latest">
            {EVENTS.map((e) => (
              <article key={e.title}>
                <img src={e.img} alt="" loading="lazy" />
                <div className="pad">
                  <div className="meta">{e.meta}</div>
                  <h3>{e.title}</h3>
                </div>
              </article>
            ))}
          </div>
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
          <div className="stats">
            {SUCCESS.map((s) => (
              <div key={s.label}>
                <b>{s.value}</b>
                <span>{s.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PHOTO GALLERY */}
      <section className="sec">
        <div className="wrap">
          <SecHead title="Photo gallery" />
          <div className="gal">
            {GALLERY.map((g) => (
              <figure key={g.title}>
                <img src={g.img} alt={g.title} loading="lazy" />
                <figcaption>
                  <b>{g.title}</b>
                  <span>{g.caption}</span>
                </figcaption>
              </figure>
            ))}
          </div>
          <div className="btns" style={{ marginTop: 34 }}>
            <Link to="/gallery" className="btn btn-ghost">
              View gallery
            </Link>
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
        body="Call 9750207464 or 8778593044, or write to hr@beehivecommunicationclub.com. Church Rd, Sivagami Puram, Virudhunagar, Tamil Nadu."
        action="Contact us"
      />
    </>
  )
}
