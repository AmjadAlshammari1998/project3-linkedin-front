import axios from 'axios';
import React,{useState,useEffect} from 'react'
import "./Job.css";
export default function Job({token,admin}) {
    const [job, setJob] = useState("")
    const [newJob, setNewJob] = useState([])
    const [nameJob, setNameJob] = useState("")
    const [descriptionJob, setDescriptionJob] = useState("")
    const [salary, setSalary] = useState("")
    const [img, setImg] = useState("")
 console.log(admin);
    useEffect(async () => {
        // console.log("jjjjjjjjjjjj");

        const res = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/jobs`, {
          headers: { authorization: "Bearer " + token },
        });
        // console.log(res,"lllllll");
        setNewJob(res.data);
        // console.log(res.data, "dooooon");
      }, []);
    
    
    
    
    
    
    
    

   
    const addJob = async () => {
        const result = await axios.post(
            `${process.env.REACT_APP_BACKEND_URL}/addJob`,
            {
                nameJob: nameJob,
                descriptionJob: descriptionJob,
                salary: salary,
                img:img
            },
            {
                          headers: { authorization: "Bearer " + token },

            }
        )
        const copied = [...newJob]
        copied.push(result.data)
        setNewJob(copied)
        // setDescriptionJob("")
        // setSalary("")
    }
    const changeNameJob =(e)=>{
        setNameJob(e.target.value)
    }
    const changeDescriptionJob =(e)=>{
        setDescriptionJob(e.target.value)
    }
    const changeSalary =(e)=>{
        setSalary(e.target.value)
    }
    const changeImg =(e)=>{
        setImg(e.target.value)
    }



    const deleteJob = async (id,i) => {
        try {
            console.log("here in try");
             const response = await axios.delete(`${process.env.REACT_APP_BACKEND_URL}/jobs/${id}`, {
            headers: { authorization: `Bearer ${token}` }
        })
        const copied = [...newJob]
        copied.splice(i,1)
        setNewJob(copied)
        } catch (error) {
            console.log("error");
        }
 }



    return (
        <div>
         {/* {console.log(admin==true)} */}
        {admin==true? (<div>
            {newJob.map((elem,i) =>{
                return( <div className='divv'>
<div className='dd'>
           <h1 className='nameJob'>{elem.nameJob}</h1>
         <p className='descriptionJob'>{elem.descriptionJob}</p> 
         <p className='salaryJob'>{elem.salary}</p>    
         <img className='imgjob' src={elem.img}/>
         <button onClick={()=>{deleteJob(elem._id,i)}}>✖️</button>
         </div> 
            </div> 
            )
            } )}<div className='addjob'>
                <div className='addjob'>
             <input placeholder='job name' onChange={(e)=>{changeNameJob(e)}} />
             <input placeholder='job describtion' onChange={(e)=>{changeDescriptionJob(e)}} />
             <input placeholder='job salary' onChange={(e)=>{changeSalary(e)}} />
             <input placeholder='job img' onChange={(e)=>{changeImg(e)}} />
             <button onClick={()=>{addJob()}}>add</button> 
             </div>
             </div>
        </div>):( <div>
            {newJob.map((elem,i) =>{
                return( <div className='divv'>

           <h1 className='nameJob'>{elem.nameJob}</h1>
         <p className='descriptionJob'>{elem.descriptionJob}</p> 
         <p className='salaryJob'>{elem.salary}</p>    
         <img className='imgjob' src={elem.img}/>

            </div> 
            )
            } )}
        </div>)}
       
            
            
        
    </div>
    )
}
