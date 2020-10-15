import React from 'react';
import './Footer.css';
import { Col, Container, Row } from 'react-bootstrap';

const Footer = () => {
    
    return (
        <footer className="footer-area">
            <Container >
            <Row className="container">
                <Col className="p-4">
                    <h2 >Let us handle your <br/> project, professionally </h2>
                    <h5>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius, nihil quos quaerat asperiores dolore fugiat recusandae optio corrupti placeat soluta, nisi, id ratione quae quisquam reprehenderit error possimus harum. Id!</h5>
                </Col>
                <Col className="p-4">
                <form action="">
                       <div className="form-group">
                           <input type="text" className="form-control" placeholder="Email Address *"/>
                       </div>
                       <div className="form-group">
                           <input type="text" className="form-control" placeholder="Subject *"/>
                       </div>
                       <div className="form-group">
                           <textarea name="" className="form-control" id="" cols="30" rows="10" placeholder="Message *"></textarea>
                       </div>
                       <div className="form-group text-center">
                           <button type="button" className="btn btn-brand"> Submit </button>
                       </div>
                   </form>
                </Col>
            </Row>
        </Container>
        </footer>
        
    );
};

export default Footer;