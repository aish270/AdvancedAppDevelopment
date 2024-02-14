
import { useEffect, useState } from 'react'
import Footer from './Footer'
import './Home.css'
import Nvbar from './Nvbar'
import SideBar from './SideBar'

import { Link } from 'react-router-dom'
import axios from 'axios'
function Home() {
  const[Error,SetError]=useState('');
  const[Loading,setLoading]=useState(true);
  const[Dat,SetDat]=useState('');
  let token=localStorage.getItem('token');
  useEffect(()=>{
    const fetchData = async()=>{
      try{
        const response= await axios.get('http://localhost:8080/products/gtheme',
        {
          headers:{
            "Authorization":`Bearer ${token}`,
            "cache-control":'no-cache',
      
            
            
          }
        }
        
        );
        SetDat(response.data);
      }
      catch(error){
        SetError(error);
      }
      finally{
        setLoading(false);
      }
    };
    fetchData();
  },[]);
  console.log(Dat);
  
  return (
    <>
        <Nvbar/>
        <SideBar/>
       
        <div className='hom'>
         {Dat && Dat.map((item, index) => (
          <Link to={`/${item.name}`} key={index}>
            <div className={`theme${index + 1}`}>
              <div className='txt'>{item.name}</div>
            </div>
          </Link>
        ))}
        </div>

        <div className='desch'>
          <div className='slog'>
            
          
          
        <div className='txtt'>
        No more juggling tools, 
        no more frustrating busy work. 
        JoyWithDoy is the fully-customizable event 
        management platform that lets you do it all—from 
        organizing your event to measuring its impact and 
        everything in between.
            
        </div>
        </div>
        </div>
        <div className='desch1'>
        <div className='slog'>
            
          
          
            <div className='txtc'>
           500+ Customers<br/>
           200+ Event Planners<br/>
          
                
            </div>
            </div>
         
            <Footer/>
        </div>
        

        
    </>
  )
}

export default Home