import React from 'react'
import SideBar from './SideBar'
import { useState } from 'react'
import './admin.css'
import Nvbaradmin from './Nvbaradmin'

function Admin() {
    const [isShown,setIsShown]=useState(false)
    const [isShown1,setIsShown1]=useState(true)
    const handleclick=(event)=>{
        setIsShown(current=>!current)
        
      }
      const handleclick1=(event)=>{
        setIsShown1(current=>!current)
        
      }

  return (
    <div>
      <Nvbaradmin/>
        <SideBar/>
        <div className='addash'>
           
  <div class="progress-bar progress-bar-success progress-bar-striped bg-info" role="progressbar"
  aria-valuenow="90" aria-valuemin="0" aria-valuemax="100" style={{width:600,borderRadius:60,height:15}} >
    
  </div>
  Up-Coming Events 77%
  
  <br/>
  
  <div class="progress-bar progress-bar-success progress-bar-striped bg-info" role="progressbar"
  aria-valuenow="90" aria-valuemin="0" aria-valuemax="100" style={{width:750,borderRadius:60,height:15}} >
    
  </div>
  Active events 86%
  <br/>
  <div class="progress-bar progress-bar-success progress-bar-striped bg-info" role="progressbar"
  aria-valuenow="90" aria-valuemin="0" aria-valuemax="100" style={{width:200 ,borderRadius:60,height:15}} >
    
  </div>
  Cancelled Events 40%
  <br/>
  <div class="card">
  <div class="card-header">
    Upcoming events of the week
  </div>
  <div class="card-body">
    <blockquote class="blockquote mb-0">
      <p>Marriage Reception</p>
      <footer class="blockquote-footer">on <cite title="Source Title">9/3/2025</cite></footer>
    </blockquote>
  </div>
  <div class="card-body">
    <blockquote class="blockquote mb-0">
      <p>HouseWarming Party</p>
      <footer class="blockquote-footer">on <cite title="Source Title">15/3/2025</cite></footer>
    </blockquote>
  </div>
</div>



        </div>
        
        <div className='upd'><button className='btn btn-secondary' onClick={handleclick} >Add Theme</button>
        {isShown&&(<div>
        <div className='signup1' style={{margin:10,height:700}}>
        <form className='login_form'>
            <h1>Theme</h1>
            <div className='loginbox'>
            <div className='form-floating mb-3'>
            <input type='text' className='form-control'
            placeholder='name'
             id='nm'
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
            id='age'
           />
            <label for='id'>Aesthetic</label>
            
            </div>
            </div>

            <div className='loginbox'>
            <div className='form-floating mb-3'>
            <input type='text' className='form-control'
            placeholder='id' 
             id='id'
           />
            <label for='id'>Decor</label>
            
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