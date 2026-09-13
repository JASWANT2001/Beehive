import type { ReactNode } from 'react'
import { Link } from 'react-router-dom'

type BannerProps = {
  crumb: string
  title: string
  intro: string
  children?: ReactNode
}

export default function Banner({ crumb, title, intro, children }: BannerProps) {
  return (
    <section className="banner">
      <div className="comb"></div>
      <div className="wrap banner-in">
        <div className="crumb">
          <Link to="/">Home</Link> / {crumb}
        </div>
        <h1>{title}</h1>
        <p>{intro}</p>
        {children}
      </div>
    </section>
  )
}
