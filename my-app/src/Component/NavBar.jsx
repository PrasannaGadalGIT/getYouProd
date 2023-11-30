import React from "react";
import Link from "next/link";
import { ShoppingCart, Search } from "lucide-react";

function NavBar() {
  return (
    <div className=" flex">
      <div className=" flex">
        <Link href="">Home</Link>
        <Link href="">About</Link>
        <Link href="">Shop</Link>
        <Link href="">Products</Link>
        <Link href="">Categories</Link>
        <Link href="">Contact Us</Link>
      </div>

      <div className=" flex justify-end">
        <Link href={""}>
          {" "}
          <ShoppingCart />
        </Link>
        <Link href={""}>
          {" "}
          <Search />
        </Link>
      </div>
    </div>
  );
}

export default NavBar;
