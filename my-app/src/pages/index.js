import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import Login from "./Login";
import { useRouter } from "next/router";
import Home from "./Home";
import HomeAdmin from "./HomeAdmin";

const Index = () => {
  const { userToken, role } = useSelector((state) => state.user);
  const router = useRouter();

  return (
    <div>
      {!userToken ? <Login /> : role == "User" ? <Home /> : <HomeAdmin />}
    </div>
  );
};

export default Index;
