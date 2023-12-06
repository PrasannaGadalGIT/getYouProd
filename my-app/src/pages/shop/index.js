import React from 'react'
import NavBar from '@/Component/NavBar'
import Image from 'next/image'
import {ArrowRight} from 'lucide-react'
function Shop() {
  const tailwindClasses = " flex justify-around text-black p-4"
  return (
    <div>
        
        <NavBar tailwindClasses={tailwindClasses}/>  
        <div  className=" bg-green-800 h-80 flex justify-center p-20">
          <div className=' '>
          <h1 className=' text-8xl font-semibold text-white'>Shop</h1>  
          <p className=' text-center p-4 text-white m-3'>Home <ArrowRight className=' inline p-1'/> Shop</p>
          </div>
           
        </div> 
        
    </div>
  )
}

export default Shop