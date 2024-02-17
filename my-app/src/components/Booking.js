import React from 'react';
import { Link } from 'react-router-dom';
const Booking = () => {
    return (
        <>
            <div className="container-xxl bg-white p-0">
                {/* <!-- Spinner Start --> */}
                {/* <div id="spinner" className="show bg-white position-fixed translate-middle w-100 vh-100 top-50 start-50 d-flex align-items-center justify-content-center">
            <div className="spinner-border text-primary" style= {{width: '3rem', height: '3rem'}} role="status">
                <span className="sr-only">Loading...</span>
            </div>
        </div> */}
                {/* <!-- Spinner End --> */}
                {/* <!-- Navbar & Hero Start --> */}
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
                            <Link href="#" className="nav-link dropdown-toggle active" data-bs-toggle="dropdown">Pages</Link>
                            <div className="dropdown-menu m-0">
                                <Link href="booking.html" className="dropdown-item active">Booking</Link>
                                <Link href="team.html" className="dropdown-item">Our Team</Link>
                                <Link href="testimonial.html" className="dropdown-item">Testimonial</Link>
                            </div>
                        </div> */}
                                <Link to="/booking" className="nav-item nav-link active">Booking</Link>
                                <Link to="/contact" className="nav-item nav-link">Contact</Link>
                            </div>
                            {/* <Link href="" className="btn btn-primary py-2 px-4">Book A Table</Link> */}
                        </div>
                    </nav>
                    <div className="container-xxl py-5 bg-dark hero-header mb-5">
                        <div className="container text-center my-5 pt-5 pb-4">
                            <h1 className="display-3 text-white mb-3 animated slideInDown">Booking</h1>
                            <nav aria-label="breadcrumb">
                                <ol className="breadcrumb justify-content-center text-uppercase">
                                    <li className="breadcrumb-item"><Link to="/home">Home</Link></li>
                                    <li className="breadcrumb-item"><Link to="/home">Contact US</Link></li>
                                    <li className="breadcrumb-item text-white active" aria-current="page">Booking</li>
                                </ol>
                            </nav>
                        </div>
                    </div>
                </div>
                {/* <!-- Navbar & Hero End --> */}
                {/* <!-- Reservation Start --> */}
                <div className="container-xxl py-5 px-0 wow fadeInUp" data-wow-delay="0.1s">
                    <div className="row g-0">
                        {/* <div className="col-md-6">
                        <div className="video">
                            <button type="button" className="btn-play" data-bs-toggle="modal" data-src="https://www.youtube.com/embed/DWRcNpR6Kdc" data-bs-target="#videoModal">
                                <span></span>
                            </button>
                        </div>
                    </div> */}
                        <div className="col-md-6">
                            <div className="video">
                                <button type="button" className="btn-play" data-bs-toggle="modal" data-bs-target="#videoModal" data-src="https://www.youtube.com/embed/DWRcNpR6Kdc">
                                    <span></span>
                                </button>
                            </div>
                        </div>

                        <div className="col-md-6 bg-dark d-flex align-items-center">
                            <div className="p-5 wow fadeInUp" data-wow-delay="0.2s">
                                <h5 className="section-title ff-secondary text-start text-primary fw-normal">Reservation</h5>
                                <h1 className="text-white mb-4">Book A Table Online</h1>
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
                                        <div className="col-md-6">
                                            <div className="form-floating date" id="date3" data-target-input="nearest">
                                                <input type="text" className="form-control datetimepicker-input" id="datetime" placeholder="Date & Time" data-target="#date3" data-toggle="datetimepicker" />
                                                <label htmlFor="datetime">Date & Time</label>
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="form-floating">
                                                <select className="form-select" id="select1">
                                                    <option value="1">People 1</option>
                                                    <option value="2">People 2</option>
                                                    <option value="3">People 3</option>
                                                </select>
                                                <label htmlFor="select1">No Of People</label>
                                            </div>
                                        </div>
                                        <div className="col-12">
                                            <div className="form-floating">
                                                <textarea className="form-control" placeholder="Special Request" id="message" style={{ height: '100px' }}></textarea>
                                                <label htmlFor="message">Special Request</label>
                                            </div>
                                        </div>
                                        <div className="col-12">
                                            <button className="btn btn-primary w-100 py-3" type="submit">Book Now</button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container-fluid bg-dark text-light footer pt-5 mt-5 wow fadeIn" data-wow-delay="0.1s">
                    <div className="container py-5">
                        <div className="row g-5">
                            <div className="col-lg-3 col-md-6">
                                <h4 className="section-title ff-secondary text-start text-primary fw-normal mb-4">Company</h4>
                                <Link to="/" className="btn btn-link">About Us</Link>
                                <Link to="/" className="btn btn-link">Contact Us</Link>
                                <Link to="/" className="btn btn-link">Reservation</Link>
                                <Link to="/" className="btn btn-link">Privacy Policy</Link>
                                <Link to="/" className="btn btn-link">Terms & Condition</Link>
                            </div>
                            <div className="col-lg-3 col-md-6">
                                <h4 className="section-title ff-secondary text-start text-primary fw-normal mb-4">Contact</h4>
                                <p className="mb-2"><i className="fa fa-map-marker-alt me-3"></i>Old Anarkali, Lahore</p>
                                <p className="mb-2"><i className="fa fa-phone-alt me-3"></i>+92 345 67890</p>
                                <p className="mb-2"><i className="fa fa-envelope me-3"></i>virtualdelight@example.com</p>
                                <div className="d-flex pt-2">
                                    <Link className="btn btn-outline-light btn-social" href=""><i className="fab fa-twitter"></i></Link>
                                    <Link className="btn btn-outline-light btn-social" href=""><i className="fab fa-facebook-f"></i></Link>
                                    <Link className="btn btn-outline-light btn-social" href=""><i className="fab fa-youtube"></i></Link>
                                    <Link className="btn btn-outline-light btn-social" href=""><i className="fab fa-linkedin-in"></i></Link>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6">
                                <h4 className="section-title ff-secondary text-start text-primary fw-normal mb-4">Opening</h4>
                                <h5 className="text-light fw-normal">Monday - Saturday</h5>
                                <p>09AM - 09PM</p>
                                <h5 className="text-light fw-normal">Sunday</h5>
                                <p>10AM - 08PM</p>
                            </div>
                            <div className="col-lg-3 col-md-6">
                                <h4 className="section-title ff-secondary text-start text-primary fw-normal mb-4">Newsletter</h4>
                                <p>Dolor amet sit justo amet elitr clita ipsum elitr est.</p>
                                <div className="position-relative mx-auto" style={{ maxWidth: '400px' }}>
                                    <input className="form-control border-primary w-100 py-3 ps-4 pe-5" type="text" placeholder="Your email" />
                                    <button type="button" className="btn btn-primary py-2 position-absolute top-0 end-0 mt-2 me-2">SignUp</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="container">
                        <div className="copyright">
                            <div className="row">
                                <div className="col-md-6 text-center text-md-start mb-3 mb-md-0">
                                    &copy; <Link to="#" className="border-bottom">Virtual Delight</Link>, All Right Reserved.
                                    Designed By <Link to="https://htmlcodex.com" className="border-bottom">Cafe</Link><br /><br />
                                </div>
                                <div className="col-md-6 text-center text-md-end">
                                    <div className="footer-menu">
                                        <Link to="/">Home</Link>
                                        <Link to="/">Cookies</Link>
                                        <Link to="/">Help</Link>
                                        <Link to="/">FQAs</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Booking;