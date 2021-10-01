import { Container } from 'react-bootstrap';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import React from 'react';

export default function Header() {
    const navItems = [
        {
            title: `Home`,
            url: `/`
        },
        {
            title: `Pricing`,
            url: `/pricing`
        },
        {
            title: `Contact`,
            url: `/contact`
        }
    ];

    return (
        <Navbar bg="light" variant="light">
            <Container>
                <Navbar.Brand href="#home">Top Notch LV</Navbar.Brand>
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
