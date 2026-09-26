import { Link } from 'react-router-dom'
import Clients from '../components/Clients'
import Formats from '../components/Formats'
import Meta from '../components/Meta'
import SecHead from '../components/SecHead'
import Stats from '../components/Stats'
import { IMG } from '../data/site'
import {
  ACCREDITATIONS,
  CREDBOX,
  EVENTS,
  PROGRAMMES,
  TESTIMONIALS,
} from '../data/homeOptionA'

const onBlack = { color: 'var(--on-black-1)' }

export default function HomeOptionA() {
  return (
    <>
      <Meta
        title="Beehive Communication Club — English Communication Training, Virudhunagar"
        description="Beehive Communication Club trains school students, teachers and professionals in English communication. Authorised Cambridge English training partner, Virudhunagar, Tamil Nadu."
      />

      {/* HERO */}
      <section className="hero">
        <div className="comb"></div>
        <div className="wrap hero-in">
          <div>
            <h1>
              Great messages live <span className="pause">&#8214;</span> between the words.
            </h1>
            <p className="hero-sub">
              We train school students, teachers and working professionals across Tamil Nadu to
              speak English with accuracy, pace and presence — not merely at speed.
            </p>
            <div className="btns">
              <Link to="/services" className="btn btn-solid">
                View our programmes
              </Link>
              <Link to="/contact" className="btn btn-ghost">
                Request a proposal
              </Link>
            </div>
          </div>
          <aside className="credbox">
            <div className="kick">CREDENTIALS</div>
            <p>
              An authorised training partner of Cambridge English Assessment, and a facilitator of
              Gavel Clubs — a global public speaking platform for young speakers.
            </p>
            <ul>
              {CREDBOX.map((c) => (
                <li key={c.label}>
                  {c.label} <b>{c.value}</b>
                </li>
              ))}
            </ul>
          </aside>
        </div>
        <div className="wrap">
          <Stats />
        </div>
      </section>

      {/* WHAT WE DO */}
      <section className="sec">
        <div className="wrap">
          <SecHead title="Five ways institutions work with us">
            Every learner arrives at a different point. We match the format to the person and to the
            institution's calendar, rather than pushing a single syllabus at everyone.
          </SecHead>
          <Formats />
        </div>
      </section>

      {/* PROGRAMMES */}
      <section className="sec sec-white">
        <div className="wrap">
          <SecHead title="Programmes offered">
            Nine programmes, grouped by who they are built for — school students, teaching faculty,
            job aspirants, adults and corporate teams.
          </SecHead>
          <div className="prog">
            {PROGRAMMES.map((p) => (
              <article key={p.title}>
                <span className="tag">{p.tag}</span>
                <h3>{p.title}</h3>
                <p>{p.body}</p>
                <Link to="/services" className="more">
                  Read more
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* DIRECTOR */}
      <section className="sec">
        <div className="wrap split">
          <div className="hexphoto">
            <img src={`${IMG}/image/aboutus_profile_picture.jpg`} alt="A. Shyamraj, Director" loading="lazy" />
          </div>
          <div className="stack">
            <blockquote className="pull">
              &ldquo;The most precious things in speech are the <span>pauses</span>.&rdquo;
            </blockquote>
            <p style={{ marginTop: 26, ...onBlack }}>
              Many non-native speakers believe fluency means speaking fast. It does not. Fluency is
              the result of handling three things well — accuracy, using the right words; rate, a
              speed at which every word is actually heard; and prosody, the expression carried in
              the voice.
            </p>
            <p style={onBlack}>
              We avoid pauses because we fear the audience will think we have lost our place. But a
              pause placed on purpose is exactly what makes a speaker sound thoughtful and credible.
              That is what we teach here.
            </p>
            <div className="sign">
              <b>A. Shyamraj</b>
              <span>Founder &amp; Director</span>
            </div>
            <div className="btns" style={{ marginTop: 26 }}>
              <Link to="/founders" className="btn btn-ghost">
                More about us
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* INITIATIVES */}
      <section className="sec sec-line">
        <div className="wrap">
          <SecHead title="Recognition and initiatives">
            Beyond the classroom, we run platforms that give learners a real stage on which to use
            what they have practised.
          </SecHead>
          <div className="accred">
            {ACCREDITATIONS.map((a) => (
              <article key={a.title}>
                <img src={a.img} alt={a.alt} loading="lazy" />
                <div className="pad">
                  <h3>{a.title}</h3>
                  <p>{a.body}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* EVENTS */}
      <section className="sec">
        <div className="wrap">
          <SecHead title="Recent events" />
          <div className="events">
            {EVENTS.map((e) => (
              <Link className="ev" to="/gallery" key={`${e.yr}-${e.title}`}>
                <span className="yr">{e.yr}</span>
                <h3>{e.title}</h3>
                <span className="place">{e.place}</span>
                <span className="go">View</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="sec sec-line">
        <div className="wrap">
          <SecHead title="What learners tell us" />
          <div className="tst">
            {TESTIMONIALS.map((t) => (
              <article key={t.name}>
                <div className="qm">&ldquo;</div>
                <p>{t.quote}</p>
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

      {/* CLIENTS */}
      <section className="sec sec-white">
        <div className="wrap">
          <SecHead title="Institutions we work with" />
          <Clients />
        </div>
      </section>
    </>
  )
}
