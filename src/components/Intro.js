import React from "react";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

function Intro(){
    return (
        <Container className="justify-content-end">
            <Row>
                <Col className="text-center font-weight-light">
                    <p>Hello, my name is Tim. </p>
                    <p>I'm a 2020 graduate with a B.S. in Computer Science from Stevens Institute of Technology in Hoboken, NJ and passionate for self development and fitness solutions in tech.</p>
                    <p>My love for kinesiology, nutrition, and nature expands to my favorite hobbies: skiing, biking, cooking, and camping.</p>
                </Col>
            </Row>

        </Container>
    );
}

export default Intro;