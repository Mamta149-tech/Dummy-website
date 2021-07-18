import React from 'react'
import './Header.css';
import { Link } from "react-router-dom";

export default function Feedback() {

    return (
        <>
            <div className="container-fluid text-center">  
                <h2 className="mb-0 pt-5">FEEDBACK</h2> 
                <p className="px-3 fs-5 mt-2">Your feedback is valuable to us !</p>
                <div className="d-flex flex-row justify-content-center mt-2"> <img src="https://img.icons8.com/emoji/48/000000/angry-face-emoji--v2.png" /> <img src="https://img.icons8.com/fluent/48/000000/sad.png" /> <img src="https://img.icons8.com/color/48/000000/happy.png" /> <img src="https://img.icons8.com/emoji/48/000000/smiling-face.png" /> <img src="https://img.icons8.com/color/48/000000/lol.png" /> </div>
                <form className="row g-3 mt-5 px-5 mx-5">
                    <div className="col-md-6">
                        <input type="email" className="form-control" id="inputEmail4" placeholder="Your Name"/>
                    </div>
                    <div className="col-md-6">
                        <input type="password" className="form-control" id="inputPassword4" placeholder="Your Email"/>
                    </div>
                    <div className="col-12">
                        <input type="text" className="form-control" id="inputAddress" placeholder="Subject"/>
                    </div>
                    <div className="col-12">
                        <textarea className="form-control" id="exampleFormControlTextarea1" rows="5" placeholder="Message"></textarea>
                    </div>
                    <div className="col-12">
                        <button type="submit" className="btn btn-info shadow fs-5 subscribe">Send Message</button>
                    </div>
                </form>
            </div>
        </>
    )
}
