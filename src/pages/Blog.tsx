import Banner from '../components/Banner'
import Meta from '../components/Meta'
import { IMG } from '../data/site'
import { POSTS } from '../data/blog'

export default function Blog() {
  return (
    <>
      <Meta
        title="Blog — Beehive Communication Club"
        description="Writing on fluency, public speaking, classroom practice and English communication from the Beehive team."
      />

      <Banner
        crumb="Blog"
        title="Notes on speaking well"
        intro="Writing from our trainers and directors on fluency, classroom practice, interview preparation and the craft of standing up to speak."
      />

      {/* FEATURED */}
      <section className="sec" style={{ paddingBottom: 0 }}>
        <div className="wrap">
          <div className="feature">
            <img src={`${IMG}/image/aboutus_profile_picture.jpg`} alt="Beyond Words" loading="lazy" />
            <div className="pad">
              <div className="meta">DIRECTOR'S COLUMN · 6 MIN READ</div>
              <h2>Beyond words: why the pause is the hardest thing to teach</h2>
              <p>
                Fluency is not speed. It is the effective handling of three components — accuracy,
                rate and prosody — and paradoxically, the speakers who manage all three best are the
                ones who are willing to stop talking. A note on why we resist silence, and what
                changes when we stop resisting it.
              </p>
              <div className="btns" style={{ marginTop: 26 }}>
                <a href="#" className="btn btn-solid">
                  Read the article
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* POSTS */}
      <section className="sec">
        <div className="wrap">
          <div className="posts">
            {POSTS.map((p) => (
              <article key={p.title}>
                <img src={p.img} alt="" loading="lazy" />
                <div className="pad">
                  <div className="meta">{p.meta}</div>
                  <h3>{p.title}</h3>
                  <p>{p.body}</p>
                  <a href="#" className="more">
                    Read more
                  </a>
                </div>
              </article>
            ))}
          </div>

          <div className="btns" style={{ marginTop: 40 }}>
            <a href="#" className="btn btn-ghost">
              Load older articles
            </a>
          </div>

          <p style={{ marginTop: 34, color: 'var(--on-black-2)', fontSize: 14 }}>
            These six articles are placeholders written in the organisation's own subject
            matter. Replace the copy with real posts before launch, or reduce the grid to however
            many articles exist on day one.
          </p>
        </div>
      </section>

      {/* NEWSLETTER */}
      <section className="sec sec-yellow">
        <div
          className="wrap"
          style={{
            display: 'grid',
            gridTemplateColumns: '1.1fr .9fr',
            gap: 'clamp(30px,5vw,60px)',
            alignItems: 'center',
          }}
        >
          <div>
            <div className="rule"></div>
            <h2>One article a month</h2>
            <p style={{ marginTop: 14 }}>
              Practical writing on communication training for teachers, parents and heads of
              institutions. No promotional mail.
            </p>
          </div>
          <div style={{ border: '2px solid var(--black)', padding: 26, background: 'var(--white)' }}>
            <div className="field">
              <label htmlFor="ne" style={{ color: 'var(--black)' }}>
                Email address
              </label>
              <input
                id="ne"
                type="email"
                placeholder="name@school.edu.in"
                style={{ borderColor: 'rgba(0,0,0,.3)', color: 'var(--black)' }}
              />
            </div>
            <button
              type="button"
              style={{
                width: '100%',
                background: 'var(--black)',
                color: 'var(--yellow)',
                border: 0,
                fontFamily: 'var(--body)',
                fontWeight: 700,
                fontSize: 15,
                padding: 15,
                cursor: 'pointer',
              }}
            >
              Subscribe
            </button>
          </div>
        </div>
      </section>
    </>
  )
}
