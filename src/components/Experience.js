import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";

function Experience(props){
    return (
        <Container className="pb" fluid="sm" >
            <Row className="justify-content-center">
                <Col sm={12} md={7} lg={5}>
                    <h1>Allvue Systems, NY</h1>
                    <h2 className="font-weight-light">Application Engineer</h2>
                </Col>
                <Col sm={12} md={5} lg={5}>
                    <h3 className="font-weight-light font-italic text-md-right text-lg-right">Jul 2020 - Current</h3>
                </Col>
            </Row>
            <Row className="justify-content-center">
                <Col  sm={12} lg={8}>
                    <ul className="font-weight-light">
                        <li>Application engineer for front-to-back office credit solution with international clientbase.</li>
                        <li>Created SQL scripts to repair and prevent future portfolio discrepancies with defensive programming.</li>
                        <li>Utilized XPath and Transact-SQL debugging queries to identify client and server errors in product code and XML response/request data and XSLTs.</li>
                        <li>Mapped and documented root cause assessments to decrease product defects.</li>
                        <li>Led daily standups to prioritize towards high severity implementation requests and fixes.</li>
                        <li>Advised and consulted clients on programming and architecture best practices.</li>
                    </ul>
                </Col>
            </Row>
            <Row className="justify-content-center">
                <Col sm={12} md={7} lg={5}>
                    <h1 >New Jersey Innovation Institute, NJ</h1>
                    <h2 className="font-weight-light">Project Assistant</h2>
                </Col>
                <Col sm={12} md={5} lg={5}>
                    <h3 className="font-weight-light font-italic text-md-right text-lg-right">Jun 2019 - Aug 2019</h3>
                </Col>
            </Row>
            <Row className="justify-content-center">
                <Col  sm={12} lg={8}>
                    <ul className="font-weight-light">
                        <li>Designed and developed project proposals to identify and utilize sources of internal innovation within Hackensack
                            Meridian Health’s hospital network, with potential to save millions on physician operations.</li>
                        <li>Conveyed and translated executive goals to in-house products to realize optimal pricing and marketing strategies.</li>
                        <li>Qualified and evaluated 30+ idea management programs for optimal internal and external usage.</li>
                    </ul>
                </Col>
            </Row>
        </Container>
    )
}

export default Experience;