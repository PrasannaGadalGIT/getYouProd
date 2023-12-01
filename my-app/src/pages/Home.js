import NavBar from "@/Component/NavBar";
import React from "react";
import Image from "next/image";

function Home() {
  return (
    <div>
      <div className=" bg-green-600 " style={{ height: "75vh" }}>
        <NavBar />
        <h1 className=" mt-28 ml-36 text-white text-8xl">
          Discover the <span className=" block">Best Furnitures</span>
        </h1>
        <p className=" mt-5 ml-36 text-white text-lg">
          Take what you want for you dreamhouse to get complete. Not only your
          will <span className=" block"></span> but too maximize your comfort
          for relaxing homestay.
        </p>
        
      </div>

     
     
    </div>
  );
}

export default Home;
