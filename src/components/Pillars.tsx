export type Pillar = { num: string; title: string; body: string }

export default function Pillars({ items }: { items: readonly Pillar[] }) {
  return (
    <div className="pillars" style={{ gridTemplateColumns: 'repeat(4,1fr)' }}>
      {items.map((p) => (
        <article key={p.num}>
          <div className="num">{p.num}</div>
          <h3>{p.title}</h3>
          <p>{p.body}</p>
        </article>
      ))}
    </div>
  )
}
