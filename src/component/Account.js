import React,{useEffect, useState} from 'react'
import { useParams } from "react-router-dom";
import axios from 'axios';
// import Navbar from './Navbar';
import "./Account.css";



export default function Account({token}) {
    const [profileInfo, setProfileInfo] = useState([])
    const { id } = useParams();
    
    useEffect(() => {
        const getProfileData = async()=>{
            const result = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/profiles`);
            setProfileInfo(result.data)
        }

        getProfileData()
      }, []);

    return (
    
        <div className="account-page">
           {/* <Navbar/> */}
           
            <div className="account-container">
                {
                    profileInfo.map((elem,index)=>{
                        return <div className='divv' key={index}>
                            <div >
                            <img className="profile-img" src={elem.imageProfile} />
                            <h3>{elem.account}</h3>
                            <p>{elem.description}</p>
                            </div>
                            <div>
                                <h4 className="liked"> Liked Post :</h4>
                                <p>{elem.favorite.map((elem,index)=>{
                                    return <div key={index}>
                                        <p className="text-profile">{elem.text}</p>
                                   
                                    </div>
                                })}</p>
                            </div>
                        </div>
                    })
                }
            </div>
        </div>
    )
}
