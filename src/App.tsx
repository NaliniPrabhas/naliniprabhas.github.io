import { useEffect } from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import About from './pages/About'
import Catalog from './pages/Catalog'
import Home from './pages/Home'
import NotFound from './pages/NotFound'
import ProductDetail from './pages/ProductDetail'
import SignIn from './pages/SignIn'
import SignUp from './pages/SignUp'
import Specialities from './pages/Specialities'

/**
 * Handles scroll position on navigation, which react-router leaves alone:
 * a `#section` target scrolls to that element, anything else resets to top.
 * `key` is in the deps so clicking the same nav link twice still scrolls.
 */
function ScrollManager() {
  const { pathname, search, hash, key } = useLocation()

  useEffect(() => {
    if (hash) {
      const target = document.querySelector(hash)
      if (target) {
        target.scrollIntoView({ behavior: 'smooth', block: 'start' })
        return
      }
    }
    window.scrollTo({ top: 0, behavior: 'instant' })
  }, [pathname, search, hash, key])

  return null
}

export default function App() {
  return (
    <div className="flex min-h-screen flex-col">
      <ScrollManager />
      <Navbar />

      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          {/* Two views over one product catalogue: the full grid, and the
              same products filtered by speciality. */}
          <Route path="/collection" element={<Catalog />} />
          <Route path="/specialities" element={<Specialities />} />
          <Route path="/about" element={<About />} />
          <Route path="/product/:productId" element={<ProductDetail />} />
          <Route path="/sign-in" element={<SignIn />} />
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>

      <Footer />
    </div>
  )
}
