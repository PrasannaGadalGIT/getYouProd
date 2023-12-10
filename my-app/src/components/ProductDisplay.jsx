import React from "react";
import Image from "next/image";
import { useSelector } from "react-redux";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";


function ProductDisplay() {
  const { productId, productName, price, description, image } = useSelector(
    (state) => state.cart
  );

  console.log(productId, productName, price, description, image);

  return (
    <div className=" flex justify-center my-20">
      <div>
        <Image src={image} width={500} height={500} />
      </div>
      <div className=" ml-20">
        <h1 className=" text-4xl my-5 text-green-700">Discover The Best Furniture</h1>
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
                <SelectItem value="apple">Red</SelectItem>
                <SelectItem value="banana">White</SelectItem>
                <SelectItem value="blueberry">Black</SelectItem>
                
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
        <div className=" w-[40rem] my-10">
        <p className=" text-start font-semibold text-gray-600
        ">{description}</p>
        </div>
        
      </div>
    </div>
  );
}

export default ProductDisplay;
