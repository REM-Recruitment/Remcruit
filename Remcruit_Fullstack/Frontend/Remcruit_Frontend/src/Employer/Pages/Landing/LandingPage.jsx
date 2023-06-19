import React from 'react'
//rfce
import EmployerNavbar from '../../components/navbarlanding/navbar'
import Posting from '../../components/samplePosting/posting'
import './landingStyles.css'
import TotalLogo from "./static/total.png";
import channels from "./static/channels.png";
import Footer from '../../../components/Footer/Footer'


function LandingPage() {

    return (
        <>
            <EmployerNavbar />
            <div className="mainlanding">
            <div className="all">

                <div className="heroSection">
                    <div className='leftHero'>
                        <div className="titleSection">
                            <h2>Hire the right people for your business </h2>
                            <p>Choose a plan that best suits you, so that your job can be recognized by the best candidates</p>
                            {/* < Posting /> */}
                        </div>
                       
                       
                    </div>
                  
                </div>
                <div className="cardsSection">
                    <div className="gold">Gold</div>
                    <div className="platinum">Platinum</div>
                    <div className="silver">Silver</div>
                </div>
                <div className="featuresSection">
                   <div className="feature">
                    <p>Reach students across universities in Nigeria</p>
                   </div>
                </div>
                <div className="companiesSection">
                    <div className="companiesContainer">
                        <p>  Join other Companies that use Remcruit</p>
                        <div className="companieslogos">
                        <img src={TotalLogo}alt=""/>  
                        <img src={channels}alt=""/>  
                        <img src={TotalLogo}alt=""/>  
                        <img src={TotalLogo}alt=""/>  
                        <img src={TotalLogo}alt=""/>  
                        <img src={TotalLogo}alt=""/>  
                        <img src={TotalLogo}alt=""/>   
                        </div>
                    </div>
                </div>
                <div className="statsSection">
                    <div className="statsContainer">
                        <div className="box">active</div>
                        <div className="box">visits</div>
                        <div className="box">job views</div>
                        <div className="box">applications</div>
                    </div>
                </div>
            </div>
            </div>
            <Footer />
        </>

    )
}

export default LandingPage