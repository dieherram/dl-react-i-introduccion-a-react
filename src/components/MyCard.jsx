import Card from 'react-bootstrap/Card';
import Tags from './Tags';

const MyCard = ({ imgSrc, name, description, text, color }) => {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={imgSrc} />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>
          {description}
        </Card.Text>
        <Tags colorBadge={color} textBadge={text} />
      </Card.Body>
    </Card>
  );
}

export default MyCard;