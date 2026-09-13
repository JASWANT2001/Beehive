import Banner from '../components/Banner'
import Cta from '../components/Cta'
import Faq from '../components/Faq'
import Meta from '../components/Meta'
import Pillars from '../components/Pillars'
import SecHead from '../components/SecHead'
import { IMG } from '../data/site'
import { AT_A_GLANCE, FAQ, LEADERSHIP, MILESTONES, STAGES } from '../data/about'

const onBlack = { color: 'var(--on-black-1)' }

export default function About() {
  return (
    <>
      <Meta
        title="About — Beehive Communication Club"
        description="Who we are, how we teach, and the people behind Beehive Communication Club."
      />

      <Banner
        crumb="About"
        title="An organisation built around one idea"
        intro="That communication is a skill, not a talent — and that it can be taught, measured and improved at any age."
      />

      {/* MISSION / VISION */}
      <section className="sec">
        <div className="wrap">
          <SecHead title="Who we are" />
          <div className="split split-rev">
            <div className="stack">
              <p style={onBlack}>
                Beehive Communication Club is an English communication training organisation based in
                Virudhunagar, Tamil Nadu. We work with schools, colleges, teacher-training
                institutions and corporate teams, delivering structured programmes on campus and
                online.
              </p>
              <p style={onBlack}>
                Our mission is to take the practice of communication skills to everyone, and to keep
                minds open to what the field has to offer. In practice that means a trainer in the
                room, a measurable syllabus, and an assessment at the end that means something
                outside our own walls.
              </p>
              <p style={onBlack}>
                We are an authorised training partner of Cambridge English Assessment, and we
                facilitate Gavel Clubs — a global public speaking platform for young speakers. Both
                give our learners credentials that are recognised well beyond Tamil Nadu.
              </p>
            </div>
            <aside className="credbox" style={{ margin: 0 }}>
              <div className="kick">ORGANISATION AT A GLANCE</div>
              <ul style={{ marginTop: 14 }}>
                {AT_A_GLANCE.map((row) => (
                  <li key={row.label}>
                    {row.label} <b>{row.value}</b>
                  </li>
                ))}
              </ul>
            </aside>
          </div>
        </div>
      </section>

      {/* DIRECTOR */}
      <section className="sec sec-white">
        <div className="wrap split">
          <div className="hexphoto">
            <img src={`${IMG}/image/aboutus_profile_picture.jpg`} alt="A. Shyamraj, Director" loading="lazy" />
          </div>
          <div className="stack">
            <div className="rule"></div>
            <h2 style={{ marginBottom: 22 }}>Director's message</h2>
            <blockquote className="pull">
              &ldquo;The most precious things in speech are the <span>pauses</span>.&rdquo;
            </blockquote>
            <p style={{ marginTop: 24 }}>
              Over the last several years I have been drawn to speakers who pause. Many non-native
              speakers of English believe fluency means speaking fast — I held that belief myself.
              Later I understood that fluency has nothing to do with the speed of delivery.
            </p>
            <p>
              Experts describe fluency as the effective handling of three components: accuracy, the
              use of the right words; rate, the speed at which every word uttered is actually heard
              and identified by the listener; and prosody, the expression used to speak.
              Paradoxically, to conduct these three beautifully, powerful speakers use pauses
              extraordinarily.
            </p>
            <p>
              We avoid pauses because we fear the audience will assume we have forgotten something.
              We are not comfortable hearing our own heart pound in the silence. But a pause placed
              on purpose tells the audience that we are thoughtful and credible. Great messages are
              conveyed between words.
            </p>
            <div className="sign">
              <b>A. Shyamraj</b>
              <span>Founder &amp; Director, Beehive Communication Club</span>
            </div>
          </div>
        </div>
      </section>

      {/* HOW WE TEACH */}
      <section className="sec">
        <div className="wrap">
          <SecHead title="How a Beehive programme runs">
            The same four stages apply whether we are working with a class of forty school students
            or a corporate team of eight.
          </SecHead>
          <Pillars items={STAGES} />
        </div>
      </section>

      {/* MILESTONES */}
      <section className="sec sec-line">
        <div className="wrap">
          <SecHead title="Milestones" />
          <div className="tl">
            {MILESTONES.map((m) => (
              <div className="tl-row" key={m.year}>
                <div className="yr">{m.year}</div>
                <div>
                  <h3>{m.title}</h3>
                  <p>{m.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* LEADERSHIP */}
      <section className="sec">
        <div className="wrap">
          <SecHead title="Leadership">
            Replace these four entries with the actual leadership team, designations and photographs
            before launch.
          </SecHead>
          <div className="people">
            {LEADERSHIP.map((p, i) => (
              <article key={`${p.role}-${i}`}>
                <img src={p.img} alt="" loading="lazy" />
                <div className="pad">
                  <h3>{p.name}</h3>
                  <span>{p.role}</span>
                  <p>{p.body}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="sec sec-white">
        <div className="wrap">
          <SecHead title="Questions institutions ask us" />
          <Faq items={FAQ} />
        </div>
      </section>

      <Cta
        title="Talk to us about your institution"
        body="Share the year group, batch size and calendar. We will respond with a written proposal within two working days."
      />
    </>
  )
}
