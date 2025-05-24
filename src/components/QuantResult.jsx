import { Link } from 'react-router-dom'

const QuantResult = ({percentage, text}) => {

  return (
    <>
      <p 
      className="
      text-[2.25rem] sm:text-[2.5rem] md:text-[3.25rem] lg:text-[4rem] 
      font-bold 
      text-go-cyan-1">
        {percentage}%
      </p>
      <p 
      className="
      text-sm 
      font-semibold 
      text-go-cyan-1">
        {text}
      </p>
    </>
  )
}

export default QuantResult
