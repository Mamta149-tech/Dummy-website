import React from 'react'
import './Header.css';
import { Link } from "react-router-dom";

export default function IPLBonanza() {

    let style1 = 
    {
        transform: "none"
    }
    let style2 = 
    {
        display: "none"
    }
    let style3 =
    {
        display: "flex"
    }
    let style4 = 
    {
        display: "block"
    }
    let style5 = 
    {
        backgroundImage: "url(https://resources.stuff.co.nz/content/dam/images/1/o/z/p/i/6/image.related.StuffLandscapeSixteenByNine.710x400.1oz6wx.png/1521521408103.jpg)",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundAttachment: "fixed"
    }
    
    return (
        <body class="text-center" cz-shortcut-listen="true">
			<div id="container-fluid text-center p-5" class="fade-in" style={style5}>
                <div id="p-5">
                    <p className="font-title">Welcome to<br/>
                    IPL Bonanza</p>
                    <ul class="actions">
                        <li><a href="#team" class="button icon solid solo"><i className="fa fa-arrow-down scrolly fs-1 text-white"></i></a></li>
                    </ul>
                </div>
                <div className="container bg-white text-center py-5 my-5">
                    <h1 className="fs-1 text-uppercase fw-bolder mt-5 ipl-title"><a>What is IPL Bonanza ?</a></h1>
                    <p className="mt-5 fst-italic">A Platform where you can predict your winning team and get rewards</p>
                    <div className="container my-5 border-bottom">
                        <img src="https://www.missioned.in/MissionEd_Store_New/IPL-Bonanza/images/pic01.jpg" className="w-75 zoom"/><br/><br/><br/><br/>
                        <button type="button" class="btn btn-outline-primary fs-3">
                            Learn More
                        </button><br/><br/><br/><br/><br/><br/><br/><br/>
                    </div>
                    <div className="border-bottom pb-5" id="team">
                        <h1 className="fs-1 text-uppercase fw-bolder mt-5 ipl-title"><a>Select your Team</a></h1>
                    </div>
                    <div className="row border-bottom">
                        <div className="col border-end h-100">
                            <h3 className="text-uppercase fw-bolder mt-3 ipl-title"><a>MUMBAI INDIANS</a></h3>
                            <img src="https://www.missioned.in/MissionEd_Store_New/IPL-Bonanza/images/MI.jpg" className="w-75 h-100 zoom"/><br/><br/>
                            <button type="button" class="btn btn-outline-primary fs-3">
                                <Link to="/login" className="text-decoration-none">Select</Link>
                            </button><br/><br/><br/><br/>
                        </div>
                        <div className="col border-end h-100">
                            <h3 className="text-uppercase fw-bolder mt-3 ipl-title"><a>CHENNAI SUPER KINGS</a></h3>
                            <img src="https://www.missioned.in/MissionEd_Store_New/IPL-Bonanza/images/CSK.jpg" className="w-75 h-100 zoom"/><br/><br/>
                            <button type="button" class="btn btn-outline-primary fs-3">
                                <Link to="/login" className="text-decoration-none">Select</Link>
                            </button><br/><br/><br/><br/>
                        </div>
                    </div>
                    <div className="row border-bottom">
                        <div className="col border-end h-100">
                            <h3 className="text-uppercase fw-bolder mt-3 ipl-title"><a>ROYALS CHALLENGER<br/>BANGLORE</a></h3>
                            <img src="https://www.missioned.in/MissionEd_Store_New/IPL-Bonanza/images/RCB.jpg" className="w-75 h-100 zoom"/><br/><br/>
                            <button type="button" class="btn btn-outline-primary fs-3">
                                <Link to="/login" className="text-decoration-none">Select</Link>
                            </button><br/><br/><br/><br/>
                        </div>
                        <div className="col border-end h-100">
                            <h3 className="text-uppercase fw-bolder mt-3 ipl-title"><a>KOLKATA KNIGHT<br/>RIDERS</a></h3>
                            <img src="https://www.missioned.in/MissionEd_Store_New/IPL-Bonanza/images/KKR.jpg" className="w-75 h-100 zoom"/><br/><br/>
                            <button type="button" class="btn btn-outline-primary fs-3">
                                <Link to="/login" className="text-decoration-none">Select</Link>
                            </button><br/><br/><br/><br/>
                        </div>
                    </div>
                    <div className="row border-bottom">
                        <div className="col border-end h-100">
                            <h3 className="text-uppercase fw-bolder mt-3 ipl-title"><a>DELHI CAPITALS</a></h3>
                            <img src="https://www.missioned.in/MissionEd_Store_New/IPL-Bonanza/images/DC.jpg" className="w-75 h-100 zoom"/><br/><br/>
                            <button type="button" class="btn btn-outline-primary fs-3">
                                <Link to="/login" className="text-decoration-none">Select</Link>
                            </button><br/><br/><br/><br/>
                        </div>
                        <div className="col border-end h-100">
                            <h3 className="text-uppercase fw-bolder mt-3 ipl-title"><a>PUNJAB KINGS</a></h3>
                            <img src="https://www.missioned.in/MissionEd_Store_New/IPL-Bonanza/images/PK.jpeg" className="w-75 h-100 zoom"/><br/><br/>
                            <button type="button" class="btn btn-outline-primary fs-3">
                                <Link to="/login" className="text-decoration-none">Select</Link>
                            </button><br/><br/><br/><br/>
                        </div>
                    </div>
                    <div className="row border-bottom">
                        <div className="col border-end h-100">
                            <h3 className="text-uppercase fw-bolder mt-3 ipl-title"><a>SUNRISERS HYDERABAD</a></h3>
                            <img src="https://www.missioned.in/MissionEd_Store_New/IPL-Bonanza/images/SRH.jpg" className="w-75 h-100 zoom"/><br/><br/>
                            <button type="button" class="btn btn-outline-primary fs-3">
                                <Link to="/login" className="text-decoration-none">Select</Link>
                            </button><br/><br/><br/><br/>
                        </div>
                        <div className="col border-end h-100">
                            <h3 className="text-uppercase fw-bolder mt-3 ipl-title"><a>RAJASTHAN ROYALS</a></h3>
                            <img src="https://www.missioned.in/MissionEd_Store_New/IPL-Bonanza/images/RR.jpeg" className="w-75 h-100 zoom"/><br/><br/>
                            <button type="button" class="btn btn-outline-primary fs-3">
                                <Link to="/login" className="text-decoration-none">Select</Link>
                            </button><br/><br/><br/><br/>
                        </div>
                    </div>
                    <br/><br/>
                    <button type="button" class="btn btn-outline-primary fs-4">
                        <Link to="/" className="text-decoration-none">GO TO THE MISSIONED STORE</Link>
                    </button><br/><br/>
                </div>
                <footer className="text-center text-white bg-dark">
                    <div className="text-center text-white p-3">
                        © MISSIONED &nbsp; | &nbsp; IPL BONANZA
                    </div>
                </footer>
            </div>
            
        </body>
    )
}
