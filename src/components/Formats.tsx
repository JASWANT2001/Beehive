import { FORMATS } from '../data/site'

export default function Formats() {
  return (
    <div className="grid-5">
      {FORMATS.map((f) => (
        <div key={f.title}>
          <h3>{f.title}</h3>
          <p>{f.body}</p>
        </div>
      ))}
    </div>
  )
}
