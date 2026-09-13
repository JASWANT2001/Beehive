import { CLIENT_LOGOS } from '../data/site'

export default function Clients() {
  return (
    <div className="clients">
      {CLIENT_LOGOS.map((src) => (
        <div key={src}>
          <img src={src} alt="Client institution" loading="lazy" />
        </div>
      ))}
    </div>
  )
}
