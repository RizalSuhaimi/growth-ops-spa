import { useState } from 'react'
import { Link } from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div 
      id="landing"
      className="flex flex-row"
      >
        <p>YOUR NEW-BREED</p>
        <p>END-TO-END</p>
        <p>DIGITAL ALLY</p>
      </div>
      <div id="mission">
        <h1>GrowthOps Asia</h1>
      </div>
      <div id="solutions">
        <h2>WHAT WE DO</h2>
      </div>
      <div id="results">
        <h2>UNFORGETTABLE RESULTS</h2>
      </div>
      <div id="reviews">
        <h2>WHAT CLIENTS SAY</h2>
      </div>
      <div id="clients">
        <h2>SUPER PROUD TO WORK WITH</h2>
      </div>
      <div id="contact">
        <Link
        to="/contact"
        >
          <button>
            Let's chat
          </button>
        </Link>
        
      </div>
      <div id="footer">

      </div>
    </>
  )
}

export default App
