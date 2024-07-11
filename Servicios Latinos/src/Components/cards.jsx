import  { useState } from 'react';
import './Card.css'; 
import PropTypes from 'prop-types';

const Card = ({ info }) => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };

  return (
    <div className="cardC">
      <div className="card-header" onClick={toggleVisibility}>
        <h2>{info.name}</h2>
      </div>
      {isVisible && (
        <div className="card-content">
   
          <h3>{info.descripcion}</h3>
         
          
        </div>
      )}
    </div>
  );
};

Card.propTypes = {
    title: PropTypes.string.isRequired,
    info: PropTypes.shape({
      image: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      descripcion: PropTypes.string.isRequired
    }).isRequired,
  };
export default Card;
