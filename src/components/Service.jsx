import { Link } from 'react-router-dom'

const Service = ({index, title, points}) => {

  return (
    <>
      <div className="text-xl font-semibold size-[48px] border-2 rounded-full flex justify-center items-center">
          {index}
      </div>
      <h4 className="text-[2.5rem] font-extrabold">{title}</h4>
      {points.map((point) => (
        <p>{point}</p>
      ))}
      <button
      className="w-[121px] h-[41px] border-1 rounded-[48px] text-sm font-extrabold hover:bg-gray-900"
      >
        See more
      </button>
    </>
  )
}

export default Service
