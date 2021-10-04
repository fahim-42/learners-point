import React from 'react';
import ielts from '../../images/ielts.png';

const Ielts = () => {
    return (
        <div>
            <div className="bg-info fw-bolder py-2">
                <h2>What is <span className="text-danger fst-italic">IELTS</span> ?</h2>
                <h5>Why would you need it ?</h5>
            </div>
            <div className="d-flex">
                <div className="ms-5 col-lg-8">
                    <h5 className="text-start my-3">Well, IELTS stands for <span className="text-warning fst-italic fw-bold">International English Language Testing System.</span></h5>
                    <p className="text-start">IELTS is designed to assess the language ability of candidates who need to study or work where English is used as the language of communication. IELTS is required for entry to university in the UK and other countries.</p>
                    <p className="text-start">It helps you study, live or work almost anywhere around the world. More than 9,000 organizations worldwide recognize the IELTS certification, including government, academic and employment institutions.</p>
                </div>
                <img className="col-lg-3 img-fluid m-auto" src={ielts} alt="" />
            </div>
        </div>
    );
};

export default Ielts;