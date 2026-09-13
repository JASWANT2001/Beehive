import { Link } from 'react-router-dom'
import type { Programme } from '../data/services'

export default function ProgrammeGrid({ items }: { items: readonly Programme[] }) {
  return (
    <div className="prog">
      {items.map((p) => (
        <article key={p.title}>
          <span className="tag">{p.tag}</span>
          <h3>{p.title}</h3>
          <p>{p.body}</p>
          <Link to="/contact" className="more">
            {p.cta}
          </Link>
        </article>
      ))}
    </div>
  )
}
