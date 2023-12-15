import React from "react";
import Image from "next/image";
import { Trash2 } from "lucide-react";
import { removeItem } from "@/Redux/actions/cartActions";
const CartCard = (item) => {
  return (
    <div className=" flex">
      <Image
        src={item.item.image}
        height={50}
        width={50}
        className=" my-4"
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