import React from "react";
import './BioCard.css'; // Si tienes un archivo CSS para estilos adicionales
import image from '../../src/Jose Arias.jpeg'



function BioCard() {

  const buttonStyle = {
    background: '#008CBA', 
    color: 'black',
    padding: '15px 25px',
    textAlign: 'center',
    textDecoration: 'none',
    display: 'inline-block',
    fontSize: '16px',
    boxShadow: '0 8px 16px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19)',

  };
  return (
    <div className="card" style={{background:'white', paddingTop:'10px', paddingBottom:'10px', paddingLeft:'10px', paddingRight:'10px', justifyContent:'space-between'}}>
      <img src={image} alt="John" style={{ width: "90px", borderRadius:'10px' }} />
      <h2 style={{margin:'0px'}}>Jose Arias</h2>
      <p className="title" style={{margin:'0px'}}>Web Developer</p>
      <p style={{margin:'0px'}}>Toronto, Canada</p>
      <div className="social-links">
        <a href="#"><i className="fa fa-dribbble"></i></a>
        <a href="#"><i className="fa fa-twitter"></i></a>
        <a href="#"><i className="fa fa-linkedin"></i></a>
        <a href="#"><i className="fa fa-facebook"></i></a>
      </div>
      <button style={buttonStyle}>Contacta Me</button>
    </div>
  );
}

export default BioCard;
