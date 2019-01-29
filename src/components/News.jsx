import React, { Component } from 'react';
import { Grid, Row, Col, Image} from 'react-bootstrap';
import './News.css';

class News extends Component {
    render() { 
        return ( 
            <React.Fragment>
                <Image src="assets/mountain.jpg" className="header-image"/>
                <Grid>
                    <h2>News</h2>
                    <Row>
                        <Col  xs={12} sm={8}>
                            <p>
                                This is a happy place, little squirrels live here and play. 
                                You have to allow the paint to break to make it beautiful. 
                                Let's put some highlights on these little trees. 
                                The sun wouldn't forget them.
                            </p>
                            <p>
                                God gave you this gift of imagination. 
                                Use it. Learn when to stop. 
                                You have to make those little noises or it won't work. 
                                Use what happens naturally, don't fight it. But they're very easily killed. 
                                Clouds are delicate.
                            </p>
                            <p>
                                La- da- da- da- dah. Just be happy. 
                                Clouds are free. 
                                They just float around the sky all day and have fun.
                            </p>
                            <p>
                                You better get your coat out, this is going to be a cold painting. 
                                It's cold, but it's beautiful. There are no limits in this world.
                            </p>
                            <p>
                                Now then, let's play. 
                                We'll lay all these little funky little things in there.
                            </p>
                            <p>
                                You can't have light without dark. You can't know happiness unless you've known sorrow. 
                                Let's give him a friend too. Everybody needs a friend. You can create anything that makes you happy.
                            </p>
                        </Col>
                        <Col xs={12} sm={4} >
                            <Image src="assets/couple.jpg" className="sidebar-image"/>
                            <p>
                                Only think about one thing at a time. Don't get greedy. 
                                You don't have to spend all your time thinking about what you're doing, you just let it happen. 
                                Don't fight it, use what happens. I started painting as a hobby when I was little. 
                                I didn't know I had any talent. I believe talent is just a pursued interest. 
                                Anybody can do what I do. That's a son of a gun of a cloud.
                            </p>
                        </Col>
                    </Row>
                </Grid>
            </React.Fragment>
        );
    }
}
 
export default News;