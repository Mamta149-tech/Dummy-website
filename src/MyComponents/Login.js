import React from 'react'
import logo from './logo.svg';
import './Header.css';
import { Link } from "react-router-dom";

export default function Login() {
    let topElement =
    {
        willChange: "transform",
        transform: "perspective(300px) rotateX(0deg) rotateY(0deg)"
    }
    let imgsize = 
    {
        width: "25vw",
        height: "30vw"
    }
    let bgCol =
    {
        backgroundColor: "#FF6600"
    }
    return (
        <div className="container-fluid limiter py-3">
		<div className="container bg-white rounded-2">
			<div className="row text-center">
				<div className="col mx-5 mt-5 px-5 pt-5" data-tilt="" style={topElement}>
					<img className="zoom" src="https://www.missioned.in/MissionEd_Store_New/login/images/assigno.png" style={imgsize} alt="IMG"/>
				</div>

				<form className="col">
					<center><div className="my-5"><img src={logo} height="105px" width="105px"/></div></center>
					<span className="my-5">
					<h3>Sign in</h3>
					</span>

                    <div class="input-group input-group-div rounded-pill p-2 mt-5 zoom">
                    <i className="fa fa-envelope mt-2 ms-3" aria-hidden="true"></i>
                        <input type="email" class="form-control input-group-div ms-3 input-email" placeholder="Email" />
                    </div>

                    <div class="input-group input-group-div rounded-pill p-2 mt-2 zoom">
                    <i className="fa fa-lock mt-2 ms-3" aria-hidden="true"></i>
                        <input type="password" class="form-control input-group-div ms-3 input-email" placeholder="Password" />
                    </div>
					
					<div className="input-group-div rounded-pill p-2 mt-5 text-center zoom" style={bgCol}>
						<button id="btn-login" className="border-0 input-group-div text-uppercase fw-bold text-white my-1" style={bgCol}>
							Login
						</button>
					</div>

					<div className="text-center p-t-12 my-3 me-2">
						<span className="fs-4">
							Forgot
						</span>&nbsp;
						<Link className="fs-4 footer-link" to="forgot-password.html">
							Username / Password?
						</Link>
						<br/> <br/> <br/>
						<Link className="fs-4 mb-5 footer-link" to="signup.html">
							Create your Account
							<i class="fa fa-long-arrow-right ms-1" aria-hidden="true"></i>
						</Link>
					</div>
					
				</form>
			</div>
		</div>
	</div>
    )
}
