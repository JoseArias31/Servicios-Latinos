import React from "react";
import './BioCard.css'; // Si tienes un archivo CSS para estilos adicionales
import image from '../../public/Jose Arias.jpeg'; // Asegúrate de que la ruta a la imagen sea correcta

function BioCard() {
  return (
    <div className="card">
      <img src={image} alt="John" style={{ width: "100px" }} />
      <h1>John Doe</h1>
      <p className="title">CEO & Founder, Example</p>
      <p>Harvard University</p>
      <div className="social-links">
        <a href="#"><i className="fa fa-dribbble"></i></a>
        <a href="#"><i className="fa fa-twitter"></i></a>
        <a href="#"><i className="fa fa-linkedin"></i></a>
        <a href="#"><i className="fa fa-facebook"></i></a>
      </div>
      <p><button>Contact</button></p>
    </div>
  );
}

export default BioCard;
