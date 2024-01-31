
import './nvbar.css'
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
      <li class="nav-item active">
        <a class="nav-link" href="#">Home </a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Events</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Themes</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Add Ons</a>
      </li>
     
      
    </ul>
    
  </div>
  
</nav>
</div>
    </>
  )
}

export default Nvbar