import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Sidebaradmin.css'
import { faCog, faSignOutAlt, faCalendar, faGripHorizontal, faUsers, faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import logo from '../../../images/logos/logo.png'
import { UserContext } from '../../../App';

const Sidebaradmin = () => {
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
    return (
        <div>
            {isAdmin && <div className="sidebar d-flex flex-column justify-content-between col-md-2 py-5 px-4" style={{ height: "100vh" }}>
                <h1>Welcome Admin</h1>
                <ul className="list-unstyled">
                    <li>
                        <img src={logo} alt="" className="logo-control" />
                    </li>
                    <li className="btn-disabled">
                        <Link to="/servicelist" className="text-dark">
                            <FontAwesomeIcon icon={faShoppingCart} /> <span>Service List </span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/addService" className="text-dark">
                            <FontAwesomeIcon icon={faCalendar} /> <span>Add Service</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/makeadmin" className="text-dark">
                            <FontAwesomeIcon icon={faUsers} /> <span>Make Admin</span>
                        </Link>
                    </li>
                </ul>
                <div>
                    <Link to="/" className="text-white"><FontAwesomeIcon icon={faSignOutAlt} /> <span>Logout</span></Link>
                </div>
            </div>
            }
        </div>
    );
};

export default Sidebaradmin;