import { useState } from 'react'
import OfficeCard from './OfficeCard'

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
      city: "Kuala Lumpur",
      phone: "+60 3 2789 9038",
      email: "my@growthops.asia",
      address: "Level 11, Block B, Plaza Zurich, No. 12, Jalan Gelenggang, Bukit Damansara, 50490 Kuala Lumpur, Malaysia"
    },
    {
      region: "ASIA",
      city: "Kuala Lumpur",
      phone: "+60 3 2789 9038",
      email: "my@growthops.asia",
      address: "Level 11, Block B, Plaza Zurich, No. 12, Jalan Gelenggang, Bukit Damansara, 50490 Kuala Lumpur, Malaysia"
    },
    {
      region: "ASIA",
      city: "Kuala Lumpur",
      phone: "+60 3 2789 9038",
      email: "my@growthops.asia",
      address: "Level 11, Block B, Plaza Zurich, No. 12, Jalan Gelenggang, Bukit Damansara, 50490 Kuala Lumpur, Malaysia"
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
        text-[2rem]/[137.5%]
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
          gap-x-[2rem]
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
              font-semibold
              mb-[0.5rem]
              "
              >
                Phone number
              </label>
              <div 
              className="
              flex
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
                w-[287px]
                max-w-[381px]
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
              max-w-[381px]
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
        
      </div>
      <div 
      id="offices"
      className="
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
          OFFICES
        </h3>
        <div 
        className="
        flex
        flex-wrap
        justify-between
        gap-y-[68px]
        ">
          {offices.map((office) => (
            <OfficeCard 
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
          KEEP IN TOUCH
        </h3>
        
      </div>
    </div>
  )
}

export default Contact
