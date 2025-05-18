import { Link } from 'react-router-dom'

const QuantResult = ({percentage, text}) => {

  return (
    <>
      <p className="text-[4rem] font-bold text-go-cyan-1">
        {percentage}%
      </p>
      <p className="text-sm font-semibold text-go-cyan-1">
        {text}
      </p>
    </>
  )
}

export default QuantResult
