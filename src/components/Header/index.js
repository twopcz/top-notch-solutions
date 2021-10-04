import { Container } from 'react-bootstrap';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import React from 'react';
import Logo from '../../assets/logo_simple.png';
import './style.css';

export default function Header() {
    const navItems = [
        {
            title: `HOME`,
            url: `/`
        },
        {
            title: `PRICING`,
            url: `/pricing`
        },
        {
            title: `CONTACT`,
            url: `/contact`
        }
    ];

    return (
        <Navbar bg="light" variant="light" className="sticky-nav">
            <Container>
                <Navbar.Brand href="#home" className="d-flex">
                    {' '}
                    <img
                        alt="top-notch-lv-logo"
                        src={Logo}
                        width="30"
                        height="30"
                        className="d-inline-block align-top"
                    />{' '}
                    <div className="px-3">Top Notch LV</div>
                </Navbar.Brand>
                <Nav className="justify-content-between">
                    {navItems.map((page, index) => (
                        <Nav.Link key={`nav-link-${index}`} href={page.url}>
                            {page.title}
                        </Nav.Link>
                    ))}
                </Nav>
            </Container>
        </Navbar>
    );
}
