import React, { useContext, useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { UserContext } from '../../../App';
import { Button, Col, Container, Row } from 'react-bootstrap';
import Sidebar from '../Sidebar/Sidebar';
import contentImg from '../../../images/icons/service2.png'
const Orderdashboard = () => {
    const [bookings, setBookings] = useState([]);
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const history = useHistory();

    useEffect(() => {
        fetch('https://young-bastion-60344.herokuapp.com/orderdashboard?email=' + loggedInUser.email, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                authorization: `Bearer ${sessionStorage.getItem('token')}`
            }
        })
            .then(res => res.json())
            .then(data => setBookings(data));
    }, [])

    return (
        <div className="container-fluid">
            <Row>
                <Col md={3}>
                    <Sidebar></Sidebar>
                </Col>
                <Col md={9}>
                    
                    <Row>
                        {bookings.map(book => <Col md={4} className="m-1 p-2">
                            <Row style={{border: '1px solid gray', minHeight:'80px'}}>
                                <Col md={6}>
                                    <img src={contentImg} alt="" className="img-fluid" style={{maxHeight:'50px' ,maxWidth:'50px'}}/>
                                </Col>
                                <Col md={6}>
                                    <h6>Title: {book.worktitle} </h6>
                                    <small>Description: {book.description}</small>
                                    <p className="text-muted">Price: {book.price}</p>
                                </Col>
                            </Row>
                        </Col>)
                        }
                    </Row>
                </Col>
            </Row>

        </div>
    );
};

export default Orderdashboard;