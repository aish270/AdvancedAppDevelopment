import React from 'react'
import Nvbaradmin from './Nvbaradmin'
import SideBar from './SideBar'
import './adevent.css'
import { Link } from 'react-router-dom'
import { MDBBadge, MDBBtn, MDBTable, MDBTableHead, MDBTableBody } from 'mdb-react-ui-kit';
function AdminTheme() {
  return (
    <div>
        <Nvbaradmin/>
        <SideBar/>
        
        <div className='themes'>
        <Link to='/jun'>
        <div className='theme1'>
        <div className='txt'>Into The Wild</div>   
        
        </div>
        </Link>
        
        <Link to='/sun'>
        <div className='theme2'>
        <div className='txt'>Sunshine Hue</div>    
        
        </div>
        </Link>
        <div className='theme3'>
        <div className='txt'>Midnight Blue  </div> 
           
        </div>
        <div className='theme4'>
        <div className='txt'>Lavender Haze  </div>
            
        </div>

        </div>
        <div className='adtab'>
        <MDBTable align='middle'>
      <MDBTableHead>
        <tr>
          <th scope='col'>Planner</th>
          <th scope='col'>Theme</th>
          
          <th scope='col'>Add ons</th>

          <th scope='col'>Price</th>
          
        </tr>
      </MDBTableHead>
      <MDBTableBody>
        <tr>
          <td>
            <div className='d-flex align-items-center'>
              <img
                src='https://mdbootstrap.com/img/new/avatars/8.jpg'
                alt=''
                style={{ width: '45px', height: '45px' }}
                className='rounded-circle'
              />
              <div className='ms-3'>
                <p className='fw-bold mb-1'>John Doe</p>
                <p className='text-muted mb-0'>john.doe@gmail.com</p>
              </div>
            </div>
          </td>
          <td>
            <p className='fw-normal mb-1'>Midnight Blue</p>
            
          </td>
          <td>
            Candle Light dinner<br/>
            pool party
          </td>
          <td>Rs.10000</td>
          
        </tr>
        <tr>
          <td>
            <div className='d-flex align-items-center'>
            <img
                src='https://mdbootstrap.com/img/new/avatars/6.jpg'
                alt=''
                style={{ width: '45px', height: '45px' }}
                className='rounded-circle'
              />
              <div className='ms-3'>
                <p className='fw-bold mb-1'>John Doe</p>
                <p className='text-muted mb-0'>john.doe@gmail.com</p>
              </div>
            </div>
          </td>
          <td>
            <p className='fw-normal mb-1'>Sunshine Hue</p>
            
          </td>
          <td>
           
             Lanterns<br/>
             Garden Party
           
          </td>
          <td>Rs.15000</td>
         
        </tr>
        <tr>
          <td>
            <div className='d-flex align-items-center'>
            <img
                src='https://mdbootstrap.com/img/new/avatars/7.jpg'
                alt=''
                style={{ width: '45px', height: '45px' }}
                className='rounded-circle'
              />
              <div className='ms-3'>
                <p className='fw-bold mb-1'>John Doe</p>
                <p className='text-muted mb-0'>john.doe@gmail.com</p>
              </div>
            </div>
          </td>
          <td>
            <p className='fw-normal mb-1'>Into The Wild</p>
            
          </td>
          <td>
           Pet Show<br/>
           Garden Party
          </td>
          <td>Rs.12000</td>
          
        </tr>
        
       
      </MDBTableBody>
    </MDBTable>
    </div>

    </div>
  )
}

export default AdminTheme