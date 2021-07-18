import React from 'react'
import './Header.css'
import { Link } from "react-router-dom";

export default function Footer() {
    let copyright =
    {
        backgroundColor: "#EBF7FC",
    }
    let footerstyle = {
        position: "relative",
        top: "10vh",
        width: "100%" 
    }
    let styleicon =
    {
        color: "#FF6600"
    }
    return (
        
        <>
        <footer className="bg-white text-center text-black mx-0" style={footerstyle}>
            <div className="text-center p-3 text-dark" style={copyright}>
                <h4 className="mt-4 mb-3">Join Our Newsletter</h4>
                <p className="mb-3">Enter your email here</p>
                <form action="" className="input-group mb-3 mb-5 email-input">
                    <input type="email" id="inputEmail4" className="form-control shadow-lg" aria-label="Recipient's username" aria-describedby="basic-addon2" />
                    <Link className="btn btn-info floating input-group-text shadow-lg subscribe" id="basic-addon2">Subscribe</Link>
                </form>
            </div>
            <div className="container p-4">
                <section className="">
                    <div className="row">
                        <div className="col-lg-4 col-md-6 mb-4 mb-md-0 py-5">
                            <h3 className="text-start">MissionED</h3>
                            <p className="text-start fs-6">Affiliated with Atal Incubation Center <br/>Goa Institute of Management <br />India</p>
                            <p className="text-start my-5"><span className="fw-bold">Email:</span> missionediit@gmail.com</p>
                        </div>
                        <div className="col-lg-2 col-md-6 mb-4 mb-md-0 py-5">
                            <h6 className="text-start">Useful Links</h6>

                            <ul className="list-unstyled mb-0 fs-6 text-start">
                                <li className="mt-3">
                                <i class="fa fa-chevron-right chevron-color me-1" aria-hidden="true"></i>
                                    <Link to="#!" className="footer-link">
                                        Home
                                    </Link>
                                </li>
                                <li className="mt-3">
                                <i class="fa fa-chevron-right chevron-color me-1" aria-hidden="true"></i>
                                    <Link to="#!" className="footer-link">About us</Link>
                                </li>
                                <li className="mt-3">
                                <i class="fa fa-chevron-right chevron-color me-1" aria-hidden="true"></i>
                                    <Link to="#!" className="footer-link">Services</Link>
                                </li>
                                <li className="mt-3">
                                <i class="fa fa-chevron-right chevron-color me-1" aria-hidden="true"></i>
                                    <Link to="#!" className="footer-link">Careers</Link>
                                </li>
                                <li className="mt-3">
                                <i class="fa fa-chevron-right chevron-color me-1" aria-hidden="true"></i>
                                    <Link to="#!" className="footer-link">Terms of Service</Link>
                                </li>
                                <li className="mt-3">
                                <i class="fa fa-chevron-right chevron-color me-1" aria-hidden="true"></i>
                                    <Link to="#!" className="footer-link">Privacy Policy</Link>
                                </li>
                            </ul>
                        </div>
                        <div className="col-lg-3 col-md-6 mb-4 mb-md-0 py-5">
                            <h6 className="text-start">Our Services</h6>

                            <ul className="list-unstyled mb-0 fs-6 text-start">
                                <li className="mt-3">
                                <i class="fa fa-chevron-right chevron-color me-1" aria-hidden="true"></i>
                                    <Link to="#!" className="footer-link">MissionEd Store</Link>
                                </li>
                                <li className="mt-3">
                                <i class="fa fa-chevron-right chevron-color me-1" aria-hidden="true"></i>
                                    <Link to="#!" className="footer-link">MissionEd Classes</Link>
                                </li>
                                <li className="mt-3">
                                <i class="fa fa-chevron-right chevron-color me-1" aria-hidden="true"></i>
                                    <Link to="#!" className="footer-link">MissionEd Classes (School)</Link>
                                </li>
                                <li className="mt-3">
                                <i class="fa fa-chevron-right chevron-color me-1" aria-hidden="true"></i>
                                    <Link to="#!" className="footer-link">MissionEd Referral</Link>
                                </li>
                                <li className="mt-3">
                                <i class="fa fa-chevron-right chevron-color me-1" aria-hidden="true"></i>
                                    <Link to="#!" className="footer-link">MissionEd Pro <span class="badge bg-danger">New</span></Link>
                                </li>
                            </ul>
                        </div>
                        <div className="col-lg-3 col-md-6 mb-4 mb-md-0 py-5">
                            <h6 className="text-start">Our Social Networks</h6>
                            <p className="text-start">Reach out to us anytime!</p>
                            <p className="text-start">
                                <a className="btn shadow-lg social-icon fs-6 mx-3" href="#!" role="button">
                                    <i className="fab fa-facebook-f"></i>
                                </a> 
                                <Link className="btn shadow-lg mx-3 social-icon fs-6" to="#!" role="button">
                                    <i className="fab fa-linkedin-in"></i>
                                </Link>
                            </p>
                        </div>
                    </div>
                </section>
            </div>

            <div className="container-fluid py-3" style={copyright}>
                <div>© Copyright <span className="fw-bold">MissionED</span>.All Rights Reserved</div>
                <span className="copyright-content">Designed by <Link to="#" className="footer-link">MissionED</Link></span> 
            </div>
        </footer>
            
        </>
    )
}
