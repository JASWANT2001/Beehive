import { useCallback, useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import Brand from './Brand'
import { NAV_LINKS } from '../data/site'

export default function Nav() {
  const { pathname } = useLocation()
  const [open, setOpen] = useState(false)

  // Close the mobile drawer whenever the route changes.
  useEffect(() => setOpen(false), [pathname])

  const isActive = useCallback(
    (to: string) => {
      const path = to.split('#')[0] || '/'
      return path === '/'
        ? pathname === '/' || pathname === '/home-option-a'
        : pathname === path || pathname.startsWith(`${path}/`)
    },
    [pathname],
  )

  return (
    <header className="nav">
      <div className="wrap nav-in">
        <Brand />
        <ul className={`nav-links${open ? ' open' : ''}`} id="menu">
          {NAV_LINKS.map(({ to, label }) => (
            <li key={to}>
              <Link to={to} className={isActive(to) ? 'active' : undefined}>
                {label}
              </Link>
            </li>
          ))}
        </ul>
        <Link to={pathname === '/contact' ? '/contact#form' : '/contact'} className="nav-cta">
          Request a proposal
        </Link>
        <button
          className="burger"
          id="burger"
          aria-label="Open menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          &#9776;
        </button>
      </div>
    </header>
  )
}
