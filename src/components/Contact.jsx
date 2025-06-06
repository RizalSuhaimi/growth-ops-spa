import { useState } from 'react'
import OfficeCard from './OfficeCard'

import vector9 from "../assets/vector 9 - contact.svg"
import vector10 from "../assets/vector 10 - contact.svg"
import vector11 from "../assets/vector 11 - contact.svg"
import vector12 from "../assets/vector 12 - contact.svg"

const Contact = () => {
  const [count, setCount] = useState(0)

  const offices = [
    {
      region: "ASIA",
      city: "Kuala Lumpur",
      phone: "+60 3 2789 9038",
      email: "my@growthops.asia",
      address: "Level 11, Block B, Plaza Zurich, No. 12, Jalan Gelenggang, Bukit Damansara, 50490 Kuala Lumpur, Malaysia"
    },
    {
      region: "ASIA",
      city: "Manila",
      phone: "+63 2 7586 4771",
      email: "man@growthops.asia",
      address: "KMC Solutions, 5F V Corporate Center, L.P. Leviste, Salcedo Village, Makati City 1227"
    },
    {
      region: "ASIA",
      city: "Hong Kong",
      phone: "+852 2805 9009",
      email: "hkg@growthops.asia",
      address: "29/F, Infinitus Plaza, 199 Des Voeux Road Central, Hong Kong"
    },
    {
      region: "ASIA",
      city: "Singapore",
      phone: "+65 6220 8383",
      email: "sg@growthops.asia",
      address: "1 Neil Rd, #02-02, Singapore 088804"
    },
    {
      region: "MIDDLE EAST",
      city: "United Arab Emirates",
      address: "Building 1, Unit B304, Dubai Design District"
    },
    {}
  ]

  return (
    <div
    className="
      w-[87.8%]
      mx-auto
    ">
      <div 
      id="contact-main"
      className="
      mt-[58px]
      mb-[127px]
      relative
      "
      >
        <h2 className="
        text-[2rem]/[92%] sm:text-[3rem] md:text-[4rem] lg:text-[5rem] xl:text-8xl 
        tracking-[-1.4px]
        font-extrabold
        ">
          CONTACT US
        </h2>
        <p
        className="
        text-[1.25rem]/[120%] md:text-[2rem]/[137.5%]
        font-medium
        w-[327px] md:w-[587px]
        mt-[1.5rem]
        mb-[3rem]
        "
        >
          Let's create something awesome together
        </p>
        <form 
        action="" 
        method="post"
        onSubmit={(e) => {
          e.preventDefault()
        }}
        className="
        relative
        z-10
        "
        >
          <div
          className="
          flex
          flex-col
          mb-[2rem]
          ">
            <label 
            htmlFor="fullName"
            className="
            text-[0.875rem]/[100%]
            text-go-gray-6
            font-semibold
            mb-[0.5rem]
            "
            >
              Full name
            </label>
            <input 
            type="text" 
            name="fullName" 
            id="fullName" 
            className="
            border-1 
            border-neutral-600
            rounded-[12px]
            bg-go-gray-4
            p-[1rem]
            max-w-[381px]
            "
            />
          </div>
          <div 
          className="
          flex
          flex-col 926:flex-row
          gap-x-[2rem]
          gap-y-[25px]
          mb-[2.5rem]
          "
          >
            <div
            className="
            flex
            flex-col
            ">
              <label 
              htmlFor="phoneNumber"
              className="
              text-[0.875rem]/[100%]
              text-go-gray-6
              font-semibold
              mb-[0.5rem]
              "
              >
                Phone number
              </label>
              <div 
              className="
              flex
              w-full
              ">
                <select 
                name="countryCode" 
                id="countryCode" 
                className="
                font-medium
                border-1
                border-neutral-600
                rounded-s-[12px]
                bg-go-gray-5
                w-[94px]
                px-[1.5rem]
                pe-[13px]
                ">
                  <option value="+60" className="bg-go-gray-5">+60</option>
                  <option value="+44" className="bg-go-gray-5">+44</option>
                  <option value="+1" className="bg-go-gray-5">+1</option>
                  <option value="+61" className="bg-go-gray-5">+61</option>
                  <option value="+63" className="bg-go-gray-5">+63</option>
                </select>
                <input 
                type="text" 
                name="phoneNumber" 
                id="phoneNumber" 
                className="
                border-1 
                border-neutral-600
                rounded-e-[12px]
                bg-go-gray-4
                p-[1rem]
                w-full 434:w-[287px]
                
                "
                />
              </div>
              
            </div>
            <div
            className="
            flex
            flex-col
            ">
              <label 
              htmlFor="workEmail"
              className="
              text-[0.875rem]/[100%]
              text-go-gray-6
              font-semibold
              mb-[0.5rem]
              "
              >
                Work email
              </label>
              <input 
              type="text" 
              name="workEmail" 
              id="workEmail" 
              className="
              border-1 
              border-neutral-600
              rounded-[12px]
              bg-go-gray-4
              p-[1rem]
              w-[381px]
              max-w-full
              "
              />
            </div>
          </div>
          <section>
            <p
            className="
            text-[0.875rem]/[100%]
            text-go-gray-6
            font-semibold
            mb-[1.25rem]
            ">
              I want to
            </p>
            <div 
            className="
            flex
            flex-col md:flex-row
            justify-between
            gap-y-[1.25rem]
            max-w-[687px]
            mb-[2.5rem]
            ">
              <div
              className="
              flex
              gap-x-[12px]
              ">
                <input 
                type="radio" 
                name="purpose" 
                id="becomeAClient" 
                value="becomeAClient" 
                className="
                appearance-none
                size-[1rem]
                border-1
                rounded-full
                border-neutral-600
                cursor-pointer
                checked:border-3 checked:bg-blue-400
                "
                />
                <label 
                htmlFor="purpose"
                className="
                text-[1rem]/[100%]
                font-medium
                text-go-white-2
                "
                >
                  Become a client
                </label>
              </div>
              <div
              className="
              flex
              gap-x-[12px]
              ">
                <input 
                type="radio" 
                name="purpose" 
                id="joinTheTeam" 
                value="joinTheTeam"
                className="
                appearance-none
                size-[1rem]
                border-1
                rounded-full
                border-neutral-600
                cursor-pointer
                checked:border-3 checked:bg-blue-400
                "
                />
                <label 
                htmlFor="purpose"
                className="
                text-[1rem]/[100%]
                font-medium
                text-go-white-2
                "
                >
                  Join the team
                </label>
              </div>
              <div
              className="
              flex
              gap-x-[12px]
              ">
                <input 
                type="radio" 
                name="purpose" 
                id="investorEnquiry" 
                value="investorEnquiry"
                className="
                appearance-none
                size-[1rem]
                border-1
                rounded-full
                border-neutral-600
                cursor-pointer
                checked:border-3 checked:bg-blue-400
                "
                />
                <label 
                htmlFor="purpose"
                className="
                text-[1rem]/[100%]
                font-medium
                text-go-white-2
                "
                >
                  Investor Enquiry
                </label>
              </div>
              <div
              className="
              flex
              gap-x-[12px]
              ">
                <input 
                type="radio" 
                name="purpose" 
                id="others" 
                value="others"
                className="
                appearance-none
                size-[1rem]
                border-1
                rounded-full
                border-neutral-600
                cursor-pointer
                checked:border-3 checked:bg-blue-400
                "
                />
                <label 
                htmlFor="purpose"
                className="
                text-[1rem]/[100%]
                font-medium
                text-go-white-2
                "
                >
                  Others
                </label>
              </div>
            </div>
          </section>
          <section
          className="
          flex
          flex-col
          mb-[2.5rem]
          ">
            <label
            htmlFor="message"
            className="
            text-[0.875rem]/[100%]
            text-go-gray-6
            font-semibold
            mb-[0.5rem]
            ">
              Tell us more
            </label>
            <textarea  
            name="message" 
            id="message"
            placeholder="Briefly describe your message here"
            className="
            border-1 
            border-neutral-600
            rounded-[12px]
            bg-go-gray-4
            p-[1.5rem]
            w-full
            max-w-[794px]
            h-[230px]
            resize
            "
            />
          </section>
          <section
          className="
          flex
          items-start
          mb-[1rem]
          gap-x-[0.5rem]
          ">
            <input type="checkbox" name="subscribe" id="subscribe"
            value="subscribe"
            className="
            peer
            appearance-none
            cursor-pointer
            size-[1.5rem]
            min-w-[1.5rem]
            border-1
            border-neutral-600
            rounded-sm
            "/>
            <svg
              className="
                pointer-events-none
                absolute
                transform translate-x-[]
                w-[1.5rem]
                h-[1.5rem]
                text-white
                hidden
                peer-checked:block
              "
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <polyline points="20 6 9 17 4 12" />
            </svg>
            <div
            className="
            ">
              <label 
              htmlFor="subscribe"
              className="
              text-[0.875rem]/[100%]
              font-medium
              pt-[0px]
              ">
                I want to subscribe to the occasional insightful materials from GrowthOps. (optional)
              </label>
            </div>
          </section>
          <section
          className="
          flex
          items-start
          mb-[3rem]
          gap-x-[0.5rem]
          ">
            <input type="checkbox" name="privacyPolicy" id="privacyPolicy"
            value="subscribe"
            className="
            peer
            appearance-none
            cursor-pointer
            size-[1.5rem]
            min-w-[1.5rem]
            border-1
            border-neutral-600
            rounded-sm
            "/>
            <svg
              className="
                pointer-events-none
                absolute
                transform translate-x-[]
                w-[1.5rem]
                h-[1.5rem]
                text-white
                hidden
                peer-checked:block
              "
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <polyline points="20 6 9 17 4 12" />
            </svg>
            <div
            className="
            ">
              <label 
              htmlFor="privacyPolicy"
              className="
              text-[0.875rem]/[100%]
              font-medium
              pt-[0px]
              ">
                I have read and agree to the website’s privacy policy.
              </label>
            </div>
          </section>
          
          <input 
          type="submit" 
          value="Submit"
          className="
          border-1 border-white
          bg-go-green-1
          hover:bg-green-600
          active:bg-green-500
          hover:cursor-pointer
          rounded-[3rem] 
          py-[1rem] 
          px-[2.5rem] 
          mx-auto
          text-[1.125rem]/[100%]
          font-extrabold
          "
          />
        </form>
        <div
        className="
        w-[550px] md:w-[1099px]
        h-[753px]
        absolute top-[458px] left-[-40px]
        blur-2xl 
        z-0
        ">
          <img 
          src={vector9} 
          alt="decoration" 
          className="
          w-full
          h-full
          object-cover
          "
          />
        </div>
        <div
        className="
        w-[376px] md:w-[753.66px]
        h-[753.12px]
        absolute top-[-19px] right-[-40px]
        blur-2xl
        z-0
        ">
          <img 
          src={vector10} 
          alt="decoration" 
          className="
          w-full
          h-full
          object-cover
          "
          />
        </div>
        <div
        className="
        w-[250px] md:w-[500px]
        h-[753.12px]
        absolute top-[591px] right-[-40px]
        blur-2xl
        z-0
        ">
          <img 
          src={vector11} 
          alt="decoration" 
          className="
          w-full
          h-full
          object-cover
          "
          />
        </div>
        <div
        className="
        w-[376px] md:w-[753.66px]
        h-[753.12px]
        absolute top-[763px] left-[-20px]
        blur-2xl
        z-0
        ">
          <img 
          src={vector12} 
          alt="decoration" 
          className="
          w-full
          h-full
          object-cover
          "
          />
        </div>
      </div>
      <div 
      id="offices"
      className="
      mb-[117px]
      "
      >
        <h3
        className="
        text-[35px]/[95.5%] sm:text-[2.75rem] md:text-[3.875rem] lg:text-[5.25rem]
        font-extrabold
        w-[90%] 
        text-center 
        m-auto
        mb-[73px]
        "
        >
          OUR OFFICES
        </h3>
        <div 
        className="
        w-full 926:w-[800px] 1366:w-full
        mx-auto
        flex
        flex-col 926:flex-row
        flex-wrap
        items-center 926:items-start
        justify-between
        gap-y-[56px] 926:gap-y-[68px]
        gap-x-[10px]
        ">
          {offices.map((office) => (
            <OfficeCard 
            key={office.region + "-" + office.city}
            region={office.region}
            city={office.city}
            phone={office.phone}
            email={office.email}
            address={office.address}
            />
          ))}
        </div>
      </div>
      <div 
      id="closing-message"
      className="
      mb-[55px]
      "
      >
        <h3
        className="
        text-[35px]/[95.5%] sm:text-[2.75rem] md:text-[3.875rem] lg:text-[5.25rem]
        font-extrabold
        w-[90%] 
        450:text-center 
        450:m-auto"
        >
          KEEP <span className="hidden 450:inline">IN TOUCH</span>
        </h3>
        <h3 
        className="
        text-[35px]/[95.5%] sm:text-[2.75rem] md:text-[3.875rem] lg:text-[5.25rem]
        font-extrabold
        450:hidden
        "
        >
          IN TOUCH
        </h3>
      </div>
      
    </div>
  )
}

export default Contact
