import React from 'react';
import Header from '../Pages/Shared/Header';
import Footer from '../Pages/Shared/Footer';
import { Outlet } from 'react-router-dom';
import { Col, Container, Row } from 'react-bootstrap';
import LeftNav from '../Pages/Shared/LeftNav';
import RighNav from '../Pages/Shared/RighNav';
import NavigationBar from '../Pages/Shared/NavigationBar';

const Main = () => {
    return (
        <div>
            <Header></Header>
            <NavigationBar></NavigationBar>
            <Container className='mt-4'>
                <Row>
                    <Col lg={3}><LeftNav></LeftNav>
                    </Col>
                    <Col lg={6}><Outlet></Outlet>
                    </Col>
                    <Col lg={3}><RighNav></RighNav>
                    </Col>
                </Row>
            </Container>
            <Footer></Footer>
        </div>
    );
};

export default Main;