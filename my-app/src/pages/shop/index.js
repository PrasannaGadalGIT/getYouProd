import React, { useState, useEffect } from "react";
import NavBar from "@/components/NavBar";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import ProductCard from "@/components/ProductCard";
import Footer from "@/components/Footer";
import Body from "@/components/Body";

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
      <Body text="Shop"/>
    <div>
      
    </div>
      <div className="grid grid-cols-3 ">
        {productDetail.length > 0
          ? productDetail.map((item, index) => {
              return <ProductCard product={item} key={index}/>;
            })
          : "loading.."}
      </div>
    
            <div>
            <Footer/>
            </div>
      

    </div>
  );
};
ReactDOM.render(<App />, document.getElementById('root'));

export default Shop;
