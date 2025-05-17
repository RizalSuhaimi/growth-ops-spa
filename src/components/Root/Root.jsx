import { useState } from 'react'
import { Outlet, Link } from 'react-router-dom'

const Root = () => {
  const [count, setCount] = useState(0)

  return (
    <div className='w-[1366px] bg-black m-auto'>
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
      <div className="bg-red-500 w-100">
        <Outlet />
      </div>
      <footer>
        <div>
          <p className="">Services</p>
          <p>Works</p>
          <p>Insights</p>
          <p>Careers</p>
          <p>Contact Us</p>
        </div>
        <div>

        </div>
      </footer>
    </div>
  )
}

export default Root
