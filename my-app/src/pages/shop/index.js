import React, { useState, useEffect } from "react";
import NavBar from "@/components/NavBar";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import ProductCard from "@/components/ProductCard";
import Footer from "@/components/Footer";
const Shop = () => {
  const [productDetail, setProductDetails] = useState([]);
  const tailwindClasses = " flex justify-around text-black p-4";

  const productDetails = async () => {
    try {
      const response = await fetch("/config/products.json");

      if (!response.ok) {
        throw new Error("Faild to fetch");
      }

      const data = await response.json();

      setProductDetails(data.products);
    } catch (e) {
      alert(e);
    }
  };

  useEffect(() => {
    productDetails();
  }, []);
  

  return (
    <div>
      <NavBar tailwindClasses={tailwindClasses} />
      <div className=" bg-green-800 h-80 flex justify-center p-20">
        <div className=" ">
          <h1 className=" text-8xl font-semibold text-white">Shop</h1>
          <p className=" text-center p-4 text-white m-3">
            Home <ArrowRight className=" inline p-1" /> Shop
          </p>
        </div>
      </div>

      <div className=" flex mt-20 p-5">
        {productDetail.length > 0
          ? productDetail.map((item, index) => {
              return <ProductCard Product={item} key={index}/>;
            })
          : "loading.."}
      </div>

      <div>
        <Footer/>
      </div>
    </div>
  );
};

export default Shop;
