import React, { Component } from 'react';
import {Card, Button, Modal} from 'react-bootstrap';
import Radium from 'radium';

const style = {
    'width': '8rem',
    'textAlign': 'center',
    '@media (min-width: 600px)': {
        'width': '15rem'
    },
    'margin':'5px'
};

class Project extends Component {
    
    state = {
        show: false
    }

    showModal = () => this.setState({show:true});
    closeModal = () => this.setState({show:false});

    render() {
        return(
            <div style={style}>
                <Card bg='light'>
                    <Card.Img style={{width:'238px', height: '238px', objectFit: 'fill'}}variant="top" src={this.props.projectImage}/>
                    <Card.Header><Button variant="dark" onClick={this.showModal}>View</Button></Card.Header>
                    <Modal 
                        show={this.state.show} 
                        onHide={this.closeModal} 
                        centered>
                        <Modal.Header closeButton>
                            <Modal.Title>{this.props.title}</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>{this.props.desc}</Modal.Body>
                        <Modal.Footer>
                            <Button variant="secondary" onClick={this.closeModal}>Close</Button>
                            <Button variant="dark">{this.props.link}</Button>
                        </Modal.Footer>
                    </Modal>
                </Card>
            </div>
        );
    }
}

export default Radium(Project);