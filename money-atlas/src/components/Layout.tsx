import { Outlet } from 'react-router-dom'
import { Footer } from './Footer'
import { Nav } from './Nav'

export function Layout() {
  return (
    <>
      <Nav />
      <main id="main">
        <Outlet />
      </main>
      <Footer />
    </>
  )
}
