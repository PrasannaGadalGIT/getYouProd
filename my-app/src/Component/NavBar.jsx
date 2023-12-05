import React from "react";
import Link from "next/link";
import { ShoppingCart, Search, LogOut } from "lucide-react";

function NavBar() {
  return (
    
    <div className=" flex justify-around text-white">
      <div className=" font-bold text-2xl">
        <Link href={"/"}>Furniture</Link>
      </div>
      <div className=" flex font-bold space-x-8 justify-center ">
        <Link href="">Home</Link>
        <Link href="">About</Link>
        <Link href="">Shop</Link>
        <Link href="">Products</Link>
        <Link href="">Categories</Link>
        <Link href="">Contact Us</Link>
       
       
      </div>
      <div className=" flex space-x-8 justify-end">
        <Link href={""}>
          {" "}
          <ShoppingCart />
        </Link>
        <Link href={""}>
          {" "}
          <Search />
        </Link>
        <Link href={""}>
          {" "}
          <LogOut />
        </Link>
        </div>
      
    </div>
  );
}

export default NavBar;
