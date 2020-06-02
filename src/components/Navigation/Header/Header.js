import React from 'react';

import classes from './Header.module.css';


const header = (props) => {
    return(
        <header className={classes.Header}>
            <div>
                <p className = {classes.Title}>David Lalrinawma</p>
                <p className = {classes.Details}>Software Engineer</p>
            </div>
        </header>
    );
}

export default header;