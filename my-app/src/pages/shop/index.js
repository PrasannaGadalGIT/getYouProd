import React from 'react'
import NavBar from '@/Component/NavBar'
import Image from 'next/image'
function Shop() {
  return (
    <div className=" bg-green-500 h-96">
        
        <NavBar/>   
        <div className="flex flex-col items-center">
            <p className="text-lg font-bold mb-4">Your Text Here</p>
                < img
                src="/images/award.jpg"
                alt="Your Alt Text"
                className="max-w-full"
               
                />
    </div>
    </div>
  )
}

export default Shop