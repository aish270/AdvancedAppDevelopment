import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
// import './index.css'
import 'bootstrap/dist/css/bootstrap.css';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import Nvbar from './components/Nvbar.jsx';
import SideBar from './components/SideBar.jsx';
import Signup from './components/Signup.jsx';
import Register from './components/Register.jsx';
// import Signup from './components/Signup.jsx';



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <Nvbar/>
    <SideBar/> */}
    <App/>
    {/* <Signup/> */}
    {/* <Register/> */}
    
  </React.StrictMode>,
)
