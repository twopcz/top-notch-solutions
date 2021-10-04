import { Col, Container, Row } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import React from 'react';

export default function Contact() {
    return (
        <div className="bg-light py-5">
            <Container className="w-50 py-5">
                <Row className="text-center">
                    <h1 className="display-4">Contact Us</h1>
                    <p className="lead">
                        Get in touch today for a free estimate!
                    </p>
                </Row>
                <Row>
                    <Form>
                        <Form.Group className="mb-3" controlId="formGridName">
                            <Form.Control placeholder="Name" />
                        </Form.Group>
                        <Row className="mb-3">
                            <Form.Group as={Col} controlId="formGridEmail">
                                <Form.Control
                                    type="email"
                                    placeholder="Email"
                                />
                            </Form.Group>

                            <Form.Group as={Col} controlId="formGridPhone">
                                <Form.Control
                                    type="phone"
                                    placeholder="Phone"
                                />
                            </Form.Group>
                        </Row>
                        <Form.Group className="mb-3" controlId="formTextArea">
                            <Form.Control
                                as="textarea"
                                placeholder="Message"
                                rows={3}
                            />
                        </Form.Group>
                        <Button variant="primary" type="submit">
                            Submit
                        </Button>
                    </Form>
                </Row>
            </Container>
        </div>
    );
}
