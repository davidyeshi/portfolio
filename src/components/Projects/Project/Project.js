import React from 'react';
import {Card, Button} from 'react-bootstrap';
import Radium from 'radium';

const style = {
    'width': '10rem',
    '@media (min-width: 500px)': {
        'width': '15rem'
    }
};

const project = (props) => (
    <div style={style}>
        <Card >
            <Card.Img variant="top" src={props.projectImage}/>
            <Card.Body>
                <Card.Title>{props.title}</Card.Title>
                <Card.Text>
                    {props.desc}
                </Card.Text>
                <Button variant="primary">{props.link}</Button>
            </Card.Body>
        </Card>
    </div>
)

export default Radium(project);