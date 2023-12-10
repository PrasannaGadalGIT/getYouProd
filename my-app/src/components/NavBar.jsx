import React from "react";
import Link from "next/link";
import { ShoppingCart, Search, LogOut } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import { setUserDetails } from "@/Redux/reducers/loginUserSlice";
import { useRouter } from "next/router";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from "@/components/ui/navigation-menu";

function NavBar({ tailwindClasses }) {
  const { id, email, username } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const router = useRouter();
 
  
  
  const logOut = async (values) => {
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(values),
    };
    const res = await fetch("http://localhost:3002/logOut", requestOptions);
    const data = await res.json();

    dispatch(setUserDetails(data));
    router.push("/");
  };

  return (
    <div className={tailwindClasses}>
      <div className=" font-bold text-2xl">
        <Link href={"/"}>Furniture</Link>
      </div>
      <div className=" flex font-bold space-x-8 justify-center s">
        <Link href="/">Home</Link>
        <Link href="">About</Link>
        <Link href="/shop">Shop</Link>
        <Link href="/products">Products</Link>
        <Link href="">Categories</Link>
        <Link href="">Contact Us</Link>
      </div>
      <div className=" flex justify-end">
        <NavigationMenu className=" ">
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuTrigger className=" -mt-2">
                <Link href={""}>
                  {" "}
                  <ShoppingCart />
                </Link>
              </NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid gap-3 p-6 w-[250px] "></ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
        <Link href={""} className=" mr-6">
          {" "}
          <Search />
        </Link>
        <Link href={""}>
          {" "}
          <AlertDialog>
            <AlertDialogTrigger asChild>
              <Link href={""}>
                {" "}
                <LogOut/>
              </Link>
            </AlertDialogTrigger>
            <AlertDialogContent className=" bg-green-600">
              <AlertDialogHeader>
                <AlertDialogTitle className=" text-xl text-white font-bold">
                  Do you want to logout from the account?
                </AlertDialogTitle>
                <AlertDialogDescription className=" text-white font-bold">
                  This action cannot be undone. This will logout you from the
                  servers.
                </AlertDialogDescription>
              </AlertDialogHeader>
              <AlertDialogFooter>
                <AlertDialogCancel className=" text-white font-bold hover:text-white hover:text-lg">
                  Cancel
                </AlertDialogCancel>
                <AlertDialogAction
                  onClick={() => logOut()}
                  className=" text-white font-bold hover:text-lg"
                >
                  Continue
                </AlertDialogAction>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>
        </Link>
      </div>
    </div>
  );
}

export default NavBar;
