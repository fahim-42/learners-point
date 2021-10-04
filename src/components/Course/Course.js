import React from 'react';

const Course = (props) => {
    console.log(props.course);
    const { course, level, price, duration, seat } = props.course;
    return (
        <div className="border border-3 border-dark rounded rounded-3 bg-warning m-2 px-3">
            <h2 className="mt-2 fw-bold fst-italic">{course}</h2>
            <p className="fs-5 fst-italic">Difficulty: {level}</p>
            <h5 className="mb-3 fst-italic">Price: {price}tk</h5>
            <div className="d-flex">
                <p className="fw-normal fw-bolder">Time: {duration}</p>
                <p className="ms-auto fw-normal fw-bolder">Seat available: {seat}</p>
            </div>
        </div>
    );
};

export default Course;