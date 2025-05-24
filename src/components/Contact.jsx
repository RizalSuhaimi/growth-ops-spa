import { useState } from 'react'

const Contact = () => {
  const [count, setCount] = useState(0)

  return (
    <>
      <div 
      id="contact-main"
      className="
      mt-[58px]
      w-[87.8%]
      mx-auto
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
        <form action="" method="post">
          <div
          className="
          flex
          flex-col
          my-[2rem]
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
          my-[2rem]
          "
          >
            <div
            className="
            flex
            flex-col
            ">
              <label 
              htmlFor="fullName"
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
          <div>
            <label 
            htmlFor="purpose"
            className="
            "
            >
              <input 
              type="radio" 
              name="purpose" id="" />
            </label>
          </div>
        </form>
        
      </div>
      <div 
      id="offices"
      className="
      w-[87.8%]
      mx-auto
      "
      >
        OFFICES
      </div>
      <div 
      id="closing-message"
      className="
      w-[87.8%]
      mx-auto
      "
      >
        KEEP IN TOUCH
      </div>
    </>
  )
}

export default Contact
