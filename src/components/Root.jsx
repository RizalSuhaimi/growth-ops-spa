import { useState } from 'react'
import { Outlet, Link, useLocation } from 'react-router-dom'
import OpenInNewIcon from "../assets/open_in_new.svg"
import InstagramIcon from "../assets/Logo-instagram.svg"
import FacebookIcon from "../assets/Logo-facebook.svg"
import LinkedInIcon from "../assets/Logo-linkedin.svg"
import YouTubeIcon from "../assets/Logo-youtube.svg"
import goLogo from "../assets/GOLogo.svg"
import bars from "../assets/bars.svg"
import close from "../assets/close.svg"
import HomePage from './HomePage'

const Root = () => {
  const location = useLocation()
  const isHomePage = location.pathname === "/"

  const [menuOpen, setMenuOpen] = useState(false)

  const handleMenuClicked = () => {
    setMenuOpen(prev => !prev)
  }

  return (
    <div 
    className="
    w-full 1366:w-[1366px] 
    bg-black 
    m-auto 
    pb-[4.25rem] 
    pt-[1.5rem] 
    overflow-hidden 
    relative
    "
    >
      {menuOpen ? 
        <div>
          <div
          className="
          h-[768px]
          w-full 1366:w-[1366px]
          absolute top-0 z-20
          pt-[1.5rem]
          bg-go-gray-8/70
          backdrop-blur-sm
          ">
            <header
            className="
            border-2
            border-transparent
            w-[93%] 1366:w-[1270px] 
            h-[69px] 
            flex justify-between items-center 
            py-[15px] 
            px-[2rem] 
            mx-auto 
            mb-[1.375rem] 
            "
            >
              <Link
              to="/"
              >
                <img src={goLogo} alt="Open In New" className=""/>
              </Link>
              <button
              className="
              flex 
              items-center 
              gap-x-[0.5rem]
              hover:cursor-pointer
              ps-[1rem]
              pe-[0.5rem]
              rounded-md
              hover:bg-neutral-900
              active:bg-neutral-800
              "
              onClick={handleMenuClicked}
              >
                <p
                className="
                text-sm 
                font-bold
                hidden sm:block
                "
                >
                  CLOSE
                </p>
                <div
                className="size-[2.5rem] flex"
                >
                  <img src={close} alt="menu" className="m-auto"/>
                </div>
              </button>
            </header>
            <div 
            id="directory"
            className="
            w-[93%] 1366:w-[1270px]
            mx-auto
            flex flex-col items-end
            "
            >
              <Link
              to="">
                <p
                className="
                w-fit
                px-[10px]
                text-[3rem]/[100%] md:text-[4rem]
                font-black
                text-end
                mb-[2.5rem]
                hover:bg-neutral-900
                active:bg-neutral-800
                ">
                  SERVICES
                </p>
              </Link>
              <Link
              to="">
                <p
                className="
                w-fit
                px-[10px]
                text-[3rem]/[100%] md:text-[4rem]
                font-black
                text-end
                mb-[2.5rem]
                hover:bg-neutral-900
                active:bg-neutral-800
                ">
                  WORK
                </p>
              </Link>
              <Link
              to="">
                <p
                className="
                w-fit
                px-[10px]
                text-[3rem]/[100%] md:text-[4rem]
                font-black
                text-end
                mb-[2.5rem]
                hover:bg-neutral-900
                active:bg-neutral-800
                ">
                  INSIGHTS
                </p>
              </Link>
              <Link
              to="">
                <p
                className="
                w-fit
                px-[10px]
                text-[3rem]/[100%] md:text-[4rem]
                font-black
                text-end
                mb-[2.5rem]
                hover:bg-neutral-900
                active:bg-neutral-800
                ">
                  CAREERS
                </p>
              </Link>
              <Link
              to="">
                <p
                className="
                w-fit
                px-[10px]
                text-[3rem]/[100%] md:text-[4rem]
                font-black
                text-end
                mb-[2.5rem]
                hover:bg-neutral-900
                active:bg-neutral-800
                ">
                  CONTACT
                </p>
              </Link>
            </div>
            
          </div>
          <div
            className="
            w-[93%] 1366:w-[1270px] 
            h-[69px] 
            flex justify-between items-center 
            py-[15px] 
            px-[2rem] 
            mx-auto 
            mb-[1.375rem] 
            "
            ></div>
        </div>
        
      : 
        <header
        className="
        bg-black 
        border-2 
        border-go-white-2/8 
        rounded-[4rem] 
        w-[93%] 1366:w-[1270px] 
        h-[69px] 
        flex justify-between items-center 
        py-[15px] 
        px-[2rem] 
        mx-auto 
        mb-[1.375rem] 
        relative z-20"
        >
          <Link
          to="/"
          >
            <img src={goLogo} alt="Open In New" className=""/>
          </Link>
          <button
          className="
          flex 
          items-center 
          gap-x-[0.5rem]
          hover:cursor-pointer
          ps-[1rem]
          pe-[0.5rem]
          rounded-md
          hover:bg-neutral-900
          active:bg-neutral-800
          "
          onClick={handleMenuClicked}
          >
            <p
            className="
            text-sm 
            font-bold
            hidden sm:block
            "
            >
              MENU
            </p>
            <div
            className="size-[2.5rem] flex"
            >
              <img src={bars} alt="menu" className="m-auto"/>
            </div>
          </button>
        </header>
      }
      
      {isHomePage && (
        <div id="rings">
          <div
          className="ring1 border-go-pink-1 md:border-go-white-3 border-1 rounded-full size-[373.82px] absolute top-[399px] left-1/2 transform translate-[-50%] z-10">
          </div>
          <div
          className="ring2 border-go-pink-1 md:border-go-white-3 border-1 rounded-full size-[607.45px] absolute top-[399px] left-1/2 transform translate-[-50%] z-10">
          </div>
          <div
          className="ring3 border-go-pink-1 md:border-go-white-3 border-1 rounded-full size-[841.09px] absolute top-[399px] left-1/2 transform translate-[-50%] z-10">
          </div>
          <div
          className="ring4 border-go-pink-1 md:border-go-white-3 border-1 rounded-full size-[1098.09px] absolute top-[399px] left-1/2 transform translate-[-50%] z-10 hidden md:block">
          </div>
          <div
          className="ring5 border-go-pink-1 md:border-go-white-3 border-1 rounded-full size-[1331.73px] absolute top-[399px] left-1/2 transform translate-[-50%] z-10 hidden md:block">
          </div>
          <div
          className="ring6 border-go-pink-1 md:border-go-white-3 border-1 rounded-full size-[1542px] absolute top-[399px] left-1/2 transform translate-[-50%] z-10 hidden lg:block">
          </div>
        </div>
      )}
      
      
      <div 
      className="
      w-full
      ">
        <Outlet />
      </div>

      <div 
      id="rings2"
      className="
      
      "
      >
        <div
        className="
        border-go-pink-1 md:border-white
        opacity-30
        border-1 
        rounded-full 
        size-[1536px] md:size-[4155px] 
        absolute 
        bottom-[-1750px] md:bottom-[-5750px] 
        left-1/2 
        transform translate-[-50%] 
        z-10
        ">
        </div>
        <div
        className="
        border-white
        opacity-50
        border-1 
        rounded-full 
        size-[1536px] md:size-[4155px] 
        absolute 
        bottom-[-1800px] md:bottom-[-5800px] 
        left-1/2 
        transform translate-[-50%] 
        z-10
        ">
        </div>
        <div
        className="
        border-white
        opacity-70
        border-1 
        rounded-full 
        size-[1536px] md:size-[4155px] 
        absolute 
        bottom-[-1850px] md:bottom-[-5850px] 
        left-1/2 
        transform translate-[-50%] 
        z-10
        ">
        </div>
      </div>
      <footer
      className="
      w-full 
      h-[fit] "
      >
        <div
        className={`
        ${isHomePage ? "flex" : "hidden sm:flex"} 
        flex-wrap
        justify-center
        gap-x-[40px] gap-y-[30px]
        w-[350px] sm:w-[496px] 
        mx-auto 
        pt-[302px] 
        pb-[56px]
        `}
        >
          <Link>
            Services
          </Link>
          <Link>
            Works
          </Link>
          <Link>
            Insights
          </Link>
          <Link>
            Careers
          </Link>
          <Link>
            Contact Us
          </Link>
        </div>
        {!isHomePage && (
          <div 
          id="cities"
          className="
          block sm:hidden
          w-[87.8%]
          mx-auto
          pt-[185px]
          ">
            <p 
            className="
            text-[0.875rem]/[100%]
            font-semibold
            text-go-gray-7
            mb-[1.25rem]
            "
            >
              ASIA
            </p>
            <p 
            className="
            text-[1rem]/[100%]
            text-go-white-2
            mb-[1rem]
            ">
              Hong Kong
            </p>
            <p 
            className="
            text-[1rem]/[100%]
            text-go-white-2
            mb-[1rem]
            ">
              Kuala Lumpur
            </p>
            <p 
            className="
            text-[1rem]/[100%]
            text-go-white-2
            mb-[1rem]
            ">
              Manila
            </p>
            <p 
            className="
            text-[1rem]/[100%]
            text-go-white-2
            mb-[1rem]
            ">
              Singapore
            </p>
            <p 
            className="
            text-[0.875rem]/[100%]
            font-semibold
            text-go-gray-7
            mb-[1.25rem]
            "
            >
              MIDDLE EAST
            </p>
            <p 
            className="
            text-[1rem]/[100%]
            text-go-white-2
            mb-[1rem]
            ">
              United Arab Emirates
            </p>
          </div>
        )}
        
        <div
        className="
        w-[296px] 
        max-w-[79%]
        h-[32] 
        flex 
        justify-between 
        mx-auto"
        >
          <img src={LinkedInIcon} alt="LinkedIn" className=""/>
          <img src={FacebookIcon} alt="LinkedIn" className=""/>
          <img src={InstagramIcon} alt="LinkedIn" className=""/>
          <img src={YouTubeIcon} alt="LinkedIn" className=""/>
        </div>
        <div
        className={`
        ${isHomePage ? "flex" : "hidden sm:flex"}
        flex-col md:flex-row
        justify-between 
        items-center
        w-[88.3%] 
        mx-auto 
        pt-[80px]
        `}
        >
          <p
          className="
          text-xs 
          text-go-gray-3
          hidden md:block
          "
          >
            © Copyright GrowthOps. All rights reserved.
          </p>
          <div
          className="
          flex 
          flex-col md:flex-row
          items-center
          gap-x-[3rem]
          gap-y-[1.5rem]
          "
          >
            <Link
            className="text-xs"
            >  
              <img src={OpenInNewIcon} alt="Open In New" className="inline"/>
              <span> Go to global GrowthOps website</span>
            </Link>
            <Link
            className="text-xs"
            >
              Privacy Policy
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Root
