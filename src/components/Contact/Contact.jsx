import { useState } from 'react'

const Contact = () => {
  const [count, setCount] = useState(0)

  return (
    <>
      <div id="contact-main">
        CONTACT US
      </div>
      <div id="offices">
        OFFICES
      </div>
      <div id="closing-message">
        KEEP IN TOUCH
      </div>
    </>
  )
}

export default Contact
