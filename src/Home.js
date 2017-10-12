import React, {Component} from 'react';
import {NavLink} from 'react-router-dom'
import './Home.css';
import {Button} from 'react-bootstrap';
import ReactBootstrap from 'react-bootstrap'

const Home = ({model}) => {
    return (
        <div className="home-container">
            <h1 className="titleHome text-center">Github Battle: Battle your friends... and stuff.</h1>
            <NavLink to="/battle">
                <Button bsSize="large" block className="btnHome">Battle</Button>
            </NavLink>
        </div>
    );
}

export default Home;