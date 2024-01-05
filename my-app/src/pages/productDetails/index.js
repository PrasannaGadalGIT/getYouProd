import React from "react";
import HomeAdmin from "../HomeAdmin";
import NavMenue from "@/components/Admin/NavMenue";
import ProductDetailForm from "@/components/Admin/ProductDetailForm";
import BarGraphProductDetails from "@/components/Admin/BarGraphForProductDetails";
import DisplayProduct from "@/components/Admin/DisplayProduct";
import { useEffect, useState } from "react";

import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";

const tags = Array.from({ length: 50 }).map(
  (_, i, a) => `v1.2.0-beta.${a.length - i}`
);

export function ScrollAreaDemo() {
  return (
    <ScrollArea className="h-72 w-48 rounded-md border">
      <div className="p-4">
        <h4 className="mb-4 text-sm font-medium leading-none">Tags</h4>
        {tags.map((tag) => (
          <>
            <div key={tag} className="text-sm">
              {tag}
            </div>
            <Separator className="my-2" />
          </>
        ))}
      </div>
    </ScrollArea>
  );
}

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
        <div className=" h-[90vh] bg-gray-800 relative top-8 p-0 rounded-2xl">
          <h2 className=" text-center font-bold text-4xl text-white relative top-1">
            Stock Details
          </h2>
          <BarGraphProductDetails />
        </div>
        <div>
          <ProductDetailForm />
          <ScrollArea className=" h-[16.7rem] w-[35rem]  block relative  top-12 left-5 rounded-2xl bg-gray-800">
            <div className="p-4 ">
              <h4 className="mb-4 text-xl font-medium leading-none text-white text-center">Added Product Details</h4>
              {productDetails.length > 0
              ? productDetails.map((item, index) => {
                  return <DisplayProduct productDetails={item} key={index} />;
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
