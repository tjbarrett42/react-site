import logo from './logo.svg';
import './App.css';
import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link} from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Footer from "./components/Footer";
import MainHero from "./components/MainHero";
import HomePage from "./pages/HomePage";
import ProjectsPage from "./pages/ProjectsPage";
import ExperiencePage from "./pages/ExperiencePage";
import ResumePage from "./pages/ResumePage";
import ContactPage from "./pages/ContactPage";

const emoji = require("emoji-dictionary");

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: 'Timothy Barrett',
            headerLinks: [
                { title: 'home', path: '/'},
                { title: 'projects', path: '/projects'},
                { title: 'experience', path: '/experience'},
                { title: 'resume', path: '/resume'},
                { title: 'contact', path: '/contact'}
            ],
            home: {
                title: 'about',
                emoji: '',
                subTitle: '',
                text: ''
            },
            projects: {
                title: 'projects',
                emoji: '',
                subTitle: '',
                text: ''
            },
            experience: {
                title: 'work experience'
            },
            resume: {
                title: 'resume',
                subTitle: 'grab the latest version below:'
            },
            contact: {
                title: 'contact',
                emoji: emoji.getUnicode("wave").toString(),
                subTitle: 'get in touch:'
            }
        }
    }

    render() {
        //Would put navbar in container, but freaks out, likely a DOM issue
        return (
            <Router>
                    <Container className="bg-color d-flex flex-column position-relative min-vh-100 p-0" fluid={true} >
                        <MainHero></MainHero>
                        <Navbar bg="transparent" variant="light" className="">
                            <Container className="justify-content-center">
                                <Nav className="">
                                    <Link className="nav-link" to="/">about</Link>
                                    <Link className="nav-link" to="/projects">projects</Link>
                                    <Link className="nav-link" to="/experience">experience</Link>
                                    <Link variant="outline-info" className="nav-link" to="/resume">resume</Link>
                                    <Link className="nav-link" to="/contact">contact</Link>
                                </Nav>
                            </Container>
                        </Navbar>

                        {/*<Navbar collapseOnSelect expand="lg">*/}
                        {/*    /!*<Navbar.Brand>Timothy Barrett</Navbar.Brand>*!/*/}
                        {/*    <Navbar.Toggle className="border-0 " aria-controls="navbar-toggle"/>*/}
                        {/*    <Navbar.Collapse id="navbar-toggle ">*/}
                        {/*        <Nav className="m-auto nav-color">*/}
                        {/*            <Link className="nav-link" to="/">Home</Link>*/}
                        {/*            <Link className="nav-link" to="/projects">Projects</Link>*/}
                        {/*            <Link className="nav-link" to="/experience">Experience</Link>*/}
                        {/*            <Link variant="outline-info" className="nav-link" to="/resume">Resume</Link>*/}
                        {/*            <Link className="nav-link" to="/contact">Contact</Link>*/}
                        {/*        </Nav>*/}
                        {/*    </Navbar.Collapse>*/}
                        {/*</Navbar>*/}

                        <Route path="/" exact render={() => <HomePage title={this.state.home.title} subTitle={this.state.home.subTitle} emoji={this.state.home.emoji} text={this.state.home.text}/>}/>
                        <Route path="/projects" render={() => <ProjectsPage title={this.state.projects.title} subTitle={this.state.projects.subTitle}/>}/>
                        <Route path="/experience" render={() => <ExperiencePage title={this.state.experience.title} /> } />
                        <Route path="/resume" render={() => <ResumePage title={this.state.resume.title} subTitle={this.state.resume.subTitle} /> } />
                        <Route path="/contact" render={() => <ContactPage title={this.state.contact.title} subTitle={this.state.contact.subTitle} emoji={this.state.contact.emoji}/>}/>

                    <Footer />

                </Container>
            </Router>
        );
    }
}
export default App;
