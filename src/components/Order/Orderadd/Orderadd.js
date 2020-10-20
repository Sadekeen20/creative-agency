import React, { useContext } from 'react';
import Sidebar from '../Sidebar/Sidebar';
import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import { Link, useParams } from 'react-router-dom';
import { UserContext } from '../../../App';


const Orderadd = () => {
    const { worktitle } = useParams();
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    
    const handleOrder = () =>{
        const description=document.getElementById('description').value;
        const price = document.getElementById('price').value;
        const newOrder = {...loggedInUser,worktitle,description, price};
       
        fetch('https://young-bastion-60344.herokuapp.com/addOrder', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(newOrder)
        })
        .then(res =>res.json())
        .then(data => {
            console.log(data);
            alert('Order Added successfully')
        })
        
    }
    return (
        <div>
           
         <Row>
             <Col md={3}><Sidebar></Sidebar> </Col>
             <Col md={9}>
             <Form className="p-3">
                <Form.Group controlId="formBasicEmail" className="p-5" style={{ border: '1px solid gray', borderRadius: '5px'}}>
                    <h1 style={{textAlign: 'center'}}>Register</h1>
                    <Form.Control type="name" placeholder="Name/Company" defaultValue={loggedInUser.name} />
                    <br/>
                    <Form.Control type="email" placeholder="Enter email" defaultValue={loggedInUser.email} />
                    <br/>
                    <Form.Control type="text" placeholder="worktitle" defaultValue={worktitle}/>
                    <br/>
                    <Form.Control type="text" placeholder="Project Details" id="description"/>
                    <br/>
                    <Form.Control type="text" placeholder="Price" id="price"/>
                    <br/>
                    <Button variant="dark" onClick={handleOrder} >
                    <Link to='/orderdashboard' style={{ textDecoration: 'none'}}>Submit</Link>
                    </Button>
                
                </Form.Group>
                
            </Form>
            
             </Col>
         </Row>
            
            
        
        </div>
    );
};

export default Orderadd;