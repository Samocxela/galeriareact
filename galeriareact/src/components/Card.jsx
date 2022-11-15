import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import "./card.css"

function tarjeta({img,titulo,description}) {
 
return (
  
    <Card className='borde p-2 mb-5 bg-white rounded' style={{ width: '18rem' }}>
      <Card.Img variant="top" src={img} />
      <Card.Body>
        <Card.Title>{titulo}</Card.Title>
        <Card.Text>
          {description}
        </Card.Text>
        <Button variant="primary">VER</Button>
      </Card.Body>
    </Card>
 
  );
}

export default tarjeta;