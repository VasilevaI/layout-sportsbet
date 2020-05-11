import React from 'react';

const ProviderBanner = props => {

    return (
        <>

            <div className="provider-banner d-flex justify-content-between">
                <ul className="logo-carousel">
                    <li>
                        <a>
                            <img className="logo" src={props.image} />
                        </a>
                    </li>
                </ul>
            </div>
        </>
    )
}
export default ProviderBanner