import React, {Component} from 'react';
import './about.css'

class About extends Component {
    render() {
        return (
            <div className="about-section paddingTB60 gray-bg">
                <div className="container">
                    <div className="row">
                        <div className="col-md-7 col-sm-6">
                            <div className="about-title clearfix">
                                <h1>About <span>Brain Master</span></h1>
                                <h3>Lorem ipsum dolor sit amet </h3>
                                <p className="about-paddingB">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec aliquet dolor libero, eget venenatis mauris finibus dictum. Vestibulum quis elit eget neque porttitor congue non sit amet dolor. Proin pretium purus a lorem ornare </p>
                                <p>sed lobortis pulvinar. Integer laoreet mi id eros porta euismod. Suspendisse potenti. Nulla eros mauris, convallis et sem tempus, viverra hendrerit sapien</p>
                                <div className="about-icons">
                                    <ul>
                                        <li><a href="https://www.facebook.com/" target="_blank"><i id="social-fb" className="fa fa-facebook-square fa-3x social" /></a> </li>
                                        <li><a href="https://linkedin.com/" target="_blank"><i id="social-tw" className="fa fa-linkedin-square fa-3x social" /></a> </li>
                                        <li> <a href="https://www.youtube.com/" target="_blank"><i id="social-gp" className="fa fa-youtube-square fa-3x social" /></a> </li>
                                        <li> <a href="https://mail.google.com" target="_blank"><i id="social-em" className="fa fa-envelope-square fa-3x social" /></a> </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default About;