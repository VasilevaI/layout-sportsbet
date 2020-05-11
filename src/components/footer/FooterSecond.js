import React from 'react';
import FooterContainer from './FooterContainer';

const FooterSecond = props => {

    return (
        <>
        
        <div className="footer-links d-flex">
            
            <FooterContainer
                title={"Sports"}
                links={
                <ul>
                <li>
                    <a href="/promotions">Promotions</a>
                    </li>
                    <li><a href="/sports/inplay">In play</a></li>
                    <li><a href="/sports/upcoming">Upcoming</a></li>
                    </ul>}>
            </FooterContainer>
             <FooterContainer
                title={"Casino"}
                links={
                <ul>
                    <li><a href="/casino/categories/live-dealer">Live Casino</a></li>
                    </ul>}>
            </FooterContainer>
            <FooterContainer
                title={"Support"}
                links={
                <ul>
                    <li><a href="/support/payment-options">Payment Options</a></li>
                    <li><a href="/support/responsible-gambling">Responsible Gambling</a></li>
                    <li><a href="/support/faq">FAQ</a></li>
                    <li><a href="/support/general-betting-rules">General Betting Rules</a></li>
                    <li><a href="/support/responsible-gambling-terms-and-conditions">Responsible Gambling Terms and Conditions</a></li>
                    <li><a href="/support/affiliate-faq">Affiliate FAQ</a></li>
                    <li><a href="/support/sportsbet-market-explanations">Sportsbet Market Explanations</a></li>
                    </ul>}>
            </FooterContainer>
            <FooterContainer
                title={"About"}
                links={
                <ul>
                    <li><a href="/about/privacy-policy">Privacy Policy</a></li>
                    <li><a href="/about/about-us">About Us</a></li>
                    <li><a href="/about/terms-and-conditions">Terms and Conditions</a></li><li><a href="/about/affiliates">Affiliates</a></li><li><a href="/about/affiliate-terms-and-conditions">Affiliate Terms and Conditions</a></li><li><a href="/about/vulnerability-disclosure-program">Bug Bounty Program</a></li></ul>}>
            </FooterContainer> 
            
        </div>
        </>
    )
}
export default FooterSecond