/**
 * Created by benpurslow on 07/07/2017.
 */
import React from 'react'
import {Link} from "react-router-dom";

class Footer extends React.Component {
    // Footer component to display simple static content

    render() {
        return (
            <footer className="footerContainer">
                <section className="footer">
                    <div className="contactUs">
                        <Link to={'/contact'}>
                            Contact Us
                        </Link>
                    </div>
                    <div className="careers">
                        <Link to={'/careers'}>
                            Careers
                        </Link>
                    </div>
                </section>
            </footer>
        )
    }
}

export default Footer;