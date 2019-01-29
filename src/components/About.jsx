import React, { Component } from 'react';
import { Grid, Col, Image } from 'react-bootstrap';
import './About.css';

class About extends Component {
    render() { 
        return ( 
            <div>
              <Image src="assets/couple.jpg" className="header-image"/>
              <Grid>
                <Col xs={12} sm={8} smOffset={2}>
                    <Image src="assets/person1.jpg" className="about-profile-pic" rounded/>
                    <h3>Jane's journey</h3>
                    <p>
                        This is a happy place, little squirrels live here and play. 
                        You have to allow the paint to break to make it beautiful. 
                        Let's put some highlights on these little trees. The sun wouldn't forget them.
                    </p>
                    <p>
                        God gave you this gift of imagination. 
                        Use it. Learn when to stop. 
                        You have to make those little noises or it won't work. 
                        Use what happens naturally, don't fight it. But they're very easily killed. 
                        Clouds are delicate.
                    </p>
                    <p>
                        La- da- da- da- dah. Just be happy. Clouds are free. 
                        They just float around the sky all day and have fun.
                    </p>
                    <p>
                        You better get your coat out, this is going to be a cold painting. 
                        It's cold, but it's beautiful. There are no limits in this world.
                    </p>
                    <p>
                        Now then, let's play. We'll lay all these little funky little things in there.
                    </p>
                    <p>
                        You can't have light without dark. You can't know happiness unless you've known sorrow. 
                        Let's give him a friend too. 
                        Everybody needs a friend. 
                        You can create anything that makes you happy.
                    </p>
                    <p>
                        We'll put a happy little bush here. Maybe he has a little friend that lives right over here.
                        Isn't that fantastic? You can just push a little tree out of your brush like that. 
                        I spend a lot of time walking around in the woods and talking to trees, and squirrels, 
                        and little rabbits and stuff. 
                        Absolutely no pressure. You are just a whisper floating across a mountain.
                    </p>
                </Col>
              </Grid>
            </div>
        );
    }
}
 
export default About;