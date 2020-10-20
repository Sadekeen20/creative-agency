import React, { useContext, useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { UserContext } from '../../../App';
import Sidebaradmin from '../Sidebaradmin/Sidebaradmin';

const Makeadmin = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [isAdmin, setIsAdmin] = useState(false);

    useEffect(() => {
        fetch('https://young-bastion-60344.herokuapp.com/isAdmin', {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify({ email: loggedInUser.email })
        })
            .then(res => res.json())
            .then(data => setIsAdmin(data));
    }, [])
    const handleSubmit = (e) => {
        e.preventDefault()
        const adminEmail = document.getElementById('email').value

        fetch(`https://young-bastion-60344.herokuapp.com/makeAdmin`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email: adminEmail })
        })
            .then(res => res.json())
            .then(data => alert('You Are Now Admin'))

        e.target.reset()
    }
    return (
        <Container fluid>
            {isAdmin &&<Row>
                <Col md={3}>
                    <Sidebaradmin></Sidebaradmin>
                </Col>
                <Col md={8}>
                    <div style={{ borderRadius: '20px' }} className="container bg-light mt-3 p-5">
                        <div className="py-5">
                            <form className=' w-50 mx-auto my-5' onSubmit={handleSubmit}>
                                <input id='email' className='form-control' placeholder="Enter Email To Make Admin" type="email" required />
                                <button className='btn btn-outline-dark mt-4 btn-block' type='submit'>Submit</button>
                            </form>
                        </div>
                    </div>
                </Col>
            </Row>}
        </Container>
    );
};

export default Makeadmin;