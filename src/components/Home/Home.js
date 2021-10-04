import React from 'react';
import { Carousel } from 'react-bootstrap';
import banner1 from '../../images/banner1.jpg';
import banner2 from '../../images/banner2.jpg';
import banner3 from '../../images/banner3.webp';
import Services from '../Services/Services';
import './Home.css';

const Home = (props) => {
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

            <h3 className="bg-primary p-3 text-white m-0 fw-bolder fst-italic">Our Services</h3>
            <div className="main-body">
                <Services></Services>
            </div>


        </div>
    );
};

export default Home;