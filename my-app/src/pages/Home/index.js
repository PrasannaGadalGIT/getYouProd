import NavBar from "@/components/NavBar";
import React, { useEffect } from "react";
import Image from "next/image";
import { Play } from "lucide-react";
import Link from "next/link";

import { useState } from "react";
import { useSelector } from "react-redux";
import Footer from "@/components/Footer";

function Home() {
  const [whatToDo, setWhatToDo] = useState({});
  const [award, setAward] = useState({})
  
  const tailwindClass = " flex justify-around text-white p-4"

  const fetchWhatToDo = async () => {
    try {
      const response = await fetch("/config/what-we-do.JSON");

      if (!response.ok) {
        throw new Error("Faild to fetch");
      }

      const data = await response.json();

      setWhatToDo(data);
    } catch (e) {
      alert(e);
    }
  };

  const designAwards = async() => {
    try {
      const response = await fetch("/config/award.json");

      if (!response.ok) {
        throw new Error("Faild to fetch");
      }

      const data = await response.json();

      setAward(data);
    } catch (e) {
      alert(e);
    }
  }
  useEffect(() => {
    fetchWhatToDo();
    designAwards();
  }, []);



 

  return (
    <div>
      <div className=" bg-green-700 " style={{ height: "75vh" }}>
        <NavBar tailwindClasses={tailwindClass}/>
        <h1 className=" mt-28 ml-36 text-white text-8xl">
          Discover the <span className=" block">Best Furnitures</span>
        </h1>
        <p className=" mt-5 ml-36 text-white text-lg">
          Take what you want for you dreamhouse to get complete. Not only your
          will <span className=" block"></span> but too maximize your comfort
          for relaxing homestay.
        </p>
        <div className=" mt-5 ml-36 text-white text-lg flex">
          <Link className="  bg-white text-green-700 font-bold w-40 p-2 text-lg rounded-xl text-center" href={"../shop"}>
            Shop Now &#129170;
          </Link>
          <Link
            href={""}
            className="  ml-5 bg-white text-green-700 font-bold  p-2 text-lg rounded-full "
          >
            <Play />
          </Link>
          <p className=" ml-2 mt-2">Play Video</p>
        </div>
      </div>
      {/*What we Do Section*/}
      <div className=" flex justify-center">
        <div className=" flex  justify-between mt-16 w-3/4 p-20">
          <h2 className=" text-7xl text-green-700">What We Do</h2>

          <div className=" justify-items-end w-1/2">
            <p className="  text-xl text-green-700">{whatToDo.content}</p>

            <button className=" mt-10 bg-green-700 p-5 text-white font-bold rounded-2xl">
              Learn More
            </button>
          </div>
        </div>
      </div>

      {/*Award Section */}
      <div className=" flex justify-center">
        <div className="  flex  justify-between mt-16 bg-green-100 h-96 w-3/4 ">
          <Image src={'/images/award.jpg'} height={384} width={600} alt="Image not found"/>
            <div className=" p-10">
              <h2 className=" text-5xl text-green-700 text-left p-10">{award.tittle}</h2>
              <p className=" text-lg text-green-700 p-10 text-left">{award.content}</p>
            </div>
        </div>
      </div>


    <h1 className=" text-center text-6xl text-green-700 p-20">Browse By Categories</h1>

    <Footer/>
    </div>
  );
}

export default Home;
