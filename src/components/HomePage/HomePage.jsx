import { useState } from 'react'
import { Link } from 'react-router-dom'
import Service from '../Service'
import mockImage from "../../assets/MockImage.png"
import logoUob from '../../assets/Logo-UOB.png'

const HomePage = () => {
  const [count, setCount] = useState(0)

  return (
    <>
      <div 
      id="landing-main"
      className="bg-red-800"
      >
        <h1 className="text-8xl font-extrabold">YOUR NEW-BREED,</h1>
        <h1 className="text-8xl font-extrabold">END-TO-END</h1>
        <h1 className="text-8xl font-extrabold">DIGITAL ALLY</h1>
      </div>
      <div id="mission">
        <div>
          With a focus in fusing strategy, and to build and sustain market leaders
        </div>
        <p>this is</p>
        <h1  className="text-8xl font-extrabold">GrowthOps Asia</h1>
      </div>
      <div id="solutions">
        <h2 className="text-[5.25rem] font-extrabold">WHAT WE DO</h2>
        <div className="flex">
          <div>
            <Service 
              index={"01"}
              title={"Performance Marketing & Analytics"} 
              points={[
                "Performance Media",
                "Search Engine Optimisation",
                "Web & App Analytics",
                "Conversion Rate Optimisation Through Personalisation"
              ]}
            />
          </div>
          <div
          className="w-[793px] h-[588px] bg-blue-500 overflow-hidden rounded-[1.25rem]"
          >
            <img 
              className="w-full h-full object-cover"
              src={mockImage} 
              alt="photo of service" 
            />
          </div>
        </div>
        <div className="flex">
          <div>
            <Service 
              index={"01"}
              title={"Performance Marketing & Analytics"} 
              points={[
                "Performance Media",
                "Search Engine Optimisation",
                "Web & App Analytics",
                "Conversion Rate Optimisation Through Personalisation"
              ]}
            />
          </div>
          <div
          className="w-[793px] h-[588px] bg-blue-500 overflow-hidden rounded-[1.25rem]"
          >
            <img 
              className="w-full h-full object-cover"
              src={mockImage} 
              alt="photo of service" 
            />
          </div>
        </div>
        <div className="flex">
          <div>
            <Service 
              index={"01"}
              title={"Performance Marketing & Analytics"} 
              points={[
                "Performance Media",
                "Search Engine Optimisation",
                "Web & App Analytics",
                "Conversion Rate Optimisation Through Personalisation"
              ]}
            />
          </div>
          <div
          className="w-[793px] h-[588px] bg-blue-500 overflow-hidden rounded-[1.25rem]"
          >
            <img 
              className="w-full h-full object-cover"
              src={mockImage} 
              alt="photo of service" 
            />
          </div>
        </div>
        <div className="flex">
          <div>
            <Service 
              index={"01"}
              title={"Performance Marketing & Analytics"} 
              points={[
                "Performance Media",
                "Search Engine Optimisation",
                "Web & App Analytics",
                "Conversion Rate Optimisation Through Personalisation"
              ]}
            />
          </div>
          <div
          className="w-[793px] h-[588px] bg-blue-500 overflow-hidden rounded-[1.25rem]"
          >
            <img 
              className="w-full h-full object-cover"
              src={mockImage} 
              alt="photo of service" 
            />
          </div>
        </div>
        <div></div>
        <div></div>
        <div></div>
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
