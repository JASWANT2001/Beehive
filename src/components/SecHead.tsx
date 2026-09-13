import type { ReactNode } from 'react'

export default function SecHead({ title, children }: { title: string; children?: ReactNode }) {
  return (
    <div className="sec-head">
      <div className="rule"></div>
      <h2>{title}</h2>
      {children ? <p>{children}</p> : null}
    </div>
  )
}
