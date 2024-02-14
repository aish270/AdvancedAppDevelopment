
import './nvbar.css'
import { Link } from 'react-router-dom'
function Nvbar() {
  return (
    <>
    <div class="nvbar">
    <nav class="navbar navbar-expand-lg navbar-light bg-light" >
      
        <a class="navbar-brand" href="#">JoyWithDoy</a>
        {/* <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        
        </button> */}

    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <a class="navbar-brand" style={{color:'white'}}>JoyWithDoy</a>
    <a class="navbar-brand" href="#">JoyWithDoy</a>
    
    <ul class="navbar-nav mr-auto">
     
      <Link to='/event'>
      <li class="nav-item">
      <a class="nav-link" href="./eve">Events</a>
      </li>
      </Link>
      <Link to='/home'>
      <li class="nav-item">
        <a class="nav-link" href="#">Themes</a>
      </li>
      </Link>
      <Link to='/food'>
      <li class="nav-item">
        <a class="nav-link" href="#">Food</a>
      </li>
      </Link>
      <Link to='/cart'>
      <li class="nav-item">
        <a class="nav-link" href="#">MyCart</a>
      </li>
      </Link>
     
      
    </ul>
    
  </div>
  
</nav>
</div>
    </>
  )
}

export default Nvbar