import React, { Component } from 'react';
import imgPro from '../../yeshi-5.jpg';
import Project from './Project/Project';
import classes from './Projects.module.css';
import { Button, Modal, Form } from 'react-bootstrap';

class Projects extends Component {
    state = {
        show: false,
        projects: {
            title: '',
            description: '',
            website: '',
            image: '',
            password: ''
        }
    }

    showModal = () => this.setState({show:true});
    closeModal = () => this.setState({show:false});

    projectHandler = (event) => {
        event.preventDefault();
        // event.persist();
        console.log(event)
    }

    render () {
        return (
            <React.Fragment>
            <div className={classes.Projects}>
                <Project projectImage={imgPro} eventKey="0" title="Some title" desc = "Project DescriptionProject DescriptionProject DescriptionProject DescriptionProject DescriptionProject DescriptionProject DescriptionProject DescriptionProject DescriptionProject DescriptionProject Description" link="Project link"  />
                <Project projectImage={imgPro} eventKey="1" title="Some title" desc = "Project DescriptionProject DescriptionProject DescriptionProject DescriptionProject DescriptionProject DescriptionProject DescriptionProject DescriptionProject DescriptionProject DescriptionProject Description" link="Project link"  />
                <Project projectImage={imgPro} eventKey="2" title="Some title" desc = "Project DescriptionProject DescriptionProject DescriptionProject DescriptionProject DescriptionProject DescriptionProject DescriptionProject DescriptionProject DescriptionProject DescriptionProject Description" link="Project link"  />
                <Project projectImage={imgPro} eventKey="3" title="Some title" desc = "Project DescriptionProject DescriptionProject DescriptionProject DescriptionProject DescriptionProject DescriptionProject DescriptionProject DescriptionProject DescriptionProject DescriptionProject Description" link="Project link"  />
                <Project projectImage={imgPro} eventKey="4" title="Some title" desc = "Project DescriptionProject DescriptionProject DescriptionProject DescriptionProject DescriptionProject DescriptionProject DescriptionProject DescriptionProject DescriptionProject DescriptionProject Description" link="Project link"  />
                <Project projectImage={imgPro} eventKey="5" title="Some title" desc = "Project DescriptionProject DescriptionProject DescriptionProject DescriptionProject DescriptionProject DescriptionProject DescriptionProject DescriptionProject DescriptionProject DescriptionProject Description" link="Project link"  />
            </div>
            <div style={{textAlign:'center'}}>
            <Button variant="secondary" onClick={this.showModal}>Add New Project</Button>
            <Modal 
                show={this.state.show} 
                onHide={this.closeModal} 
                centered>
                <Modal.Header closeButton>
                    <Modal.Title>Enter New Project</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form onSubmit={this.projectHandler}>
                        <Form.Group controlId="projectTitle">
                            <Form.Label>Project Title</Form.Label>
                            <Form.Control type="text" placeholder="Enter project title" />
                        </Form.Group>
                        <Form.Group controlId="projectDesc">
                            <Form.Label>Project Description</Form.Label>
                            <Form.Control as="textarea" rows="3" placeholder="Enter project Description" />
                        </Form.Group>
                        <Form.Group controlId="projectLink">
                            <Form.Label>Project Website</Form.Label>
                            <Form.Control type="text" placeholder="Enter project website" />
                        </Form.Group>
                        <Form.Group>
                            <Form.File id="projectImage" label="Upload project image" />
                        </Form.Group>
                        <Form.Group controlId="formPassword">
                            <Form.Label>Admin Password</Form.Label>
                            <Form.Control type="password" placeholder="Password" />
                        </Form.Group>
                        <Button variant="dark" type="submit">Submit</Button>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={this.closeModal}>Close</Button>
                </Modal.Footer>
            </Modal>
        </div>
        </React.Fragment>
        );
    }
}

export default Projects;