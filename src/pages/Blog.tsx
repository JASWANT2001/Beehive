import Banner from '../components/Banner'
import Meta from '../components/Meta'
import { POSTS } from '../data/blog'

export default function Blog() {
  return (
    <>
      <Meta
        title="Buzz — Beehive Communication Club"
        description="Writing on fluency, public speaking, classroom practice and English communication from the Beehive team."
      />

      <Banner
        crumb="Buzz"
        title="Notes on speaking well"
        intro="Writing from our trainers and directors on fluency, classroom practice, interview preparation and the craft of standing up to speak — in full, on this page."
      />

      {/* POSTS */}
      <section className="sec">
        <div className="wrap">
          <div className="posts">
            {POSTS.map((p) => (
              <article key={p.title} id={p.title.toLowerCase().replace(/[^a-z0-9]+/g, '-')}>
                <img src={p.img} alt="" loading="lazy" />
                <div className="pad">
                  <div className="meta">{p.meta}</div>
                  <h3>{p.title}</h3>
                  {p.body.map((para) => (
                    <p key={para}>{para}</p>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
