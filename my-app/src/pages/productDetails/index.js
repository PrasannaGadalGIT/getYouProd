import React from "react";
import HomeAdmin from "../HomeAdmin";
import NavMenue from "@/components/Admin/NavMenue";
import ProductDetailForm from "@/components/Admin/ProductDetailForm";
import BarGraphProductDetails from "@/components/Admin/BarGraphForProductDetails";
import DisplayProduct from "@/components/Admin/DisplayProduct";
import { useEffect, useState } from "react";

import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";




const Productdetails = () => {
  const [productDetails, setProductDetails] = useState([]);
  const fetchProductDetails = async () => {
    const res = await fetch("http://localhost:3002/getProductDetails");
    const data = await res.json();
    setProductDetails(data.productDetails);
  };

  useEffect(() => {
    fetchProductDetails();
  }, []);
  return (
    <>
      <div className="flex">
        <NavMenue />
        <div className=" h-[108vh] bg-gray-800 relative top-[1rem] p-0 rounded-2xl">
          <h2 className=" text-center font-bold text-4xl text-white relative top-[1rem]">
            Stock Details
          </h2>
          <BarGraphProductDetails />
        </div>
        <div className=" flex flex-col justify-between">
          <ProductDetailForm />
          <ScrollArea className=" h-[23rem] w-[42rem]  block relative  top-[1rem] left-5 rounded-2xl bg-gray-800 overflow-y-auto">
            <div className="p-4 ">
              <h4 className="text-xl font-medium leading-none text-white text-center">Added Product Details</h4>
              {productDetails.length > 0
              ? productDetails.map((item, index) => {
                  return <>
                  <DisplayProduct productDetails={item} key={index} />
                        <Separator className="my-2 " />
                  </>
                  
                })
                
              : "Loading....."}
            
            </div>
          
          </ScrollArea>
          <div >
            
          </div>
        </div>
      </div>
    </>
  );
};

export default Productdetails;
