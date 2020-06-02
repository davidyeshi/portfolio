import React, { Component } from 'react';
import imgPro from '../../yeshi-5.jpg';
import Project from './Project/Project';
import classes from './Projects.module.css';

class Projects extends Component {
    render () {
        return (
            <div className={classes.Projects}>
                <Project projectImage={imgPro} eventKey="0" title="Some title" desc = "Project DescriptionProject DescriptionProject DescriptionProject DescriptionProject DescriptionProject DescriptionProject DescriptionProject DescriptionProject DescriptionProject DescriptionProject Description" link="Project link"  />
                <Project projectImage={imgPro} eventKey="1" title="Some title" desc = "Project DescriptionProject DescriptionProject DescriptionProject DescriptionProject DescriptionProject DescriptionProject DescriptionProject DescriptionProject DescriptionProject DescriptionProject Description" link="Project link"  />
                <Project projectImage={imgPro} eventKey="2" title="Some title" desc = "Project DescriptionProject DescriptionProject DescriptionProject DescriptionProject DescriptionProject DescriptionProject DescriptionProject DescriptionProject DescriptionProject DescriptionProject Description" link="Project link"  />
                <Project projectImage={imgPro} eventKey="3" title="Some title" desc = "Project DescriptionProject DescriptionProject DescriptionProject DescriptionProject DescriptionProject DescriptionProject DescriptionProject DescriptionProject DescriptionProject DescriptionProject Description" link="Project link"  />
                <Project projectImage={imgPro} eventKey="4" title="Some title" desc = "Project DescriptionProject DescriptionProject DescriptionProject DescriptionProject DescriptionProject DescriptionProject DescriptionProject DescriptionProject DescriptionProject DescriptionProject Description" link="Project link"  />
                <Project projectImage={imgPro} eventKey="5" title="Some title" desc = "Project DescriptionProject DescriptionProject DescriptionProject DescriptionProject DescriptionProject DescriptionProject DescriptionProject DescriptionProject DescriptionProject DescriptionProject Description" link="Project link"  />
            </div>
        );
    }
}

export default Projects;