import React from 'react';
import './Contact.css';
import TwitterIcon from '@material-ui/icons/Twitter';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import FacebookIcon from '@material-ui/icons//Facebook';

const Contact = () => {
    return (
        <div className='contact' id="contact">
            <div>
                <div className='contact--title'>How can we help?</div>
                <div>Start a project</div>
                <div>Register for an event</div>
                <div>Find open job positions</div>
            </div>
            <div>
                <div className='contact--title'>About us</div>
                <div>Who we are</div>
                <div>Our serives</div>
                <div>Our locations</div>
            </div>
            <div>
                <div className='contact--title'>Contact</div>
                <div>Our address</div>
                <div>Our media</div>
                <TwitterIcon />
                <LinkedInIcon />
                <FacebookIcon />

            </div>
        </div>
    )
}

export default Contact;
