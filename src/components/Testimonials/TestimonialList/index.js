import React, { useState } from "react";
//import Review from '../Review';
import * as FAIcons from "react-icons/fa";
import {
  Card,
  Row,
  Col,
  Container,
  Cover,
  Modal,
  Button,
} from "react-bootstrap";
import "./style.css";

const TestimonialList = ({ tech }) => {
    // useState modalClient takes in the information on which client is clicked and takes that information in in order to populate the modal with////
    /// if it is false (no client is clicked yet you are still on the main page) there is an if then statment in the modal section preventing errors in that case
  const [modalClient, setModalClient] = useState();

  const [clients] = useState([
    {
      name: "Allen Wang",
      image: "Allen-Wang-pfp.jpg",
      height: "300px",
      width: "300px",
      title: "Full-Stack Software Developer",
      company: "Tai Software",
      link: "https://www.linkedin.com/in/allenc-wang/",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    },
    {
      name: "Jeremy Huynh",
      image: "Jeremy-Huynh-pfp.jpg",
      height: "350px",
      width: "300px",
      title: "Freelance Full-Stack Software Developer",
      company: "Self-employed",
      link: "https://www.linkedin.com/in/jeremy-huynh/",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    },
    {
      name: "Kristy Tran",
      image: "Kristy-Tran-pfp.jpg",
      height: "350px",
      width: "240px",
      title: "Desktop Support Specialist",
      company: "Palo Alto Networks",
      link: "https://www.linkedin.com/in/kristytran24/",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    },
    {
      name: "Sonia Yu",
      image: "Sonia-Yu-pfp.jpg",
      height: "350px",
      width: "350px",
      title: "Cybersecurity Consultant",
      company: "Moss Adams",
      link: "https://www.linkedin.com/in/sonia-yu/",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    },
    {
      name: "Therese Nguyen",
      image: "Therese-Nguyen-pfp.jpg",
      height: "350px",
      width: "300px",
      title: "Master Scheduler",
      company: "Gener8",
      link: "https://www.linkedin.com/in/theresen/",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    },
  ]);

  // function populateModal(props){
  //     return(
  //         {clients.map((client, i) => (
  //             <h4>{client.name}</h4>
  //     )}
  //     )
  // }

  function TestimonialModal(props) {
    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
        {/* mocalClient is defined in a useState at the top, this line makes sure that modal client isn't undefined */}
          {modalClient !== undefined && (
            <>
              <img
              height= {modalClient.height}
              width= {modalClient.width}
              class="service-modal"
              src={require(`../../../assets/profilePics/${modalClient.image}`)}
              alt="profile picture"
            />
            </>
          )}
            
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {modalClient !== undefined && (
            <>
            <div className="testimonials-modal-flexbox">
                <h4>{modalClient.name}</h4>
                <a className="testimonials-linkedin-icon" href={modalClient.link}><FAIcons.FaLinkedin size={25}/></a>
            </div>
              
              <p>{modalClient.title}</p>
              <p>{modalClient.company}</p>
              <p>{modalClient.description}</p>
            </>
          )}
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    );
  }

  return (
    <Container className="testimonial-container">
      <Row className="flex-row">
        {clients.map((client, i) => (
          <Col className="testimonial-column" xs={12} md={6} lg={3}>
            <Button
              variant="secondary"
              onClick={() => setModalClient(client)}
              style={{ width: "18rem" }}
              className="service-card"
            >
              <Card
                className="testimonial-card"
                // NOTE TO KAYLIN: For some reason, the background-color property doesn't work in index.css
                // so we had to hard-code the style here.
                style={{ backgroundColor: "#5b5b5b" }}
              >
                <Card.Header></Card.Header>
                <Card.Img
                  resizeMode={"cover"}
                  height-max={50}
                  className="testimonial-img"
                  src={require(`../../../assets/profilePics/${client.image}`)}
                />
                <Card.Body>
                  <Card.Title as="h5">{client.name}</Card.Title>
                </Card.Body>
              </Card>
            </Button>
            <TestimonialModal
            //here when we show the modal the modalClient is no longer undefined
              show={modalClient !== undefined}
              onHide={() => setModalClient(undefined)}
            />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default TestimonialList;
