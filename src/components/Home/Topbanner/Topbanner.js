import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Navbar from '../../Shared/Navbar/Navbar';
import './Topbanner.css';
import bannerImg from '../../../images/logos/Frame.png'
const Topbanner = () => {
    return (
        <div className="bannerstyle pb-3">
            <Container>
            <Navbar></Navbar>
            <Row>
                <Col md={6}>
                <h2>
                <b>
                Lets Grow Your <br/>
                Brand To The <br/> 
                Next Level
                </b>
                </h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel iure hic, molestiae ad a ex neque molestias numquam natus similique enim suscipit</p>
                
                <button className="btn btn-brand">Hire Us </button>
                </Col>
                <Col md={6}>
                <img src={bannerImg} alt="" className="img-fluid"/>
                </Col >
            </Row>
            </Container>
        </div>
    );
};

export default Topbanner;