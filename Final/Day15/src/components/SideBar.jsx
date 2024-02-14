import './sidebar.css'
import { Link } from 'react-router-dom'

function SideBar() {
  return (
    <div>
  <div class="sidebar">
  <Link to='/profile'><a href="#home"><i class="fa fa-fw fa-home"></i> Profile</a></Link>
<Link to='/home'><a href="#home"><i class="fa fa-fw fa-home"></i> Home</a></Link>
 
  <Link to='/sign-in'><a href="#clients"><i class="fa fa-fw fa-user"></i> Logout</a></Link>
  
  </div>
    </div>
  )
}

export default SideBar