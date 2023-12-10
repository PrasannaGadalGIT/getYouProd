import React, { useState, useEffect } from "react";
import NavBar from "@/components/NavBar";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import ProductCard from "@/components/ProductCard";
import Footer from "@/components/Footer";
import Body from "@/components/Body";



function Products() {
    const tailwindClasses = " flex justify-around text-black p-4";
    
  return (
    <div>
    <NavBar tailwindClasses={tailwindClasses} />
    <Body text="Products"/>

    <Footer/>
    </div>
  )
}

export default Products