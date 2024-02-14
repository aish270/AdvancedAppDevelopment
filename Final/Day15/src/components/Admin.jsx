
import SideBar from './SideBar'
import { useState } from 'react'
import './admin.css'
import Nvbaradmin from './Nvbaradmin'

import axios from 'axios'
function Admin() {
  const handleSubmit=async (event)=>{
    event.preventDefault();
    
    let token=localStorage.getItem('token');
    try{
      const response=await axios.post('http://localhost:8080/products/addtheme',{
        
        name:Name,
        aesthetic:Aesthetic,
        addon:Addon,
        price:Price
  
      },{
      headers:{
        "Authorization":`Bearer ${token}`,
        "cache-control":'no-cache',
  
        
        
      }});
      
     
      console.log(response.status);
      
     
      
    }
    catch(error){
      console.log(error);
      
  
    }
    // if(token==null){
    //   setIsSubmit(false);
    // }
   
    
    
   
};
  const[Name,SetName]=useState('');
  const[Price,SetPrice]=useState(0);
  const[Addon,SetAddon]=useState('');
  const[Aesthetic,setAesthetic]=useState('');
    const [isShown,setIsShown]=useState(false)
    const [isShown1,setIsShown1]=useState(true)
    const handleclick=(event)=>{
        setIsShown(current=>!current)
        
      }
      const handleName=(event)=>{
        event.preventDefault();
        SetName(event.target.value);
      }
      const handlePrice=(event)=>{
        event.preventDefault();
        SetPrice(event.target.value);
      }
      const handleAesthetic=(event)=>{
        event.preventDefault();
        setAesthetic(event.target.value);
      }
      const handleAddon=(event)=>{
        event.preventDefault();
        SetAddon(event.target.value);
      }
      
      const handleclick1=(event)=>{
        setIsShown1(current=>!current)
        
      }

  return (
    <div>
      <Nvbaradmin/>
        <SideBar/>
        <div className='addash'>
           
  <div className="progress-bar progress-bar-success progress-bar-striped bg-info" role="progressbar"
  aria-valuenow="90" aria-valuemin="0" aria-valuemax="100" style={{width:600,borderRadius:60,height:15}} >
    
  </div>
  Up-Coming Events 77%
  
  <br/>
  
  <div className="progress-bar progress-bar-success progress-bar-striped bg-info" role="progressbar"
  aria-valuenow="90" aria-valuemin="0" aria-valuemax="100" style={{width:750,borderRadius:60,height:15}} >
    
  </div>
  Active events 86%
  <br/>
  <div className="progress-bar progress-bar-success progress-bar-striped bg-info" role="progressbar"
  aria-valuenow="90" aria-valuemin="0" aria-valuemax="100" style={{width:200 ,borderRadius:60,height:15}} >
    
  </div>
  Cancelled Events 40%
  <br/>
  <div className="card">
  <div className="card-header">
    Upcoming events of the week
  </div>
  <div className="card-body">
    <blockquote className="blockquote mb-0">
      <p>Marriage Reception</p>
      <footer className="blockquote-footer">on <cite title="Source Title">9/3/2025</cite></footer>
    </blockquote>
  </div>
  <div className="card-body">
    <blockquote className="blockquote mb-0">
      <p>HouseWarming Party</p>
      <footer className="blockquote-footer">on <cite title="Source Title">15/3/2025</cite></footer>
    </blockquote>
  </div>
</div>



        </div>
        
        <div className='upd'><button className='btn btn-secondary' onClick={handleclick} >Add Theme</button>
        {isShown&&(<div>
        <div className='signup1' style={{margin:10,height:700}}>
        <form className='login_form' onSubmit={handleSubmit}>
            <h1>Theme</h1>
            <div className='loginbox'>
            <div className='form-floating mb-3'>
            <input type='text' className='form-control'
            placeholder='name'
             id='nm' onChange={handleName}
          />
            <label for='nm'>Name</label>
            </div>
            </div>
           
            <div className='loginbox'>
            <div className='form-floating mb-3'>
            <input type='id' className='form-control'
            placeholder='id'  
             id='id' 
           />
            <label for='id'>Color-scheme</label>
            
            </div>
            </div>

            <div className='loginbox'>
            <div className='form-floating mb-3'>
            <input type='text' className='form-control'
            placeholder='age'  
            id='age' onChange={handleAesthetic}
           />
            <label for='id'>Aesthetic</label>
            
            </div>
            </div>

            <div className='loginbox'>
            <div className='form-floating mb-3'>
            <input type='text' className='form-control'
            placeholder='id' 
             id='id' onChange={handleAddon}
           />
            <label for='id'>AddOn</label>
            
            </div>
            </div>

            <div className='loginbox'>
            <div className='form-floating mb-3'>
            <input type='age' className='form-control'
            placeholder='id'
             id='id' 
           />
            <label for='id'>Events</label>
            
            </div>
            </div>
            

            <div className='loginbox'>
            <div className='form-floating mb-3'>
            <input type='integer' className='form-control'
            placeholder='password' id='pwd' 
            onChange={handlePrice}
            />
            <label for='pwd'>Price</label>
            </div>
            </div>
            <button  type='submit' className='btn btn-secondary' style={{width:400,height:50,margin:40}}>Add</button>

        </form>
    </div>
        </div>)}
        </div>
        
        

        
        
    </div>
  )
}

export default Admin