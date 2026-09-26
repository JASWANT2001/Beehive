import { TESTIMONIALS } from '../data/home'

/**
 * Testimonials as a continuous right-to-left marquee.
 * The list is rendered twice so the loop is seamless; the second
 * copy is hidden from screen readers. Hovering pauses it, and
 * visitors who prefer reduced motion get a normal scrollable row.
 */
export default function Testimonials() {
  return (
    <div className="tmq">
      <div className="tmq-track">
        {[...TESTIMONIALS, ...TESTIMONIALS].map((t, i) => (
          <article
            className="tmq-card"
            key={`${t.name}-${i}`}
            aria-hidden={i >= TESTIMONIALS.length || undefined}
          >
            <span className="tmq-mark" aria-hidden="true">
              &ldquo;
            </span>
            <p>{t.body}</p>
            <div className="tmq-who">
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
  )
}
