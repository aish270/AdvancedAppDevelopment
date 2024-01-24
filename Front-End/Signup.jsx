
import './Sign.css'

function Signup() {
  return (
    <>
  <div className='bgimg'>
  
  <div class="curved-text">CIRCLE TEXT</div>
  </div>
  <div className='lgn'>
  <div className='login'>
        <form className='login_form' >
            <h1>Admin Login</h1>
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
            <label for='id'>email</label>
            </div>
           
            </div>

            <div className='loginbox'>
            <div className='form-floating mb-3'>
            <input type='password' className='form-control'
            placeholder='password' id='pwd'
           
            />
            <label for='pwd'>Password</label>
            </div>
          
            </div>
            <button  type='submit' className='btn btn-secondary' style={{background:'grey',color:'white',width:400,height:50,margin:40}}>sign in</button>

        </form>
        
    </div>
    </div>
    </>
  )
}

export default Signup