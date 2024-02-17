import React from 'react';
import { Link } from 'react-router-dom';
import '../styles.css';
import '../bootstrap.min.css';
import { useState } from 'react';
import { useEffect } from 'react';

const Menu = () => {
    const [menuItems, setMenuItems] = useState([]);
    const [cart, setCart] = useState([]);

    useEffect(() => {
        const fetchMenu = async () => {
            try {
                const response = await fetch('http://127.0.0.1:8000/menu');
                const data = await response.json();
                setMenuItems(data);
            } catch (error) {
                console.error('Error fetching menu:', error);
            }
        };

        fetchMenu();
    }, []);
    const addToCart = (item) => {
        const updatedCart = Array.isArray(cart) ? [...cart] : [];
        const existingItemIndex = updatedCart.findIndex(cartItem => cartItem.id === item.id);

        if (existingItemIndex !== -1) {
            // Item already in cart, update quantity
            updatedCart[existingItemIndex].quantity += 1;
        } else {
            // Item not in cart, add to cart with quantity 1
            updatedCart.push({ ...item, quantity: 1 });
        }

        setCart(updatedCart);
    };

    const removeFromCart = (item) => {
        const updatedCart = Array.isArray(cart) ? [...cart] : [];
        const existingItemIndex = updatedCart.findIndex(cartItem => cartItem.id === item.id);

        if (existingItemIndex !== -1) {
            // Item in cart, update quantity or remove if quantity is 1
            if (updatedCart[existingItemIndex].quantity > 1) {
                updatedCart[existingItemIndex].quantity -= 1;
            } else {
                updatedCart.splice(existingItemIndex, 1);
            }
            setCart(updatedCart);
        }
    };

    // Function to update the total price in the cart
    const getTotalPrice = () => {
        return Array.isArray(cart) ? cart.reduce((total, item) => total + (item.itemPrice * item.quantity), 0) : 0;
    };

    return (
        <>
            <div className="container-xxl bg-white p-0">
                {/* <!-- Navbar & Hero Start --> */}
                <div className="container-xxl position-relative p-0">
                    <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-4 px-lg-5 py-3 py-lg-0">
                        <Link href="" className="navbar-brand p-0">
                            <h1 className="text-primary m-0"><i className="fa fa-utensils me-3"></i>Virtual Delight</h1>
                            {/* <!-- <img src="logo.png" alt="Logo"> --> */}
                        </Link>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                            <span className="fa fa-bars"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarCollapse">
                            <div className="navbar-nav ms-auto py-0 pe-4">
                                <Link to="/home" className="nav-item nav-link">Home</Link>
                                <Link to="/about" className="nav-item nav-link">About</Link>
                                <Link to="/service" className="nav-item nav-link">Service</Link>
                                <Link to="/menu" className="nav-item nav-link active">Menu</Link>
                                <Link to="/booking" className="nav-item nav-link">Booking</Link>
                                <Link to="/contact" className="nav-item nav-link">Contact</Link>
                            </div>
                            {/* <Link href="" className="btn btn-primary py-2 px-4">Book A Table</Link> */}
                        </div>
                    </nav>

                    <div className="container-xxl py-5 bg-dark hero-header mb-5">
                        <div className="container text-center my-5 pt-5 pb-4">
                            <h1 className="display-3 text-white mb-3 animated slideInDown">Food Menu</h1>
                            <nav aria-label="breadcrumb">
                                <ol className="breadcrumb justify-content-center text-uppercase">
                                    <li className="breadcrumb-item"><Link to="/home">Home</Link></li>
                                    <li className="breadcrumb-item"><Link to="/booking">Booking</Link></li>
                                    <li className="breadcrumb-item text-white active" aria-current="page">Menu</li>
                                </ol>
                            </nav>
                        </div>
                    </div>
                </div>
                {/* <!-- Navbar & Hero End --> */}
                {/* <!-- Menu Start --> */}
                <div className="container-xxl py-5">
                    <div className="container">
                        <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
                            <h5 className="section-title ff-secondary text-center text-primary fw-normal">Food Menu</h5>
                            <h1 className="mb-5">Most Popular Items</h1>
                        </div>
                        <div className="tab-class text-center wow fadeInUp" data-wow-delay="0.1s">
                            <ul className="nav nav-pills d-inline-flex justify-content-center border-bottom mb-5">
                                <li className="nav-item">
                                    <a className="d-flex align-items-center text-start mx-3 ms-0 pb-3 active" data-bs-toggle="pill" href="#tab-1">
                                        <i className="fa fa-coffee fa-2x text-primary"></i>
                                        <div className="ps-3">
                                            <small className="text-body">Popular</small>
                                            <h6 className="mt-n1 mb-0">Breakfast</h6>
                                        </div>
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a className="d-flex align-items-center text-start mx-3 pb-3" data-bs-toggle="pill" href="#tab-2">
                                        <i className="fa fa-hamburger fa-2x text-primary"></i>
                                        <div className="ps-3">
                                            <small className="text-body">Special</small>
                                            <h6 className="mt-n1 mb-0">Launch</h6>
                                        </div>
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a className="d-flex align-items-center text-start mx-3 me-0 pb-3" data-bs-toggle="pill" href="#tab-3">
                                        <i className="fa fa-utensils fa-2x text-primary"></i>
                                        <div className="ps-3">
                                            <small className="text-body">Lovely</small>
                                            <h6 className="mt-n1 mb-0">Dinner</h6>
                                        </div>
                                    </a>
                                </li>
                            </ul>
                            <div className="tab-content">
                                <div id="tab-1" className="tab-pane fade show p-0 active">
                                    <div className="row g-4">
                                        {menuItems.map(item => (
                                            <div key={item.id} className="col-lg-6">
                                                <div className="d-flex align-items-center">
                                                    <img
                                                        className="flex-shrink-0 img-fluid rounded"
                                                        src={`http://127.0.0.1:8000${item.menuPic}`}
                                                        alt={item.itemName}
                                                        style={{ width: '80px' }}
                                                    />
                                                    <div className="w-100 d-flex flex-column text-start ps-4">
                                                        <h5 className="d-flex justify-content-between border-bottom pb-2">
                                                            <span>{item.itemName}</span>
                                                            <span className="text-primary">{item.itemPrice} Rs</span>
                                                        </h5>
                                                        <div className="d-flex align-items-center">
                                                            <button onClick={() => addToCart(item)} className="btn btn-primary btn-sm me-2">+</button>
                                                            <span className="me-2">{(cart.find(cartItem => cartItem.id === item.id) || {}).quantity || 0}</span>
                                                            <button onClick={() => removeFromCart(item)} className="btn btn-danger btn-sm">-</button>
                                                        </div>

                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Cart Box */}
                {Array.isArray(cart) && cart.length > 0 && (
                    <div className="cart-box">
                        <h3>Order Cart</h3>
                        <ul>
                            {cart.map(item => (
                                <li key={item.id}>
                                    {item.itemName} x {item.quantity} - {item.itemPrice * item.quantity} Rs
                                    <button onClick={() => removeFromCart(item)}>Remove</button>
                                </li>
                            ))}
                        </ul>
                        <p>Total Price: {getTotalPrice()} Rs</p>
                    </div>
                )}
                {/* <!-- Menu End --> */}
                {/* <!-- Footer Start --> */}
                <div className="container-fluid bg-dark text-light footer pt-5 mt-5 wow fadeIn" data-wow-delay="0.1s">
                    <div className="container py-5">
                        <div className="row g-5">
                            <div className="col-lg-3 col-md-6">
                                <h4 className="section-title ff-secondary text-start text-primary fw-normal mb-4">Company</h4>
                                <Link className="btn btn-link" href="">About Us</Link>
                                <Link className="btn btn-link" href="">Contact Us</Link>
                                <Link className="btn btn-link" href="">Reservation</Link>
                                <Link className="btn btn-link" href="">Privacy Policy</Link>
                                <Link className="btn btn-link" href="">Terms & Condition</Link>
                            </div>
                            <div className="col-lg-3 col-md-6">
                                <h4 className="section-title ff-secondary text-start text-primary fw-normal mb-4">Contact</h4>
                                <p className="mb-2"><i className="fa fa-map-marker-alt me-3"></i>123 Street, New York, USA</p>
                                <p className="mb-2"><i className="fa fa-phone-alt me-3"></i>+012 345 67890</p>
                                <p className="mb-2"><i className="fa fa-envelope me-3"></i>info@example.com</p>
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
                                    &copy; <Link className="border-bottom" href="#">Your Site Name</Link>, All Right Reserved.
                                    Designed By <Link className="border-bottom" href="https://htmlcodex.com">HTML Codex</Link><br /><br />
                                    Distributed By <Link className="border-bottom" href="https://themewagon.com" target="_blank">ThemeWagon</Link>
                                </div>
                                <div className="col-md-6 text-center text-md-end">
                                    <div className="footer-menu">
                                        <Link href="">Home</Link>
                                        <Link href="">Cookies</Link>
                                        <Link href="">Help</Link>
                                        <Link href="">FQAs</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <!-- Footer End --> */}

            </div>
        </>
    )
}
export default Menu;