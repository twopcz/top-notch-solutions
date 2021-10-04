import { Container, Row, Col } from 'react-bootstrap';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import React from 'react';

export default function Footer() {
    return (
        <footer className="">
            <Navbar bg="dark" variant="dark">
                <Container className="justify-content-center py-5">
                    <Row className="w-100">
                        <Col>
                            <h4 className="text-light font-weight-bold">
                                ABOUT US
                            </h4>
                            <p className="text-muted">
                                We are a small group of individuals in Las
                                Vegas, Nevada who offer all types of support on:
                                Computers, Networks, On/Offsite Servers,
                                Security Cameras, Cell Phones, Tablets,
                                Multifunction Printers, and many more.
                            </p>
                        </Col>
                        <Col>
                            <h4 className="text-light">CONTACT</h4>
                            <div className="text-muted">
                                <p>Email: Andrew@topnotchlv.com</p>
                                <p>Phone: 702-758-4044</p>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </Navbar>
        </footer>
    );
}
