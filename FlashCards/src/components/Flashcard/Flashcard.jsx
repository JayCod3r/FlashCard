import { useState } from 'react'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

function Flashcard() {
  

  return (
    <>
   
    <Card  style={{ width: '18rem'  }}> 
    <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        
        <Button variant="primary">Flip</Button>
      </Card.Body>
    </Card>

    </>
  )
}

export default Flashcard