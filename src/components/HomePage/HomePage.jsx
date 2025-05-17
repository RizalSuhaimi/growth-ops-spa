import { useState } from 'react'
import { Link } from 'react-router-dom'
import logoUob from '../../assets/Logo-UOB.png';

const HomePage = () => {
  const [count, setCount] = useState(0)

  return (
    <>
      <div 
      id="landing-main"
      className="flex flex-row"
      >
        <p>YOUR NEW-BREED,</p>
        <p>END-TO-END</p>
        <p>DIGITAL ALLY</p>
      </div>
      <div id="mission">
        <div>
          With a focus in fusing strategy, and to build and sustain market leaders
        </div>
        <p>this is</p>
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
        <img src={logoUob} alt="UOB logo" />
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

export default HomePage
