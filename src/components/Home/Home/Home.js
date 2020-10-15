import React from 'react';
import Footer from '../../Shared/Footer/Footer';
import Client from '../Clients/Clients'
import Feedback from '../Feedback/Feedback';
import Ourworks from '../Ourworks/Ourworks';
import Services from '../Services/Services';
import Topbanner from '../Topbanner/Topbanner';


const Home = () => {
    return (
        <div>
            <Topbanner></Topbanner>
            <Client></Client>
            <Services></Services>
            <Ourworks></Ourworks>
            <Feedback></Feedback>
            <Footer></Footer>
        </div>
    );
};

export default Home;