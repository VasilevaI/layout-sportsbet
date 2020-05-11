import React from 'react';

const Popular = props => {
    const elements = ['Live dealer', 'Poker', 'Live dealer', ];
    return (
        <div className="popular-wrapper">
            <h3>Popular</h3>
            <div className="popular-container d-flex">
                <ul className="popular-list scrollbar-custom d-flex">
                    <li className="single-item">
                        <a href="#" className="d-flex">
                            <img src="https://thumbs.dreamstime.com/b/poker-cards-2209066.jpg"/>
                            <div className="popular-info d-flex align-items-center">
                                Live dealer
                            </div>
                        </a>
                    </li>
                    {elements.map((value, index) => {
                        return <li key={index} className="single-item">
                                    <a href="#" className="d-flex">
                                        <img src="https://thumbs.dreamstime.com/b/poker-cards-2209066.jpg"/>
                                        <div className="popular-info d-flex align-items-center">
                                            {value}
                                        </div>
                                    </a>
                                </li>
                    })}
                </ul>
            </div>
        </div>
    )
}
export default Popular