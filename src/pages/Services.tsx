import { Link } from 'react-router-dom'
import Banner from '../components/Banner'
import Cta from '../components/Cta'
import Faq from '../components/Faq'
import Formats from '../components/Formats'
import Meta from '../components/Meta'
import Pillars from '../components/Pillars'
import ProgrammeGrid from '../components/ProgrammeGrid'
import SecHead from '../components/SecHead'
import {
  ENGAGEMENT,
  FAQ,
  INDIVIDUAL_PROGRAMMES,
  SCHOOL_PROGRAMMES,
} from '../data/services'

export default function Services() {
  return (
    <>
      <Meta
        title="Services & Programmes — Beehive Communication Club"
        description="Nine English communication programmes for school students, teachers, job aspirants, adults and corporate teams."
      />

      <Banner
        crumb="Services"
        title="Programmes and services"
        intro="Nine programmes and five delivery formats. Choose by who the training is for, and we will tell you which one fits your calendar."
      >
        <div className="btns" style={{ marginTop: 30 }}>
          <Link to="/services#schools" className="btn btn-solid">
            For schools
          </Link>
          <Link to="/services#individuals" className="btn btn-ghost">
            For individuals
          </Link>
        </div>
      </Banner>

      {/* FORMATS */}
      <section className="sec">
        <div className="wrap">
          <SecHead title="Delivery formats">
            Every programme below is delivered through one or more of these five formats.
          </SecHead>
          <Formats />
        </div>
      </section>

      {/* FOR SCHOOLS */}
      <section className="sec sec-white" id="schools">
        <div className="wrap">
          <SecHead title="For schools and teaching faculty">
            Programmes designed to sit inside an academic calendar, delivered on campus by trainers
            on our own roll.
          </SecHead>
          <ProgrammeGrid items={SCHOOL_PROGRAMMES} />
        </div>
      </section>

      {/* FOR INDIVIDUALS */}
      <section className="sec" id="individuals">
        <div className="wrap">
          <SecHead title="For individuals and professionals">
            Courses you can join directly, at our Virudhunagar centre or online.
          </SecHead>
          <ProgrammeGrid items={INDIVIDUAL_PROGRAMMES} />
        </div>
      </section>

      {/* PROCESS */}
      <section className="sec sec-line">
        <div className="wrap">
          <SecHead title="How engagement works">
            From first conversation to closing report, this is what an institution can expect.
          </SecHead>
          <Pillars items={ENGAGEMENT} />
        </div>
      </section>

      {/* FAQ */}
      <section className="sec sec-white">
        <div className="wrap">
          <SecHead title="Common questions about our programmes" />
          <Faq items={FAQ} />
        </div>
      </section>

      <Cta
        title="Not sure which programme fits?"
        body="Tell us who the learners are and what they need to be able to do. We will recommend the right one."
        action="Talk to our team"
      />
    </>
  )
}
