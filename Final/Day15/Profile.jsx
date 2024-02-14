import React from 'react'
import Nvbar from './Nvbar'
import SideBar from './SideBar'
import { useState } from 'react'
import './profile.css'
import { useEffect } from 'react'
import axios from 'axios'

function Profile() {
    const [isShown,setIsShown]=useState(false)
    const[Dat,SetDat]=useState([]);
    const[Name,SetName]=useState('');
    const[Email,SetEmail]=useState('');
    const[Address,SetAddress]=useState('');
    const[Contact,SetContact]=useState('');
    const handleclick=(event)=>{
        setIsShown(current=>!current)
        
      }
      let token=localStorage.getItem('token');
      let name=localStorage.getItem('name');
      const handleSubmit=async (event)=>{

        event.preventDefault();
        try{
          const res=await axios.put('http://localhost:8080/products/updateProfile',{
            id:1,
            name:Name,
            email:Email,
            address:Address,
            contact1:Contact,
            contact2:Contact
      
          },{
          headers:{
            "Authorization":`Bearer ${token}`,
            "cache-control":'no-cache',
      
            
            
          }});
        }
          catch(error){
            console.log(error);
          }
        
      }
  useEffect(()=>{
    const fetchData = async()=>{
      try{
        const response= await axios.get('http://localhost:8080/products/findprof/{name}?name='+`${name}`,
        {
          headers:{
            "Authorization":`Bearer ${token}`,
            "cache-control":'no-cache',
      
            
            
          }
        }
        
        );
        SetDat(response.data);
       
      
       
        console.log(response.data);
        
      }
      catch(error){
       console.log(error);
      }
     
    };
    fetchData();
  },[]);
  return (
    <div>
        <Nvbar/>
        <SideBar/>
        <div className='proft'>
       
            <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjcr3nF6y81srik-gr7dQ3pHedbtW1c3DnocysTFT8RQ&s'></img>
            <div class="card">
  <div class="card-header">
    Name
  </div>
  <div class="card-body">
    <blockquote class="blockquote mb-0">
      <p>{Dat.name}</p>
      <footer class="blockquote-footer"><cite title="Source Title">{Dat.email}</cite></footer>
    </blockquote>
  </div>
</div>
<div class="card">
  <div class="card-header">
    Address
  </div>
  <div class="card-body">
    <blockquote class="blockquote mb-0">
      <p>{Dat.address}</p>
      
    </blockquote>
  </div>
</div>
<div class="card">
  <div class="card-header">
    Contact Information
  </div>
  <div class="card-body">
    <blockquote class="blockquote mb-0">
      <p>{Dat.contact1}</p>
      <p>{Dat.contact2}</p>

      
    </blockquote>
  </div>
</div>

        </div>
        <div className='upd'><button className='btn btn-secondary' onClick={handleclick} >Update Details</button>
        {isShown&&(<div>






          <div className='signup1' style={{margin:10,height:570}}>
        <form className='login_form' onSubmit={handleSubmit}>
            <h1>Update</h1>
            <div className='loginbox'>
            <div className='form-floating mb-3'>
            <input type='text' className='form-control'
            placeholder='name' 
             id='nm' onChange={(e)=>SetName(e.target.value)}
          />
            <label for='nm'>Name</label>
            </div>
            </div>
           
            <div className='loginbox'>
            <div className='form-floating mb-3'>
            <input type='id' className='form-control'
            placeholder='id'  
             id='id' onChange={(e)=>SetEmail(e.target.value)}
           />
            <label for='id'>email</label>
            
            </div>
            </div>

            <div className='loginbox'>
            <div className='form-floating mb-3'>
            <input type='text' className='form-control'
            placeholder='age' 
            id='age' onChange={(e)=>SetAddress(e.target.value)}
           />
            <label for='id'>Address</label>
            
            </div>
            </div>

            <div className='loginbox'>
            <div className='form-floating mb-3'>
            <input type='text' className='form-control'
            placeholder='id' 
             id='id' onChange={(e)=>SetContact(e.target.value)}
           />
            <label for='id'>Contact</label>
            
            </div>
            </div>


            <button  type='submit' className='btn btn-secondary' style={{width:400,height:50,margin:40}}>Update</button>

        </form>
    </div>
        </div>)}
        </div>
       
    </div>
  )
}

export default Profile