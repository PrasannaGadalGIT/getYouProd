import React, { useState, useEffect } from "react";
import NavBar from "@/components/User/NavBar";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import ProductCard from "@/components/User/ProductCard";
import Footer from "@/components/User/Footer";
import Body from "@/components/User/Body";
import ProductDisplay from "@/components/User/ProductDisplay";



function Products() {
    const tailwindClasses = " flex justify-around text-black p-4";
    
  return (
    <div>
    <NavBar tailwindClasses={tailwindClasses} />
    <Body text="Products"/> 
    <ProductDisplay/>
    <Footer/>
    </div>
  )
}

export default Products