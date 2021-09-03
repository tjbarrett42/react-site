import React from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Hero(props) {

    return (
        <Jumbotron className="bg-transparent jumbotron-fluid pb-0 mb-0">
            <Container fluid={true} >
                <Row className="justify-content-center">
                    <Col md={8} sm={12}>
                        { props.title && <h1 className="display-3 font-weight-bold">{props.title} {props.emoji}</h1>}
                        { props.subTitle && <h3 className="display-8 font-weight-normal">{props.subTitle}</h3>}
                        { props.text && <h3 className="lead font-weight-light">{props.text}</h3>}
                    </Col>
                </Row>
            </Container>
        </Jumbotron>
    );
}

export default Hero;