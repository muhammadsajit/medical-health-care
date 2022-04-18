import React, { useState } from 'react';
import { Carousel } from 'react-bootstrap';
import banner1 from '../../../Images/Banner/banner1.png';
import banner2 from '../../../Images/Banner/banner2.jpg';
import banner3 from '../../../Images/Banner/banner3.png';
const Banner = () => {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };

    return (
         <Carousel activeIndex={index} onSelect={handleSelect}>
            <Carousel.Item>
                <img style={{height:"630px"}}
                    className="d-block w-100"
                    src={banner1}
                    alt="First slide"
                />
                <Carousel.Caption className='text-primary'>
                    <h3>Health Care part1</h3>
                    <p>Health care is delivered by health professionals and allied health fields.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img style={{height:"630px"}}
                    className="d-block w-100"
                    src={banner2}
                    alt="Second slide"
                />

                <Carousel.Caption className='text-primary'>
                    <h3>Health Care part2</h3>
                    <p>Health care or healthcare is the maintenance or improvement of health via the prevention, diagnosis, treatment, amelioration, or cure of disease, illness.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img  style={{height:"630px"}}
                    className="d-block w-100"
                    src={banner3}
                    alt="Third slide"
                />

                <Carousel.Caption className='text-primary'>
                    <h3>Health Care part3</h3>
                    <p>
                    Primary health care (PHC) addresses the majority of a person's health needs throughout their lifetime. 
                    </p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );




};

export default Banner;