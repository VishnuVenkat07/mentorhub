import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import Navbar     from './components/layout/Navbar'
import Footer     from './components/layout/Footer'
import PageLoader from './components/ui/PageLoader'
import Home    from './pages/Home'
import About   from './pages/About'
import Mentorship from './pages/Mentorship'
import Jobs        from './pages/career/Jobs'
import Internships from './pages/career/Internships'
import Services from './pages/Services'
import Contact from './pages/Contact'

// Mentorship sub-pages
import FullStack        from './pages/mentorship/FullStack'
import MobileApp        from './pages/mentorship/MobileApp'
import Design           from './pages/mentorship/Design'
import DataAnalytics    from './pages/mentorship/DataAnalytics'
import DevOps           from './pages/mentorship/DevOps'
import MERN             from './pages/mentorship/MERN'
import CollegePlacement from './pages/mentorship/CollegePlacement'
import ResumeBuilding   from './pages/mentorship/ResumeBuilding'
import AITools          from './pages/mentorship/AITools'

// Service detail pages
import ServiceDetail from './pages/services/ServiceDetail'
import { services }  from './data/services'

// Career detail page
import JobDetail from './pages/career/JobDetail'

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => { window.scrollTo(0, 0) }, [pathname])
  return null
}

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="min-h-screen flex flex-col" style={{ backgroundColor: 'var(--color-primary)' }}>
        <PageLoader />
        <Navbar />
        <main className="flex-1">
          <Routes>
            <Route path="/"       element={<Home />} />
            <Route path="/about"  element={<About />} />
            <Route path="/mentorship" element={<Mentorship />} />
            <Route path="/career/jobs"        element={<Jobs />} />
            <Route path="/career/internships" element={<Internships />} />
            <Route path="/services" element={<Services />} />
            <Route path="/contact" element={<Contact />} />

            {/* Mentorship sub-pages */}
            <Route path="/mentorship/full-stack"        element={<FullStack />} />
            <Route path="/mentorship/mobile-app"        element={<MobileApp />} />
            <Route path="/mentorship/design"            element={<Design />} />
            <Route path="/mentorship/data-analytics"    element={<DataAnalytics />} />
            <Route path="/mentorship/devops"            element={<DevOps />} />
            <Route path="/mentorship/mern"              element={<MERN />} />
            <Route path="/mentorship/college-placement" element={<CollegePlacement />} />
            <Route path="/mentorship/resume-building"   element={<ResumeBuilding />} />
            <Route path="/mentorship/ai-tools"          element={<AITools />} />

            {/* Career individual job/internship pages */}
            <Route path="/career/:id" element={<JobDetail />} />

            {/* Service detail pages — shared template */}
            {services.map(s => (
              <Route
                key={s.id}
                path={s.path}
                element={<ServiceDetail service={s} />}
              />
            ))}
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  )
}
