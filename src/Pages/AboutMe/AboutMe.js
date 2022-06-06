import React from 'react';
import profile from '../../Images/profile.png';
import './AboutMe.css'

const AboutMe = () => {
    return (
        <div>
            <h1 className='text-center text-primary'>About me</h1>
            <div className='profile'>
                <img style={{height:"400px"}} className='w-25 mx-auto d-block' src={profile} alt="" />
                <h1 className='text-center text-primary'>Name:Sayma Akter</h1>
                <p className='ps-5'><span className="goal">My goal</span>:As a Web Developer,the main objective when working as a developer is to be productive and deliver value to the company.As a developer or a CTO,the aim is to build practical application that will be 100% successfull.To achieve this specific goals need to be set,Which include:Enhanching networking Skills</p>
            </div>
        </div>
    );
};

export default AboutMe;