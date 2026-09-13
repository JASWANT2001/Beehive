import { Link } from 'react-router-dom'
import Clients from '../components/Clients'
import Cta from '../components/Cta'
import Meta from '../components/Meta'
import SecHead from '../components/SecHead'
import { IMG } from '../data/site'
import {
  CREDENTIALS,
  DOORS,
  EDIT_FIGS,
  LATEST,
  PROGRAMME_INDEX,
  RIBBON,
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
          <span className="eyebrow">ENGLISH COMMUNICATION TRAINING SINCE 2016</span>
          <h1>
            Great messages live <span className="pause">&#8214;</span> between the words.
          </h1>
          <p className="vhero-sub">
            We train school students, teaching faculty and working professionals across Tamil Nadu
            to speak English with accuracy, pace and presence.
          </p>
          <div className="btns">
            <Link to="/contact" className="btn btn-solid">
              Request a proposal
            </Link>
            <Link to="/services" className="btn btn-ghost">
              View programmes
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

      {/* AUDIENCE DOORS */}
      <section className="sec" style={{ paddingBottom: 0 }}>
        <div className="wrap">
          <SecHead title="Where would you like to start?">
            Three routes into our work. Choose the one that describes you and we will point you to
            the right programme.
          </SecHead>
        </div>
        <div className="wrap">
          <div className="doors">
            {DOORS.map((d) => (
              <Link key={d.title} to={d.to}>
                <span className="who">{d.who}</span>
                <h3>{d.title}</h3>
                <p>{d.body}</p>
                <ul>
                  {d.items.map((i) => (
                    <li key={i}>{i}</li>
                  ))}
                </ul>
                <span className="go">{d.go}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* EDITORIAL INTRO */}
      <section className="sec">
        <div className="wrap edit">
          <div className="edit-head">
            <div className="rule"></div>
            <h2>Communication is a skill, not a talent</h2>
          </div>
          <div className="edit-body">
            <p>
              Beehive Communication Club is an English communication training organisation based in
              Virudhunagar. We work with schools, colleges, teacher-training institutions and
              corporate teams, delivering structured programmes on campus and online.
            </p>
            <p>
              What separates a training programme from a series of talks is measurement. Every batch
              we take on begins with a spoken and written baseline, so learners are grouped by level
              rather than by age, and closes with a re-assessment against that same baseline.
              Institutions receive a written report covering attendance, level movement and
              individual learner notes.
            </p>
            <p>
              Learners who want an external credential can sit a Cambridge English assessment at the
              end. We are an authorised training partner, which means that result carries the same
              weight in Virudhunagar as it does anywhere else in the world.
            </p>
            <div className="edit-figs">
              {EDIT_FIGS.map((f) => (
                <div key={f.label}>
                  <b>{f.value}</b>
                  <span>{f.label}</span>
                </div>
              ))}
            </div>
            <div className="btns" style={{ marginTop: 36 }}>
              <Link to="/about" className="btn btn-ghost">
                More about the organisation
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* PROGRAMME INDEX */}
      <section className="sec sec-line">
        <div className="wrap">
          <SecHead title="Programme index">
            Nine programmes across five delivery formats. Everything we run, on one page.
          </SecHead>

          <div className="ix-head">
            <span>NO.</span>
            <span>PROGRAMME</span>
            <span>WHO IT IS FOR</span>
            <span>FORMAT</span>
          </div>
          <div className="index-list">
            {PROGRAMME_INDEX.map((p) => (
              <Link key={p.no} className="ix" to="/services">
                <span className="no">{p.no}</span>
                <span className="nm">{p.name}</span>
                <span className="aud">{p.aud}</span>
                <span className="fmt">{p.fmt}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* DIRECTOR SPREAD */}
      <section className="spread">
        <div className="spread-img">
          <img
            src={`${IMG}/image/aboutus_profile_picture.jpg`}
            alt="A. Shyamraj, Founder and Director"
            loading="lazy"
          />
        </div>
        <div className="spread-txt">
          <blockquote>&ldquo;The most precious things in speech are the pauses.&rdquo;</blockquote>
          <p>
            Many non-native speakers believe fluency means speaking fast. It does not. Fluency is the
            effective handling of three components &mdash; accuracy, the right words; rate, a speed
            at which every word is actually heard; and prosody, the expression carried in the voice.
          </p>
          <p>
            We avoid pauses because we fear the audience will think we have lost our place. But a
            pause placed on purpose is exactly what makes a speaker sound thoughtful and credible.
            That is what we teach here.
          </p>
          <div className="spread-sign">
            <b>A. Shyamraj</b>
            <span>Founder &amp; Director, Beehive Communication Club</span>
          </div>
        </div>
      </section>

      {/* CREDENTIALS */}
      <section className="sec">
        <div className="wrap">
          <SecHead title="Recognition and initiatives" />
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

      {/* PROOF */}
      <section className="sec sec-white">
        <div className="wrap">
          <div className="bigquote">
            <div className="qm">&ldquo;</div>
            <div>
              <blockquote>
                My trainer was responsive and always conscious of my improvement. He never hesitated
                to correct my mistakes, gave easy examples, and never failed to encourage me. All of
                the training has been useful to me.
              </blockquote>
              <div className="who">
                <img src={`${IMG}/images/testimonials_man1.png`} alt="" loading="lazy" />
                <div>
                  <b>Mr. Riyaz</b>
                  <span>Programme participant, Dubai</span>
                </div>
              </div>
            </div>
          </div>

          <div style={{ marginTop: 'clamp(40px,5vw,70px)' }}>
            <Clients />
          </div>
        </div>
      </section>

      {/* LATEST WRITING */}
      <section className="sec">
        <div className="wrap">
          <SecHead title="Latest writing" />
          <div className="latest">
            {LATEST.map((a) => (
              <article key={a.title}>
                <img src={a.img} alt="" loading="lazy" />
                <div className="pad">
                  <div className="meta">{a.meta}</div>
                  <h3>{a.title}</h3>
                  <p>{a.body}</p>
                </div>
              </article>
            ))}
          </div>
          <div className="btns" style={{ marginTop: 34 }}>
            <Link to="/blog" className="btn btn-ghost">
              All articles
            </Link>
          </div>
        </div>
      </section>

      <Cta
        title="Bring Beehive to your institution"
        body="Share the year group, batch size and your calendar. We respond with a written proposal within two working days."
      />
    </>
  )
}
