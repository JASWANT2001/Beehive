import { useEffect } from 'react'

type MetaProps = { title: string; description: string }

/**
 * Minimal head manager — sets the document title and meta description without
 * pulling in a helmet-style dependency.
 */
export default function Meta({ title, description }: MetaProps) {
  useEffect(() => {
    document.title = title
    let tag = document.querySelector<HTMLMetaElement>('meta[name="description"]')
    if (!tag) {
      tag = document.createElement('meta')
      tag.name = 'description'
      document.head.appendChild(tag)
    }
    tag.content = description
  }, [title, description])

  return null
}
