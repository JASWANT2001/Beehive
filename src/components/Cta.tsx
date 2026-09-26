import type { CSSProperties, ReactNode } from 'react'
import { Link } from 'react-router-dom'

type CtaProps = {
  title: string
  body?: ReactNode
  action?: string
  to?: string
  style?: CSSProperties
  bodyStyle?: CSSProperties
}

/** Closing card: one line of intent, one action. Nothing else. */
export default function Cta({
  title,
  body,
  action = 'Request a proposal',
  to = '/contact',
  style,
  bodyStyle,
}: CtaProps) {
  return (
    <section className="cta" style={style}>
      <div className="wrap">
        <div className="cta-card">
          <div className="cta-say">
            <h2>{title}</h2>
            {body ? <p style={bodyStyle}>{body}</p> : null}
          </div>
          <Link to={to} className="cta-btn">
            {action}
            <span className="cta-btn-arrow" aria-hidden="true">
              &rarr;
            </span>
          </Link>
        </div>
      </div>
    </section>
  )
}
