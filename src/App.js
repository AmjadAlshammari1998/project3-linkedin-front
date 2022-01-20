import React ,{useState} from "react";
import{Route} from "react-router-dom";
import "./App.css";

import Navbar from "./component/Navbar";
import SignUp from "./component/SignUp";
import LogIn from "./component/LogIn";
import Home from "./component/Home";
import Like from "./component/Like";
import Account from "./component/Account";
import About from "./component/About";
import Job from "./component/Job";
require("dotenv").config();
// import HiBage from "./component/HiBage";

function App() {
  console.log(process.env.REACT_APP_BACKEND_URL,"backend url");
  const [token, setToken] = useState("")
  const [admin, setAdmin] = useState(null)
  const [userId, setUserId] = useState("")
  return (
    <div className="App">
      {/* {userId} */}
      <Navbar token={token} setToken={setToken} admin={admin}/>
      <Route exact path="/Home"    render={()=>{ return <Home userId={userId}  token={token}/>}}/>
      <Route exact path="/Account" render={()=>{ return <Account token={token}  admin={admin}/>}}/>
      <Route exact path="/Like"    render={()=>{ return <Like    token={token}/>}}/>
      <Route exact path="/Job"     render={()=>{return  <Job     token={token}  admin={admin}/>}}/>
      <Route exact path="/signUp" component={SignUp}/>
      {/* <Route exact path="/HiBage" component={HiBage}/> */}
      <Route exact path="/LogIn"   render={()=>{ return <LogIn   setToken={setToken} setAdmin={setAdmin}  setUserId={setUserId}/>}}/>
      <Route exact path="/About"   render={()=>{ return <About   token={token}/>}}/>
    </div>
  );
}

export default App;
