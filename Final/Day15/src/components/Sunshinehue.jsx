import React from 'react'
import Nvbar from './Nvbar'
import SideBar from './SideBar'
import './sunshine.css';
import { MDBBadge, MDBBtn, MDBTable, MDBTableHead, MDBTableBody } from 'mdb-react-ui-kit';

function Sunshinehue() {
  return (
    <div>
        <Nvbar/>
        <SideBar/>
        <div className='sun'>

            


        </div>
        <div className='sun2'>
        <MDBTable align='middle' style={{width:50}}>
      <MDBTableHead>
        <tr>
          
          <th scope='col'>Add Ons</th>
          
          <th scope='col'>Price</th>
          <th scope='col'>Contact</th>
        </tr>
      </MDBTableHead>
      <MDBTableBody>
        <tr>
          <td>
            <p className='fw-normal mb-1'>Yellow Themed Dinner</p>
            
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
            <p className='fw-normal mb-1'>Lighting Diyas</p>
            
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
              Add To Cart
            </MDBBtn>
          </td>
          
        </tr>
        </MDBTableBody>
    </MDBTable>
            

        </div>
        <div className='descsun'>
        <div className='txtsun'>
        Choosing a party theme can be a fun challenge, especially when hosting a large group of friends with diverging interests. Some of your guests may love glitz and glam, while others prefer more casual events. 
        Play baby shower games with a sunny twist, such as "Sunshine Bingo" or a sunflower seed guessing game.The party hall is filled 
        with vibrant shades of yellow.The warm light of lanterns will bring joy and warmth to the family.A yellow themed Dinner will 
        sweep the guests off their feet by their elegance and taste.  
        </div>

        </div>
    </div>
  )
}

export default Sunshinehue