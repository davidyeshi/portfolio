import React, { Component } from 'react';
import imgPro from '../../yeshi-5.jpg';
import Project from './Project/Project';
import classes from './Projects.module.css';
import { Button, Modal, Form } from 'react-bootstrap';
import axios from '../../axios-portfolio';

class Projects extends Component {
    constructor() {
        super();
        // Initialize Ref
        this.TitleInput = React.createRef();
        this.DescInput = React.createRef();
        this.WebsiteInput = React.createRef();
        this.PasswordInput = React.createRef();
        this.ImageInput = React.createRef();
    }
    state = {
        show: false,
        imgRead: false
    }

    showModal = () => this.setState({show:true});
    closeModal = () => this.setState({show:false});

    getBase64(file, cb) {
        let reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = function() {
            console.log('b64: '+reader.result);
            cb(reader.result);
        };
        reader.onerror = function (error) {
            console.log('Error: ', error);
        };
    }

    projectHandler = (event) => {
        event.preventDefault();

        const imagePath = this.ImageInput.current.files[0];
        
        let projectImageBase64 = '';
        this.getBase64(imagePath, (result) => {
            console.log('Result: '+result)
            projectImageBase64 = result;
            console.log('base64: ' + projectImageBase64);

            const formData = {
                title: this.TitleInput.current.value,
                desc: this.DescInput.current.value,
                website: this.WebsiteInput.current.value,
                password: this.PasswordInput.current.value,
                projectImg: projectImageBase64
            }

            console.log('Sending data');
            axios.post('/projects.json', formData) 
                .then(res=>{
                    this.closeModal();
                    console.log(res);
                })
                .catch(err => {
                    console.log(err);
                    alert(err);
                });        
        });
    }

    render () {
        return (
            <React.Fragment>
            <div className={classes.Projects}>
                <Project projectImage={imgPro} eventKey="0" title="Some title" desc = "Project DescriptionProject DescriptionProject DescriptionProject DescriptionProject DescriptionProject DescriptionProject DescriptionProject DescriptionProject DescriptionProject DescriptionProject Description" link="Project link"  />
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
                            <Form.Control 
                                ref={this.TitleInput}
                                type="text"
                                placeholder="Enter project title" 
                                required/>
                        </Form.Group>
                        <Form.Group controlId="projectDesc">
                            <Form.Label>Project Description</Form.Label>
                            <Form.Control 
                                ref={this.DescInput}
                                as="textarea" 
                                rows="3" 
                                placeholder="Enter project Description" 
                                required/>
                        </Form.Group>
                        <Form.Group controlId="projectLink">
                            <Form.Label>Project Website</Form.Label>
                            <Form.Control 
                                ref={this.WebsiteInput}
                                type="text" 
                                placeholder="Enter project website" 
                                required/>
                        </Form.Group>
                        <Form.Group>
                            <Form.File ref={this.ImageInput} id="projectImage" label="Upload project image" />
                        </Form.Group>
                        <Form.Group controlId="formPassword">
                            <Form.Label>Admin Password</Form.Label>
                            <Form.Control 
                                ref={this.PasswordInput}
                                type="password" 
                                placeholder="Password" 
                                required/>
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