import { useMemo, useState } from 'react'
import Banner from '../components/Banner'
import Cta from '../components/Cta'
import Meta from '../components/Meta'
import SecHead from '../components/SecHead'
import Stats from '../components/Stats'
import { CATEGORIES, SHOTS, type CategoryId } from '../data/gallery'

export default function Gallery() {
  const [cat, setCat] = useState<CategoryId>('all')
  const shots = useMemo(
    () => (cat === 'all' ? SHOTS : SHOTS.filter((s) => s.cat === cat)),
    [cat],
  )

  return (
    <>
      <Meta
        title="Gallery — Beehive Communication Club"
        description="Photographs from Beehive Communication Club sessions, events, record attempts and conferences."
      />

      <Banner
        crumb="Gallery"
        title="From our sessions and stages"
        intro="Classrooms, conferences, record attempts and award ceremonies — the places our learners have stood up and spoken."
      />

      <section className="sec">
        <div className="wrap">
          <div className="filters" id="filters">
            {CATEGORIES.map((c) => (
              <button
                key={c.id}
                className={cat === c.id ? 'on' : undefined}
                aria-pressed={cat === c.id}
                onClick={() => setCat(c.id)}
              >
                {c.label}
              </button>
            ))}
          </div>

          <div className="gal">
            {shots.map((s) => (
              <figure key={s.id}>
                <img src={s.src} alt={s.alt} loading="lazy" />
                <figcaption>
                  <b>{s.title}</b>
                  <span>{s.caption}</span>
                </figcaption>
              </figure>
            ))}
          </div>

          <p style={{ marginTop: 34, color: 'var(--on-black-2)', fontSize: 14 }}>
            Placeholder images are pulled from the existing site. Replace with high-resolution
            photography before launch — a consistent crop and lighting across the set will make the
            biggest difference here.
          </p>
        </div>
      </section>

      {/* <section className="sec sec-yellow">
        <div className="wrap">
          <SecHead title="What these numbers represent" />
          <Stats />
        </div>
      </section>

      <Cta
        title="Want your school's programme documented like this?"
        body="Every Beehive engagement is photographed and reported. Ask us for a sample closing report."
        style={{
          background: 'var(--black)',
          color: 'var(--white)',
          borderTop: '1px solid rgba(255,255,255,.16)',
        }}
        bodyStyle={{ color: 'var(--on-black-1)' }}
      /> */}
    </>
  )
}
