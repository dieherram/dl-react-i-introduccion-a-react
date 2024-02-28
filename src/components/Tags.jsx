import Badge from 'react-bootstrap/Badge';

const Tags = ({ colorBadge, textBadge }) => {
  return (
    <div className='badge-container'>
      <Badge bg={colorBadge}>{textBadge}</Badge>
    </div>
  );
}

export default Tags