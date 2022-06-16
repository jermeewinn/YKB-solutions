import React, { useState } from 'react';
import { Card, Col, Modal, Button } from 'react-bootstrap';

function ServiceModal(service) {
    return(
        <Modal
            {...service}
            size='lg'
            aria-labelledby='contained-modal-title-vcenter'
            centered
        >
            <Modal.Header closeButtone>
                <Modal.Title id='contained-modal-title-vcenter'>
                    {service.name}
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <p>
                    {service.description}
                </p>
            </Modal.Body>
            <Modal.Footer>
                <Button onclick={service.onHide}>Close</Button>
            </Modal.Footer>
        </Modal>
    )
};

const Product = ({ service }) => {
    

    const [modalShow, setModalShow] = React.useState(false);

    return(
        <Col>
        
            <Button variant='secondary' onClick={() => setModalShow(true)} style={{ width: '18rem' }} className='service-card' >
                <Card.Img variant='top' src={require(`../../../assets/stockPhotos/${service.src}`)} />
                <Card.Body>
                    <Card.Title>{service.name}</Card.Title>
                    {/* <Card.Text>{service.description}</Card.Text> */}
                </Card.Body>
                
            </Button>
            <ServiceModal show={modalShow} onHide={() => setModalShow(false)}/>
        </Col>
    )
};

export default Product;