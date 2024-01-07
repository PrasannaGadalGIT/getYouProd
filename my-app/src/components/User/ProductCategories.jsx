import React from "react";
import { cn } from "@/lib/utils"
import { Slider } from "@/components/ui/slider"



function ProductCategories() {
  const categoriesStyle =
    " list-none p-[10px] text-left ml-[7.5rem] text-sm text-gray-500";
  return (
    <>
      <div className=" border-black w-[32rem] text-center p-[33px] font-semibold text-lg" style={{background: '#F7F7F7'}}>
        <h3 className=" font-bold text-xl text-green-600">
          Product Categories
        </h3>
        <hr />
        {/*Need to differentiate categories to show details */}
        <li className={categoriesStyle}>Electric Guitars</li>
        <li className={categoriesStyle}>Semi-Acoustic Guitars</li>
        <li className={categoriesStyle}>Acoustic Guitars</li>
        <li className={categoriesStyle}>Classical Guitars</li>
        <li className={categoriesStyle}>Guitar Accessories</li>
      </div>
      <div className='border-black w-[32rem] text-center p-[33px] font-semibold text-lg' style={{background: '#F7F7F7'}}>
      <h3>More Product Categories</h3>
      <hr /> {/* Adding horizontal line */}
      {/*Need to differentiate categories to show details */}
      <li className={categoriesStyle}>Guitar Amplifiers</li>
      <li className={categoriesStyle}>Guitar Strings</li>
      <li className={categoriesStyle}>Guitar Tuners</li>
      <li className={categoriesStyle}>Guitar Cases</li>
    </div>
    <div className='border-black w-[32rem] text-center p-[33px] font-semibold text-lg' style={{background: '#F7F7F7'}}>
      <h3>Price</h3>
      <hr /> {/* Adding horizontal line */}
      <Slider defaultValue={[10]} max={100} step={1} className=" mt-4" />

    </div>
    </>
  );
}

export default ProductCategories;
