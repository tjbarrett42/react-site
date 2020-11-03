import React from "react";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

function Intro(){
    return (
        <Container className="justify-content-end">
            <Row>
                <Col className="text-center font-weight-light">
                    <p>I'm a 2020 graduate with a B.S. in CompSci from Stevens Institute of Technology in Hoboken, NJ.</p>
                </Col>
            </Row>

        </Container>
    );
}

export default Intro;