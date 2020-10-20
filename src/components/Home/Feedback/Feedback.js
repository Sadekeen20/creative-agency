import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import custImg from '../../../images/customer-2.png'
const Feedback = () => {
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        fetch('https://young-bastion-60344.herokuapp.com/review')
            .then(res => res.json())
            .then(data => setReviews(data));
    }, [])
    return (
        <div className="d-flex justify-content-center mb-5 mt-5">
            <div className="App">
                <Container>
                    <h3>Clients <span className="text-success">Feedback</span></h3>
                    <br/>
                    <br/>
                    <Row   className="pt-3">
                        {
                            reviews.map(review =>
                                <Col md={4} style={{  border: '1px solid gray' }} className="p-3 mr-1">
                                    <Row >
                                        <Col md={4}>
                                            <img src={custImg} alt="" className="img-fluid" style={{height: '50px',width: '50px'}} />
                                        </Col>
                                        <Col md={8}>
                                            <h5>{review.name}</h5>
                                            <p>{review.designation}</p>
                                        </Col>
                                    </Row>
                                    <small>{review.description}</small>
                                </Col>)
                        }
                    </Row>
                </Container>
            </div>
        </div>
    );
};

export default Feedback;