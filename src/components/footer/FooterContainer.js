import React from 'react';

const FooterContainer = props => {

    return (
        <div className="second justify-content-between">
            
                <div className="footer-title"><h4>{props.title}</h4></div>
                <div className="footer-links">{props.links}</div>
                {props.children}
            </div>      
    )

}
export default FooterContainer