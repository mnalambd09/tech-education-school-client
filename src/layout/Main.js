import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Outlet } from 'react-router-dom';
import Courses from '../Components/Courses/Courses';
import Footer from '../Components/Footer/Footer';
import Header from '../Components/Header/Header';
import Sidebar from '../Components/Sidebar/Sidebar';
import './Main.css'
import './Main.css'

const Main = () => {
    return (
        <div>
            <Header></Header>
            <Container>
                <Row>
                    <Col lg="3" className='sidebar'>
                        <Sidebar></Sidebar>
                    </Col>
                    <Col lg="9" className='outlet'>
                        <Outlet></Outlet>
                    </Col>
                </Row>
            </Container>
            <Footer></Footer>
        </div>
    );
};

export default Main;