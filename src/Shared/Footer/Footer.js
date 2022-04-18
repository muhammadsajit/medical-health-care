import React from 'react';
import './Footer.css'

const Footer = () => {
    const today =new Date();
    const year = today.getFullYear()
    return (
       <div >
            <footer className='text-center footer '>
                <p>Health Care For Human</p>
        <p><small>copyright &copy; {year}</small></p>
    </footer>
       </div>
    );
};

export default Footer;