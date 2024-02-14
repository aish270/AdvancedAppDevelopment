
import Nvbar from './Nvbar'
import SideBar from './SideBar'
import './jungle.css'
import { MDBBadge, MDBBtn, MDBTable, MDBTableHead, MDBTableBody } from 'mdb-react-ui-kit';

function Jungle() {
  return (
    <>
        <Nvbar/>
        <SideBar/>
        <div className='jun'>

            


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
    <p className='fw-normal mb-1'>Forest Themed Garden party</p>
    
  </td>
  <td>
    <MDBBadge color='success' pill>
      Rs.10000 
    </MDBBadge>
  </td>
  <td>
  8765387635
  </td>
  
</tr>
<tr>
  <td>
    <p className='fw-normal mb-1'>Animal mannequin decor</p>
    
  </td>
  <td>
    <MDBBadge color='success' pill>
      Rs.8000 
    </MDBBadge>
  </td>
  <td>
  8765435686
    </td>
  
</tr>
<tr>
  <td>
    <p className='fw-normal mb-1'>Total</p>
    
  </td>
  <td>
    <MDBBadge color='success' pill>
      Rs.18000 
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

    </>
  )
}

export default Jungle