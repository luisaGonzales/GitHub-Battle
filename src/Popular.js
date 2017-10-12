import React, {Component} from 'react';
import {NavLink} from 'react-router-dom'
import './Popular.css';
import {Button} from 'react-bootstrap';
import ReactBootstrap from 'react-bootstrap'

const Popular = ({model}) => {
    return (
        <div>
            <ul className="languages">
                <li>All</li>
                <li>Javascript</li>
                <li>Ruby</li>
                <li>Java</li>
                <li>CSS</li>
                <li>Python</li>
            </ul>
        </div>
    );
}

export default Popular;