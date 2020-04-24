import React from 'react';
import Navbar from './Navbar';

function Layout (props) {
    // conts children = props.choldren;
    return(
        <React.Fragment>
            <Navbar />
            {props.children}
        </React.Fragment>
    );
}

export default Layout;