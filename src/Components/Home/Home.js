import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Home.css'



const Home = () => {
    const [courses, setCourses] = useState([])
    useEffect(() => {
        fetch('https://tech-education-server.vercel.app/courses')
            .then(res => res.json())
            .then(data => setCourses(data))
    }, [])
    return (
        <div className=''>
            <Row>
                <Col className='row row-cols-1 row-cols-lg-3 g-2 g-lg-3'>
                    {
                        courses.map(courses => <div className='mg-bottom' key={courses.id}>
                            <div className='course-content'>
                                <div className='course-img'><img src={courses.thumbnail_url} alt="" /></div>
                                <div className='course-title'><Link to={`/courses/${courses.id}`}>{courses.title}</Link></div>
                                <h3>Price : ${courses.price}</h3>
                                <Link to={`/courses/${courses.id}`}><button className='btn btn-primary'>View Details</button></Link>
                            </div>
                        </div>)
                    }
                </Col>
            </Row>


        </div>
    );
};

export default Home;