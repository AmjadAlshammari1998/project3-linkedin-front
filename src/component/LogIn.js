import React,{useState} from 'react'
import { useHistory } from 'react-router-dom'
import axios from 'axios'
import "./SignUp.css";

export default function LogIn({setToken ,setAdmin ,admin,setUserId}) {
const history = useHistory()
const [account, setAccount] = useState()
const [password, setPassword] = useState()

const accountInput=(e)=>{
    setAccount(e.target.value)
}

const passwordInput=(e)=>{
    setPassword(e.target.value) 
}



    const logInBtn = async () => {
        try {
          const res = await axios.post(`${process.env.REACT_APP_BACKEND_URL}/logIn`, {
            account:account,
            password:password,
          });
          console.log(res.data);
          setToken(res.data.token);
          setAdmin(res.data.payload.admin);
          setUserId(res.data.payload.userId)
          console.log(admin,"aaaa");
          history.push("/Home");
        } catch (err) {
          console.log("errrrrror");
        }
      };
    return (
        <div className='loginCaptal'>
          <div className="imgSinUp">  </div>
        <div className='logIn'>
          <input className="input2"  type="text" placeholder="UserName" onChange={accountInput} />
          <input className="input2" type="text"placeholder ="Yore password"onChange={passwordInput}/>
          <button className="button" onClick={()=>{logInBtn()}} >Login</button>
          
        </div>
        </div>
    )
}
