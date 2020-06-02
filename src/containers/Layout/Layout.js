import React, { Component } from 'react';
import { Tabs, Tab } from 'react-bootstrap';
import classes from './Layout.module.css';
import Header from '../../components/Navigation/Header/Header';
import Profile from '../../components/Profile/Profile';

class Layout extends Component {

    render() {
       return(
           <div className = {classes.Layout}>
                    <Header/>
                    <div className={classes.Subhead}>
                        <Tabs defaultActiveKey="profile" id="uncontrolled-tab-example">
                            <Tab eventKey="profile" title="Profile">
                            <div className={classes.Outline}><Profile /></div>
                            </Tab>
                            <Tab eventKey="projects" title="Projects">
                            <div className={classes.Outline}>Projects</div>
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
       );
    }
}

export default Layout;