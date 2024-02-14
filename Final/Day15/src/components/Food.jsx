import React from 'react'
import Nvbar from './Nvbar'
import { MDBBadge, MDBBtn, MDBTable, MDBTableHead, MDBTableBody } from 'mdb-react-ui-kit';
import SideBar from './SideBar'

function Food() {
  return (
    <div>
        <Nvbar/>
        <SideBar/>
        <div className='adtab'>
        <MDBTable align='middle'>
      <MDBTableHead>
        <tr>
          <th scope='col'>Dish</th>
          <th scope='col'>Veg/Non-Veg</th>
          
          <th scope='col'>Price per head</th>

         
         
        </tr>
      </MDBTableHead>
      <MDBTableBody>
        <tr>
          <td>
            Panneer Kofta
          </td>
          <td>
           Veg
            
          </td>
          <td>
           Rs.100
          </td>
          
           <td>
          <MDBBtn color='link' rounded size='sm'>
              Add dish
            </MDBBtn>
            
          </td>
        </tr>
        <tr>
          <td>
            Honey Chicken
          </td>
          <td>
           Non-Veg
            
          </td>
          <td>
           Rs.200
          </td>
          
           <td>
          <MDBBtn color='link' rounded size='sm'>
              Add dish
            </MDBBtn>
            
          </td>
        </tr>
        <tr>
          <td>
            Lasanga
          </td>
          <td>
           Non-Veg
            
          </td>
          <td>
           Rs.300
          </td>
          
           <td>
          <MDBBtn color='link' rounded size='sm'>
              Add dish
            </MDBBtn>
            
          </td>
        </tr>
        <tr>
          <td>
            Panneer Kofta
          </td>
          <td>
           Veg
            
          </td>
          <td>
           Rs.100
          </td>
          
           <td>
          <MDBBtn color='link' rounded size='sm'>
              Add dish
            </MDBBtn>
            
          </td>
        </tr>
        <tr>
          <td>
            Panneer Kofta
          </td>
          <td>
           Veg
            
          </td>
          <td>
           Rs.100
          </td>
          
           <td>
          <MDBBtn color='link' rounded size='sm'>
              Add dish
            </MDBBtn>
            
          </td>
        </tr>
        <tr>
          <td>
            Panneer Kofta
          </td>
          <td>
           Veg
            
          </td>
          <td>
           Rs.100
          </td>
          
           <td>
          <MDBBtn color='link' rounded size='sm'>
              Add dish
            </MDBBtn>
            
          </td>
        </tr>
        
        
       
      </MDBTableBody>
    </MDBTable>
    </div>

    </div>
  )
}

export default Food