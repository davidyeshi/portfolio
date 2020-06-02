import React, { Component } from 'react';
import { Tabs, Tab } from 'react-bootstrap';
import classes from './Layout.module.css';
import Header from '../../components/Navigation/Header/Header';
import About from '../../components/About/About';

class Layout extends Component {

    render() {
       return(
           <div className = {classes.Layout}>
                    <Header/>
                    <div>
                    <Tabs defaultActiveKey="home" id="uncontrolled-tab-example">
                        <Tab eventKey="home" title="Home">
                        <div className={classes.Outline}><About /></div>
                        </Tab>
                        <Tab eventKey="profile" title="Profile">
                        <div className={classes.Outline}>Profile</div>
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