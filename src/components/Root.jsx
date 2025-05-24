import { useState } from 'react'
import { Outlet, Link, useLocation } from 'react-router-dom'
import OpenInNewIcon from "../assets/open_in_new.svg"
import InstagramIcon from "../assets/Logo-instagram.svg"
import FacebookIcon from "../assets/Logo-facebook.svg"
import LinkedInIcon from "../assets/Logo-linkedin.svg"
import YouTubeIcon from "../assets/Logo-youtube.svg"
import goLogo from "../assets/GOLogo.svg"
import bars from "../assets/bars.svg"

const Root = () => {
  const location = useLocation()
  const isHomePage = location.pathname === "/"

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
      <header
      className="bg-black border-2 border-go-white-2/8 rounded-[4rem] w-[93%] 1366:w-[1270px] h-[69px] flex justify-between items-center py-[15px] px-[2rem] mx-auto mb-[1.375rem] relative z-20"
      >
        <Link
        to="/"
        >
          <img src={goLogo} alt="Open In New" className=""/>
        </Link>
        <button
        className="flex items-center gap-x-[0.5rem]"
        >
          <p
          className="text-sm font-bold"
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
      
      
      <div className=" w-full">
        <Outlet />
      </div>

      <div 
      id="rings"
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
        bottom-[-18%] md:bottom-[-56.5%] 926:bottom-[-55.5%] 1366:bottom-[-64%] 
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
        bottom-[-18.5%] md:bottom-[-57%] 926:bottom-[-56%] 1366:bottom-[-64.5%] 
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
        bottom-[-19%] md:bottom-[-57.5%] 926:bottom-[-56.5%] 1366:bottom-[-65%] 
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
        className="
        flex flex-wrap
        justify-center
        gap-x-[40px] gap-y-[30px]
        w-[350px] sm:w-[496px] 
        mx-auto 
        pt-[302px] 
        pb-[56px]
        "
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
        className="
        w-[88.3%] 
        flex 
        flex-col md:flex-row
        justify-between 
        items-center
        mx-auto 
        pt-[80px]"
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
