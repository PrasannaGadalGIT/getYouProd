import React from "react";
import Image from "next/image";

function ProductCard({ Product }) {
  console.log(Product)
  return (
    <>
    <div>
    <div className=" border border-gray h-80 w-72 rounded-2xl bg-gray-200 z-0">
    
    <Image src={Product.image} width={500} height={0} className=" w-full h-full z-0 rounded-2xl"/>
    <div className=" border border-green h-16 w-full rounded-2xl   bg-green-700 z-10">
    <h4 className=" text-center text-xl text-white font-bold">{Product.name}</h4>
     <p className=" text-center text-xl text-white font-bold">{Product.price}</p> 
    </div>
    
  </div>
  
    </div>
      
      
    </>
  );
}

export default ProductCard;
