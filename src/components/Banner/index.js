import { Container, Row } from 'react-bootstrap';
import banner from '../../assets/banner.jpeg';
import React from 'react';

export default function Banner() {
    return (
        <Row className="w-100 mx-0 pb-5">
            <img className="px-0" src={banner} alt="banner" />
        </Row>
    );
}
