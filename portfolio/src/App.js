import React from 'react';

import Home from './Components/Home.js'
import Projects from './Components/Projects.js'
import Resume from './Components/Resume.js'
import About from './Components/About.js'

import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

const App = props => {

    return (

        <Router>
        <Navbar expand="lg" className='nav-bar'>
        <Navbar.Brand><h3>Meredith Bashert</h3><h5>Programmer Extraordinaire</h5><h5><a href="mailto:meredithbashert@gmail.com">meredithbashert@gmail.com</a></h5></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
        <Nav className="topBottomBordersOut">
        <Link to="/" className='navlink'>Home</Link>
        <Link to="/projects" className='navlink'>Projects</Link>
        <Link to="/resumes" className='navlink'>Resume</Link>
        <Link to="/about" className='navlink'>About Me</Link>
        </Nav>
        </Navbar.Collapse>
        </Navbar>

        <Switch>
        <Route exact path="/">
        <Home/>
        </Route>

        <Route path="/projects">
        <Projects/>
        </Route>

        <Route path="/resumes">
        <Resume/>
        </Route>

        <Route path="/about">
        <About/>
        </Route>

        </Switch>

        <div className='footer'>
            <h6>Built with ReactJS<br/>
                © 2020 Meredith Bashert – All rights reserved
            </h6>
            <div>
                <h2 className='social'><a href = 'https://www.linkedin.com/in/meredith-bashert/' target='_blank'><ion-icon name="logo-linkedin"></ion-icon></a>
                <a href = 'https://github.com/merbashert' target='_blank'><ion-icon name="logo-github"></ion-icon></a></h2>
            </div>
        </div>
        </Router>
    )
}


export default App;
