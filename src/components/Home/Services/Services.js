import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import { Button, Card, Col, Container, FormControl, Row } from 'react-bootstrap';
import './Services.css'
import cardImg from '../../../images/icons/service1.png'
const Services = () => {
    const history = useHistory();
    const handleItem = (title) => {
        history.push(`/order/${title}`);
    }
    const workItems = [
        {
            title: 'Web & Mobile Design',
            imgUrl: '../../../images/icons/service1.png',
            description: 'We craft stunning and amazing web UI, using a well drrafted UX to fit your product.'

        },
        {
            title: 'Graphic Design',
            imgUrl: '../../../images/icons/service2.png',
            description: 'Amazing flyers, social media posts and brand representations that would make your brand stand out.'
        },
        {
            title: 'Web Development',
            imgUrl: '../../../images/icons/service3.png',
            description: 'With well written codes, we build amazing apps for all platforms, mobile and web apps in general.'
        }

    ]
    return (
        <div className=" container ">
            
            <div className="row d-flex justify-content-center">
                
                {
                    workItems.map(workItem =>
                        <Col md={3}  className="d-flex justify-content-center" style={{ marginBottom: '15px', textAlign: 'center', cursor: 'pointer' }} onClick={() => handleItem(workItem.title)}>
                            <Card className="card-style pt-3">
                                <Card.Img variant="top" className="rounded mx-auto d-block" src={cardImg} />
                                <Card.Body>
                                    <Card.Title className="small"><h5>{workItem.title}</h5></Card.Title>
                                    <Card.Text> <small>{workItem.description}</small> </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>)
                }
            </div>

        </div>
    );
};

export default Services;