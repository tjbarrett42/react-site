import React from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import bgimage from '../assets/images/bg3.png';
import Button from 'react-bootstrap/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee } from '@fortawesome/free-solid-svg-icons'
import {Image} from "react-bootstrap";

function MainHero(props) {

    return (
        //
        <Jumbotron style= {{backgroundImage: `url(${bgimage})`, backgroundSize: 'cover' }}className="jumbotron-fluid m-0" >
            <Container>
                {/*<img src="../assets/images/bg.jpg"/>*/}
                <Row className="justify-content" >

                    <Col md={8} sm={12}>
                        { <h1 className=" display-3 font-weight-bold">timothy barrett</h1>}
                        { <h2 className="display-7 font-weight-normal">{"application engineer | kinesiology hobbyist"}</h2>}
                        <Button href="https://www.linkedin.com/in/timjbarrett" target="_blank" variant="light"><h3 className="text-center font-weight-light m-0">LinkedIn</h3></Button>
                        <Button href="https://github.com/tjbarrett42" target="_blank" variant="light"><h3 className="text-center font-weight-light m-0">GitHub</h3></Button>

                    </Col>
                </Row>
            </Container>
        </Jumbotron>
    );
}

export default MainHero;