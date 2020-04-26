import React from 'react'
import './styles/Loading.css';
import loadingGif from '../images/Loading.gif';

function PageLoading() {
    return (
        <React.Fragment>
            <div className="Loading">
                <img src={loadingGif} alt="Loading"/>
            </div>
        </React.Fragment>
    );
}

export default PageLoading;