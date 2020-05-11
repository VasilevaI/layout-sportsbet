import React from 'react';
import FooterFirst from './FooterFirst';
import FooterSecond from './FooterSecond';
import FooterThird from './FooterThird';

const Footer = props => {

    return (
        <>
            <div className="container footer-container ">
                <div className="row d-flex ">
            <div className="first-column">
            <FooterFirst/>
            </div>
                 <div className="second-column d-flex ">
                  <FooterSecond/> 
                </div>
                <div className="third-column d-flex">
                <FooterThird/> 
                </div> 
            </div>
            </div>
        </>
    )
}
export default Footer