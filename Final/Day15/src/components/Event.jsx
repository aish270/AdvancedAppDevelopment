
import './event.css'
import Nvbar from './Nvbar'
import SideBar from './SideBar'
import { MDBBadge, MDBBtn, MDBTable, MDBTableHead, MDBTableBody } from 'mdb-react-ui-kit';
import { useEffect } from 'react';
import axios from 'axios';
import { useState } from 'react';
function Event() {
  const[Error,SetError]=useState('');
  const[Loading,setLoading]=useState(true);
  const[Dat,SetDat]=useState('');
  let token=localStorage.getItem('token');
  useEffect(()=>{
    const fetchData = async()=>{
      try{
        const response= await axios.get('http://localhost:8080/products/gall',
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
    <div>
          <Nvbar/>
        <SideBar/>
        <div className='hom'>
       
        <div className='themeh1'>
        <div className='txt'>Gender Reveal</div>   
        
        </div>
        <div className='themeh2'>
        <div className='txt'>Cake Cutting</div>    
        
        </div>
        <div className='themeh3'>
        <div className='txt'>Tea Party</div> 
           
        </div>
        <div className='themeh4'>
        <div className='txt'>Mehendi Night</div>
            
        </div>
        </div>
        <div className='desch'>
          <div className='slog'>
            
          
          
        <div className='txtt'>
        {/* No more juggling tools, 
        no more frustrating busy work. 
        JoyWithDoy is the fully-customizable event 
        management platform that lets you do it all—from 
        organizing your event to measuring its impact and 
        everything in between. */}
        <div className='sugbox'>
            <div className='form-floating mb-3'>
            <input type='name' className='form-control'
            placeholder='name'
            id='nm' style={{height:'200px'}}
             />
            <label for='nm'>Add ons</label>
            </div>
            
            </div>
            <button  type='submit' className='btn btn-secondary' style={{width:300}}> Add</button>
           

            
        </div>
        </div>
        </div>
        <div className='deschh1'>
        <MDBTable align='middle'>
      <MDBTableHead>
        <tr>
          <th scope='col'>Planner</th>
          <th scope='col'>Event</th>
          
          <th scope='col'>Advance</th>
          <th scope='col'>Contact</th>
        </tr>
      </MDBTableHead>
      <MDBTableBody>
      
      {Dat && Dat.map((item, index) => (
              <tr key={index}>
                <td>
                  <div className='d-flex align-items-center'>
                  <img
                src='https://www.shutterstock.com/image-vector/vector-flat-illustration-grayscale-avatar-600nw-2281862025.jpg'
                alt=''
                style={{ width: '45px', height: '45px' }}
                className='rounded-circle'
              />
                    <div className='ms-3'>
                      <p className='fw-bold mb-1'>{item.planner}</p>
                      
                    </div>
                  </div>
                </td>
                <td>
                  <p className='fw-normal mb-1'>{item.name}</p>
                </td>
                <td>
                  <MDBBadge color='success' pill>
                    Rs.{item.cost}
                  </MDBBadge>
                </td>
                <td>{item.contact}</td>
                <td>
                  <MDBBtn color='link' rounded size='sm'>
                    Add
                  </MDBBtn>
                </td>
              </tr>
            ))}
       
      </MDBTableBody>
    </MDBTable>
         
          
        </div>

        
    </div>
  )
}

export default Event