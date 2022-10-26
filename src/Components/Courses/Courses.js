import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Courses.css'

const Courses = () => {
    const [Courses, setCourses] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/courses')
        .then(res => res.json())
        .then(data => setCourses(data))
    } ,[])
    return (
        <div>
            <h1 className='text-center text-white'>All Courses {Courses.length}</h1>
            {
                Courses.map(course => <p key={course.id}>
                    <div className='course-content'>
                    <div className='course-img'><img src={course.thumbnail_url} alt="" /></div>
                    <div className='course-title'><Link>{course.title}</Link></div>
                    </div>
                </p>)
            }
        </div>
    );
};

export default Courses;