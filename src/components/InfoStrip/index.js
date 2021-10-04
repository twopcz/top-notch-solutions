import { Col, Container, Row } from 'react-bootstrap';
import Board from '../../assets/board.jpeg';
import Phones from '../../assets/phones.jpeg';
import Printer from '../../assets/printer.jpeg';
import Server from '../../assets/server.jpeg';
import React from 'react';

export default function InfoStrip() {
    return (
        <Container className="my-5">
            <Row className="text-center py-5">
                <h1 className="display-4">Our Services</h1>
                <p className="lead">
                    We have a team of experts that cover a wide variety of tech
                    solutions
                </p>
            </Row>
            <Row className="text-center">
                <Col>
                    <h5>Computers</h5>
                    <img
                        className="img-fluid py-3"
                        src={Board}
                        alt="computer-board"
                    ></img>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit, sed do eiusmod tempor incididunt ut labore et
                        dolore magna aliqua. Ut enim ad minim. sed do eiusmod
                        tempor incididunt..
                    </p>
                </Col>
                <Col>
                    <h5>Server Maintenance</h5>
                    <img
                        className="img-fluid py-3"
                        src={Server}
                        alt="server-rack"
                    ></img>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit, sed do eiusmod tempor incididunt ut labore et
                        dolore magna aliqua. Ut enim ad minim. sed do eiusmod
                        tempor incididunt..
                    </p>
                </Col>
                <Col>
                    <h5>Multifunction Printers</h5>
                    <img
                        className="img-fluid  py-3"
                        src={Printer}
                        alt="printer"
                    ></img>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit, sed do eiusmod tempor incididunt ut labore et
                        dolore magna aliqua. Ut enim ad minim. sed do eiusmod
                        tempor incididunt..
                    </p>
                </Col>
                <Col>
                    <h5>& more!</h5>
                    <img
                        className="img-fluid  py-3"
                        src={Phones}
                        alt="phones"
                    ></img>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit, sed do eiusmod tempor incididunt ut labore et
                        dolore magna aliqua. Ut enim ad minim. sed do eiusmod
                        tempor incididunt..
                    </p>
                </Col>
            </Row>
        </Container>
    );
}
