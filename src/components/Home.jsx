import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Jumbotron, Grid, Row, Col, Image, Button} from 'react-bootstrap';
import './Home.css';

class Home extends Component {
    render() { 
        return (  
            <Grid>
                <Jumbotron>
                    <h2>Welcome to Blocklife</h2>
                    <p>This is a website using React, React-Bootstrap and React-Router</p>
                    <Link to="/about">
                        <Button bsStyle="primary">About</Button>
                    </Link>
                </Jumbotron>
                <Row className="show-grid text-center">
                    <Col xs={12} sm={4} className="person-wrapper">
                        <Image src="assets/person1.jpg" circle className="profile-pic" />
                        <h3>Jane</h3>
                        <p>I sincerely wish for you every possible joy life could bring. 
                            If you didn't have baby clouds, you wouldn't have big clouds. 
                            Now it's beginning to make a little sense. Life is too short to be alone, too precious. 
                            Share it with a friend.
                        </p>
                    </Col>
                    <Col xs={12} sm={4} className="person-wrapper">
                        <Image src="assets/person2.jpg" circle className="profile-pic" />
                        <h3>David</h3>
                        <p>Just let your mind wander and enjoy.
                             This should make you happy. 
                             Didn't you know you had that much power? 
                             You can move mountains. You can do anything. 
                             It just happens - whether or not you worried about it or tried to plan it.
                        </p>
                    </Col>
                    <Col xs={12} sm={4} className="person-wrapper">
                        <Image src="assets/person4.jpg" circle className="profile-pic" />
                        <h3>Jenifer</h3>
                        <p>I sincerely wish for you every possible joy life could bring. 
                            If you didn't have baby clouds, you wouldn't have big clouds. 
                            Now it's beginning to make a little sense. Life is too short to be alone, too precious. 
                            Share it with a friend.
                        </p>
                    </Col>
                </Row>
            </Grid>

        );
    }
}
 
export default Home;