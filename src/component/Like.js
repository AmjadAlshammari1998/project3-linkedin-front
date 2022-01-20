import axios from 'axios'
import React, {useEffect,useState} from 'react'
export default function Like({token}) {
    const [favList, setFavList] = useState([])

    useEffect(() => {
        const getFav = async()=>{
            const response = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/allFavorite`,{
                headers: {
                    authorization: `Bearer ${token}`,
                  }  
            })
            console.log(response.data);
            setFavList(response.data)
        }

        getFav()
    }, [])
    
    return (<div className="favorite-page">
            
        <div className="favorite-container">
            {
                favList.map((elem,index)=>{
                    return <div key={index}>
                        {/* { console.log(elem.userId)} */}
                        <p className="fav-text-post">{elem.text} 
                            {
                                elem.img? <img src={elem.img}/> : ""
                            }
                            </p>
                        
                    </div>
                })
            }
        </div>
        </div>
    )
}