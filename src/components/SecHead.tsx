import type { ReactNode } from 'react'
import { Link } from 'react-router-dom'

type Action = { to: string; label: string }

export default function SecHead({
  title,
  children,
  action,
}: {
  title: string
  children?: ReactNode
  action?: Action
}) {
  const head = (
    <>
      <div className="rule"></div>
      <h2>{title}</h2>
      {children ? <p>{children}</p> : null}
    </>
  )

  if (action) {
    return (
      <div className="sec-head sec-head-split">
        <div>{head}</div>
        <Link to={action.to} className="hgal-all">
          {action.label}
        </Link>
      </div>
    )
  }

  return <div className="sec-head">{head}</div>
}
