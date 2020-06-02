import React, { Component } from 'react';
import imgPro from '../../yeshi-5.jpg';
import Project from './Project/Project';
class Projects extends Component {
    render () {
        return (
                <Project projectImage={imgPro} title="Some title" desc = "Project Description" link="Project link"  />
        );
    }
}

export default Projects;