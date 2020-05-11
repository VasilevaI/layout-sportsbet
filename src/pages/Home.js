import React from 'react';
import UnderHeader from "../components/UnderHeader";
import PromoContainer from "../components/promo-banner/PromoContainer";
import Categories from "../components/sports-categories/Categories";
import Popular from "../components/popular/Popular";
import PromotionContainer from "../components/promotion/PromotionContainer";
import ProviderContainer from "../components/providers/ProviderContainer";

class Home extends React.Component {


    render() {
        return <>
         <div className="row">
                <div className="col">
                    <UnderHeader/>
                </div>
            </div>
            <div className="row">
                <div className="col">
                    <PromoContainer/>
                </div>
            </div>
            <div className="row">
                <div className="col">
                   <Categories/>
                </div>
            </div>
            <div className="row">
                <div className="col">
                  <Popular/>
                </div>
            </div>
            <div className="row">
                <div className="col">
                    <PromotionContainer/>
                </div>
            </div>
            <div className="row">
                <div className="col">
                    <ProviderContainer/>
                </div>
            </div>
           
        </>
    }
}

export default Home;


