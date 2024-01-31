
import './Home.css'
import Nvbar from './Nvbar'
import SideBar from './SideBar'
function Home() {
  return (
    <>
        <Nvbar/>
        <SideBar/>
        <div className='hom'>
       
        <div className='theme1'>
        <div className='txt'>Sunshine Hue</div>   
        
        </div>
        <div className='theme2'>
        <div className='txt'>Sunshine Hue</div>    
        
        </div>
        <div className='theme3'>
        <div className='txt'>Midnight Blue  </div> 
           
        </div>
        <div className='theme4'>
        <div className='txt'>Lavender Haze  </div>
            
        </div>
        </div>
        <div className='desch'>
          <div className='slog'>
            
          
          
        <div className='txtt'>
        No more juggling tools, 
        no more frustrating busy work. 
        JoyWithDoy is the fully-customizable event 
        management platform that lets you do it all—from 
        organizing your event to measuring its impact and 
        everything in between.
            
        </div>
        </div>
        </div>
        <div className='desch1'>
        <div className='slog'>
            
          
          
            <div className='txtc'>
           500+ Customers<br/>
           200+ Event Planners<br/>
          
                
            </div>
            </div>
         
          
        </div>

        
    </>
  )
}

export default Home