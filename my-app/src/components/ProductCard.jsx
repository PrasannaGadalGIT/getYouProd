import React, { useState } from "react";
import Image from "next/image";

import { setProductDetails } from "@/Redux/reducers/productDetailsSlice";
import { useDispatch } from "react-redux";
import { useRouter } from "next/router";

function ProductCard({ product }) {
 const dispatch = useDispatch()
 const [cart, setcart] = useState({})
 const router = useRouter()

 const handleAddToCart = () => {
  dispatch(setProductDetails(product));
  router.push('/products')
};

  return (
    <>
      <div className=" p-3 ">

        <div>
          
        </div>
        <div className=" border border-gray h-80 w-72 rounded-2xl bg-gray-200 z-0 mb-20">
          <Image
            src={product.image}
            alt="loading..."
            width={500}
            height={0}
            className=" w-full h-full z-0 rounded-2xl"
          />
          <div className=" border border-green h-24 w-full rounded-2xl   bg-green-700"  onClick={() => handleAddToCart()}>
            <h4 className=" text-center text-xl text-white font-bold">
              {product.name}
            </h4>
            <p className=" text-center text-xl text-white font-bold">
              {product.price}
            </p>
            <div className=" flex justify-around text-white">
              
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProductCard;
