import React from 'react';
import "./styles/Home.css";
import { Link } from 'react-router-dom'
import confLogo from '../images/platziconf-logo.svg';
import astronauts from '../images/astronauts.svg';


class Home extends React.Component {
    render() {
        return(
            <React.Fragment>
                <div className="Home">
                    <div className="container ">
                        <div className="row">
                            <div className="Home__col col-12 col-md-4" >
                                <img src={confLogo} alt="Conf Logo" />
                                <h1>Print Your Badges</h1>
                                <p>The easiest way to manage your <br/> conference</p>

                                <Link className="btn btn-primary" to='/badges'>
                                    Start Now
                                </Link>
                            </div>

                            <div className="Home__col col-12 col-md-4">
                                <img src={astronauts} alt="Astronauts" />
                            </div>
                        </div>
                    </div>
                </div>
            </React.Fragment>  
        );
    }
}

export default Home;