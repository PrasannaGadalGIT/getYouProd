import CartCard from "@/components/User/CartCard";
import NavBar from "@/components/User/NavBar";
import React from "react";
import { useSelector } from "react-redux";
import Checkout from "@/components/User/CartDetails";
import { useState } from "react";
import Footer from "@/components/User/Footer";
import Body from "@/components/User/Body";
import Confirmation from "@/components/User/Confirmation";

function index() {
  const tailwindClasses = " flex justify-around text-black p-4";
  const { cartItems } = useSelector((state) => state.cartItems);
 
 
 
  return (
    <div>
      <NavBar tailwindClasses={tailwindClasses} />
      <Body text="Order Details" />

      <h1 className=" text-left mx-24 text-2xl my-6 text-green-700">
        Shopping Cart
      </h1>
      <div className=" flex justify-around">
        <div className="  w-3/5 mx-24">
          {cartItems.map((item) => {
            return <Checkout item={item} />;
          })}
        </div>
        

        <div>
          <Confirmation />
        </div>
      </div>

     

      <Footer />
    </div>
  );
}

export default index;
