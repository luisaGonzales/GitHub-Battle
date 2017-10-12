import React, {Component} from 'react';
import {NavLink} from 'react-router-dom'
import './Home.css';
import {Button} from 'react-bootstrap';
import ReactBootstrap from 'react-bootstrap'

const Home = ({model}) => {
    return (
        <div>
            <h1>Github Battle: Battle your friends... and stuff.</h1>
            <Button bsSize="large" block>Block level button</Button>
        </div>
    );
}

export default Home;