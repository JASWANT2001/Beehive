import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

/**
 * Restores the browser's native behaviour across client-side navigations:
 * jump to an in-page anchor when one is present, otherwise go to the top.
 */
export default function ScrollManager() {
  const { pathname, hash } = useLocation()

  useEffect(() => {
    if (hash) {
      const el = document.getElementById(hash.slice(1))
      if (el) {
        el.scrollIntoView()
        return
      }
    }
    window.scrollTo(0, 0)
  }, [pathname, hash])

  return null
}
