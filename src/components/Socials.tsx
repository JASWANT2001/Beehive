import type { CSSProperties } from 'react'
import { SOCIALS } from '../data/site'

export default function Socials({ style }: { style?: CSSProperties }) {
  return (
    <div className="socials" style={style}>
      {SOCIALS.map((s) => (
        <a key={s} href="#">
          {s}
        </a>
      ))}
    </div>
  )
}
