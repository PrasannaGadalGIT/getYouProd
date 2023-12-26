import React from 'react'
import HomeAdmin from '../HomeAdmin'
import NavMenue from '@/components/Admin/NavMenue'
import ProductDetailForm from '@/components/Admin/ProductDetailForm'
import BarGraphProductDetails from '@/components/Admin/BarGraphForProductDetails'
function Productdetails() {
  return (
    <>
    <div className='flex'>
    <NavMenue/>
    <div className=' h-[70vh] bg-gray-800 relative top-24'>
      <h2 className=' text-center font-bold text-4xl text-white relative top-5'>Stock Details</h2>
    <BarGraphProductDetails/>
    </div>
   
    <ProductDetailForm/>
    </div>
    
    </>
    
  )
}

export default Productdetails