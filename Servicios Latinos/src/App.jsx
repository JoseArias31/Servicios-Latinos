import { useState } from 'react'
import ColorSchemesExample from '../src/Components/navBar'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import background from '../public/BI.jpg'
import JS from '../public/JS.png'
import BioCard from './Components/BioCard';
function App() {
 

  return (
    <div className='App' style={{ backgroundImage: `url(${background})` }}>
      <ColorSchemesExample />
    <div style={{display:'flex', flexDirection:'row', justifyContent:'center', alignItems:'center', alignContent:'center'}}>
    <div> 
      <h1 style={{ color:"white"}}>Servicios Latinos</h1>
      <h3 style={{ color:"white"}}>Los mejores Servicios de asistencia Latina en Ontario, Canada</h3>
      </div>
      <div>
      {/* <img src={JS} alt="Jose Arias Picture" style={{ width: '300px', height: 'auto' }}/> */}
    <BioCard />
    </div>
    </div>
    
    </div>
  )
}

export default App
