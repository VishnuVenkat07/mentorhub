import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import Navbar     from './components/layout/Navbar'
import Footer     from './components/layout/Footer'
import PageLoader from './components/ui/PageLoader'
import Home    from './pages/Home'
import About   from './pages/About'
import Jobs        from './pages/career/Jobs'
import Internships from './pages/career/Internships'
import Services from './pages/Services'
import Contact from './pages/Contact'

// Mentorship legacy category pages (kept for direct URL access)
import FullStack        from './pages/mentorship/FullStack'
import DataAnalytics    from './pages/mentorship/DataAnalytics'
import DevOps           from './pages/mentorship/DevOps'
import CollegePlacement from './pages/mentorship/CollegePlacement'

// Mentorship sub-course detail (dynamic)
import SubCourseDetail from './pages/mentorship/SubCourseDetail'

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
            <Route path="/career/jobs"        element={<Jobs />} />
            <Route path="/career/internships" element={<Internships />} />
            <Route path="/services" element={<Services />} />
            <Route path="/contact" element={<Contact />} />

            {/* Mentorship legacy category pages */}
            <Route path="/mentorship/full-stack"        element={<FullStack />} />
            <Route path="/mentorship/data-analytics"    element={<DataAnalytics />} />
            <Route path="/mentorship/devops"            element={<DevOps />} />
            <Route path="/mentorship/college-placement" element={<CollegePlacement />} />

            {/* Mentorship sub-course pages — dynamic template */}
            <Route path="/mentorship/:courseId" element={<SubCourseDetail />} />

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
