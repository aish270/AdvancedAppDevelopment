import React from 'react'
import Nvbar from './Nvbar'
import SideBar from './SideBar'
import { useState } from 'react'
import './profile.css'

function Profile() {
    const [isShown,setIsShown]=useState(false)
    const handleclick=(event)=>{
        setIsShown(current=>!current)
        
      }
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
      <p>Biot Savert</p>
      <footer class="blockquote-footer"><cite title="Source Title">biot@hotmail.com</cite></footer>
    </blockquote>
  </div>
</div>
<div class="card">
  <div class="card-header">
    Address
  </div>
  <div class="card-body">
    <blockquote class="blockquote mb-0">
      <p>76 Fleet Street North Kansas</p>
      
    </blockquote>
  </div>
</div>
<div class="card">
  <div class="card-header">
    Contact Information
  </div>
  <div class="card-body">
    <blockquote class="blockquote mb-0">
      <p>56724 98764</p>
      <p>56724 98764</p>

      
    </blockquote>
  </div>
</div>

        </div>
        <div className='upd'><button className='btn btn-secondary' onClick={handleclick} >Update Details</button>
        {isShown&&(<div>






          <div className='signup1' style={{margin:10,height:570}}>
        <form className='login_form' >
            <h1>Update</h1>
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
            <label for='id'>email</label>
            
            </div>
            </div>

            <div className='loginbox'>
            <div className='form-floating mb-3'>
            <input type='text' className='form-control'
            placeholder='age' 
            id='age'
           />
            <label for='id'>Address</label>
            
            </div>
            </div>

            <div className='loginbox'>
            <div className='form-floating mb-3'>
            <input type='text' className='form-control'
            placeholder='id' 
             id='id'
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