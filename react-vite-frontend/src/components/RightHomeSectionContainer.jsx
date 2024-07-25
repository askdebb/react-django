import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './Intro.css';


const RightHomeSectionContainer = () => {
    
  return (
    <>
    <Card className="text-center shadow-sm">
      <Card.Header className='card-head'>School Name</Card.Header>
      <Card.Body>
        <Card.Title>School Details</Card.Title>
        <Card.Text>
            ALl the info
        </Card.Text>
        <Button  className='btn'>Go somewhere</Button>
      </Card.Body>
      <Card.Footer className="text-muted">2 days ago</Card.Footer>
    </Card>

    </>
  )
}

export default RightHomeSectionContainer