import { Link } from 'react-router-dom'
import EnquiryForm from '../components/EnquiryForm'
import Meta from '../components/Meta'
import { SOCIALS } from '../data/site'
import { MAP_EMBED, VIDEO, WAYS } from '../data/contact'

export default function Contact() {
  return (
    <>
      <Meta
        title="Contact — Beehive Communication Club"
        description="Call +91 87785 93044 or +91 97502 07464, email Beehive Communication Club, or visit us at Church Road, Sivagami Puram, Virudhunagar."
      />

      {/* OPENING + WAYS TO REACH US */}
      <section className="ct-open">
        <div className="comb"></div>
        <div className="wrap ct-open-in">
          <div className="crumb">
            <Link to="/">Home</Link> / Contact
          </div>
          <span className="eyebrow">CONTACT US</span>
          <h1>
            How can we <em>help?</em>
          </h1>
        </div>

        <div className="wrap">
          <div className="ct-ways">
            {WAYS.map((w) => (
              <div key={w.kind} className="ct-way">
                <span className="ct-way-k">{w.kind}</span>
                {w.lines.map((l) => (
                  <a
                    key={l.text}
                    href={l.href}
                    {...(l.href.startsWith('http') ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                  >
                    {l.text}
                  </a>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* GET IN TOUCH */}
      <section className="sec">
        <div className="wrap ct-touch">
          <div>
            <div className="rule"></div>
            <h2>Get in touch.</h2>
            <p className="ct-touch-sub">
              Send us a message and we will get back to you.
            </p>
            <EnquiryForm />
          </div>

          <aside className="ct-aside">
            <a className="ct-video" href={VIDEO.href} target="_blank" rel="noopener noreferrer">
              <img src={VIDEO.img} alt="" loading="lazy" />
              <span>&#9654; Watch video</span>
            </a>
            <div className="ct-follow">
              <span className="ct-way-k">FOLLOW US</span>
              <ul>
                {SOCIALS.map((s) => (
                  <li key={s.name}>
                    <a href={s.href} target="_blank" rel="noopener noreferrer">
                      {s.name} <span>&#8599;</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </aside>
        </div>
      </section>

      {/* MAP */}
      <section className="ct-map">
        <iframe
          title="Beehive Communication Club on Google Maps"
          src={MAP_EMBED}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
        <div className="wrap ct-map-in">
          <div className="ct-map-card">
            <span className="ct-way-k">OUR OFFICE ADDRESS</span>
            <b>Beehive Communication Club</b>
            <p>
              Church Road, Sivagami Puram,
              <br />
              Virudhunagar, Tamil Nadu, India
            </p>
          </div>
        </div>
      </section>
    </>
  )
}
