import React from 'react';
import about from '../../images/about.jpg';

const About = () => {
    return (
        <div className="col-lg-6 m-auto rounded-3 my-5">
            <img src={about} alt="" />
            <div className="bg-secondary m-0">
                <h2 className="bg-dark py-2">
                    <span className="text-warning fst-italic fw-bolder">Learner's </span>
                    <span className="text-info fst-italic fw-bolder">Point</span>
                </h2>
                <div className="fw-bold">
                    <p className="text-white">This is the best in town institute for learning English efficiently. Our expert trainer helps you learn English easily. We provide extra care for weak learners and provide financial support for poor but brilliant student.</p>
                    <h6 className="text-white pb-2">We offer <span className="text-warning">"Batch-Topper"</span> an opportunity to work with us.</h6>
                </div>
            </div>
        </div>
    );
};

export default About;