import NavBar from "@/Component/NavBar";
import React, { useEffect } from "react";
import Image from "next/image";
import {  Play } from 'lucide-react';
import Link from "next/link";
import config from "../config/index"
import { useState } from "react";

function Home() {
  const [whatToDo, setWhatToDo] = useState(null);
  const fetchWhatToDo = async() => {
    try{
      const response = await fetch('/what-we-do.JSON');
      
      if(!response.ok){
        throw new Error ("Faild to fetch")
      }

      const data = await response.json()

      setWhatToDo(data)
    }catch(e){
        alert(e)
    }
}
  useEffect(() => {
    fetchWhatToDo()
  }, [])

 
  
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
        <div className=" mt-5 ml-36 text-white text-lg flex">
        <button className="  bg-white text-green-600 font-bold w-40 p-2 text-lg rounded-xl">Shop Now &#129170;</button>
       <Link href={""} className="  ml-5 bg-white text-green-600 font-bold  p-2 text-lg rounded-full "><Play/></Link>
       <p className=" ml-2 mt-2">Play Video</p>
        </div>
      
      </div>

      {whatToDo.map((item) => {
         console.log(item)
      })}
     
    </div>
  );
}

export default Home;
