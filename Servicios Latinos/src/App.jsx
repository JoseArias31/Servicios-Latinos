
import ColorSchemesExample from '../src/Components/navBar'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import background from '../src/BI.jpg'
import CardServices from './Components/CardComponent';
import BioCard from './Components/BioCard';
function App() {
 

  return (
    <div className='App' style={{ backgroundImage: `url(${background})` }}>
      <ColorSchemesExample />
    <div style={{display:'flex', flexDirection:'row', justifyContent:'space-evenly', alignItems:'center', alignContent:'center', marginTop:'5%'}}>
    <div> 
      <h1 style={{ color:"white"}}>Servicios Latinos</h1>
      <h3 style={{ color:"white"}}>Los mejores Servicios de asistencia Latina en Ontario, Canada</h3>
      </div>
      <div>   
    <BioCard />
    </div>
    </div>
    <CardServices />
        </div>

  )
}

export default App
