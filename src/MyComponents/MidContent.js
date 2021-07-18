import React from 'react'
import './Header.css';
import { Link } from "react-router-dom";


export default function MidContent() {
    let heroimg =
    {
        width: "35rem"
    }
    let stylebg =
    {
        backgroundColor: "#b8c6db",
        backgroundImage: "linear-gradient(315deg, #b8c6db 0%, #f5f7fa 74%)"

    }
    return (
        <>
            <section className="section-bg text-center py-5" style={stylebg}>
                <div className="container">
                    <div className="row" id="team">
                        <div className="col-md-8">
                            <div className="section-title">
                                <h1 className="missioned text-uppercase">Deals of the day</h1>
                            </div>

                            <div className="row my-5">

                                <div className="col-lg-3 col-md-6 d-flex align-items-stretch my-4">
                                    <div className="member bg-white shadow rounded">
                                        <div className="member-img">
                                            <br/>
                                            <img src="https://www.missioned.in/MissionEd_Store_New/assets/img/items/1.jpg" className="img-fluid" alt=""/>
                                
                                        </div>
                                        <div className="member-info py-4 px-2 text-start">
                                            <h5>Fire Boltt Headphones</h5>
                                            <button className="btn btn-info" onclick="">Buy</button>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-6 d-flex align-items-stretch my-4">
                                    <div className="member bg-white shadow rounded">
                                        <div className="member-img">
                                            <br/>
                                            <img src="https://www.missioned.in/MissionEd_Store_New/assets/img/items/2.jpg" className="img-fluid" alt=""/>
                                
                                        </div>
                                        <div className="member-info py-4 px-2 text-start">
                                            <h5>Fire Boltt Headphones</h5>
                                            <button className="btn btn-info" onclick="">Buy</button>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-6 d-flex align-items-stretch my-4">
                                    <div className="member bg-white shadow rounded">
                                        <div className="member-img">
                                            <br/>
                                            <img src="https://www.missioned.in/MissionEd_Store_New/assets/img/items/3.jpg" className="img-fluid" alt=""/>
                                
                                        </div>
                                        <div className="member-info py-4 px-2 text-start">
                                            <h5>Fire Boltt Headphones</h5>
                                            <button className="btn btn-info" onclick="">Buy</button>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-6 d-flex align-items-stretch my-4">
                                    <div className="member bg-white shadow rounded">
                                        <div className="member-img">
                                            <br/>
                                            <img src="https://www.missioned.in/MissionEd_Store_New/assets/img/items/4.jpg" className="img-fluid" alt=""/>
                                
                                        </div>
                                        <div className="member-info py-4 px-2 text-start">
                                            <h5>Fire Boltt Headphones</h5>
                                            <button className="btn btn-info" onclick="">Buy</button>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-6 d-flex align-items-stretch my-4">
                                    <div className="member bg-white shadow rounded">
                                        <div className="member-img">
                                            <br/>
                                            <img src="https://www.missioned.in/MissionEd_Store_New/assets/img/items/5.jpg" className="img-fluid" alt=""/>
                                
                                        </div>
                                        <div className="member-info py-4 px-2 text-start">
                                            <h5>Fire Boltt Headphones</h5>
                                            <button className="btn btn-info" onclick="">Buy</button>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-6 d-flex align-items-stretch my-4">
                                    <div className="member bg-white shadow rounded">
                                        <div className="member-img">
                                            <br/>
                                            <img src="https://www.missioned.in/MissionEd_Store_New/assets/img/items/6.jpg" className="img-fluid" alt=""/>
                                
                                        </div>
                                        <div className="member-info py-4 px-2 text-start">
                                            <h5>Fire Boltt Headphones</h5>
                                            <button className="btn btn-info" onclick="">Buy</button>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-6 d-flex align-items-stretch my-4">
                                    <div className="member bg-white shadow rounded">
                                        <div className="member-img">
                                            <br/>
                                            <img src="https://www.missioned.in/MissionEd_Store_New/assets/img/items/7.jpg" className="img-fluid" alt=""/>
                                
                                        </div>
                                        <div className="member-info py-4 px-2 text-start">
                                            <h5>Fire Boltt Headphones</h5>
                                            <button className="btn btn-info" onclick="">Buy</button>
                                        </div>
                                    </div>
                                </div> 
                                
                                <div className="col-lg-3 col-md-6 d-flex align-items-stretch my-4">
                                    <div className="member bg-white shadow rounded">
                                        <div className="member-img">
                                            <br/>
                                            <img src="https://www.missioned.in/MissionEd_Store_New/assets/img/items/8.jpg" className="img-fluid" alt=""/>
                                
                                        </div>
                                        <div className="member-info py-4 px-2 text-start">
                                            <h5>Fire Boltt Headphones</h5>
                                            <button className="btn btn-info" onclick="">Buy</button>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                        <div className="col-md-4 mt-lg-5">
                            <div className="section-title text-center">
                                <h3 className="missioned text-uppercase">Earn Coins <br/>By Studying!</h3>
                                <br/>
                                <img src="http://study.com/cimages/course-image/ohio-assessments-for-educators-computer-technology-subtests-i-ii-practice-study-guide_218362_large.jpg" className="img-fluid" alt=""/>
                                <br/>
                                <br/>
                                <Link to="/login" className="btn btn-info mb-4 text-white fw-bold text-capitalize">Go to MissionEd classes(for College Students)</Link>
                            </div>
                            <div className="section-title text-center">
                                <img src="https://www.missioned.in/MissionEd_Store_New/8-12%20classes%20img.jpg" className="img-fluid" alt=""/>
                                <br/>
                                <br/>
                                <Link to="/login" className="btn btn-info text-white fw-bold text-capitalize">Go to MissionEd classNamees(8-12)</Link>
                            </div>
                        </div>
                            
                    </div>
                </div>
                        
                <div className="section-title">
                    <h1 className="text-uppercase missioned mt-5 mb-4"> Refferal Page</h1>
                    <Link to="/referral">
                        <img style={heroimg} className="img-fluid" src="https://media.istockphoto.com/photos/word-writing-referral-program-business-concept-for-refer-marketing-picture-id947065504?k=6&m=947065504&s=170667a&w=0&h=XgJ7tvnkOYZHVBbGkS2_7GE_326y-qpNigxXePECaCo=" alt="refferal images"/></Link> <br/>
                    <Link to="/referral" className="btn btn-info text-white fw-bold text-capitalize mt-1">Check</Link>

                </div>
                        
                        
                <div className="section-title mt-4">
                    <h1 className="missioned text-uppercase mt-5">Earn Coins By Playing IPL-Bonanza!</h1>
                    <Link to="/IPLBonanza"><img style={heroimg} className="img-fluid" src="https://www.missioned.in/MissionEd_Store_New/IPL-Bonanza/images/ipl2.png" alt="ipl images"/></Link> <br/>
                    <Link to="/IPLBonanza" className="btn btn-info text-white fw-bold text-capitalize">Play Now</Link>

                </div>
            </section>
        </>
    )
}
