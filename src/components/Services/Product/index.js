import React from 'react';
import { Card, Col, Modal, Button } from 'react-bootstrap';

// NOTE TO SELF: Will need to import specific components from react-bootstrap. 
// React-bootstrap's documentation isn't very informative on how to import certain components into files.

const Product = ({ service }) => {
    
    const [modalShow, setModalShow] = React.useState(false);

    function ServiceModal(props) {

        // JSX for services modal when it is open.
        return(
            <Modal
                {...props}
                size='lg'
                aria-labelledby='contained-modal-title-vcenter'
                centered
            >
                <Modal.Header closeButton>
                    <Modal.Title id='contained-modal-title-vcenter'>
                        <img 
                            class='service-modal' 
                            src={require(`../../../assets/stockPhotos/${service.src}`)}
                            alt={service.alt} />
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <h4>
                        {service.name}
                    </h4>
                    <p>
                        {service.description}
                    </p>
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={props.onHide}>Close</Button>
                </Modal.Footer>
            </Modal>
        )
    };

    // JSX for services cards when modals are closed.
    return(
        <Col>
            <Button 
                variant='secondary' 
                onClick={() => setModalShow(true)} 
                style={{ width: '18rem' }} 
                className='service-card' 
            >
                <Card.Img 
                    variant='top' 
                    src={require(`../../../assets/stockPhotos/${service.src}`)}
                    alt={service.alt} 
                />
                <Card.Body>
                    <Card.Title>{service.name}</Card.Title>
                </Card.Body>
            </Button>
            <ServiceModal 
                show={modalShow} 
                onHide={() => setModalShow(false)}
            />
        </Col>
    )
};

export default Product;