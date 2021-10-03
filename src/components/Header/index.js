import { Container } from 'react-bootstrap';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import React from 'react';

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
        <Navbar bg="dark" variant="dark">
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
