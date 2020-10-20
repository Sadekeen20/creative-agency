import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import slack from '../../../images/logos/slack.png'
import google from '../../../images/logos/google.png'
import uber from '../../../images/logos/uber.png'
import netflix from '../../../images/logos/netflix.png'
import airbnb from '../../../images/logos/airbnb.png'
import './Clients.css'
const clients = () => {
    return (
        <div>
            <Container>
                <Row className="d-flex justify-content-center img-control mt-5 ">

                    <Col md={3}>
                        <img src={slack} alt="" />
                    </Col>
                    
                    <Col md={2}>
                        <img src={google} alt="" />
                    </Col>
                    <Col md={2}>
                        <img src={uber} alt="" />
                    </Col>
                    <Col md={2}>
                        <img src={netflix} alt="" />
                    </Col>
                    <Col md={2}>
                        <img src={airbnb} alt="" />
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default clients;