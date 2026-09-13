export type FaqItem = { q: string; a: string }

export default function Faq({ items }: { items: readonly FaqItem[] }) {
  return (
    <div className="faq">
      {items.map((item, i) => (
        <details key={item.q} open={i === 0}>
          <summary>{item.q}</summary>
          <p>{item.a}</p>
        </details>
      ))}
    </div>
  )
}
