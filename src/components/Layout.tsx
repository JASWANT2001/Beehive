import { Outlet, useLocation } from 'react-router-dom'
import Footer from './Footer'
import Nav from './Nav'
import ProposalBar from './ProposalBar'
import UtilBar from './UtilBar'

const DEFAULT_PROPOSAL = {
  title: 'Website revamp — visual direction v2',
  note: 'For client approval before development',
}

const PROPOSAL_BY_PATH: Record<string, { title: string; note: string }> = {
  '/': {
    title: 'Website revamp — homepage direction B',
    note: 'For client approval before development',
  },
  '/home-option-a': {
    title: 'Website revamp — homepage direction A',
    note: 'Earlier version, kept for comparison',
  },
}

export default function Layout() {
  const { pathname } = useLocation()
  const proposal = PROPOSAL_BY_PATH[pathname] ?? DEFAULT_PROPOSAL

  return (
    <>
      <ProposalBar {...proposal} />
      <UtilBar />
      <Nav />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  )
}
