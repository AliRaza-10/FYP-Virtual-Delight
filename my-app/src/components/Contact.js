import React from 'react';
// import { Link } from 'react-router-dom';
import '../styles.css';
import '../bootstrap.min.css';
import { Link } from 'react-router-dom';
// import { Link } from 'react-router-dom';

const Contact = () => {
    return (
        <>
            <div className="container-xxl position-relative p-0">
                <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-4 px-lg-5 py-3 py-lg-0">
                    <Link href="" className="navbar-brand p-0">
                        <h1 className="text-primary m-0"><i className="fa fa-utensils me-3"></i>Virtual Delight</h1>
                        {/* <!-- <img src="img/logo.png" alt="Logo"> --> */}
                    </Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                        <span className="fa fa-bars"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarCollapse">
                        <div className="navbar-nav ms-auto py-0 pe-4">
                            <Link to="/home" className="nav-item nav-link">Home</Link>
                            <Link to="/about" className="nav-item nav-link">About</Link>
                            <Link to="/service" className="nav-item nav-link">Service</Link>
                            <Link to="/menu" className="nav-item nav-link">Menu</Link>
                            {/* <div className="nav-item dropdown">
                            <Link href="#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">Pages</Link>
                            <div className="dropdown-menu m-0">
                                <a href="booking.html" className="dropdown-item">Booking</a>
                                <a href="team.html" className="dropdown-item">Our Team</a>
                                <a href="testimonial.html" className="dropdown-item">Testimonial</a>
                            </div>
                        </div> */}
                            <Link to="/booking" className="nav-item nav-link">Booking</Link>
                            <Link to="/contact" className="nav-item nav-link active">Contact</Link>
                        </div>
                        {/* <Link href="" className="btn btn-primary py-2 px-4">Book A Table</Link> */}
                    </div>
                </nav>

                <div className="container-xxl py-5 bg-dark hero-header mb-5">
                    <div className="container text-center my-5 pt-5 pb-4">
                        <h1 className="display-3 text-white mb-3 animated slideInDown">Contact Us</h1>
                        <nav aria-label="breadcrumb">
                            <ol className="breadcrumb justify-content-center text-uppercase">
                                <li className="breadcrumb-item"><Link href="#">Home</Link></li>
                                <li className="breadcrumb-item"><Link href="#">Pages</Link></li>
                                <li className="breadcrumb-item text-white active" aria-current="page">Contact</li>
                            </ol>
                        </nav>
                    </div>
                </div>
            </div>
            <div className="container-xxl py-5">
                <div className="container">
                    <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
                        <h5 className="section-title ff-secondary text-center text-primary fw-normal">Contact Us</h5>
                        <h1 className="mb-5">Contact For Any Query</h1>
                    </div>
                    <div className="row g-4">
                        <div className="col-12">
                            <div className="row gy-4">
                                <div className="col-md-4">
                                    <h5 className="section-title ff-secondary fw-normal text-start text-primary">Booking</h5>
                                    <p><i className="fa fa-envelope-open text-primary me-2"></i>book@example.com</p>
                                </div>
                                <div className="col-md-4">
                                    <h5 className="section-title ff-secondary fw-normal text-start text-primary">General</h5>
                                    <p><i className="fa fa-envelope-open text-primary me-2"></i>info@example.com</p>
                                </div>
                                <div className="col-md-4">
                                    <h5 className="section-title ff-secondary fw-normal text-start text-primary">Technical</h5>
                                    <p><i className="fa fa-envelope-open text-primary me-2"></i>tech@example.com</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 wow fadeIn" data-wow-delay="0.1s">
                            {/* <iframe
                            title="Google Maps"
                            className="position-relative rounded w-100 h-100"
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3001156.4288297426!2d-78.01371936852176!3d42.72876761954724!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4ccc4bf0f123a5a9%3A0xddcfc6c1de189567!2sNew%20York%2C%20USA!5e0!3m2!1sen!2sbd!4v1603794290143!5m2!1sen!2sbd"
                            frameBorder="0"
                            style={{ minHeight: '350px', border: 0 }}
                            allowFullScreen=""
                            aria-hidden="false"
                            tabIndex="0"
                        ></iframe> */}
                            <iframe
                                title="Google Maps"
                                className="position-relative rounded w-100 h-100"
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d339903.1942597427!2d74.19524461674441!3d31.549711266392194!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391902f9b74f6555%3A0x53b6761626d8fb0b!2sLahore%2C%20Punjab%2C%20Pakistan!5e0!3m2!1sen!2sbd!4v1603794290143!5m2!1sen!2sbd"
                                frameBorder="0"
                                style={{ minHeight: '350px', border: 0 }}
                                allowFullScreen=""
                                aria-hidden="false"
                                tabIndex="0"
                            ></iframe>

                        </div>
                        <div className="col-md-6">
                            <div className="wow fadeInUp" data-wow-delay="0.2s">
                                <form>
                                    <div className="row g-3">
                                        <div className="col-md-6">
                                            <div className="form-floating">
                                                <input type="text" className="form-control" id="name" placeholder="Your Name" />
                                                <label htmlFor="name">Your Name</label>
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="form-floating">
                                                <input type="email" className="form-control" id="email" placeholder="Your Email" />
                                                <label htmlFor="email">Your Email</label>
                                            </div>
                                        </div>
                                        <div className="col-12">
                                            <div className="form-floating">
                                                <input type="text" className="form-control" id="subject" placeholder="Subject" />
                                                <label htmlFor="subject">Subject</label>
                                            </div>
                                        </div>
                                        <div className="col-12">
                                            <div className="form-floating">
                                                <textarea className="form-control" placeholder="Leave a message here" id="message" style={{ height: '150px' }}></textarea>
                                                <label htmlFor="message">Message</label>
                                            </div>
                                        </div>
                                        <div className="col-12">
                                            <button className="btn btn-primary w-100 py-3" type="submit">Send Message</button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Contact;