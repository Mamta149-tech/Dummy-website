import React from 'react'
import logo from './logo.svg';
import './Header.css';
import { Link } from "react-router-dom";

export default function TopContent() {
    let stylebg =
    {
        backgroundImage: "url(https://i.pinimg.com/originals/64/5a/2f/645a2f4f9db92272b48fd8bf5fd8d981.jpg)",
        backgroundSize : "cover",
        backgroundRepeat: "no-repeat",
        backgroundAttachment: "fixed"
    }
    let content =
    {
        backgroundColor: "#F9F9F9"
    }
    let heroimg =
    {
        maxWidth: "100%",
        height: "auto"
    }
    let style1 = 
    {
        opacity: "0.7"
    }
    return (
        <>
            <div className="container-fluid p-5 text-center" style={content, stylebg}>
                <div class="row">
                    <div class="col-lg-6 pt-4 pt-lg-0 order-2 order-lg-1 d-flex flex-column justify-content-center mt-2">
                        <h1 className="missioned">
                            <img src={logo} alt="" width="50px" height="50px" class="img-fluid"/> MISSIONED STORE
                        </h1>
                        <h5>The one stop shop for all students of India</h5>
                        <h5>Trusted by 2500+ students</h5>
                        <div className="mt-2">
                        <button className="btn btn-info shadow fs-5 subscribe p-1"><a href="#team" class="text-white text-decoration-none">Start Shopping</a></button>&nbsp;
                            <button className="btn btn-info shadow fs-5 subscribe p-1"><Link to="/login" class="btn-get-started scrollto text-white text-decoration-none">MissionEd Pro <span class="badge bg-danger">New</span></Link></button>
                        </div>
                    </div>
                    <div class="col-lg-6 order-1 order-lg-2 mt-5">
                        <img src="https://www.missioned.in/MissionEd_Store_New/assets/img/hero-img.png" class="img-fluid" alt="" style={heroimg}/>
                    </div>
                </div>
            </div>
        </>
    )
}
