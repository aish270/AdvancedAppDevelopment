// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'
// import Signup from './components/Signup'
import Home from './components/Home'
//import Nvbar from './components/Nvbar'
// import Nvbar from './components/Nvbar'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import Signup from './components/Signup';
import Register from './components/Register';
import Event from './components/Event';
import Cart from './components/Cart';
import Admin from './components/Admin';
import Sunshinehue from './components/Sunshinehue';
import Jungle from './components/Jungle';
import AdminTheme from './components/AdminTheme';
import Adevent from './components/Adevent';
import Food from './components/Food';
import Profile from './components/Profile';
import Footer from './components/Footer';






function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
    <Router>
    <Routes>
              <Route exact path="/" element={<Signup />} />
              <Route path="/sign-in" element={<Signup/>} />
              <Route path="/sign-up" element={<Register/>} />
              <Route path="/home" element={<Home/>} />
              <Route path="/event" element={<Event/>}/>
              <Route path="/cart" element={<Cart/>}/>
              <Route path="/admin" element={<Admin/>}/>
              <Route path="/SunshineHue" element={<Sunshinehue/>}/>
              <Route path="/JungleTheme" element={<Jungle/>}/>
              <Route path='/adtheme' element={<AdminTheme/>}/>
              <Route path='/adevent' element={<Adevent/>}/>
              <Route path='/adtheme' element={<AdminTheme/>}/>
              <Route path='/food' element={<Food/>}/>
              <Route path='/profile' element={<Profile/>}/>
              <Route path='/footer' element={<Footer/>}/>
              
              
              
              

    </Routes>
    </Router>
    </>
  )
}

export default App
