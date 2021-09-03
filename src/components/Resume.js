import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";

function Resume(){
    return (
        <Container fluid="sm">
            <Row>
                <Col sm={12} lg={6} className="text-center">
                    <Button href="https://raw.githubusercontent.com/tjbarrett42/resume/main/TimothyBarrettResume.pdf" target="_blank" variant="transparent"><h3 className="text-center font-weight-light m-0">Download from Github (.pdf)</h3></Button>
                </Col>
                <Col sm={12} lg={6} className="text-center">
                    <Button href="https://github.com/tjbarrett42/resume" target="_blank" variant="transparent"><h3 className="text-center font-weight-light m-0">Github Repository (.tex, .cls)</h3></Button>
                </Col>
            </Row>
        </Container>
    );
}

export default Resume;