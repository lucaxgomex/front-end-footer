import React, { Component } from 'react';
//import {Link} from 'react-router-dom';
import "./style.css";
import Twitter from '../../assets/twitter.png';
import Instagram from '../../assets/Vector.png';

class Footer extends Component {
	render() {
		return (
			<div id="footer">

				<div id="group-1">
				    <h2>Siga-nos</h2>
				    <div className="contact">
	                    <img src={Instagram} className="vector-imf" alt="Instagram log"></img>
	                    <a href="instagram.com/">@pet&gatô</a>
	                </div>

	                <div className="contact">
	                    <img src={Twitter} className="twitter-img" alt="Twitter log"></img>

	                    <a href="twitter.com/">@pet&gatô</a>
	                </div>
                </div>

                <div id="group-2">
                	
                </div>

                <div id="group-3">
                </div>
			</div>
		);
	}
}

export default Footer;