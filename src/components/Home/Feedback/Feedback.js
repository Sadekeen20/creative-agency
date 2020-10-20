import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';

const Feedback = () => {
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        fetch('https://young-bastion-60344.herokuapp.com/review')
            .then(res => res.json())
            .then(data => setReviews(data));
    }, [])
    return (
        <div className="d-flex justify-content-center mb-3">
            <div className="App">
                <h3>Total : {reviews.length} items </h3>

                <Container>
                    <Row style={{ backgroundColor: 'lightgray', borderRadius: '5px' }} >
                        {
                            reviews.map(review =>
                                <Col md={4}>
                                    <h5>{review.name}</h5>
                                    <p>{review.designation}</p>
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