import React from "react";
import Image from "next/image";
import { Trash2 } from "lucide-react";
import { removeItem } from "@/Redux/actions/cartActions";
const CartCard = (item) => {
  console.log(item)
  return (
    <div className=" flex">
      <Image
        src={`http://localhost:3002/getProductImage/${item.item.productId}`}
        height={60}
        width={60}
        className=" my-6"
        alt="loading..."
      />
      <div className=" text-sm  my-4 mx-5 flex flex-col">
        <div className=" font-sans text-lg font-semibold  mb-2">
          {item.item.productName}
        </div>
        <div className=" text-xs text-gray-700 font-semibold">
          Rs {item.item.price}
        </div>

        <div className=" text-xs text-gray-700 font-semibold">
          Quantity : {item.item.quantity}
        </div>

      </div>

      
    </div>
  );
};

export default CartCard;
