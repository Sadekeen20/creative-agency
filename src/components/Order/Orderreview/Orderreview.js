import React, { useContext } from 'react';
import { Button, Col, Form, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { UserContext } from '../../../App';
import Sidebar from '../Sidebar/Sidebar';

const Orderreview = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const handleReview = () =>{
        const description=document.getElementById('description').value;
        const designation = document.getElementById('designation').value;
        const newReview = {...loggedInUser,description,designation};
       
        fetch('https://young-bastion-60344.herokuapp.com/addReview', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(newReview)
        })
        .then(res =>res.json())
        .then(data => {
            console.log(data);
            alert('Review Added successfully')
        })
        
    }
    return (
        <div>
            <Row>
             <Col md={3}><Sidebar></Sidebar></Col>
             <Col md={9}>
             <Form className="p-3">
                <Form.Group controlId="formBasicEmail" className="p-5" style={{ border: '1px solid gray', borderRadius: '5px'}}>
                    <h1 style={{textAlign: 'center'}}>Review</h1>
                    <Form.Control type="name" placeholder="Name/Company" value={loggedInUser.name} />
                    <br/>
                    <Form.Control type="text" placeholder="Company Name,Designation" id='designation' />
                    <br/>
                    <Form.Control type="text" placeholder="Description" id="description"/>
                    <br/>
                    <Button variant="dark" onClick={handleReview} >
                    <Link to='/orderdashboard' style={{ textDecoration: 'none'}}>Submit</Link>
                    </Button>
                 </Form.Group>
                
            </Form>
            
             </Col>
         </Row>
        </div>
    );
};

export default Orderreview;