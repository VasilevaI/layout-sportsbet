import React from 'react';

const PromotionBanner = props => {

    return (
        <div className="col-md-6 promotion-banner d-flex justify-content-between">
            <div className="banner-info align-middle">
                <div className="promotion-title"><h3>{props.title}</h3></div>
                <div className="promotion-description">{props.description}</div>
                {props.children}
            </div>
            <div className="right">
            <div className="flag">{props.icon} </div>
            <img className="img-right" src={props.image}/>
            </div>
        </div>
    )
}
export default PromotionBanner