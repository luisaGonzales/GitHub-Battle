import React from 'react';
import {NavLink} from 'react-router-dom';
import './Battle.css';
import {Button, Grid, Row, Col} from 'react-bootstrap';
import ReactBootstrap from 'react-bootstrap'

const Battle = ({model}) => {
    return (
        <div>
            <Grid className="text-center">
                <Row>
                    <Col xs={6} md={6}>
                        <form
                            className="colum"
                            onSubmit={(e) => {
                            e.preventDefault();
                            model.getInformation(e, model.playerOne);
                        }}>
                            <label htmlFor="username" className="header text-center">Player One</label>
                            <input
                                className="inputPlayers"
                                type="text"
                                id="username"
                                placeholder="GitHub User Name"
                                autoComplete="off"
                                onChange={(e) => {
                                model.getPlayerOne(e)
                            }}/>
                            <button className="button" type="submit">
                                Submit
                            </button>
                            
                        </form>
                    </Col>
                    <Col xs={6} md={6}>
                        <form
                            className="colum"
                            onSubmit={(e) => {
                            e.preventDefault();
                            model.getInformation(e, model.playerTwo);
                        }}>
                            <label htmlFor="username" className="header text-center">Player Two</label>
                            <input
                                className="inputPlayers"
                                type="text"
                                id="username"
                                placeholder="GitHub User Name"
                                autoComplete="off"
                                onChange={(e) => {
                                model.getPlayerTwo(e)
                            }}/>
                            <button className="button" type="button">Submit</button>
                        </form>
                    </Col>
                </Row>
            </Grid>
        </div>
    );
}

export default Battle;