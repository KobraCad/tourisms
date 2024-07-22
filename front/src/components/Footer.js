// Footer.js
import React from 'react';
import Log from './Assets/logoTravel.jpg'
import './Footer.css'; // Import the CSS file for styling

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-container">
                <div className="footer-logo">
                    <img src={Log} alt="Socdaal"/>
                </div>
                <div className="footer-nav">
                    <a href="/">Home</a>
                    <a href="/about">About</a>
                    <a href="/services">Services</a>
                </div>
                <div className="footer-social">
                    <a href="https://facebook.com"><i className="fab fa-facebook-f"></i></a>
                    <a href="https://twitter.com"><i className="fab fa-twitter"></i></a>
                    <a href="https://instagram.com"><i className="fab fa-instagram"></i></a>
                </div>
                <div className="footer-contact">
                    <p>Contact us at: Socdaal@company.com</p>
                </div>
                <div className="footer-copyright">
                    <p>&copy; 2024 Socdaal. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
