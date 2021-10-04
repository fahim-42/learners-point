import React, { useEffect, useState } from 'react';
import { Carousel } from 'react-bootstrap';
import banner1 from '../../images/banner1.jpg';
import banner2 from '../../images/banner2.jpg';
import banner3 from '../../images/banner3.webp';
import Course from '../Course/Course';
import './Home.css';

const Home = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('./courses.JSON')
            .then(res => res.json())
            .then(data => setServices(data));
    }, [])
    return (
        <div>
            <Carousel>
                <Carousel.Item>
                    <img style={{ height: "600px" }}
                        className="d-block w-100"
                        src={banner1}
                        alt="First slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img style={{ height: "600px" }}
                        className="d-block w-100"
                        src={banner2}
                        alt="Second slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img style={{ height: "600px" }}
                        className="d-block w-100"
                        src={banner3}
                        alt="Third slide"
                    />
                </Carousel.Item>
            </Carousel>

            <div className="main-body">
                <h3 className="bg-primary p-3 text-white m-0 fw-bolder fst-italic">Our Services</h3>
                <div className="services col-lg-10 m-auto">
                    {
                        services.slice(0, 4).map(service => <Course
                            key={service.id}
                            course={service}></Course>)
                    }
                </div>
            </div>


        </div>
    );
};

export default Home;