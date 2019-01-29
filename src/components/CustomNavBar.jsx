import React, { Component } from 'react';
import { Navbar, Nav, NavItem} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './CustomNavBar.css';

class CustomNavBar extends Component {
    render() { 
        return (  
            <Navbar default collapseOnSelect>
                <Navbar.Header>
                    <Navbar.Brand>
                        <Link to="/">LifeChain</Link>
                    </Navbar.Brand>
                    <Navbar.Toggle/>
                </Navbar.Header>
                <Navbar.Collapse>
                    <Nav pullRight>
                        <NavItem eventKey={1} href='/'>
                            Home
                        </NavItem>
                        <NavItem eventKey={2} href='/about'>
                            About
                        </NavItem>
                        <NavItem eventKey={3} href='/news'>
                            News
                        </NavItem>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        );
    }
}
 
export default CustomNavBar;