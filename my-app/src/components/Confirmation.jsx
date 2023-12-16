import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Button } from "@/components/ui/button";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "../components/CheckOut";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Checkout from "./CheckOut";

function Confirmation() {
  const { cartItems, shipping } = useSelector((state) => state.cartItems);
  const stripePromise = loadStripe('pk_test_51OO21oSIBpKJv5qriJqhjJMAkgjSUqFa6hiJHLOUXSiS40YlRBBOKYMZg0uk1GsT50ArBxcWRke4u1i4DyxQyE4900IaKs51Qc');
  const [priceSum, setSumOfPrice] = useState(0);
  

  const sumOfPrice = () => {
    let sum = 0;
    cartItems.map((item) => {
      sum += item.price;
    });
    setSumOfPrice(sum);
  };
  useEffect(() => {
    sumOfPrice();
  }, []);

  return (
    <>
      <div className=" bg-gray-200 p-5 w-[300px] text-black font-semibold">
        <h1 className=" text-2xl font-bold">Order Details</h1>
        <ul className=" my-5 text-gray-800 font-light">
          <li>Sub Total : {priceSum}</li>
          <li>Shipping : {shipping} </li>
        </ul>
        <hr color="black" className=" border border-gray-500" />
        <ul className="my-4 text-lg">
          <li>Grand Total: Rs {priceSum + shipping}</li>
        </ul>
        <div className=" flex justify-center">
          <Dialog>
            <DialogTrigger asChild>
              <button className=" text-2xl bg-green-700 p-3 text-white text-center w-full my-4">
                Checkout
              </button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px] bg-white text-black">
              <DialogHeader>
                <DialogDescription>
                  <Elements stripe={stripePromise}>
                <CheckoutForm />
              </Elements>


              <button className=" bg-green-700 text-lg text-white p-2 font-bold">Cash On delivery</button>
                </DialogDescription>
              </DialogHeader>
             

              
              <DialogFooter>
                <Button type="submit" >Save changes</Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </div>
      </div>
    </>
  );
}

export default Confirmation;
