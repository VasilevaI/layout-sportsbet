import React from 'react';
import ProviderBanner from './ProviderBanner';

const ProviderContainer = props => {

    return (
        <>
        <h3 className="category-heading">Game Providers</h3>
        <div className="provider-container d-flex">
            
            <ProviderBanner
                image={"https://www.evolutiongaming.com/sites/default/files/evo_logo_500x500.jpg"}>
            </ProviderBanner>
            <ProviderBanner
                image={"https://www.kindpng.com/picc/m/649-6494828_asia-gaming-asia-gaming-png-transparent-png.png"}>
            </ProviderBanner>
            <ProviderBanner
                image={"https://www.spinsify.com/wp-content/uploads/2019/01/gameart.jpg"}>
            </ProviderBanner>
            <ProviderBanner
                image={"https://assets.gamingintelligence.com/wp-content/uploads/2018/09/18060117/booming_games_New-lg.jpg"}>
            </ProviderBanner>
            <ProviderBanner
                image={"https://calvinayre.com/uploads/2020/01/microgaming-logo-1.jpg"}>
            </ProviderBanner>
            <ProviderBanner
                image={"https://www.seekpng.com/png/detail/105-1057069_blueprint-gaming-blueprint-gaming-logo-png.png"}>
            </ProviderBanner>
           
        </div>
        </>
    )
}
export default ProviderContainer