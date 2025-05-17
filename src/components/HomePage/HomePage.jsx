import { useState } from 'react'
import { Link } from 'react-router-dom'
import Service from '../Service'
import QuantResult from '../QuantResult'
import mockImage from "../../assets/MockImage.png"
import logoUob from '../../assets/Logo-UOB.png'

const HomePage = () => {
  const [clientIndustry, setClientIndustry] = useState("Telco")

  return (
    <>
      <div 
      id="landing-main"
      className="bg-red-800"
      >
        <h2 className="text-8xl font-extrabold">YOUR NEW-BREED,</h2>
        <h2 className="text-8xl font-extrabold">END-TO-END</h2>
        <h2 className="text-8xl font-extrabold">DIGITAL ALLY</h2>
      </div>
      <div id="mission">
        <div>
          With a focus in fusing strategy, and to build and sustain market leaders
        </div>
        <p>this is</p>
        <h2  className="text-8xl font-extrabold">GrowthOps Asia</h2>
      </div>
      <div 
      id="services"
      className="bg-blue-800"
      >
        <h3 className="text-[5.25rem] font-extrabold">WHAT WE DO</h3>
        <div className="flex justify-between px-[5rem] py-[2rem]">
          <div
          className="flex flex-col justify-center w-[349px]"
          >
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
          className="w-[793px] h-[588px] bg-green-500 overflow-hidden rounded-[1.25rem]"
          >
            <img 
              className="w-full h-full object-cover"
              src={mockImage} 
              alt="photo of service" 
            />
          </div>
        </div>
      </div>
      <div 
      id="results"
      className="bg-red-700"
      >
        <h3 className="text-[5.25rem] font-extrabold">UNFORGETTABLE RESULTS</h3>
        <div
        className="w-[975px] h-[843px] bg-green-900 m-auto flex justify-between"
        >
          <div
          className="flex flex-col justify-between h-full"
          >
            <div
            className="w-[356px] bg-black"
            >
              <QuantResult percentage={"400"} text={"INCREASE IN ORGANIC PAGE VIEWS"}/>
              <p
              className="text-sm text-go-gray-2"
              >
                Using our SEO services, it also resulted in a <span className="font-bold">109% increase in page visibility</span>
              </p>
            </div>
            <div
            className="w-[356px]"
            >
              <QuantResult percentage={"400"} text={"INCREASE IN ORGANIC PAGE VIEWS"}/>
              <p
              className="text-sm"
              >
                Using our SEO services, it also resulted in a 109% increase in page visibility
              </p>
            </div>
            <div
            className="w-[356px]"
            >
              <QuantResult percentage={"400"} text={"INCREASE IN ORGANIC PAGE VIEWS"}/>
              <p
              className="text-sm"
              >
                Using our SEO services, it also resulted in a 109% increase in page visibility
              </p>
            </div>
              
          </div>
          <div
          className="flex flex-col justify-around h-full"
          >
            <div
            className="w-[356px] bg-black"
            >
              <QuantResult percentage={"400"} text={"INCREASE IN ORGANIC PAGE VIEWS"}/>
              <p
              className="text-sm"
              >
                Using our SEO services, it also resulted in a <span className="font-bold">109% increase in page visibility</span>
              </p>
            </div>
            <div
            className="w-[356px]"
            >
              <QuantResult percentage={"400"} text={"INCREASE IN ORGANIC PAGE VIEWS"}/>
              <p
              className="text-sm"
              >
                Using our SEO services, it also resulted in a 109% increase in page visibility
              </p>
            </div>
          </div>
        </div>
      </div>
      <div 
      id="reviews"
      className="bg-blue-700"
      >
        <h3 
        className="text-[5.25rem] font-extrabold m-auto w-[1000px]"
        >
          WHAT CLIENTS SAY
        </h3>
        <div
        className="border-1 rounded-[30px] flex p-[0.375rem] w-[371px] m-auto"
        >
          <button
          className="rounded-[30px] bg-go-cyan-1 py-[0.75rem] px-[1.25rem]"
          >
            Telco
          </button>
          <button
          className="rounded-[30px] py-[0.75rem] px-[1.25rem]"
          >
            Insurance
          </button>
          <button
          className="rounded-[30px] py-[0.75rem] px-[1.25rem]"
          >
            Fintech
          </button>
          <button
          className="rounded-[30px] py-[0.75rem] px-[1.25rem]"
          >
            IT
          </button>
        </div>
        <div
        className="flex justify-between w-[1000px] m-auto"
        >
          <div
          className="font-bold text-[2.5rem]/[100%]"
          >
            “
          </div>
          <div
          className="w-[895px]"
          >
            <p
            className="text-2xl/[2.25rem]"
            >
              Through this initiative, GrowthOps have shown to have the right capabilities to take our platform to the next level. We believe the refreshed U.COM.MY will equip us with more insights, enabling us to make more data-led decisions that will result in new digital experiences that will truly benefit our customers.
            </p>
            <p>
              Jasmine Lee
            </p>
            <p
            className="text-go-gray-1"
            >
              [Position], [Company Name]
            </p>
          </div>
        </div>
      </div>
      <div 
      id="clients"
      className="bg-red-600"
      >
        <h3 className="text-[5.25rem] font-extrabold">SUPER PROUD TO WORK WITH</h3>
        <img src={logoUob} alt="UOB logo" />
      </div>
      <div 
      id="contact"
      className="bg-blue-600"
      >
        <Link
        to="/contact"
        >
          <button>
            Let's chat
          </button>
        </Link>
        
      </div>
    </>
  )
}

export default HomePage
