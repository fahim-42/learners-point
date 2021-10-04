import React from 'react';
import './Course.css';

const Course = (props) => {
    const { image, course, level, price, duration, seat } = props.course;
    return (
        <div className="item border border-2 border-dark rounded rounded-3 m-3 px-3">
            <img style={{height: "200px"}} className="mt-4 img-fluid border rounded-3" src={image} alt="" />
            <h2 className="mt-3 fw-bold fst-italic">{course}</h2>
            <p className="fs-5 fst-italic">Difficulty: {level}</p>
            <h5 className="mb-3 fst-italic">Price: {price}tk</h5>
            <div className="d-flex">
                <p className="fw-normal fw-bolder ps-4">Time: {duration}</p>
                <p className="ms-auto fw-normal fw-bolder pe-4">Seat available: {seat}</p>
            </div>
        </div>
    );
};

export default Course;