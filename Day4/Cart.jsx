import React from 'react'
import Nvbar from './Nvbar'
import SideBar from './SideBar'
import './cart.css'
import { MDBBadge, MDBBtn, MDBTable, MDBTableHead, MDBTableBody } from 'mdb-react-ui-kit';

function Cart() {
  return (
    <>
    <Nvbar/>
    <SideBar/>
    <div className='tx'>
      Book Now
    </div>
    <div className='cart2'>
    <div className='myc'>
        
        <MDBTable align='middle' style={{width:50}}>
      <MDBTableHead>
        <tr>
          
          <th scope='col'>Food</th>
          
          <th scope='col'>Price</th>
          <th scope='col'>Veg/NonVeg</th>
        </tr>
      </MDBTableHead>
      <MDBTableBody>
        <tr>
          <td>
            <p className='fw-normal mb-1'>Chicken Biriyani</p>
            
          </td>
          <td>
            <MDBBadge color='success' pill>
              Rs.300
            </MDBBadge>
          </td>
          <td>Non-Veg</td>
          
        </tr>
        <tr>
          <td>
            <p className='fw-normal mb-1'>Chicken Katsu</p>
            
          </td>
          <td>
            <MDBBadge color='success' pill>
              Rs.280
            </MDBBadge>
          </td>
          <td>Non-Veg</td>
          
        </tr>
        <tr>
          <td>
            <p className='fw-normal mb-1'>Total</p>
            
          </td>
          <td>
            <MDBBadge color='success' pill>
              Rs.580
            </MDBBadge>
          </td>
          <td>
          <MDBBtn color='link' rounded size='sm'>
              INCLUSIVE OF GST
            </MDBBtn>
          </td>
          
        </tr>
        </MDBTableBody>
    </MDBTable>
    </div>
      
    </div>
    <div className='cart3'>
    <div className='myc'>
        
        <MDBTable align='middle' style={{width:50}}>
      <MDBTableHead>
        <tr>
          
          <th scope='col'>Event</th>
          
          <th scope='col'>Price</th>
          <th scope='col'>Contact</th>
        </tr>
      </MDBTableHead>
      <MDBTableBody>
        <tr>
          <td>
            <p className='fw-normal mb-1'>Themed Dinner</p>
            
          </td>
          <td>
            <MDBBadge color='success' pill>
              Rs.3000 
            </MDBBadge>
          </td>
          <td>9823476453</td>
          
        </tr>
        <tr>
          <td>
            <p className='fw-normal mb-1'>Bangle Ceremony</p>
            
          </td>
          <td>
            <MDBBadge color='success' pill>
              Rs.2000 
            </MDBBadge>
          </td>
          <td>9823476453</td>
          
        </tr>
        <tr>
          <td>
            <p className='fw-normal mb-1'>Total</p>
            
          </td>
          <td>
            <MDBBadge color='success' pill>
              Rs.5000 
            </MDBBadge>
          </td>
          <td>
          <MDBBtn color='link' rounded size='sm'>
              INCLUSIVE OF GST
            </MDBBtn>
          </td>
          
        </tr>
        </MDBTableBody>
    </MDBTable>
    </div>
      
    </div>
    <div className='cart1'>
    <div className='form-floating mb-3'>
            <input type='name' className='form-control'
            placeholder='name'
            id='nm'
             />
            <label for='nm'>No of Attendies</label>
            </div>
            <div className='form-floating mb-3'>
            <input type='date' className='form-control'
            placeholder='name'
            id='nm'
             />
            <label for='nm'>Start date & time</label>
            </div>
            <div className='form-floating mb-3'>
            <input type='date' className='form-control'
            placeholder='name'
            id='nm'
             />
            <label for='nm'>End date & time</label>
            </div>
            <div className='form-floating mb-3'>
            <input type='name' className='form-control'
            placeholder='name'
            id='nm'
             />
            <label for='nm'>Address</label>
            </div>
            <div className='form-floating mb-3'>
            <input type='name' className='form-control'
            placeholder='name'
            id='nm'
             />
            <label for='nm'>Alternate Contact</label>
            </div>
            <button  type='submit' className='btn btn-secondary' style={{width:340}}> Book</button>

    </div>
    <div className='cart'>
        <div className='myc'>
        
        <MDBTable align='middle' style={{width:50}}>
      <MDBTableHead>
        <tr>
          
          <th scope='col'>Theme</th>
          
          <th scope='col'>Price</th>
          <th scope='col'>Contact</th>
        </tr>
      </MDBTableHead>
      <MDBTableBody>
        <tr>
          <td>
            <p className='fw-normal mb-1'>Sunshine Hue</p>
            
          </td>
          <td>
            <MDBBadge color='success' pill>
              Rs.3000 
            </MDBBadge>
          </td>
          <td>9823476453</td>
          
        </tr>
        
        <tr>
          <td>
            <p className='fw-normal mb-1'>Total</p>
            
          </td>
          <td>
            <MDBBadge color='success' pill>
              Rs.3100 
            </MDBBadge>
          </td>
          <td>
          <MDBBtn color='link' rounded size='sm'>
          INCLUSIVE OF GST
              
            </MDBBtn>
          </td>
          
        </tr>
        </MDBTableBody>
    </MDBTable>
    </div>

            
        

    </div>
   
    </>
  )
}

export default Cart