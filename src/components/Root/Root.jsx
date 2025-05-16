import { useState } from 'react'
import { Outlet, Link } from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <header>
        <Link
        to="/"
        >
          Home
        </Link>
        <div>
          menu
        </div>
      </header>
      <div>
        <Outlet />
      </div>
      <footer>
        <div>
          <p>Services</p>
          <p>Works</p>
          <p>Insights</p>
          <p>Careers</p>
          <p>Contact Us</p>
        </div>
        <div>

        </div>
      </footer>
    </>
  )
}

export default App
