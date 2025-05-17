import { useState } from 'react'
import { Link } from 'react-router-dom'
import Service from '../Service'
import QuantResult from '../QuantResult'
import mockImage from "../../assets/MockImage.png"

import logoUob from "../../assets/Logo-UOB.png"
import logoToyota from "../../assets/Logo-toyota.png"
import logoPosb from "../../assets/Logo-posb.png"
import logoSinglife from "../../assets/Logo-singlife.png"
import logoAmway from "../../assets/Logo-amway.png"
import logoFitnessFirst from "../../assets/Logo-FitnessFirst.png"
import logoSony from "../../assets/Logo-sony.png"
import logoXRvision from "../../assets/Logo-xrvision.png"
import logoCrown from "../../assets/Logo-crown.png"
import logoAIA from "../../assets/Logo-aia.png"
import logoWWF from "../../assets/Logo-WWF.png"

import logoMAS from "../../assets/Logo-malaysiaairlines.png"
import logoMaxis from "../../assets/Logo-maxis.png"
import logoGrab from "../../assets/Logo-grab.png"
import logoDbs from "../../assets/Logo-dbs.png"
import logoTreasure from "../../assets/Logo-treasure.png"
import logoMicrosoft from "../../assets/Logo-microsoft.png"
import logoLogitech from "../../assets/Logo-logitech.png"
import logoDreamscape from "../../assets/Logo-dreamscapedigital.png"
import logoStandardChartered from "../../assets/Logo-standardchartered.png"
import logoSitebeat from "../../assets/Logo-sitebeat.png"
import logoMizuho from "../../assets/Logo-mizuho.png"

import logoCimb from "../../assets/Logo-cimb.png"
import logoRhb from "../../assets/Logo-rhb.png"
import logoNikkoAm from "../../assets/Logo-nikkoam.png"
import logoMannHummel from "../../assets/Logo-mann+hummel.png"
import logoChubb from "../../assets/Logo-chubb.png"
import logoNtuc from "../../assets/Logo-ntuc.png"
import logoTaylors from "../../assets/Logo-taylorsuniversity.png"
import logoExplanade from "../../assets/Logo-explanade.png"
import logoProton from "../../assets/Logo-proton.png"
import logoTriumph from "../../assets/Logo-triumph.png"

const HomePage = () => {
  const clientsRow1 = [
    logoUob,
    logoToyota,
    logoPosb,
    logoSinglife,
    logoAmway,
    logoFitnessFirst,
    logoSony,
    logoXRvision,
    logoCrown,
    logoAIA,
    logoWWF
  ]

  const clientsRow2 = [
    logoMAS,
    logoMaxis,
    logoGrab,
    logoDbs,
    logoTreasure,
    logoMicrosoft,
    logoLogitech,
    logoDreamscape,
    logoStandardChartered,
    logoSitebeat,
    logoMizuho
  ]

  const clientsRow3 = [
    logoCimb,
    logoRhb,
    logoNikkoAm,
    logoMannHummel,
    logoChubb,
    logoNtuc,
    logoTaylors,
    logoExplanade,
    logoProton,
    logoTriumph,
    logoProton
  ]

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
        <h3 
        className="text-[5.25rem] font-extrabold w-[1000px] text-center m-auto"
        >
          WHAT WE DO
        </h3>
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
        <h3 
        className="text-[5.25rem] font-extrabold w-[1000px] text-center m-auto"
        >
          UNFORGETTABLE RESULTS
        </h3>
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
        className="text-[5.25rem] font-extrabold w-[1000px] text-center m-auto"
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
        <h3 
        className="text-[5.25rem] font-extrabold w-[1000px] text-center m-auto"
        >
          SUPER PROUD TO WORK WITH
        </h3>
        <div
        className="w-full h-[405px] relative bg-blue-900 py-[2.875rem] overflow-"
        >
          <div
          className=" w-[2080px] h-[60px] flex justify-between absolute top-[46px]"
          >
            {clientsRow1.map((client) => (
              <div
              className="h-full w-[160px]"
              >
                <img 
                src={client} 
                alt="client logo" 
                className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
          <div
          className="w-[2080px] h-[60px] flex justify-between absolute right-0 top-[50%] translate-y-[-50%]"
          >
            {clientsRow2.map((client) => (
              <div
              className="h-full w-[160px]"
              >
                <img 
                src={client} 
                alt="client logo" 
                className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
          <div
          className="w-[2080px] h-[60px] flex justify-between absolute bottom-[46px]"
          >
            {clientsRow3.map((client) => (
              <div
              className="h-full w-[160px]"
              >
                <img 
                src={client} 
                alt="client logo" 
                className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
      <div 
      id="contact"
      className="bg-blue-600 my-[15rem] w-full"
      >
        <Link
        to="/contact"
        className="w-fit block m-auto"
        >
          <button
          className="bg-go-green-1 rounded-[3rem] py-[1rem] px-[2.5rem] m-auto "
          >
            Let's chat
          </button>
        </Link>
        
      </div>
    </>
  )
}

export default HomePage
