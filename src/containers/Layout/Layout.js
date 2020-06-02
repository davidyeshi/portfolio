import React, { Component } from 'react';
import { Tabs, Tab } from 'react-bootstrap';
import classes from './Layout.module.css';
import Radium, {StyleRoot} from 'radium';

import Header from '../../components/Navigation/Header/Header';
import Profile from '../../components/Profile/Profile';
import Projects from '../../components/Projects/Projects';

class Layout extends Component {

    render() {
       return(
           <StyleRoot>
           <div className = {classes.Layout}>
                    <Header/>
                    <div className={classes.Subhead}>
                        <Tabs defaultActiveKey="projects" id="uncontrolled-tab-example">
                            <Tab eventKey="profile" title="Profile">
                            <div className={classes.Outline}><Profile /></div>
                            </Tab>
                            <Tab eventKey="projects" title="Projects">
                            <div className={classes.Outline}><Projects /></div>
                            </Tab>
                            <Tab eventKey="experience" title="Experience">
                            <div className={classes.Outline}>Experience</div>
                            </Tab>
                            <Tab eventKey="contact" title="Contact">
                            <div className={classes.Outline}>Contact</div>
                            </Tab>
                        </Tabs>
                    </div>
           </div>
           </StyleRoot>
       );
    }
}

export default Radium(Layout);