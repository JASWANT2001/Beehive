import { useState, type FormEvent } from 'react'
import { BATCH_SIZES, ENQUIRY_TYPES } from '../data/contact'

const EMPTY = {
  name: '',
  org: '',
  phone: '',
  email: '',
  enquiry: ENQUIRY_TYPES[0] as string,
  batch: BATCH_SIZES[0] as string,
  message: '',
}

export default function EnquiryForm() {
  const [values, setValues] = useState(EMPTY)
  const [sent, setSent] = useState(false)

  const set = (key: keyof typeof EMPTY) => (e: { target: { value: string } }) =>
    setValues((v) => ({ ...v, [key]: e.target.value }))

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    // No endpoint exists yet — wire this to the enquiry API during development.
    setSent(true)
    setValues(EMPTY)
  }

  return (
    <form className="form" onSubmit={onSubmit} noValidate={false}>
      <h3>Send an enquiry</h3>
      <p className="hint">All fields marked with an asterisk are required.</p>

      <div className="field">
        <label htmlFor="n">Full name *</label>
        <input id="n" name="name" type="text" placeholder="Your name" required value={values.name} onChange={set('name')} />
      </div>
      <div className="field">
        <label htmlFor="o">Institution or company</label>
        <input id="o" name="organisation" type="text" placeholder="School, college or organisation" value={values.org} onChange={set('org')} />
      </div>
      <div className="field">
        <label htmlFor="p">Phone number *</label>
        <input id="p" name="phone" type="tel" placeholder="10-digit mobile number" required value={values.phone} onChange={set('phone')} />
      </div>
      <div className="field">
        <label htmlFor="e">Email address *</label>
        <input id="e" name="email" type="email" placeholder="name@example.com" required value={values.email} onChange={set('email')} />
      </div>
      <div className="field">
        <label htmlFor="i">Enquiry type *</label>
        <select id="i" name="enquiryType" required value={values.enquiry} onChange={set('enquiry')}>
          {ENQUIRY_TYPES.map((t) => (
            <option key={t}>{t}</option>
          ))}
        </select>
      </div>
      <div className="field">
        <label htmlFor="b">Approximate batch size</label>
        <select id="b" name="batchSize" value={values.batch} onChange={set('batch')}>
          {BATCH_SIZES.map((t) => (
            <option key={t}>{t}</option>
          ))}
        </select>
      </div>
      <div className="field">
        <label htmlFor="m">Anything we should know</label>
        <textarea id="m" name="message" placeholder="Year group, preferred timings, start date" value={values.message} onChange={set('message')} />
      </div>

      <button type="submit">Send enquiry</button>

      {sent ? (
        <p style={{ fontSize: 13.5, color: 'var(--yellow)', marginTop: 14 }} role="status">
          Thank you — your enquiry has been recorded. We reply within one working day.
        </p>
      ) : null}

      <p style={{ fontSize: 12.5, color: 'var(--on-black-2)', marginTop: 14 }}>
        Your details are used only to respond to this enquiry and are never shared with third
        parties.
      </p>
    </form>
  )
}
