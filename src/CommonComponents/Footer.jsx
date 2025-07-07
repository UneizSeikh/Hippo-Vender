import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="vendor-footer">
            <div className="side_space">

                <div className="footer-content">
                    <div className="footer-section">
                        <h5>OUR OFFICE</h5>
                        <p>Hippo Bazaar HQ</p>
                        <p>2nd Floor, Sapphire Plaza</p>
                        <p>Indore, MP 452001, India</p>
                    </div>

                    <div className="footer-section">
                        <h5>SUPPORT HOURS</h5>
                        <p>Mon-Fri: 9:00AM - 6:00PM</p>
                        <p>Saturday: 10:00AM - 4:00PM</p>
                        <p>Sunday: Closed</p>
                    </div>

                    <div className="footer-section">
                        <h5>VENDOR HELPLINE</h5>
                        <p>Need help with billing or onboarding?</p>
                        <p className="vendor-contact">+91 90980 02267</p>
                    </div>

                    <div className="footer-section">
                        <h5>CONNECT WITH US</h5>
                        <p className='mb-0'>Get tips, updates & announcements</p>
                        <div className="footer-social-icons">
                            <div className="icon_wrp">
                                <FaFacebookF />
                            </div>
                            <div className="icon_wrp">
                                <FaTwitter />
                            </div>
                            <div className="icon_wrp">
                                <FaInstagram />
                            </div>
                            <div className="icon_wrp">
                                <FaYoutube />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="footer-bottom">
                    <p>
                        © {new Date().getFullYear()} <span className="brand">Hippo Bazaar Vendor</span>. All rights reserved
                    </p>
                    <div className="footer-links">
                        <a href="#">About</a> | <a href="#">Terms</a> | <a href="#">Privacy</a>
                    </div>
                </div>
            </div>

        </footer>
    );
};

export default Footer;
