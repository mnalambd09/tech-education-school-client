import React, { useEffect, useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import './Courses.css';
import Pdf from "react-to-pdf";

const ref = React.createRef();

const Courses = () => {
    const [Courses, setCourses] = useState([]);
    const myData = useLoaderData()
    console.log(myData)
    return (
        <div>
            <Pdf targetRef={ref} filename="code-example.pdf">
                {({ toPdf }) => <button onClick={toPdf} className="btn btn-success">Generate Pdf</button>}
            </Pdf>
            <div ref={ref}>
                <h1>{myData?.title}</h1>
                <div className='course-img2'><img src={myData?.image_url} alt="" /></div>
                <p>Details {myData?.details}</p>
                <Link to='/card'><button  className='btn btn-primary'>Buy Now</button></Link>
            </div>
        </div>
    );
};

export default Courses;