import React from "react";
import Image from "next/image";

function CartDetails({ item }) {
    
  return (
    <div className=" flex my-7 border-b border-black ">
      <table>
      
        <tr>
          <td>
            <Image
              src={item.image}
              height={200}
              width={200}
              className=" my-4"
              alt="loading..."
            />
          </td>
          <td>
            {" "}
            <div className=" text-sm  my-10 mx-14 flex flex-col ">
              <div className=" font-sans text-4xl mb-2 font-bold">
                {item.productName}
              </div>

              <div className=" text-xs text-gray-700 font-semibold">
                Quantity : {item.quantity}
              </div>
            </div>
          </td>
          <td>
            {" "}
            <div className=" text-lg  font-semibold my-14 mx-12">
              Rs {item.price}
            </div>
          </td>
        </tr>
      </table>
    </div>
  );
}

export default CartDetails;
