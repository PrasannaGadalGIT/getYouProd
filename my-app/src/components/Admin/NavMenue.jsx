import React from "react";
import Link from "next/link";
import { ArchiveRestore, FolderKanban, UsersRound } from "lucide-react";
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
import { setUserDetails } from "@/Redux/reducers/loginUserSlice";
import { LogOut } from "lucide-react";
import { useDispatch } from "react-redux";
import { useRouter } from "next/router";
const NavMenue = () => {
  const linkButtom = " flex justify-center ";
  const button = " flex flex-col hover:bg-slate-500 p-2";
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
    <>
      <div className=" h-[100vh] w-24 text-white bg-black flex flex-col justify-evenly m-3 relative mt-[30px] rounded-xl text-center ">
        <div className={button}>
          <Link href={""} className={linkButtom}>
            <ArchiveRestore />{" "}
          </Link>
          <p>Order</p>
        </div>

        <div className={button}>
          <Link href={"/productDetails"} className={linkButtom}>
            <FolderKanban />{" "}
          </Link>
          <p>Products</p>
        </div>
        <div className={button}>
          <Link href={""} className={linkButtom}>
            <UsersRound />
          </Link>
          <p>Coustomer</p>
        </div>
        <div className={button}>
          <Link href={""}>
           
            <AlertDialog>
              <AlertDialogTrigger asChild>
                <div className=" flex justify-center">
                  <LogOut />
                </div>
              </AlertDialogTrigger>
              <AlertDialogContent className=" bg-gray-800">
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
            <p>LogOut</p>
          </Link>
        </div>
      </div>
    </>
  );
};
export default NavMenue;
