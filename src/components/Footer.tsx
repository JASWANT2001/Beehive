import { Link } from 'react-router-dom'
import Brand from './Brand'
import Socials from './Socials'
import { CONTACT } from '../data/site'

const EXPLORE = [
  { to: '/about', label: 'About us' },
  { to: '/services', label: 'Services' },
  { to: '/gallery', label: 'Gallery' },
  { to: '/blog', label: 'Blog' },
  { to: '/contact', label: 'Contact' },
]

const INSTITUTIONS = [
  { to: '/services', label: 'School programmes' },
  { to: '/services', label: 'Teacher training' },
  { to: '/services', label: 'Corporate sessions' },
  { to: '/contact', label: 'Request a proposal' },
]

export default function Footer() {
  return (
    <footer className="foot">
      <div className="wrap">
        <div className="foot-grid">
          <div>
            <Brand style={{ marginBottom: 18 }} />
            <p>
              Taking the practice of communication skills to everyone, and keeping minds open to what
              the field has to offer.
            </p>
            <Socials />
          </div>
          <div>
            <h4>Explore</h4>
            <ul>
              {EXPLORE.map((l) => (
                <li key={l.label}>
                  <Link to={l.to}>{l.label}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4>For institutions</h4>
            <ul>
              {INSTITUTIONS.map((l) => (
                <li key={l.label}>
                  <Link to={l.to}>{l.label}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4>Reach us</h4>
            <ul>
              <li>{CONTACT.phones.join(' · ')}</li>
              <li>{CONTACT.email}</li>
              <li>
                {CONTACT.address[0]}
                <br />
                {CONTACT.address[1]}
              </li>
            </ul>
          </div>
        </div>
        <div className="foot-bot">
          <span>&copy; 2026 Beehive Communication Club. All rights reserved.</span>
          <span>Careers &middot; Privacy policy &middot; Terms</span>
        </div>
      </div>
    </footer>
  )
}
