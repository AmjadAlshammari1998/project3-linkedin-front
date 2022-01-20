import React, {useState}from "react";
import {useHistory} from "react-router-dom";
import axios from 'axios';
import "./SignUp.css";

export default function SignUp() {
    const history = useHistory()
    const [account, setAccount] = useState()
    const [emile, setEmile] = useState()
    const [description, setDescription] = useState()
    const [imageProfile, setImageProfile] = useState()
    const [password, setPassword] = useState()

    const changeName =(e)=>{
        setAccount(e.target.value)
    }

    const changeEmile =(e)=>{
        setEmile(e.target.value)
    }
    const chagedescription =(e)=>{
        setDescription(e.target.value)
        
    }

    const changeimg =(e)=>{
        setImageProfile(e.target.value)
    }
    const changPassword=(e)=>{
        setPassword(e.target.value)
    }
   const addUser =async() =>{
    const response =await axios.post(`${process.env.REACT_APP_BACKEND_URL}/signUp`,{
        account:account,
        email:emile,
        description:description,
        imageProfile:imageProfile,
        password:password,
    }) ;
    if(response.status=== 201){
        history.push("/logIn")
    }
}
    
    return (
        <div id="sinLog">
        <div className="sinUp1">
          <div className="imgSinUp">  </div>
        <div className="sinUp">
           <input id="firstSignupInput" className="input" onChange={(e)=>{
               changeName(e);
           }}placeholder="enter Name" /> 
            <br></br>
           <input className="input" onChange={(e)=>{
               changeEmile(e);
           }} placeholder="enter Emile"/>
           <br></br>
            <input className="input" onChange={(e)=>{
                chagedescription(e);
            }}placeholder="enter description" />
            <br></br>
            <input className="input" onChange={(e)=>{
                changeimg(e)
            }} placeholder="Enter Img Profile"/>
            <br></br>
            <input className="input" onChange={(e)=>{
                changPassword(e)
            }}placeholder ="Enter Password" />
            <br></br>
           <button className="button" onClick={()=>{
               addUser();
             
           }}>signUp</button>
           
        </div>
        </div>
        </div>
    )
}
