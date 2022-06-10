import { requirePropFactory } from '@mui/material';
import React from 'react';
import { Card, Container, Row, Col } from 'react-bootstrap';

const Product = ({ service }) => {
    return(
        // <div>
        //     <h4>
        //         {service.name}
        //     </h4>
        //     <img src={require(`../../../assets/stockPhotos/${service.src}`)}
        //         alt={service.name}
        //         className='img-thumbnail'
        //         key={service.name} />
        //     <div>
        //         {service.description}
        //     </div>
        // </div>
        <>
        <Col>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant='top' src={require(`../../../assets/stockPhotos/${service.src}`)} />
                <Card.Body>
                    <Card.Title>{service.name}</Card.Title>
                    <Card.Text>{service.description}</Card.Text>
                </Card.Body>
            </Card>
        </Col>
        <br />
        </>
    )
}

export default Product;