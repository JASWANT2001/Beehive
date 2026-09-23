import { useState, type FormEvent } from 'react'
import { FORM_TO } from '../data/contact'

const EMPTY = { name: '', email: '', subject: '', phone: '', message: '' }

/**
 * The site has no backend yet, so sending opens the visitor's email app with the
 * message already written out, addressed to FORM_TO.
 */
export default function EnquiryForm() {
  const [values, setValues] = useState(EMPTY)
  const [opened, setOpened] = useState(false)

  const set = (key: keyof typeof EMPTY) => (e: { target: { value: string } }) =>
    setValues((v) => ({ ...v, [key]: e.target.value }))

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const body = [
      values.message,
      '',
      `Name: ${values.name}`,
      `Email: ${values.email}`,
      values.phone ? `Phone: ${values.phone}` : '',
    ]
      .filter((l, i) => i < 2 || l)
      .join('\n')
    const subject = values.subject || `Enquiry from ${values.name}`
    window.location.href = `mailto:${FORM_TO}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
    setOpened(true)
  }

  return (
    <form className="form ct-form" onSubmit={onSubmit}>
      <div className="ct-form-row">
        <div className="field">
          <label htmlFor="n">Your name *</label>
          <input id="n" name="name" type="text" minLength={3} required value={values.name} onChange={set('name')} />
        </div>
        <div className="field">
          <label htmlFor="e">Your email *</label>
          <input id="e" name="email" type="email" required value={values.email} onChange={set('email')} />
        </div>
      </div>
      <div className="ct-form-row">
        <div className="field">
          <label htmlFor="s">Subject</label>
          <input id="s" name="subject" type="text" value={values.subject} onChange={set('subject')} />
        </div>
        <div className="field">
          <label htmlFor="p">Phone number</label>
          <input id="p" name="phone" type="tel" value={values.phone} onChange={set('phone')} />
        </div>
      </div>
      <div className="field">
        <label htmlFor="m">Your message *</label>
        <textarea id="m" name="message" minLength={3} required value={values.message} onChange={set('message')} />
      </div>

      <button type="submit">Submit</button>

      {opened ? (
        <p className="ct-note" role="status">
          Your email app should now be open with this message. Press send there to reach us, or
          write to {FORM_TO} directly.
        </p>
      ) : null}
    </form>
  )
}
