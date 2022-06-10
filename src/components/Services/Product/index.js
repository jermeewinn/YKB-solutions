import React from 'react';
import { Card, Col } from 'react-bootstrap';

const Product = ({ service }) => {
    return(
        <Col>
            <Card style={{ width: '18rem' }} className='service-card'>
                <Card.Img variant='top' src={require(`../../../assets/stockPhotos/${service.src}`)} />
                <Card.Body>
                    <Card.Title>{service.name}</Card.Title>
                    <Card.Text>{service.description}</Card.Text>
                </Card.Body>
            </Card>
        </Col>
    )
}

export default Product;