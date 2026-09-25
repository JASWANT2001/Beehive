import type { CSSProperties, ReactNode } from 'react'
import { Link } from 'react-router-dom'

type CtaProps = {
  title: string
  body: ReactNode
  action?: string
  to?: string
  style?: CSSProperties
  bodyStyle?: CSSProperties
}

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
      <div className="wrap cta-in">
        <div>
          <h2>{title}</h2>
          <p style={bodyStyle}>{body}</p>
        </div>
        <Link to={to} className="cta-btn">
          <span>{action}</span>
          <span className="cta-btn-arrow" aria-hidden="true">&rarr;</span>
        </Link>
      </div>
    </section>
  )
}
