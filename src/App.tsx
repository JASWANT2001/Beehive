import { lazy, Suspense } from 'react'
import { Route, Routes } from 'react-router-dom'
import Layout from './components/Layout'
import ScrollManager from './components/ScrollManager'
import Home from './pages/Home'

// Home ships in the initial bundle; every other route is fetched on demand.
const About = lazy(() => import('./pages/About'))
const Services = lazy(() => import('./pages/Services'))
const Gallery = lazy(() => import('./pages/Gallery'))
const Blog = lazy(() => import('./pages/Blog'))
const Contact = lazy(() => import('./pages/Contact'))
const HomeOptionA = lazy(() => import('./pages/HomeOptionA'))
const NotFound = lazy(() => import('./pages/NotFound'))

export default function App() {
  return (
    <>
      <ScrollManager />
      <Suspense fallback={<div style={{ minHeight: '60vh' }} />}>
        <Routes>
          <Route element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="services" element={<Services />} />
            <Route path="gallery" element={<Gallery />} />
            <Route path="blog" element={<Blog />} />
            <Route path="contact" element={<Contact />} />
            <Route path="home-option-a" element={<HomeOptionA />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </Suspense>
    </>
  )
}
