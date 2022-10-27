import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
    const [courses, setCourses] = useState([])
    useEffect(() => {
        fetch('https://tech-education-server.vercel.app/courses')
            .then(res => res.json())
            .then(data => setCourses(data))
    }, [])
    return (
        <div>
            <h1>This is Sidebar</h1>
            {
                courses.map(courses => <div className='mg-bottom' key={courses.id}>
                    <div className='course-content'>
                        <div className='course-title'><Link to={`/card/${courses.id}`}>{courses.title}</Link></div>

                    </div>
                </div>)
            }
        </div>
    );
};

export default Sidebar;