import { useSelector } from "react-redux";
import Login from "./Login";
import Home from "./Home/";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function Index() {
  const { userToken, id } = useSelector((state) => state.user);
  const [userDetail, setUserDetails] = useState({})
  
  

  if (userToken) {
    return <Home />;
   
  }
  return (
    <>
      <Login />
    </>
  );
}
