import React, { useContext } from 'react';
import logo from '../../../src/assets/logo.png';
import moment from 'moment';
import { Button, Container } from 'react-bootstrap';
import Marquee from "react-fast-marquee";



const Header = () => {
    return (
        <Container className='mt-4'>
            <div className='text-center'>
                <img src={logo} alt="" />
                <p><small>Journalism Without Fear or Favour</small></p>
                <p>{moment().format("dddd, MMMM Do YYYY, h:mm:ss A")
                }</p>
            </div>
            <div className='d-flex bg-info p-2 rounded-1'>
                <Button variant="danger">Latest</Button>
                <Marquee>
                    I can be a React component, multiple React components, or just some text.
                </Marquee>
            </div>

        </Container>
    );
};

export default Header;