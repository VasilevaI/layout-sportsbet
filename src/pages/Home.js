import React from 'react';
import PromoContainer from '../components/promo-banner/PromoContainer';

class Home extends React.Component {


    render() {
        return <>
            <div className="row">
                <div className="col">
                    <PromoContainer/>
                </div>
            </div>
        </>
    }
}



export default Home;


 