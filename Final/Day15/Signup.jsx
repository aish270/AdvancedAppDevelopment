
import './Sign.css'
import { Link } from 'react-router-dom'
import logo from '../assets/logo.png'
import { useState } from 'react'
import axios from 'axios'
import { Navigate } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
//import { redirect, useNavigate } from 'react-router-dom'
function Signup() {
  const [name,setName]=useState('')
 const [role,SetRole]=useState('');
 const [password,setPassword]=useState('')
 const [errors, setErrors] = useState({});
 const[isSubmit,setIsSubmit]=useState(false);
 const navigate =useNavigate();
 const handleName=(event)=>{
    event.preventDefault();
    setName(event.target.value)
  }
 
 
  const handlePassword=(event)=>{
    event.preventDefault();
    setPassword(event.target.value)
  }
  // const handleSubmit=async (event)=>{
  //   event.preventDefault();
  //   setErrors(validateForm({name,id,password}));
  //   if(isSubmit){
  //   Navigate('/Home');
  //   }
  // }
  const validateForm = (values) => {
    const errors = {};
    

    if (values.name.trim() === '') {
      errors.name = 'Name is required';
      setIsSubmit(false);
    }

  

    else if (values.password.trim() === '') {
      errors.password = 'Password is required';
      setIsSubmit(false);
    } else if (values.password.length < 6) {
      errors.password = 'Password must be at least 6 characters long';
      setIsSubmit(false);
    }
    else{
        setIsSubmit(true)
    }
    return errors;

    // setErrors(errors);
  };
   const handleSubmit=async (event)=>{
    event.preventDefault();
    setErrors(validateForm({name,password}));
    let token=null;
    try{
      const response=await axios.post('http://localhost:8080/products/authenticate',{
        
        username:name,
        password:password
  
      });
      token=response.data;
      const roleres=await axios.get('http://localhost:8080/products/findrole/{name}?name='+`${name}`,
      {
        headers:{
          "Authorization":`Bearer ${token}`,
          "cache-control":'no-cache',
    
          
          
        }
      }
      )
      
      
      localStorage.setItem('token',token);
      console.log(response.status);
      localStorage.setItem('name',name);
      console.log(roleres.data);
      SetRole(roleres.data.roles);
      if(response.status===200){
        setName("");
        
        setPassword('');
  
        
  
      }
      
    }
    catch(error){
      console.log(error);
      
  
    }
    // if(token==null){
    //   setIsSubmit(false);
    // }
    if(token==null){
      alert("incorrect credentials");
    }
    if (token!=null&&role=='ROLE_ADMIN') {
      // Programmatically trigger a click on the link to navigate
      // document.getElementById('homeLink').click();
      navigate('/admin');
    }
    if (token!=null&&role=='ROLE_USER') {
      // Programmatically trigger a click on the link to navigate
     navigate('/Home')
    }
    
    
    
   
};
  return (
    <>
     <Link id="homeLink" to="/admin" style={{ display: 'none' }} />
    <Link id="homeLink2" to="/Home" style={{ display: 'none' }} />
  <div className='bgimg'>
  
  <div className='curved-text'>
    <img src={logo} height='200px'></img>

  </div>
  </div>
  <div className='lgn'>
  <div className='login'>
        <form className='login_form' onSubmit={handleSubmit}>
            <h1>Login</h1>
            <div className='loginbox'>
            <div className='form-floating mb-3'>
            <input type='name' className='form-control'
            placeholder='name'
            id='nm' onChange={handleName}
             />
            <label>Name</label>
            </div>
            {errors.name}
            
            </div>
           
           

            <div className='loginbox'>
            <div className='form-floating mb-3'>
            <input type='password' className='form-control'
            placeholder='password' id='pwd' onChange={handlePassword}
           
            />
            <label>Password</label>
            </div>
            {errors.password && <span>{errors.password}</span>}
          
            </div>
            
          <button  type='submit' className='btn btn-secondary' style={{background:'grey',color:'white',width:400,height:50,margin:40}}>sign in</button>
            <li style={{display:'flex'}}>
            <Link to='/sign-up'><p  className='plog' style={{margin:-20}}>New user? Register &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</p></Link>
            <Link to='/admin'><p  className='plog' style={{margin:-20}}>Admin? Login</p></Link>
            </li>
        </form>
       
        
    </div>
    </div>
    <div>

    </div>
   
    </>
  )
}

export default Signup