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
                <Col md={8}>
                    <h1>Helloo Dash</h1>
                    <Row>
                        {bookings.map(book => <Col md={4}>
                            <Row className="">
                                <Col md={6}>
                                    <img src={contentImg} alt="" className="img-control" />
                                </Col>
                                <Col md={6}>
                                    <h4>{book.worktitle} </h4>
                                    <h5>{book.description}</h5>
                                    <h6 className="text-muted">{book.price}</h6>
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