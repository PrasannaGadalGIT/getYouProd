import React, { useState } from "react";
import Image from "next/image";
import { Heart, ShoppingCart } from "lucide-react";
import setCartDetails from "@/Redux/reducers/addToCart"
import { useDispatch } from "react-redux";

function ProductCard({ Product }) {
 const dispatch = useDispatch()
 const [cart, setcart] = useState({})

const addToCart = (props) => {
  setcart(props)

  console.log(cart)
  
}

  return (
    <>
      <div className=" p-3 ">
        <div className=" border border-gray h-80 w-72 rounded-2xl bg-gray-200 z-0">
          <Image
            src={Product.image}
            alt="loading..."
            width={500}
            height={0}
            className=" w-full h-full z-0 rounded-2xl"
          />
          <div className=" border border-green h-24 w-full rounded-2xl   bg-green-700">
            <h4 className=" text-center text-xl text-white font-bold">
              {Product.name}
            </h4>
            <p className=" text-center text-xl text-white font-bold">
              {Product.price}
            </p>
            <div className=" flex justify-around text-white">
              <button onClick={()=> addToCart(Product)}>
                <ShoppingCart />
              </button>
              <button>
                <Heart />
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProductCard;
