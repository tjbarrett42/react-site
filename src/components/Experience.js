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
                        <li>Implemented Javascript SalesForce database search feature within proprietary Chrome extension increasing documentation cross-referencing productivity for 30 engineers, approved and managed through GitLab.</li>
                        <li>Wrote, tested, and deployed SQL scripts for client production environments to resolve trade data inconsistencies with back office providers.</li>
                        <li>Debugged product XSLT edge cases against custom client implementations to document defects and translate into consulting requests.</li>
                        <li>Managed product expectations and functionality for client base of over 50 different hedge funds, firms, and investment banks through email and phone.</li>
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
                        <li>Created the project prioritization system for NJII's largest innovation product, a platform to encourage and support physician incubation of high ROI solutions in Hackensack Meridian Health’s internal workforce, securing a \$1,000,000 contract.</li>
                        <li>Wrote business requirement documents and statements of work for product implementation.</li>
                        <li>Negotiated directly with client executives to ensure operation within project budgets.</li>
                    </ul>
                </Col>
            </Row>
        </Container>
    )
}

export default Experience;