import { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { createPortal } from 'react-dom'

import Service from './Service'
import QuantResult from './QuantResult'
import mockImage from "../assets/MockImage.png"
import ellipse14 from "../assets/Ellipse14.png"
import ellipse12 from "../assets/Ellipse12.png"

import logoUob from "../assets/Logo-UOB.png"
import logoToyota from "../assets/Logo-toyota.png"
import logoPosb from "../assets/Logo-posb.png"
import logoSinglife from "../assets/Logo-singlife.png"
import logoAmway from "../assets/Logo-amway.png"
import logoFitnessFirst from "../assets/Logo-FitnessFirst.png"
import logoSony from "../assets/Logo-sony.png"
import logoXRvision from "../assets/Logo-xrvision.png"
import logoCrown from "../assets/Logo-crown.png"
import logoAIA from "../assets/Logo-aia.png"
import logoWWF from "../assets/Logo-WWF.png"

import logoMAS from "../assets/Logo-malaysiaairlines.png"
import logoMaxis from "../assets/Logo-maxis.png"
import logoGrab from "../assets/Logo-grab.png"
import logoDbs from "../assets/Logo-dbs.png"
import logoTreasure from "../assets/Logo-treasure.png"
import logoMicrosoft from "../assets/Logo-microsoft.png"
import logoLogitech from "../assets/Logo-logitech.png"
import logoDreamscape from "../assets/Logo-dreamscapedigital.png"
import logoStandardChartered from "../assets/Logo-standardchartered.png"
import logoSitebeat from "../assets/Logo-sitebeat.png"
import logoMizuho from "../assets/Logo-mizuho.png"

import logoCimb from "../assets/Logo-cimb.png"
import logoRhb from "../assets/Logo-rhb.png"
import logoNikkoAm from "../assets/Logo-nikkoam.png"
import logoMannHummel from "../assets/Logo-mann+hummel.png"
import logoChubb from "../assets/Logo-chubb.png"
import logoNtuc from "../assets/Logo-ntuc.png"
import logoTaylors from "../assets/Logo-taylorsuniversity.png"
import logoExplanade from "../assets/Logo-explanade.png"
import logoProton from "../assets/Logo-proton.png"
import logoTriumph from "../assets/Logo-triumph.png"

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

  const carouselContainerRef = useRef(null)
  const carouselContentLeftRef1 = useRef(null)
  const carouselContentLeftRef2 = useRef(null)

  useEffect(() => {
    const animateClientsLeft = () => {
      const container = carouselContainerRef.current
      const content1 = carouselContentLeftRef1.current
      const content2 = carouselContentLeftRef2.current
      if (!container || !content1 || !content2) return

      const containerWidth = container.offsetWidth
      const contentWidth = content1.scrollWidth
      const distance = contentWidth - containerWidth

      content1.style.transition = "none"
      content1.style.transform = "translateX(0)"
      void content1.offsetWidth // Force reflow

      content1.style.transition = "transform 10s linear"
      content1.style.transform = `translateX(-${distance}px)`


      content2.style.transition = "none"
      content2.style.transform = "translateX(0)"
      void content2.offsetWidth // Force reflow

      content2.style.transition = "transform 10s linear"
      content2.style.transform = `translateX(-${distance}px)`
      
    }

    animateClientsLeft()
    window.addEventListener("resize", animateClientsLeft)
    return () => window.removeEventListener("resize", animateClientsLeft)
  })

  const carouselContentRightRef = useRef(null)

  useEffect(() => {
    const animateClientsRight = () => {
      const container = carouselContainerRef.current
      const content = carouselContentRightRef.current
      if (!container || !content) return

      const containerWidth = container.offsetWidth
      const contentWidth = content.scrollWidth
      const distance = contentWidth - containerWidth

      content.style.transition = "none"
      content.style.transform = "translateX(0)"
      void content.offsetWidth // Force reflow

      content.style.transition = "transform 10s linear"
      content.style.transform = `translateX(${distance}px)`
      
    }

    animateClientsRight()
    window.addEventListener("resize", animateClientsRight)
    return () => window.removeEventListener("resize", animateClientsRight)
  })

  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <>
      {/* This part is fixed and centered via portal  */}
      {mounted && createPortal(
        <div 
        id="anim"
        className="relative z-30 w-full"
        >
          <div
          className="
          flex 
          flex-col md:flex-row
          justify-center
          items-start md:items-end 
          w-fit max-w-[88.3%]
          mt-[474px] lg:mt-[337px]
          mx-auto
          "
          >
            <div>
              <h1
              className="
              text-[53px]/[56px] sm:text-[4rem]/[100%] lg:text-[6.5rem]/[100%] 1366:text-[8rem]/[116px]
              font-extrabold 
              text-white
              "
              >
                We’re
              </h1>
              <h1
              className="
              text-[53px]/[56px] sm:text-[4rem]/[100%] lg:text-[6.5rem]/[100%] 1366:text-[8rem]/[116px]
              font-extrabold 
              text-white
              "
              >
                GrowthOps
              </h1>
            </div>
            <h2
            className="
            bg-white 
            text-go-cyan-2 
            text-[2.5rem]/[100%] sm:text-[3.5rem]/[100%] lg:text-[4.5rem]/[100%] 1366:text-[6rem]/[116px]
            font-extrabold 
            py-[1.25rem] md:py-[1.25rem] 
            px-[2.5rem] md:px-[4rem] 
            w-fit 
            h-fit 
            rounded-[5rem] 
            rotate-z-[-9.47deg] 
            md:mx-[25.05px]
            mt-[20px]
            "
            >
              Asia
            </h2>
          </div>
        </div>,
        document.body
      )}

      {/* This part flows with the DOM */}
      <div 
      id="landing-main"
      className=""
      >
        <div
        className="
        w-[356px] sm:w-full
        px-[1.5rem] sm:px-[2rem] md:px-[3rem] lg:px-[4rem] xl:px-[5rem] 
        py-[130px]
        mx-auto
        relative Z-0 top-[50px] md:top-[25px] lg:top-[0px]
        "
        >
          <h2 className="
          text-[2rem]/[100%] sm:text-[3rem]/[100%] md:text-[4rem]/[100%] lg:text-[5rem]/[100%] xl:text-8xl/[100%] 
          tracking-[-1.4px]
          font-extrabold
          ">
            YOUR NEW-BREED,
          </h2>
          <h2 className="
          text-[2rem]/[100%] sm:text-[3rem]/[100%] md:text-[4rem]/[100%] lg:text-[5rem]/[100%] xl:text-8xl/[100%]
          tracking-[-1.4px]
          font-extrabold 
          text-end 
          my-[0.25rem] md:my-[1.75rem]
          ">
            END-TO-END
          </h2>
          <h2 className="
          text-[2rem]/[100%] sm:text-[3rem]/[100%] md:text-[4rem]/[100%] lg:text-[5rem]/[100%] xl:text-8xl/[100%]
          tracking-[-1.4px]
          font-extrabold 
          md:ps-[103px]
          ">
            DIGITAL ALLY
          </h2>
          <p
          className="
          text-[0.875rem]/[1.25rem]
          font-medium
          mt-[1.25rem]
          ms-auto
          w-[73%]
          md:hidden
          ">
            We are an award-winning marketing transformation partner delivering unforgettable digital brands, experiences and technology.
          </p>
        </div>
        <div
        className="
        h-[374px] md:h-[519px] 
        bg-gradient-to-t from-black 
        relative z-10
        ">
        </div>
      </div>
      <div 
      id="fliparoo"
      className="
      mt-[62px] mb-[240px] 
      flex flex-col CHANGETHIS sm:flex-col 
      gap-y-[244px]
      "
      >
        <div 
        id="mission"
        className=""
        >
          <div
          className="
          text-[1.25rem] md:text-[2rem] 
          font-medium 
          w-[300px] sm:w-[375px] md:w-[569px] 
          mx-auto 
          text-center
          "
          >
            <p className="inline">With a focus in fusing </p>
            <span className="text-go-cyan-2">strategy, </span>
            {/* <span className="text-go-cyan-2 border-1 border-go-cyan-2 py-[14px] px-[1rem]">design</span> */}
            <div className="relative inline-block">
              <span 
              className="
              text-[1.25rem]/[1.5rem] md:text-[2rem]/[1.5rem] 
              text-go-cyan-2 
              border border-go-cyan-2 
              py-[6px] px-[1rem]
              "
              >
                design
              </span>

              {/* Corner squares */}
              <div className="absolute top-[-2px] left-0 transform translate-x-[-50%] translate-y-[-50%] w-[8px] h-[8px] border border-go-cyan-2 bg-black"></div>
              <div className="absolute top-[-2px] right-0 transform translate-x-[50%] translate-y-[-50%] w-[8px] h-[8px] border border-go-cyan-2 bg-black"></div>
              <div className="absolute bottom-[-2px] left-0 transform translate-x-[-50%] translate-y-[50%] w-[8px] h-[8px] border border-go-cyan-2 bg-black"></div>
              <div className="absolute bottom-[-2px] right-0 transform translate-x-[50%] translate-y-[50%] w-[8px] h-[8px] border border-go-cyan-2 bg-black"></div>
            </div>
            <p className="inline"> and </p>
            <span className="text-go-cyan-2 font-scp">&lt;technology/&gt;</span>
            <p className="inline"> to build and sustain market leaders</p>
          </div>
          <p
          className="
          text-[1.25rem] md:text-[2rem]
          font-medium 
          mt-[82px] mb-[62px] 
          text-center
          "
          >
            this is
          </p>
          
          <h2 
          className="
          text-[2.25rem] sm:text-[3.5rem] md:text-[5rem] lg:text-8xl 
          font-extrabold 
          text-center
          animatedGradient
          "
          >
            GrowthOps Asia
          </h2>
        </div>
        <div 
        id="services"
        className=""
        >
          <h3 
          className="
          text-[35px]/[2.5rem] sm:text-[2.75rem]/[2.5rem] md:text-[3.875rem]/[3.5rem] lg:text-[5.5rem]/[5.25rem] 
          font-extrabold 
          text-center 
          pb-[3.5rem] 
          mx-auto
          "
          >
            WHAT WE DO
          </h3>
          <div 
          className="
          flex 
          flex-col-reverse 1366:flex-row
          justify-between 
          items-center 
          gap-y-[1.5rem] 
          max-w-[87%] 
          mx-auto 1366:mx-[5rem] 
          py-[2rem]
          "
          >
            <div
            className="
            flex 
            flex-col 
            justify-center 
            w-full 926:w-[793px] 1366:w-[349px] 
            mx-auto
            "
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
            className="
            w-full 926:w-[793px] 
            h-fit 926:h-[588px] 
            overflow-hidden 
            rounded-[1.25rem]
            "
            >
              <img 
                className="w-full h-full object-contain 926:object-cover"
                src={mockImage} 
                alt="photo of service" 
              />
            </div>
          </div>
          <div 
          className="
          flex 
          flex-col-reverse 1366:flex-row-reverse 
          justify-between 
          items-center 
          gap-y-[1.5rem] 
          max-w-[87%] 
          mx-auto 1366:mx-[5rem] 
          py-[2rem]
          "
          >
            <div
            className="
            flex 
            flex-col 
            justify-center 
            w-full 926:w-[793px] 1366:w-[349px] 
            mx-auto
            "
            >
              <Service 
                index={"02"}
                title={"Digital-First Creative"} 
                points={[
                  "Brand & Marketing Strategy",
                  "Content Hubs",
                  "Creative Services"
                ]}
              />
            </div>
            <div
            className="
            w-full 926:w-[793px] 
            h-fit 926:h-[588px] 
            overflow-hidden 
            rounded-[1.25rem]
            "
            >
              <img 
                className="w-full h-full object-cover"
                src={mockImage} 
                alt="photo of service" 
              />
            </div>
          </div>
          <div 
          className="
          flex 
          flex-col-reverse 1366:flex-row 
          justify-between 
          items-center 
          gap-y-[1.5rem] 
          max-w-[87%] 
          mx-auto 1366:mx-[5rem] 
          py-[2rem]
          ">
            <div
            className="
            flex 
            flex-col 
            justify-center 
            w-full 926:w-[793px] 1366:w-[349px] 
            mx-auto
            "
            >
              <Service 
                index={"03"}
                title={"Marketing Technology"} 
                points={[
                  "Technology Consulting",
                  "MarTech Deployment & Partnerships",
                  "Mobile Development",
                  "Custom Web Development",
                  "Solution Architecture"
                ]}
              />
            </div>
            <div
            className="
            w-full 926:w-[793px] 
            h-fit 926:h-[588px] 
            overflow-hidden 
            rounded-[1.25rem]
            "
            >
              <img 
                className="w-full h-full object-cover"
                src={mockImage} 
                alt="photo of service" 
              />
            </div>
          </div>
          <div 
          className="
          flex 
          flex-col-reverse 1366:flex-row-reverse 
          justify-between 
          items-center 
          gap-y-[1.5rem] 
          max-w-[87%] 
          mx-auto 1366:mx-[5rem] 
          py-[2rem]
          "
          >
            <div
            className="
            flex 
            flex-col 
            justify-center 
            w-full 926:w-[793px] 1366:w-[349px] 
            mx-auto
            "
            >
              <Service 
                index={"04"}
                title={"Experience Design & Strategy"} 
                points={[
                  "Digital Transformation & Change Management",
                  "User Experience Strategy and Design"
                ]}
              />
            </div>
            <div
            className="
            w-full 926:w-[793px] 
            h-fit 926:h-[588px] 
            overflow-hidden 
            rounded-[1.25rem]
            "
            >
              <img 
                className="w-full h-full object-cover"
                src={mockImage} 
                alt="photo of service" 
              />
            </div>
          </div>
        </div>
      </div>
      
      <div 
      id="results"
      className=""
      >
        <div
        className="
        relative
        ">
          <h3 
          className="
          text-[35px]/[95.5%] sm:text-[2.75rem] md:text-[3.875rem] lg:text-[5.25rem] 
          bg-gradient-to-r from-go-blue-1 via-go-cyan-4 to-go-yellow-1 bg-clip-text text-transparent
          font-extrabold 
          text-center 
          m-auto
          "
          >
            UNFORGETTABLE
          </h3>
          <h3 
          className="
          text-[35px]/[95.5%] sm:text-[2.75rem] md:text-[3.875rem] lg:text-[5.25rem] 
          font-extrabold 
          text-center 
          m-auto
          "
          >
            RESULTS
          </h3>
          <div
          className="
          absolute
          top-[25%]
          left-[50%] sm:left-[54%]
          transform translate-[-50%]
          w-[356px] sm:w-[500px] md:w-[680px] lg:w-[941px]
          ">
            <img 
            className="
            w-full
            h-full
            "
            src={ellipse14} 
            alt="ellipse" 
            />
          </div>
          
        </div>
        
        <div
        className="
        w-[90%] md:w-[80%] 1166:w-[71.4%] 
        h-fit 926:h-[843px] 
        m-auto 
        mt-[98px]
        relative
        flex-col
        "
        >  
          <div
          className="
          w-[245px] 450:w-[356px] 
          926:absolute 926:top-0
          "
          >
            <QuantResult percentage={"400"} text={"INCREASE IN ORGANIC PAGE VIEWS"}/>
            <p
            className="text-sm text-go-gray-2 mt-[0.5rem]"
            >
              Using our SEO services, it also resulted in a <span className="font-bold">109% increase in page visibility</span>
            </p>
          </div>
          <div
          className="
          w-[245px] 450:w-[356px] 
          my-[3.5rem] 926:my-0
          justify-self-end
          926:absolute 926:top-[33%] 926:right-0 
          926:transform 926:translate-y-[-50%]"
          >
            <QuantResult percentage={"4.5"} text={"INCREASE IN SALES"}/>
            <p
            className="text-sm text-go-gray-2 mt-[0.5rem]"
            >
              Through our creative services, a national automaker experienced a <span className="font-bold">4.5% increase in sales amidst a -4.6% market decline.</span> They also had a <span className="font-bold">2% increase in market share,</span> and a <span className="font-bold">5.6 point shift in brand perception</span>
            </p>
          </div>
          <div
          className="
          w-[245px] 450:w-[356px] 
          926:absolute 926:top-[50%] 
          926:transform 926:translate-y-[-50%]
          "
          >
            <QuantResult percentage={"96"} text={"FASTER PAGE LAUNCHES"}/>
            <p
            className="text-sm text-go-gray-2 mt-[0.5rem] mb-[21px]"
            >
              Using AEM, a leading Telco saw these results
            </p>
            <div
            className="h-[2.5rem]">
              <div
              className="w-[277px] h-[2.5rem] rounded-[0.25rem] bg-go-cyan-1 opacity-20"
              >
              </div>
              <div
                className="w-[79px] h-[2.5rem] rounded-[0.25rem] bg-go-cyan-1 relative top-[-2.5rem]"
              >
              </div>
            </div>
            <p
            className="text-sm text-go-gray-2 mt-[0.75rem] mb-[1.125rem]"
            >
              Campaign launches cut from <span className="font-bold">7 days to 2 days</span>
            </p>
            <div
            className="h-[2.5rem]">
              <div
              className="w-[277px] h-[2.5rem] rounded-[0.25rem] bg-go-cyan-1 opacity-20"
              >
              </div>
              <div
                className="w-[11px] h-[2.5rem] rounded-[0.25rem] bg-go-cyan-1 relative top-[-2.5rem]"
              >
              </div>
            </div>
            <p
            className="text-sm text-go-gray-2 mt-[0.625rem]"
            >
              Page launches cut from <span className="font-bold">2 days to 2 hours</span>
            </p>
          </div>
            
        
          <div
          className="
          w-[245px] 450:w-[356px]
          my-[3.5rem] 926:my-0
          justify-self-end
          926:absolute 926:top-[66%] 926:right-0 
          926:transform 926:translate-y-[-50%]
          "
          >
            <QuantResult percentage={"71"} text={"REDUCTION IN CPL"}/>
            <p
            className="text-sm text-go-gray-2 mt-[0.5rem]"
            >
              After optimising the performance media funnel, a leading bank saw <span className="font-bold">savings over AUD$300 in the first year</span>
            </p>
          </div>
          <div
          className="
          w-[245px] 450:w-[356px] 
          926:absolute 926:bottom-0
          "
          >
            <QuantResult percentage={"38"} text={"CONVERSION RATE IMPROVEMENT"}/>
            <p
            className="text-sm text-go-gray-2 mt-[0.5rem]"
            >
              Using Adobe Target to A/B test landing pages’ forms, we saw an <span className="font-bold">increase in conversion rate</span>
            </p>
          </div>
        </div>
      </div>
      <div 
      id="reviews"
      className="
      mt-[146px] md:mt-[203px]
      mb-[342px] md:mb-[204px]
      "
      >
        <h3 
        className="
        text-[35px]/[95.5%] sm:text-[2.75rem] md:text-[3.875rem] lg:text-[5.25rem]
        font-extrabold
        w-[90%] 
        text-center 
        m-auto"
        >
          WHAT CLIENTS SAY
        </h3>
        <div
        className="
        border-1 
        mt-[40px] md:mt-[88px]
        mb-[61px] md:mb-[64px]
        rounded-[30px] 
        flex 
        justify-between
        p-[0.375rem] 
        w-[95%] 450:w-[371px] 
        m-auto"
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
        className="
        flex 
        justify-between 
        w-full sm:w-[95%] lg:w-[1000px] 
        m-auto
        "
        >
          <div
          className="font-bold text-[2.5rem]/[100%]"
          >
            “
          </div>
          <div
          className="w-[89.5%]"
          >
            <p
            className="
            text-[1.25rem]/[160%] md:text-[1.375rem]/[150%] lg:text-[1.5rem]/[150%]
            font-medium
            "
            >
              Through this initiative, GrowthOps have shown to have the right capabilities to take our platform to the next level. We believe the refreshed U.COM.MY will equip us with more insights, enabling us to make more data-led decisions that will result in new digital experiences that will truly benefit our customers.
            </p>
            <p
            className="
            font-bold
            mt-[3rem] md:mt-[4rem]
            mb-[0.75rem]
            ">
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
      className="
      "
      >
        <div
        className="
        relative
        w-[300px] 450:w-[450px] md:w-[700px] lg:w-[850px]
        mx-auto
        ">
          <h3 
          className="
          text-[35px]/[95.5%] sm:text-[2.75rem] md:text-[3.875rem] lg:text-[5.25rem] 
          font-extrabold
          text-center 
          m-auto
          "
          >
            <span
            className="
            bg-gradient-to-r from-go-purple-1 to-go-blue-2 bg-clip-text text-transparent
            ">
              SUPER </span> 
            PROUD TO WORK WITH
          </h3>
          <div
          className="
          absolute
          top-[25%]
          left-[26%] sm:left-[20%] md:left-[23%] lg:left-[20%]
          transform translate-[-50%]
          w-[148px] sm:w-[190px] md:w-[260px] lg:w-[373px]
          ">
            <img 
            className="
            w-full
            h-full
            "
            src={ellipse12} 
            alt="ellipse" 
            />
          </div>
        </div>
        
        <div
        className="
        w-full 
        h-[349px] md:h-[405px] 
        relative 
        mt-[4rem]
        py-[2.875rem]
        "
        ref={carouselContainerRef}
        >
          <div
          className=" 
          w-[2080px] 
          h-[48px] md:h-[62px] 
          flex 
          justify-between 
          absolute top-[46px]
          "
          ref={carouselContentLeftRef1}
          >
            {clientsRow1.map((client) => (
              <div
              className="
              h-full 
              w-[123.87px] md:w-[160px]
              "
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
          className="
          w-[2080px] 
          h-[48px] md:h-[62px]
          flex 
          justify-between 
          absolute right-0 top-[50%]
          transform translate-y-[-50%]
          "
          ref={carouselContentRightRef}
          >
            {clientsRow2.map((client) => (
              <div
              className="
              h-full 
              w-[123.87px] md:w-[160px]
              "
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
          className="
          w-[2080px] 
          h-[48px] md:h-[62px]
          flex 
          justify-between 
          absolute bottom-[46px]
          "
          ref={carouselContentLeftRef2}
          >
            {clientsRow3.map((client) => (
              <div
              className="
              h-full 
              w-[123.87px] md:w-[160px]
              "
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
      className="
      my-[15rem] 
      w-full"
      >
        <Link
        to="/contact"
        className="w-fit block m-auto"
        >
          <button
          className="
          bg-go-green-1 
          rounded-[3rem] 
          py-[0.875rem] md:py-[1rem] 
          px-[2.25rem] md:px-[2.5rem] 
          mx-auto 
          text-[1rem]/[100%] md:text-[1.125rem]/[100%]
          font-extrabold
          "
          >
            Let's chat
          </button>
        </Link>
        
      </div>
    </>
  )
}

export default HomePage
