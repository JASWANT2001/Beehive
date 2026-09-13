export default function ProposalBar({ title, note }: { title: string; note: string }) {
  return (
    <div className="proposal">
      {title} <span>{note}</span>
    </div>
  )
}
