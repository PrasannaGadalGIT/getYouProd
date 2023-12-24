import React from "react";
import Link from "next/link";
import { ArchiveRestore, FolderKanban, UsersRound } from 'lucide-react';
const NavMenue = () => {
    const linkButtom = " flex justify-center ";
    const button = " flex flex-col hover:bg-slate-500 p-2";
  return (
    <>
      <div className=" h-[90vh] w-24 text-white bg-black flex flex-col justify-evenly m-3 relative mt-[30px] rounded-xl text-center ">

    <div className={button}>
    <Link href={""} className={linkButtom}><ArchiveRestore/> </Link>
    <p>Order</p>
    </div>
      
    <div className={button}>
    <Link href={"/productDetails"} className={linkButtom}><FolderKanban/> </Link>
    <p>Products</p>
    </div>
    <div className={button}>
    <Link href={""} className={linkButtom}><UsersRound/> </Link>
    <p>Coustomer</p>
    </div>
        
       
      </div>
    </>
  );
};
export default NavMenue;
