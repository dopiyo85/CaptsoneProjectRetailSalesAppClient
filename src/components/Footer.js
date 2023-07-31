import React from 'react'; 
import './styles/footer.css';

const Footer = () => {
    return (
        <footer id="footer" className="bg-green text-center text-black fixed-bottom">
            <div className="container p-0">
                <div className="row">
                    <div className="col-md-4">
                        {/* Adds copyright information*/}
                        <div className="footer-copyright">
                            <p>&copy; {new Date().getFullYear()} SafaricomPLC - C4G2SE Capstone. All rights reserved.</p>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <section className="mb-0">
                            {/* Adds the social icons */}
                            <a className="btn btn-outline-dark btn-floating m-1" href="https://web.facebook.com/SafaricomPLC" target="_blank" rel="noopener noreferrer" role="button" title="Facebook"><i className="fab fa-facebook-f"></i></a>
                            <a className="btn btn-outline-dark btn-floating m-1" href="https://twitter.com/Safaricom_Care" target="_blank" rel="noopener noreferrer" role="button" title="Twitter"><i className="fab fa-twitter"></i></a>
                            <a className="btn btn-outline-dark btn-floating m-1" href="https://www.safaricom.co.ke/personal/value-added-services/information-services/zuri" target="_blank" rel="noopener noreferrer" role="button" title="WhatsApp"><i className="fab fa-whatsapp"></i></a>
                            <a className="btn btn-outline-dark btn-floating m-1" href="mailto:customercare@safaricom.co.ke" target="_blank" rel="noopener noreferrer" role="button" title="Email"><i className="fas fa-envelope"></i></a>
                            <a className="btn btn-outline-dark btn-floating m-1" href="https://www.instagram.com/safaricomplc_/?hl=en" target="_blank" rel="noopener noreferrer" role="button" title="Instagram"><i className="fab fa-instagram"></i></a>
                            <a className="btn btn-outline-dark btn-floating m-1" href="https://www.linkedin.com/company/safaricom/" target="_blank" rel="noopener noreferrer" role="button" title="LinkedIn"><i className="fab fa-linkedin-in"></i></a>
                            <a className="btn btn-outline-dark btn-floating m-1" href="http://www.safaricom.co.ke/" target="_blank" rel="noopener noreferrer" role="button" title="Website"><i className="fas fa-globe"></i></a>
                            <a className="btn btn-outline-dark btn-floating m-1" href="https://www.safaricom.co.ke/about/contact-us" target="_blank" rel="noopener noreferrer" role="button" title="Contact Us"><i className="fas fa-address-book"></i></a>
                        </section>
                    </div>
                    <div className="col-md-4">
                        {/* Adds thank you note*/}
                        <div className="footer-thankyou">
                        <p>Welcome again.Thank you for shopping with us.</p>
                        </div>
                    </div>
                    
                </div>
            </div>
        </footer>
    );
};

export default Footer;
