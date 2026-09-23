import type { CSSProperties } from 'react'
import { SOCIALS } from '../data/site'

export default function Socials({ style }: { style?: CSSProperties }) {
  return (
    <div className="socials" style={style}>
      {SOCIALS.map((s) => (
        <a key={s.name} href={s.href} target="_blank" rel="noopener noreferrer" aria-label={s.name}>
          {s.label}
        </a>
      ))}
    </div>
  )
}
