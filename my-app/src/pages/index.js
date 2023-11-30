
import {  useSelector } from "react-redux";
import Login from "./Login";
import LandingPage from "./LandingPage";


export default function Home() {
  const {userToken} = useSelector(state => state.user);
  if(userToken){
    return(<LandingPage/>)
    
  }
  return (
  <>
 
  <Login/>
  </>
  );
}
