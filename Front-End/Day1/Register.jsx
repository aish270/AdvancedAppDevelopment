
import './register.css'
import { Link } from 'react-router-dom'
import logo from '../assets/logo.png'

function Register() {
  return (
    <>
  <div className='bgimg'>
  
  <div className='curved-text'>
    <img src={logo} height='200px' margin='10px'></img>

  </div>
  </div>
  <div className='lgn'>
  <div className='login1'>
        <form className='login_form' >
            <h1>Register</h1>
            <div className='loginbox'>
            <div className='form-floating mb-3'>
            <input type='name' className='form-control'
            placeholder='name'
            id='nm'
             />
            <label for='nm'>Name</label>
            </div>
            
            </div>
           
            <div className='loginbox'>
            <div className='form-floating mb-3'>
            <input type='email' className='form-control'
            placeholder='id'
             id='id'
            />
            <label for='id'>Email</label>
            </div>
           
            </div>
            <div className='loginbox'>
            <div className='form-floating mb-3'>
            <input type='text' className='form-control'
            placeholder='id'
             id='id'
            />
            <label for='id'>Phone</label>
            </div>
           
            </div>
            <div className='loginbox'>
            <div className='form-floating mb-3'>
            <input type='text' className='form-control'
            placeholder='id'
             id='id'
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
            <label for='id'>Password</label>
            </div>
           
            </div>


            <div className='loginbox'>
            <div className='form-floating mb-3'>
            <input type='password' className='form-control'
            placeholder='password' id='pwd'
           
            />
            <label for='pwd'>Confirm Password</label>
            </div>
          
            </div>
            <Link to='/home'>
            <button  type='submit' className='btn btn-secondary' style={{background:'grey',color:'white',width:400,height:50,margin:40}}>sign up</button>
            </Link>
    
        </form>
        
    </div>
    </div>
    </>
  )
}

export default Register