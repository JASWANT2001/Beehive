import { Outlet } from 'react-router-dom'
import Footer from './Footer'
import Nav from './Nav'
// import ProposalBar from './ProposalBar'

// Proposal banner is hidden. To show it again, uncomment this block, the import above,
// the two lines at the top of Layout(), `useLocation` in the router import, and <ProposalBar /> below.
//
// const DEFAULT_PROPOSAL = {
//   title: 'Website revamp — visual direction v2',
//   note: 'For client approval before development',
// }
//
// const PROPOSAL_BY_PATH: Record<string, { title: string; note: string }> = {
//   '/': {
//     title: 'Website revamp — homepage direction B',
//     note: 'For client approval before development',
//   },
//   '/home-option-a': {
//     title: 'Website revamp — homepage direction A',
//     note: 'Earlier version, kept for comparison',
//   },
// }

export default function Layout() {
  // const { pathname } = useLocation()
  // const proposal = PROPOSAL_BY_PATH[pathname] ?? DEFAULT_PROPOSAL

  return (
    <>
      {/* <ProposalBar {...proposal} /> */}
      <Nav />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  )
}
