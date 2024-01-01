import React from "react";
import { PhoneCall, MapPin, Mail,Facebook, Twitter } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { FaGoogle, FaRegEnvelope } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { MdLock } from "react-icons/md";
import { TiSocialFacebook } from "react-icons/ti";

export function InputWithButton() {
  return (
    <div className="flex w-full max-w-sm items-center space-x-2">
      <Input type="email" placeholder="Email" />
      <Button type="submit">Subscribe</Button>
    </div>
  );
}

const Footer = () => {
  return (
    <div className="  w-full pl-56 pt-20 mt-20 h-96 bg-slate-200 flex">
      <div>
        <h2 className=" text-4xl text-green-700 font-bold p-2">Furniture</h2>
        <p className=" text-black p-2">
          <MapPin className=" inline p-1 mr-1" /> Nepal, Kathmandu, Balaju
        </p>
        <p className=" text-black p-2">
          <PhoneCall className=" inline p-1 mr-1" /> +977 9812345780
        </p>
        <p className=" text-black p-2">
          <Mail className=" inline p-1 mr-1" /> coustomer@furniture.com
        </p>
      </div>
      <div className=" p-4  ml-24 flex flex-col">
        <h4 className=" mb-4 font-bold">ABOUT US</h4>
        <Link href={""} className=" mb-1">
          Harman Coorporate
        </Link>
        <Link href={""} className=" mb-1">
          Carrers
        </Link>
        <Link href={""} className=" mb-1">
          Privacy Policy
        </Link>
        <Link href={""} className=" mb-1">
          Terms of use
        </Link>
        <Link href={""} className=" mb-1">
          Why Buy Direct
        </Link>
      </div>
      <div>
        <div className=" p-4 ml-24 flex flex-col">
          <h4 className=" mb-4 font-bold">Coustomer Service</h4>
          <Link href={""} className=" mb-1">
            Harman Coorporate
          </Link>
          <Link href={""} className=" mb-1">
            Carrers
          </Link>
          <Link href={""} className=" mb-1">
            Privacy Policy
          </Link>
          <Link href={""} className=" mb-1">
            Terms of use
          </Link>
          <Link href={""} className=" mb-1">
            Why Buy Direct
          </Link>
        </div>
      </div>
      <div>
        <div className=" p-4  ml-24 flex flex-col">
          <h4 className=" mb-4 font-bold">ABOUT US</h4>
          <p>Learn more about contests, events, </p>
          <p> designing tips and more? Ofcourse you do!</p>
          <div className="flex w-full max-w-sm items-center space-x-2 my-4">
            <Input type="email" placeholder="Email" />
            <Button type="submit"> <Mail  /></Button>
          </div>
          <h2 className=" ml-2 my-2">Follow us....</h2>
          <div className=" flex j my-2">
              <Link href= {""} className="text-white  border-2 border-gray-200 rounded-full p-3 mx-1 hover:cursor-pointer bg-green-700">
                <Facebook className=" text-sm" />
              </Link>
              <Link href= {""} className=" text-white border-2 border-gray-200 rounded-full p-3 mx-1 hover:cursor-pointer bg-green-700">
                <FaGoogle className=" text-xl" />
              </Link>
              <Link href= {""} className="text-white border-2 border-gray-200 rounded-full p-3 mx-1 hover:cursor-pointer bg-green-700">
                <FaLinkedin className=" text-xl" />
              </Link>
              <Link href= {""} className=" text-white border-2 border-gray-200 rounded-full p-3 mx-1 hover:cursor-pointer bg-green-700">
                <Twitter className=" text-sm" />
              </Link>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
