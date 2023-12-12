import React, { useState } from "react";
import Image from "next/image";
import { useSelector } from "react-redux";
import { Heart, ShoppingCart } from "lucide-react";
import { useDispatch } from "react-redux";
import { cartReducer, setCartDetails } from "@/Redux/reducers/cartitemSlice";
import { addToCart } from "@/Redux/actions/cartActions";
import { resetCart } from "@/Redux/actions/cartActions";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import NavBar from "./NavBar";

function ProductDisplay() {
  const { productId, productName, price, description, image } = useSelector(
    (state) => state.productDetails
  );
  const [counter, setcounter] = useState(1);
  const dispatch = useDispatch();

  const increase = () => {
    setcounter(counter + 1);
  };

  const decrease = () => {
    setcounter(counter - 1);

    if (counter == 1) {
      setcounter(1);
    }
  };
  const item = {
   
    productId : productId,
    productName : productName,
    image : image,
    price : price
  }

  return (
    <div className=" flex justify-center my-20">
      <div>
        <Image src={image} width={500} height={500} alt="loading" />
      </div>
      <div className=" ml-20">
        <h1 className=" text-4xl my-5 text-green-700">
          Discover The Best Furniture
        </h1>
        <h2 className=" text-3xl my-5 text-green-700">${price}</h2>
        <div className=" flex justify-between w-[30rem] my-5">
          <h4 className=" text-xl  font-bold">Color</h4>
          <Select>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Select a Color" />
            </SelectTrigger>
            <SelectContent className=" bg-white">
              <SelectGroup>
                <SelectLabel>Color</SelectLabel>
                <SelectItem value="Red">Red</SelectItem>
                <SelectItem value="White">White</SelectItem>
                <SelectItem value="Black">Black</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
        <div className=" w-[40rem] my-10">
          <p
            className=" text-start font-semibold text-gray-600
        "
          >
            {description}
          </p>
        </div>

        <div className=" flex my-4">
          <div className=" bg-green-700 text-white p-3 mr-2">
            <button className=" mr-2" onClick={() => decrease()}>
              -
            </button>
            {counter}{" "}
            <button className=" ml-2" onClick={() => increase()}>
              {" "}
              +
            </button>
          </div>
          <button
            className=" bg-slate-200 w-36 flex justify-between p-3 mx-2"
            onClick={() => dispatch(addToCart(item))}
          >
            <h3>Add To Cart</h3>
            <ShoppingCart />
          </button>
          <button className=" bg-green-700 text-white p-2 mx-2">
            <Heart />
          </button>
        </div>
        <button className=" bg-green-700 my-4 p-3 w-40 text-white">
          BUY IT NOW
        </button>
      </div>
    </div>
  );
}

export default ProductDisplay;
