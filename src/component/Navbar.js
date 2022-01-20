
import React from 'react'
import { Link } from "react-router-dom";
import {AiTwotoneHome} from 'react-icons/ai';
import {MdPendingActions} from 'react-icons/md';
import {RiAccountPinBoxFill} from 'react-icons/ri';
import {AiFillLike} from 'react-icons/ai';
import {BiPowerOff} from 'react-icons/bi';
import "../App.css";
// import "../Navbar.css";

export default function Navbar({token ,setToken}) {
    return (
        <div id="Nav">
           {token ? (
        <ul>
          <li className='a'>
          <Link to="/Home"><AiTwotoneHome/> <img src="iqon.pjg" alt="" /></Link>
          </li>
          <li className='a'>
            <Link to="/Job"><MdPendingActions/></Link>
          </li>
          <li className='a'>
          <Link to="/Account"><RiAccountPinBoxFill/></Link>
          </li>
          <li  className='a'>
          <Link to="/Like"><AiFillLike/></Link>
          </li>
          {/* <li  className='a'>
         <Link to ="/About">About</Link>

          </li> */}
          <li  className='a'>
          <Link onClick={()=>{setToken("");}} to ="/logOut"><BiPowerOff/></Link>
          </li>
        </ul>
      ) : (
        <ul>
          <li className='b'>
          <Link to ="/login">login</Link>
          </li>
        
          <li className='b'>
          <Link to="/SignUp" >SignUp</Link> 
          </li>
          {/* <li className='b'>
          <Link to="/hiBage" >hiBage</Link> 
          </li> */}
        </ul>
      )}  
        </div>
    
    )}
