import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

export const MyCard=({id,image,info,name,price})=> {
    const cardImg={
        'height': 'auto',
        'maxHeight': '250px',
       
        
    }
  return (
    <Card style={{ width: '18rem',boxShadow:'0 0 5px gray' }}>
      <Card.Img variant="top" src={image} style={cardImg}/>
      <Card.Body className='d-flex flex-column justify-content-between'>
        <Card.Title>{name}</Card.Title>
        
        <Button variant="primary">read more...</Button>
      </Card.Body>
    </Card>
  );
}

