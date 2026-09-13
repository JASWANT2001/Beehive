import Banner from '../components/Banner'
import EnquiryForm from '../components/EnquiryForm'
import Faq from '../components/Faq'
import Meta from '../components/Meta'
import SecHead from '../components/SecHead'
import Socials from '../components/Socials'
import { CONTACT } from '../data/site'
import { DESKS, FAQ } from '../data/contact'

export default function Contact() {
  return (
    <>
      <Meta
        title="Contact — Beehive Communication Club"
        description="Contact Beehive Communication Club, Virudhunagar. Request a proposal for school, faculty or corporate communication training."
      />

      <Banner
        crumb="Contact"
        title="Start a conversation"
        intro="Tell us who the training is for and we will recommend the right programme. Institutions receive a written proposal within two working days."
      />

      {/* CONTACT */}
      <section className="sec" id="form">
        <div className="wrap contact">
          <div className="cinfo">
            <div className="rule"></div>
            <h2>Reach us directly</h2>
            <ul>
              <li>
                <b>Phone</b>
                <span>
                  {CONTACT.phones[0]}
                  <br />
                  {CONTACT.phones[1]}
                </span>
              </li>
              <li>
                <b>Email</b>
                <span>{CONTACT.email}</span>
              </li>
              <li>
                <b>Address</b>
                <span>
                  {CONTACT.address[0]}
                  <br />
                  {CONTACT.address[1]}
                </span>
              </li>
              <li>
                <b>Office hours</b>
                <span>
                  Monday to Saturday, 9:00 am – 7:00 pm
                  <br />
                  Closed on Sundays and public holidays
                </span>
              </li>
              <li>
                <b>Response time</b>
                <span>
                  Enquiries answered within one working day. Written proposals within two.
                </span>
              </li>
            </ul>
            <Socials style={{ marginTop: 26 }} />
          </div>

          <EnquiryForm />
        </div>
      </section>

      {/* MAP */}
      <section className="sec sec-line" style={{ paddingTop: 0 }}>
        <div className="wrap" style={{ paddingTop: 'clamp(40px,5vw,64px)' }}>
          <SecHead title="Find our centre" />
          <div className="mapbox">
            <div className="comb"></div>
            <div className="lbl">
              <b>Church Road, Sivagami Puram</b>
              Virudhunagar, Tamil Nadu, India
              <br />
              <span style={{ color: 'var(--on-black-2)', fontSize: 13 }}>
                Embed the Google Maps iframe here during development
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* WHO TO CONTACT */}
      <section className="sec">
        <div className="wrap">
          <SecHead title="Who to contact">
            Reaching the right desk first will get you a faster answer.
          </SecHead>
          <div className="offices">
            {DESKS.map((d) => (
              <article key={d.tag}>
                <span className="tag">{d.tag}</span>
                <h3>{d.title}</h3>
                <p>{d.body}</p>
                <p style={{ marginTop: 12, color: 'var(--yellow)' }}>{d.contact}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="sec sec-white">
        <div className="wrap">
          <SecHead title="Before you write to us" />
          <Faq items={FAQ} />
        </div>
      </section>
    </>
  )
}
