import React from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.css'
import { faCog, faSignOutAlt, faCalendar, faGripHorizontal, faUsers,faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import logo from '../../../images/logos/logo.png'

const Sidebar = () => {
    return (
        <div className="sidebar d-flex flex-column justify-content-between col-md-2 py-5 px-4" style={{height:"100vh"}}>
            <ul className="list-unstyled">
                <li>
                    <img src={logo} alt="" className="logo-control"/>
                </li>
                <li className="btn-disabled">
                    <Link to="#" className="text-dark">
                        <FontAwesomeIcon icon={faShoppingCart} /> <span>order </span> 
                    </Link>
                </li>
                <li>
                    <Link to="/orderdashboard" className="text-dark">
                        <FontAwesomeIcon icon={faCalendar} /> <span>Service list</span> 
                    </Link>
                </li>
                <li>
                    <Link to="/orderreview" className="text-dark">
                        <FontAwesomeIcon icon={faUsers} /> <span>Review</span>
                    </Link>
                </li>
            </ul>
            <div>
                <Link to="/" className="text-white"><FontAwesomeIcon icon={faSignOutAlt} /> <span>Logout</span></Link>
            </div>
        </div>
    );
};

export default Sidebar;