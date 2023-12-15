import CartCard from "@/components/CartCard";
import NavBar from "@/components/NavBar";
import React from "react";
import { useSelector } from "react-redux";
import Checkout from "@/components/Checkout";
import { useState } from "react";
import Footer from "@/components/Footer";
import Body from "@/components/Body";

function index() {
  const tailwindClasses = " flex justify-around text-black p-4";
  const { cartItems } = useSelector((state) => state.cartItems);
  const [firstIteration, setfirstIteration] = useState(true);

  return (
    <div>


      <NavBar tailwindClasses={tailwindClasses} />
      <Body text="Checkout"/>

      <h1 className=" text-left mx-24 text-2xl my-6 text-green-700">Shopping Cart</h1>
      <div className="  w-3/5 mx-24">
        {cartItems.map((item) => {
          return <Checkout item={item} />;
        })}
      </div>

      <Footer/>
    </div>
  );
}

export default index;
