import React from 'react';
//import './Footer.css'; // Import CSS for styling
import '../apps.css'

function Footer() {
    return (
        <footer className="footer">
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <h3>About Us</h3>
                        <p>We are committed to providing the best face detection experience to our users.</p>
                    </div>
                    <div className="col-md-6">
                        <h3>Contact Us</h3>
                        <ul className="contact-list">
                            <li>Email: example@example.com</li>
                            <li>Phone: +1234567890</li>
                            <li>Address: 123 Street, City, Country</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="footer-bottom">
                <p>© 2024 Face Detection App. All rights reserved.</p>
            </div>
        </footer>
    );
}

export default Footer;
