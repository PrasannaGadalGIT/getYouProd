import React, { useState, useEffect } from "react";
import NavBar from "@/components/User/NavBar";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import ProductCard from "@/components/User/ProductCard";
import Footer from "@/components/User/Footer";
import Body from "@/components/User/Body";
import ProductCategories from "@/components/User/ProductCategories";
import { useRouter } from "next/router";

const Shop = () => {
  const [productDetail, setProductDetails] = useState([]);
  const tailwindClasses = " flex justify-around text-black p-4";

  const productDetails = async () => {
    try {
     

      const res = await fetch('http://localhost:3002/getProductDetails')
      const data = await res.json()

      setProductDetails(data.productDetails)

    } catch (e) {
      alert(e);
    }
  };

  useEffect(() => {
    productDetails();
  }, []);

  const router = useRouter();

  return (
    <div>
      <NavBar tailwindClasses={tailwindClasses} />
      <Body text="Shop" />
      <div className=" flex justify-between">
        <div>
          {/*representing the categories */}
          <ProductCategories />
        </div>
        <div className="flex flex-wrap mx-8 w-3/4">
          {productDetail.length > 0 ? (
            productDetail.map((item, index) => {
              return <ProductCard product={item} key={index} />;
            })
          ) : (
            <div>Loading...</div>
          )}
        </div>
      </div>

      <div>
        <Footer />
      </div>
    </div>
  );
};

export default Shop;
