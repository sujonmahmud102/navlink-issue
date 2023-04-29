import React from 'react';
import { Button, ListGroup } from 'react-bootstrap';
import { FaGoogle, FaGithub, FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';
import QZone from './QZone';


const RighNav = () => {
    return (
        <div>
            <h4>Login With</h4>

            <Button variant="outline-primary w-100 mb-2"><FaGoogle /> Login with Google</Button>
            <br />
            <Button variant="outline-secondary w-100 mb-4"><FaGithub /> Login with Github</Button>
            <div className='mb-4'>
                <h4>Find Us On</h4>
                <ListGroup>
                    <ListGroup.Item><FaFacebook /> Facebook</ListGroup.Item>
                    <ListGroup.Item><FaTwitter /> Twitter</ListGroup.Item>
                    <ListGroup.Item><FaInstagram /> Instagram</ListGroup.Item>
                </ListGroup>
            </div>
            <QZone></QZone>
        </div>
    );
};

export default RighNav;