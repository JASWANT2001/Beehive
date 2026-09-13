import { Link } from 'react-router-dom'
import type { CSSProperties } from 'react'

export default function Brand({ style }: { style?: CSSProperties }) {
  return (
    <Link to="/" className="brand" style={style}>
      <span className="brand-mark">B</span>
      <span className="brand-txt">
        Beehive<em>COMMUNICATION CLUB</em>
      </span>
    </Link>
  )
}
