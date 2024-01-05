import React from "react";
import Image from "next/image";

const DisplayProduct = ({ productDetails }) => {
  return (
    <div className="flex bg-slate-500 rounded-2xl p-2 m-4">
      <Image
        src={`http://localhost:3002/getProductImage/${productDetails._id}`}
        height={20}
        width={50}
        className="my-6"
        alt={`Product Image: ${productDetails.productName}`}
        
      />
      <div className="text-sm my-4 mx-5 flex flex-col">
        <div className="font-sans text-lg font-semibold mb-2">
          {productDetails.productName}
        </div>
        <div className="text-xs text-gray-700 font-semibold">
          Rs {productDetails.price}
        </div>
        <div className="text-xs text-gray-700 font-semibold">
          Quantity: {productDetails.stock}
        </div>
      </div>
    </div>
  );
};

export default DisplayProduct;
