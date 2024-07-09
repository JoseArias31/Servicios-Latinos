import React from 'react';

import Nav from 'react-bootstrap/Nav';

function ColorSchemesExample() {
  return (

     
         
          <Nav className="me-auto" style={{textAlignLast:"center"}}>
            <Nav.Link style={{color:"white", margin:"3rem", fontSize:"20px"}} href="#home">Servicios</Nav.Link>
            <Nav.Link style={{color:"white", margin:"3rem", fontSize:"20px"}} href="#features">Precios</Nav.Link>
            <Nav.Link style={{color:"white", margin:"3rem", fontSize:"20px"}} href="#pricing">Contacto</Nav.Link>
          </Nav>
          
  );
}

export default ColorSchemesExample;