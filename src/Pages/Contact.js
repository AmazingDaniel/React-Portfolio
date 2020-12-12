import React from "react";
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';

const Contact = () => (
    <Container id="container">
        <div>
            <h3>Daniel Moreno</h3>
            <h3>drmjr417@sbcglobal.net</h3>
        </div>
        <div id="contact">
            <a href="www.linkedin.com/in/daniel-ray-moreno-jr">
                <Image src={linkedin} style={{ width: 50, height: 50, margin: 20 }} />
            </a>
            <a href="http://www.github.com/AmazingDaniel">
                <Image src={github} style={{ width: 70, height: 70, margin: 20 }} />
            </a>
        </div>
    </Container>
);

export default Contact;