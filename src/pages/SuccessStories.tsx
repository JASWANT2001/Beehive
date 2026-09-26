import Banner from '../components/Banner'
import CountUp from '../components/CountUp'
import Cta from '../components/Cta'
import Meta from '../components/Meta'
import SecHead from '../components/SecHead'
import { TESTIMONIALS } from '../data/home'
import { ACHIEVEMENTS, BACKDROP, HERO_STATS } from '../data/successStories'

export default function SuccessStories() {
  const [lead] = TESTIMONIALS

  return (
    <>
      <Meta
        title="Success Stories — Beehive Communication Club"
        description="Student achievements and testimonials from the parents, learners and professionals trained by Beehive Communication Club."
      />

      <Banner
        crumb="Success Stories"
        title="What our students go on to do"
        intro="The results we track, and the words of the people who came through our programmes."
      />

      {/* THE NUMBERS, OVER THE RECORD DAY */}
      <section className="ss-band">
        <img src={BACKDROP} alt="" loading="lazy" />
        <div className="comb"></div>
        <div className="wrap ss-band-in">
          <span className="ss-band-kick">&#9733; India Book of Records · 31 January 2025</span>
          <div className="ss-figs">
            {HERO_STATS.map((s) => (
              <div key={s.label}>
                <b>
                  <CountUp value={s.value} />
                </b>
                <span className="ss-fig-label">{s.label}</span>
                <span className="ss-fig-note">{s.note}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* A PARENT, FIRST */}
      <section className="sec">
        <div className="wrap">
          <figure className="ss-lead">
            <img src={lead.img} alt="" loading="lazy" />
            <blockquote>
              <span className="ss-lead-mark" aria-hidden="true">
                &ldquo;
              </span>
              {lead.body}
            </blockquote>
            <figcaption>
              <b>{lead.name}</b>
              <span>{lead.place}</span>
            </figcaption>
          </figure>
        </div>
      </section>

      {/* STUDENT ACHIEVEMENTS */}
      <section className="sec sec-line">
        <div className="wrap">
          <SecHead title="Student achievements">
            What we track across every batch and every programme.
          </SecHead>
          <div className="ss-ach">
            {ACHIEVEMENTS.map((a) => (
              <article key={a.title} className="ss-card">
                <span className="ss-card-tag">{a.tag}</span>
                <b className="ss-card-fig">{a.stat}</b>
                <h3>{a.title}</h3>
                <p>{a.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <Cta
        title="Want your institution's own success story?"
        body="Share your batch and calendar. We will send a proposal in two working days."
        action="Request a proposal"
      />
    </>
  )
}
