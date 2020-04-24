import React from 'react';
import "./styles/NotFound.css";
import notFound from '../images/404.gif';

function NotFound() {
    return(
        <React.Fragment>
            <div className="notfound">
                <img src={notFound} alt="Not Found" />
                <h1>404: Not Found</h1>
            </div>
        </React.Fragment>
    );
}

export default NotFound;