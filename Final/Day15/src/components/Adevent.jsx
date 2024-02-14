import React from 'react'
import Nvbaradmin from './Nvbaradmin'
import SideBar from './SideBar'
import axios from 'axios'
import { useEffect } from 'react'
import { useState } from 'react'
import './adevent.css'
import { MDBBadge, MDBBtn, MDBTable, MDBTableHead, MDBTableBody } from 'mdb-react-ui-kit';

function Adevent() {
  const[Dat,SetDat]=useState('');
  const[Act,SetAct]=useState(0);
  const[Up,SetUp]=useState(0);
  const[Can,SetCan]=useState(0);
  const[Tot,SetTot]=useState(0);
  const[Id,setId]=useState(0);
  let token=localStorage.getItem('token');
  
  useEffect(()=>{
    const fetchData = async()=>{
      try{
        const response= await axios.get('http://localhost:8080/products/gevent',
        {
          headers:{
            "Authorization":`Bearer ${token}`,
            "cache-control":'no-cache',
      
            
            
          }
        }
        
        );
        SetDat(response.data);
        const can= await axios.get('http://localhost:8080/products/findcanc',
        {
          headers:{
            "Authorization":`Bearer ${token}`,
            "cache-control":'no-cache',
      
            
            
          }
        }
        
        );
        SetCan(can.data);
        const up= await axios.get('http://localhost:8080/products/findupcoming',
        {
          headers:{
            "Authorization":`Bearer ${token}`,
            "cache-control":'no-cache',
      
            
            
          }
        }
        
        );
        SetUp(up.data);
        const act= await axios.get('http://localhost:8080/products/findactive',
        {
          headers:{
            "Authorization":`Bearer ${token}`,
            "cache-control":'no-cache',
      
            
            
          }
        }
        
        );
        SetAct(up.data);
      }
      catch(error){
        console.log(error);
      }
      
    };
    fetchData();
  },[]);
  let total=Act+Up+Can;

  const a=(Act/total)*100;
  const b=(Up/total)*100;
  const c=(Can/total)*100;
  return (
    <div>
        <Nvbaradmin/>
        <SideBar/>
        <div className='projprog'>
    
    <div class="progress-bar1" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100" style={{margin:50,background:'radial-gradient(closest-side, white 89%, transparent 80% 100%),conic-gradient(rgb(137, 217, 219)'+`${a}`+'%, lightgrey 0)'}}> <h4>Upcoming</h4></div>
    
    <div class="progress-bar2" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100" style={{margin:50,background:'radial-gradient(closest-side, white 89%, transparent 80% 100%),conic-gradient(rgb(173, 255, 105)'+`${b}`+'%, lightgrey 0)'}}> <h4>In Progress</h4></div>
    <div class="progress-bar3" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"  style={{margin:50,background:'radial-gradient(closest-side, white 89%, transparent 80% 100%),conic-gradient(rgb(255, 105, 105) '+`${c}`+'%, lightgrey 0)'}}><h4>Cancelled</h4></div>
    </div>
    <div className='tab'>
  
    
    
    </div>
        <div className='themes'>

        </div>
        <div className='adtab'>
        <MDBTable align='middle'>
      <MDBTableHead>
        <tr>
          <th scope='col'>Event</th>
          <th scope='col'>Count</th>
          
          <th scope='col'>status</th>

          <th scope='col'>Start</th>
          <th scope='col'>End</th>
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
                      <p className='fw-bold mb-1'>{item.name}</p>
                      
                    </div>
                  </div>
                </td>
                <td>
                  <p className='fw-normal mb-1'>{item.count}</p>
                </td>
                <td>
                  <MDBBadge color='success' pill>
                    {item.status}
                  </MDBBadge>
                </td>
                <td>{item.edat}</td>
                <td>
                  {item.sdat}
                </td>
                <td>
                  
                <MDBBtn color='link' rounded size='sm'>
              Remove
            </MDBBtn >

                </td >
              </tr>
            ))}
       
      </MDBTableBody>
    </MDBTable>
    </div>

    </div>
  )
}

export default Adevent