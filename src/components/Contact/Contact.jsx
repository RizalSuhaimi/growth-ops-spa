import { useState } from 'react'

function App() {
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

export default App
