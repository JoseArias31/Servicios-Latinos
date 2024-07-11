
import Card from './cards';

const CardServices = () => {
  const cardInfos = [
    {
      name: 'Aplicacion a Ontario Works',
      descripcion: 'Esta es la forma de aplicar a Ontario Works',
    },
    {
      name: 'Asesoria Legal',
      descripcion: 'Consejos y asesoramiento sobre asuntos legales.',
    },
    {
      name: 'Ayuda para Impresiones',
      descripcion: 'Servicio de impresión para documentos importantes.',
    },
    {
      name: 'Envios de Dinero a Colombia',
      descripcion: 'Servicios de envío de dinero seguro a Colombia.',
    },
    {
      name: 'Aplicaciones del Gobierno Online',
      descripcion: 'Ayuda para completar aplicaciones del gobierno en línea.',
    }
  ];

  return (
    <div>
      {cardInfos.map((cardInfo, index) => (
        <Card key={index} title={cardInfo.name} info={cardInfo} />
      ))}
    </div>
  );
};

export default CardServices;
