import { useRef } from "react"

import iconPhoneGray from "../assets/phoneGray.png"
import iconLocationDotGray from "../assets/location-dotGray.png"
import iconPhoneCyan from "../assets/phoneCyan.png"
import iconLocationDotCyan from "../assets/location-dotCyan.png"

const OfficeCard = ({region, city, phone, email, address}) => {

  const handlePhoneIcon = () => {

  }

  return (
    <>
    {region ? 
      <div
      className="
      w-[382px]
      max-w-[87.5%]
      border-1
      rounded-[1.5rem]
      border-neutral-600
      px-[1.5rem] md:-px[2rem]
      py-[1.5rem]
      ">
        <p
        className="
        text-[0.75rem]/[100%]
        font-semibold
        text-go-cyan-1 md:text-go-gray-2
        mb-[0.5rem]
        ">
          {region}
        </p>
        <p
        className="
        text-[1.5rem]/[100%]
        font-extrabold
        text-go-cyan-1
        mb-[1.5rem]
        ">
          {city}
        </p>
        {phone ?
          <div 
        className="
        flex
        mb-[0.75rem]
        gap-x-[0.5rem]
        "
        >
          <div 
          className="
          size-[1.5rem]
          min-w-[1.5rem]
          ">
            <img 
            src={iconPhoneGray}
            alt="phone icon"
            className="
            hidden md:block
            "
            />
            <img 
            src={iconPhoneCyan}
            alt="phone icon"
            className="
            block md:hidden
            "
            />
          </div>
          <p
          className="
          text-[1rem]/[100%]
          font-medium
          text-go-white-2
          ">
              {phone}
          </p>
        </div>
        :
          <></>
        }
        
        {email ?
          <div 
          className="
          flex
          mb-[0.75rem]
          gap-x-[0.5rem]
          "
          >
            <div 
            className="
            size-[1.5rem]
            min-w-[1.5rem]
            text-[1rem]/[100%]
            font-extrabold
            text-go-cyan-1 md:text-go-gray-2
            ">
              @
            </div>
            <p
            className="
            text-[1rem]/[100%]
            font-medium
            text-go-white-2
            ">
                {email}
            </p>
          </div>
        :
          <></>
        }
        
        <div 
        className="
        flex
        mb-[0.75rem]
        gap-x-[0.5rem]
        "
        >
          <div 
          className="
          size-[1.5rem]
          min-w-[1.5rem]
          ">
            <img 
            src={iconLocationDotGray}
            alt="location icon"
            className="
            hidden md:block
            "
            />
            <img 
            src={iconLocationDotCyan}
            alt="location icon"
            className="
            block md:hidden
            "
            />
          </div>
          <p
          className="
          text-[1rem]/[120%]
          font-medium
          text-go-white-2
          ">
              {address}
          </p>
        </div>
      </div>
    
      :
      
      <div
      className="
      hidden 926:block
      w-[382px]
      max-w-[87.5%]
      rounded-[1.5rem]
      px-[1.5rem] md:-px[2rem]
      py-[1.5rem]
      ">
        
      </div>
    }
    </>
  )
}

export default OfficeCard