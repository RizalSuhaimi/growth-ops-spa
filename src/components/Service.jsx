import { Link } from 'react-router-dom'

const Service = ({index, title, points}) => {

  return (
    <>
      <div className="text-xl font-semibold size-[48px] border-2 rounded-full flex justify-center items-center">
          {index}
      </div>
      <h4 
      className="text-[1.5rem] sm:text-[2.5rem]/[100%] font-extrabold py-[1.5rem]"
      >
        {title}
      </h4>
      {points.map((point) => (
        <p
        key={index + point}
        className="pb-[1rem]"
        >
          {point}
        </p>
      ))}
      <Link>
        <button
        className="
        w-[121px] 
        h-[41px] 
        border-1 
        rounded-[48px] 
        mt-[0.5rem] 
        text-sm 
        font-extrabold 
        hover:cursor-pointer
        hover:bg-neutral-900
        active:bg-neutral-800
        "
        >
          See more
        </button>
      </Link>
      
    </>
  )
}

export default Service
