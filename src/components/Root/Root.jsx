import { useState } from 'react'
import { Outlet, Link } from 'react-router-dom'
import OpenInNewIcon from "../../assets/open_in_new.svg"
import InstagramIcon from "../../assets/Logo-instagram.svg"
import FacebookIcon from "../../assets/Logo-facebook.svg"
import LinkedInIcon from "../../assets/Logo-linkedin.svg"
import YouTubeIcon from "../../assets/Logo-youtube.svg"

const Root = () => {

  return (
    <div 
    className='w-[1366px] bg-black m-auto pb-[4.25rem] overflow-hidden'
    >
      <header
      className="border-2 border-go-white-2/8 rounded-[4rem] w-[1270px] h-[69px]"
      >
        <Link
        to="/"
        >
          Home
        </Link>
        <button>
          menu
        </button>
      </header>
      <div className="bg-red-900 w-full">
        <Outlet />
      </div>
      <footer
      className="border-1 w-full h-[553px] "
      >
        <div
        className="flex justify-between w-[496px] mx-auto pt-[302px] pb-[56px]"
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
        className="w-[296px] h-[32] flex justify-between mx-auto"
        >
          <img src={LinkedInIcon} alt="LinkedIn" className=""/>
          <img src={FacebookIcon} alt="LinkedIn" className=""/>
          <img src={InstagramIcon} alt="LinkedIn" className=""/>
          <img src={YouTubeIcon} alt="LinkedIn" className=""/>
        </div>
        <div
        className="w-[1206px] flex justify-between mx-auto pt-[80px]"
        >
          <p
          className="text-xs text-go-gray-3"
          >
            © Copyright GrowthOps. All rights reserved.
          </p>
          <div
          className="flex gap-x-[3rem]"
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
