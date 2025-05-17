import { useState } from 'react'
import { Link } from 'react-router-dom'

const Service = ({index, title, points}) => {

  return (
    <>
      <div className="text-xl font-semibold size-[48px] border-2 rounded-full flex justify-center items-center">
          {index}
      </div>
      <h3 className="text-[2.5rem] font-extrabold">{title}</h3>
      {points.map((point) => (
        <p>{point}</p>
      ))}
    </>
  )
}

export default Service
