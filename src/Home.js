// import logo from './logo.svg';
import React from 'react';
import './App.css';
import { Layout } from './components/Layout';
import hand from './Photos/hand.png';


export const Home = () => {
    return(
        <div>
            <div class="row">
                <div class="col">
                    <div class="py-5" />
                    <div class="py-2" />
                    <div class="heading d-flex justify-content-center">UBC BIONICS</div>

                    <div class="d-flex justify-content-center align-middle">
                        <p class="text">
                        A STUDENT-LED DESIGN TEAM STRIVING TO FOSTER
                        EXCELLENCE IN BIONICS BY CREATING SOLUTIONS TO REPLACE HUMAN
                        PHYSIOLOGY AND ULTIMATELY IMPROVE QUALITY OF LIFE.
                        </p>
                    </div>
                </div>
                <div class="col">
                    <div class='py-3' />
                    <img class="mainArm img-responsive center-block d-block mx-auto" alt='' src={ hand } />
                    <div class='py-3' />
                </div>
            </div>
            <div class="row partTwo">
                <span className="headerWhite">UPDATES</span>
                <p className="infoBlock">
                    Amidst the increasing demand for bionic devices and UBC’s strategic
                    positioning in the field, our student-led  design team, UBC
                    Bionics, strives to foster excellence in bionics. Our ultimate goal is
                    to create solutions that  can replace human physiology, either
                    by prosthesis or implants. UBC Bionics' current project is to design
                    and  build a smart bionic hand, GRASP, that can be used by
                    individuals who have suffered amputation or congenital
                    birth defects. Join us on our journey and be a part of our
                    history! 
                </p>
                <span className="headerWhite">OUR MISSION</span>
                <br />
                <p className="infoBlock">
                    Amidst the increasing demand for bionic devices and UBC’s strategic
                    positioning in the field, our student-led design team, UBC
                    Bionics, strives to foster excellence in bionics. Our ultimate goal is
                    to create solutions that can replace human physiology, either
                    by prosthesis or implants. UBC Bionics' current project is to design
                    and build a smart bionic hand, GRASP, that can be used by
                    individuals who have suffered amputation or congenital
                    birth defects. Join us on our journey and be a part of our
                    history!
                </p>
                <span className="headerWhite">NEW RESEARCH TEAM</span> <br />
                <p className="infoBlock">
                    We are delighted to announce the recent addition of a brand new
                    research team to the UBC Bionics Team. 
                    This research team will collaborate on a collection of smaller group
                    projects with UBC professors and  graduate students, that will
                    help members develop skills to aid to the advancement of our current
                    project,
                    GRASP. For more details, view our FAQ section under the Join Us page!
                </p>
            </ div>
        </div>
    );
}
