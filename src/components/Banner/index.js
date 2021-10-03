import { Container, Row } from 'react-bootstrap';
import banner from '../../assets/banner.jpeg';
import React from 'react';

export default function Banner() {
    return (
        <Container>
            <Row>
                <img src={banner} alt="banner" />
            </Row>
        </Container>
    );
}
