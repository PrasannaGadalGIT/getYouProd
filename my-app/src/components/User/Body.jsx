import React from 'react'
import { ArrowRight } from 'lucide-react'
function Body({text}) {
  return (
    <div className=" bg-green-800 h-80 flex justify-center p-20">
    <div className=" ">
      <h1 className=" text-8xl font-semibold text-white">{text}</h1>
      <p className=" text-center p-4 text-white m-3">
        Home <ArrowRight className=" inline p-1" /> {text}
      </p>
    </div>
  </div>
  )
}

export default Body