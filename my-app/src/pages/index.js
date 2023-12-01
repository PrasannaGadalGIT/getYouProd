
import {  useSelector } from "react-redux";
import Login from "./Login";
import Home from "./Home";


export default function Index() {
  const {userToken} = useSelector(state => state.user);
  if(userToken){
    return(<Home/>)
    
  }
  return (
  <>
 
  <Login/>
  </>
  );
}
