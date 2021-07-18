import React from 'react'
import logo from './logo.svg';
import './refferal.css';
import { Link } from "react-router-dom";


export default function Refferal() {

    let topPage =
    {
        backgroundImage: "url(http://distance-educator.com/wp-content/uploads/iStock-VR_MR_AR_Digital.jpeg)",
        backgroundSize: "cover"
    }
    let styleStart =
    {
        color: "#098FA6",
        visibility: "visible", 
        animationName: "fadeInUp"
    }
    let styleOne = 
    {
        visibility: "visible", 
        animationName: "fadeInUp"
    }
    let styleTwo =
    {
        visibility: "visible", 
        animationDuration: "3s", 
        animationName: "slideInLeft"
    }
    let styleThree =
    {
        isibility: "visible", 
        animationDuration: "1.4s", 
        animationName: "bounceInUp"
    }
    let styleFour = 
    {
        visibility: "visible", 
        animationName: "zoomIn",
    }
    let scrollDown = 
    {
        opacity: "0.7"
    }
    let styledemo = 
    {
        width:"300px",
        height:"300px"
    }
    let footerColor =
    {
        background: "#85868A"
    }
    let lastcolor =
    {
        background: "#343A40"
    }
    return (
        <body cz-shortcut-listen="true">
            <nav className="navbar fixed-top navbar-expand-lg bg-dark">
                <span className="mx-2">
                    <img src={logo} alt="Missioned Logo"/>
                    <i className="zmdi zmdi-landscape"></i>
                </span>
                <div className="container">
                    <Link className="text-white text-decoration-none" to="/">
                        <h1 className="">MissionEd<span className="bg-main"></span></h1>
                    </Link>
                    <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="fa fa-bars mfa-white"></span>
                    </button>
                </div>
            </nav>
    
            <div className="container-fluid text-white p-5 h-100" style={topPage}>
                <div className="container slider-top-text">
                    <div className="row mt-5">
                        <div className="col-md-12 text-center mt-5">
                            <h3 className="my-heading mt-2">WELCOME TO JOB REFFERAL<span className="bg-main"></span></h3>
                            <br/><br/>
                            <p className="mt-5 text-center bg-dark" style={scrollDown}> Referrals are often thought to be the proverbial golden tickets of job seeking. While they don't guarantee you a job, they can increase the odds that your application will be seen by a recruiter or hiring manager and ultimately give you a boost in the hiring process.</p>
                            <br/><br/>
                            <a className="btn btn-danger m-5" href="https://www.missioned.in/">JOIN THE COMMUNITY</a>
                        </div>
                        <div className="col-md-12 text-center mt-5">
                            <div className="scroll-down">
                                <a className="btn btn-default btn-scroll floating-arrow" href="#gobottom" id="bottom" style={scrollDown}><i className="fa fa-angle-down"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div> 

            <section className="text-center mb-5">
                <div className="container mb-5">
                    <div className="row my-5">
                        <div className="col-md-12 my-5" style={styleStart}>
                            <h3><span>WHAT WE OFFER</span></h3>
                        </div>
                    </div>
                    
                    <div className="row mb-5" data-wow-duration="3s" style={styleTwo}>
                        <div className="col-md-4 mb-3">
                            <div>
                                <img src="https://t4.ftcdn.net/jpg/02/55/90/01/240_F_255900103_JOtpdq3S5QGtnHArumooMLf2MiRNsHs2.jpg" className="img-fluid big-img"/>
                            </div>
                        </div>
                        <div className="col-md-8">
                            <div className="inner-section">
                                <div className="my-grid">
                                    <div className="row">
                                        <div className="col-sm-6 col-md-4 mb-3">
                                        
                                            <img src="https://t3.ftcdn.net/jpg/01/34/80/28/240_F_134802859_XfU9XyU122yLZ7TdzNap02bveaomtKHG.jpg" className="img-fluid img2"/>
                                            
                                        </div>
                                        <div className="col-sm-6 col-md-8 mb-3">
                                            
                                            <img src=" https://as1.ftcdn.net/jpg/01/00/18/84/500_F_100188451_XHqTn5GLnoLRJIixUQ2UGmZPYFASAkkY.jpg" className="img-fluid img3"/>
                                        
                                        </div>

                                        <div className="col-md-8 mb-3 mt-4">
                                            <div className="text-block">
                                                <h4 style={styleStart}><span className="">Internships and Placements</span></h4>
                                                <p> Apply your theory.

                                                    Get a feel for the work environment.

                                                    Boost your confidence, Build networks

                                                    Improve your CV.
                                                    By far, the largest benefit of doing a placement year is your increased employability. Most students will graduate with little to no work experience relevant to their degree, so having a full year of experience is guaranteed to propel you miles ahead of the competition.                                   
                                                </p>
                                            </div>
                                        </div>
                                        <div className=" col-md-4  mt-0">
                                            <img src="https://t4.ftcdn.net/jpg/03/48/46/23/240_F_348462371_5zRKh5XcMnq9sNsMAxIaap0ePZeEaDIW.jpg" className="img-fluid h-100"/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="text-center my-5">
                <div className="container my-5">
                    <div className="row mt-5">
                        <div className="col-md-8 mx-auto mt-5" style={styleOne}>
                            <h3 className="mt-5" style={styleStart}><span className="bg-main">Get Referrals for Internships and Placements</span></h3>
                            <p className=" text-center">(Choose that fits your needs)</p>
                        </div>
                    </div>
                    <div className="container mb-5">
                    <div className="row mb-5">
                        <div className="col-sm-4">
                            <div className="flip-card">
                                <div className="flip-card-inner">
                                    <div className="flip-card-front py-4">
                                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRApx97ZEDXehw4YhdKTH3WWOFJnpvdMDdYcoC1Kx3EqgLXgnnlMEjqs5VybYsMN_qMWBQ&usqp=CAU" alt="Avatar"/>
                                    </div>
                                    <div className="flip-card-back">
                                        <h1>AMAZON</h1>
                                        <button className="btn btn-success p-3">Apply</button>
                                    </div>
                                </div>
                            </div>
                        </div>
       
                        <div className="col-sm-4">
                            <div className="flip-card">
                                <div className="flip-card-inner">
                                    <div className="flip-card-front py-3">
                                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6DWMnECnzYkEKCIU2mFfwQyG0GOYEcYrpQg&amp;usqp=CAU" alt="image 1"/>
                                    </div>
                                    <div className="flip-card-back">
                                        <h1>FLIPKART</h1>
                                        <button className="btn btn-success p-3">Apply</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-4">
                            <div className="flip-card">
                                <div className="flip-card-inner">
                                    <div className="flip-card-front py-3">
                                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTC_SmwZrm-Zs_HnteZDOWZOoEDx1Dhe0unq1Vame3SlAUZEQyFZzfUjLNUhIv-Fwv8N1I&usqp=CAU" alt="image 1"/>
                                    </div>
                                    <div className="flip-card-back">
                                        <h1>NOMURA</h1>
                                        <button className="btn btn-success p-3">Apply</button>
                                    </div>
                                </div>
                            </div>
                        </div>
        
                        <div className="col-sm-4">
                            <div className="flip-card">
                                <div className="flip-card-inner">
                                    <div className="flip-card-front py-4">
                                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5WdxGKt5_rsEEnc3j7r3lx3z1h_W2jxjmD0t50P4dFaPJU8Qdk_cOQlYjl3u3ZXM729Q&usqp=CAU" alt="image 1"/>
                                    </div>
                                    <div className="flip-card-back">
                                        <h1>UBER</h1> 
                                        <button className="btn btn-success p-3">Apply</button>
                                    </div>
                                </div>
                            </div>
                        </div>
        
                        <div className="col-sm-4">
                            <div className="flip-card">
                                <div className="flip-card-inner">
                                    <div className="flip-card-front py-2">
                                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxxwlkoO-ZUXXudTTagrPnCn9dHr9clQs3O4YFS1T_RmJeGCSkqGM5T1wVvwRJvPdkJHc&usqp=CAU" alt="image 1"/>
                                    </div>
                                    <div className="flip-card-back">
                                        <h1>ERNST & YOUNG</h1>
                                        <button className="btn btn-success p-3">Apply</button>
                                    </div>
                                </div>
                            </div>
                        </div>
        
                        <div className="col-sm-4">
                            <div className="flip-card">
                                <div className="flip-card-inner">
                                    <div className="flip-card-front py-4">
                                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbRPSacum553uuUmVbaOLOs_6bxHWiZlRQdla3KTAox8_PKmyClbOC6MOq8fLxwZSNcBE&usqp=CAU" alt="image 1"/>
                                    </div>
                                    <div className="flip-card-back">
                                        <h1>GOLDMAN SACHS</h1>
                                        <button className="btn btn-success p-3">Apply</button>
                                    </div>
                                </div>
                            </div>
                        </div>
        
                        <div className="col-sm-4">
                            <div className="flip-card">
                                <div className="flip-card-inner">
                                    <div className="flip-card-front py-2">
                                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYmdG5dwBNyS-Yi2oBSpjQPK7iRjK2-CgVF6kLBSsJlRBA8cuCjgIz8lNV3W-SyiL4s2c&usqp=CAU" alt="image 1"/>
                                    </div>
                                    <div className="flip-card-back">
                                        <h1>DR REDDY'S LABORATORIES</h1>
                                        <button className="btn btn-success p-3">Apply</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-4">
                            <div className="flip-card">
                                <div className="flip-card-inner">
                                    <div className="flip-card-front py-3">
                                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQyAhayJQT8PlTBvGhinQgS3wK2oME0Puu9V4eC0OHmH58ckv6_blta7CVthk1RsQgUIyE&usqp=CAU" alt="image 1"/>
                                    </div>
                                    <div className="flip-card-back">
                                        <h1>MASTERCARD</h1>
                                        <button className="btn btn-success p-3">Apply</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section className="text-center mybgImage text-white">
            <div className="container mt-5">
                <div className="row mt-5">
                    <div className="col-md-12">
                        <h2 className="mt-5">OUR ADVISORS</h2>
                        <p className="text-center">Alma Mater of Our Internship and Placement Advisors:</p>
                    </div>
                </div>
         
                <div className="row py-5">
                    <div className="col" data-wow-duration="1.4s">
                        <div>
                            <a href="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYNiJpPyfzSyS-Zi7bqtxZsw3YREYhfam4SzR4SSRLKM967bdbk7FAbtgBFKseP4MPJJo&amp;usqp=CAU" rel="ligthbox">
                                <img className="img-fluid zoom" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYNiJpPyfzSyS-Zi7bqtxZsw3YREYhfam4SzR4SSRLKM967bdbk7FAbtgBFKseP4MPJJo&amp;usqp=CAU" alt="" />
                            </a>
                        </div>
                    </div>
                    <div className="col" data-wow-duration="1.4s">
                        <div>
                            <a href="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfUCJpep8N1O8Kkys5UjfgTdCyppvgeQy0pU0IO9E-_EH06q8hA69uyUD9kJ7US89RUz0&amp;usqp=CAU" className="fancybox" rel="ligthbox">
                                <img className="img-fluid zoom" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfUCJpep8N1O8Kkys5UjfgTdCyppvgeQy0pU0IO9E-_EH06q8hA69uyUD9kJ7US89RUz0&amp;usqp=CAU" alt="" />
                            </a>
                        </div>
                    </div>
                
                    <div className="col" data-wow-duration="1.4s">
                        <div>
                            <a href="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmuI5HFt9-OTy8Xp96v-yQJ7TlGXUXCUYhsgi5OLzsJ6XWiZz6K3p34oVdTzAd1e4_p9Y&amp;usqp=CAU" className="fancybox" rel="ligthbox"> 
                                <img className="img-fluid zoom" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmuI5HFt9-OTy8Xp96v-yQJ7TlGXUXCUYhsgi5OLzsJ6XWiZz6K3p34oVdTzAd1e4_p9Y&amp;usqp=CAU" />
                            </a>
                        </div>
                    </div>
                    <div className="col" data-wow-duration="1.4s">
                        <div>
                            <a href="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQoXgJWz3EfEqHiXAvvzrSGZ0rjk9h1TjRFO4fXlcuQzDrRUiKltuccdGinqGQT5rBI3kM&amp;usqp=CAU" className="fancybox" rel="ligthbox">
                                <img className="img-fluid zoom" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQoXgJWz3EfEqHiXAvvzrSGZ0rjk9h1TjRFO4fXlcuQzDrRUiKltuccdGinqGQT5rBI3kM&amp;usqp=CAU" />
                            </a>
                        </div>
                    </div>
                </div> 
            </div>
        </section>
        <footer className="text-center text-white" style={footerColor}>
            <div className="container pt-4">
                <section className="mb-4">

                    <a className="btn btn-link btn-floating btn-lg m-1 social-button text-decoration-none" href="#!" role="button"data-mdb-ripple-color="dark">
                        About
                    </a>

                    <a className="btn btn-link btn-floating btn-lg m-1 social-button text-decoration-none" href="#!" role="button"data-mdb-ripple-color="dark">
                        Contact
                    </a>
      
                    <a className="btn btn-link btn-floating btn-lg text-dark m-1" href="#!" role="button"data-mdb-ripple-color="dark">
                        <i className="fab fa-facebook-f social-button"></i>
                    </a>

                    <a className="btn btn-link btn-floating btn-lg text-dark m-1" href="#!" role="button" data-mdb-ripple-color="dark">
                        <i className="fab fa-twitter social-button"></i>
                    </a>
      
                    <a className="btn btn-link btn-floating btn-lg text-dark m-1" href="#!" role="button" data-mdb-ripple-color="dark">
                        <i className="fab fa-google social-button"></i>
                    </a>

                    <a className="btn btn-link btn-floating btn-lg text-dark m-1" href="#!" role="button" data-mdb-ripple-color="dark">
                        <i className="fab fa-instagram social-button"></i>
                    </a>

                    <a className="btn btn-link btn-floating btn-lg text-dark m-1" href="#!" role="button" data-mdb-ripple-color="dark">
                        <i className="fab fa-linkedin social-button"></i>
                    </a>
      
                </section>
            </div>
  
            <div className="text-center text-white p-3" style={lastcolor}>
                © MissionEd. All Rights Reserved.
            </div>
        </footer>
    </body>
    )
}
