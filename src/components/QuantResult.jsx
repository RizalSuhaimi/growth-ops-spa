import { Link } from 'react-router-dom'

const QuantResult = ({percentage, text}) => {

  return (
    <>
      <p className="text-5xl font-bold">
        {percentage}%
      </p>
      <p className="text-sm">
        {text}
      </p>
    </>
  )
}

export default QuantResult
