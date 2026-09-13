import { STATS } from '../data/site'

export default function Stats() {
  return (
    <div className="stats">
      {STATS.map((s) => (
        <div key={s.label}>
          <b>{s.value}</b>
          <span>{s.label}</span>
        </div>
      ))}
    </div>
  )
}
