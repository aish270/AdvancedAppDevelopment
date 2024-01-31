import React from 'react'
import Nvbaradmin from './Nvbaradmin'
import SideBar from './SideBar'
import './adevent.css'
import { MDBBadge, MDBBtn, MDBTable, MDBTableHead, MDBTableBody } from 'mdb-react-ui-kit';

function Adevent() {
  return (
    <div>
        <Nvbaradmin/>
        <SideBar/>
        <div className='projprog'>
    
    <div class="progress-bar1" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100" style={{margin:50,background:'radial-gradient(closest-side, white 89%, transparent 80% 100%),conic-gradient(rgb(137, 217, 219)'+`${45}`+'%, lightgrey 0)'}}> <h4>Upcoming</h4></div>
    
    <div class="progress-bar2" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100" style={{margin:50,background:'radial-gradient(closest-side, white 89%, transparent 80% 100%),conic-gradient(rgb(173, 255, 105)'+`${76}`+'%, lightgrey 0)'}}> <h4>In Progress</h4></div>
    <div class="progress-bar3" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"  style={{margin:50,background:'radial-gradient(closest-side, white 89%, transparent 80% 100%),conic-gradient(rgb(255, 105, 105) '+`${18}`+'%, lightgrey 0)'}}><h4>Cancelled</h4></div>
    </div>
    <div className='tab'>
  
    
    
    </div>
        <div className='themes'>

        </div>
        <div className='adtab'>
        <MDBTable align='middle'>
      <MDBTableHead>
        <tr>
          <th scope='col'>Planner</th>
          <th scope='col'>Event</th>
          
          <th scope='col'>Start</th>

          <th scope='col'>End</th>
          <th scope='col'>Status</th>
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
            <p className='fw-normal mb-1'>Marriage</p>
            
          </td>
          <td>
            9:00 9/6/25
          </td>
          <td>14:00 12/6/25</td>
          <td>
           
          <MDBBadge color='success' pill>
              Upcoming
            </MDBBadge>
            
          </td>
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
            <p className='fw-normal mb-1'>HouseWarming Ceremony</p>
            
          </td>
          <td>
           
             8:00 9/5/24 
           
          </td>
          <td>17 9/5/24</td>
          <td>
            
          <MDBBadge color='success' pill>
              Cancelled
            </MDBBadge>
            
          </td>
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
            <p className='fw-normal mb-1'>DJ Party</p>
            
          </td>
          <td>
           22:00 9/2/24
          </td>
          <td>1:00 10/2/24</td>
          <td>
          <MDBBadge color='success' pill>
              Active
            </MDBBadge>
          </td>
        </tr>
        
       
      </MDBTableBody>
    </MDBTable>
    </div>

    </div>
  )
}

export default Adevent