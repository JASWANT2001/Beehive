import Banner from '../components/Banner'
import Cta from '../components/Cta'
import Meta from '../components/Meta'

export default function NotFound() {
  return (
    <>
      <Meta
        title="Page not found — Beehive Communication Club"
        description="The page you were looking for does not exist."
      />
      <Banner
        crumb="Not found"
        title="We could not find that page"
        intro="The link may be out of date. Use the navigation above, or tell us what you were looking for."
      />
      <Cta
        title="Looking for a programme?"
        body="Tell us who the learners are and we will point you to the right one."
        action="Talk to our team"
      />
    </>
  )
}
