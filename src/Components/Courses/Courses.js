import React, { useEffect, useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import './Courses.css'

const Courses = () => {
    const [Courses, setCourses] = useState([]);
    const myData = useLoaderData()
    console.log(myData)
    // useEffect(() => {
    //     fetch('http://localhost:5000/courses')
    //     .then(res => res.json())
    //     .then(data => setCourses(data))
    // } ,[])
    return (
        <div>
            <h1 className='text-center text-white'>All Courses {Courses.length}</h1>
            {
                Courses.map(courses => <div className='mg-bottom' key={courses.id}>
                    <div className='course-content'>
                    {/* <div className='course-img'><img src={courses.thumbnail_url} alt="" /></div> */}
                    <div className='course-title'><Link to={`/courses/${courses.id}`}>{courses.title}</Link></div>
                    </div>
                </div>)
            }
        </div>
    );
};

export default Courses;