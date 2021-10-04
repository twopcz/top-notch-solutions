import Header from '../../components/Header';
import Banner from '../../components/Banner';
import Footer from '../../components/Footer';
import InfoStrip from '../../components/InfoStrip';
import Contact from '../../components/Contact';
import React from 'react';

export default function Home() {
    return (
        <>
            <Header />
            <Banner />
            <InfoStrip />
            <Contact />
            <Footer />
        </>
    );
}
