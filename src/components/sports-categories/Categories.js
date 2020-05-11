import React from 'react';

const Categories = props => {
    const elements = ['Soccer', 'eSoccer', 'eNBA', 'Soccer', 'eSoccer', 'eNBA', 'Soccer', 'eSoccer', 'eNBA', 'Soccer', 'eSoccer', 'eNBA', 'Soccer', 'eSoccer', 'eNBA'];
    return (
        <div className="categories-wrapper">
            <h3>Categories</h3>
            <div className="categories-container d-flex">
                <ul className="category-list scrollbar-custom">
                    <li className="single-category">
                        <a href="#">
                            <div className="svg-wrapper">
                                <svg width="1em" height="1em" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" color="#D33030">
                                    <path fillRule="evenodd" clipRule="evenodd" d="M16.887 10l1.082-1.873c.142.602.225 1.227.225 1.873a8.16 8.16 0 0 1-.225 1.874L16.887 10zm-3.431 5.987h2.12a8.166 8.166 0 0 1-3.187 1.85l1.067-1.85zm-6.912 0l1.067 1.85a8.17 8.17 0 0 1-3.187-1.85h2.12zm0-11.974h-2.12a8.186 8.186 0 0 1 3.187-1.85l-1.067 1.85zm6.912 0l-1.068-1.85a8.178 8.178 0 0 1 3.187 1.85h-2.119zm2.734 5.584h-2.734l-1.379-2.389 1.379-2.389h2.734l1.379 2.39-1.38 2.388zm-7.57 3.599h2.734l1.392 2.41-1.366 2.368H8.62l-1.379-2.39 1.38-2.388zm-4.864-2.793h2.759l1.379 2.39-1.379 2.388H3.756l-1.378-2.388 1.378-2.39zm2.759-5.584l1.379 2.39-1.379 2.388H3.756L2.378 7.208 3.756 4.82h2.759zm4.839 1.986H8.62L7.241 4.416l1.38-2.389h2.759l1.366 2.367-1.392 2.411zM8.62 12.39L7.241 10l1.38-2.389h2.733L12.733 10l-1.379 2.39H8.62zm4.836 2.79l-1.379-2.387 1.379-2.39h2.734l1.379 2.39-1.38 2.388h-2.733zM1.806 10c0-.622.076-1.226.207-1.81L3.058 10l-1.044 1.81A8.167 8.167 0 0 1 1.806 10zM10 1c-4.963 0-9 4.037-9 9s4.037 9 9 9 9-4.037 9-9-4.037-9-9-9z" fill="currentColor"></path>
                                </svg>
                            </div>
                            <div className="category-info">
                                Soccer
                            </div>
                        </a>
                    </li>
                    <li className="single-category">
                        <a href="#">
                            <div className="svg-wrapper">
                                <svg width="1em" height="1em" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" color="#D33030">
                                    <path fillRule="evenodd" clipRule="evenodd" d="M16.887 10l1.082-1.873c.142.602.225 1.227.225 1.873a8.16 8.16 0 0 1-.225 1.874L16.887 10zm-3.431 5.987h2.12a8.166 8.166 0 0 1-3.187 1.85l1.067-1.85zm-6.912 0l1.067 1.85a8.17 8.17 0 0 1-3.187-1.85h2.12zm0-11.974h-2.12a8.186 8.186 0 0 1 3.187-1.85l-1.067 1.85zm6.912 0l-1.068-1.85a8.178 8.178 0 0 1 3.187 1.85h-2.119zm2.734 5.584h-2.734l-1.379-2.389 1.379-2.389h2.734l1.379 2.39-1.38 2.388zm-7.57 3.599h2.734l1.392 2.41-1.366 2.368H8.62l-1.379-2.39 1.38-2.388zm-4.864-2.793h2.759l1.379 2.39-1.379 2.388H3.756l-1.378-2.388 1.378-2.39zm2.759-5.584l1.379 2.39-1.379 2.388H3.756L2.378 7.208 3.756 4.82h2.759zm4.839 1.986H8.62L7.241 4.416l1.38-2.389h2.759l1.366 2.367-1.392 2.411zM8.62 12.39L7.241 10l1.38-2.389h2.733L12.733 10l-1.379 2.39H8.62zm4.836 2.79l-1.379-2.387 1.379-2.39h2.734l1.379 2.39-1.38 2.388h-2.733zM1.806 10c0-.622.076-1.226.207-1.81L3.058 10l-1.044 1.81A8.167 8.167 0 0 1 1.806 10zM10 1c-4.963 0-9 4.037-9 9s4.037 9 9 9 9-4.037 9-9-4.037-9-9-9z" fill="currentColor"></path>
                                </svg>
                            </div>
                            <div className="category-info">
                                eSoccer
                            </div>
                        </a>
                    </li>
                    <li className="single-category">
                        <a href="#">
                            <div className="svg-wrapper">
                                <svg width="1em" height="1em" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" color="#B3804A">
                                    <path fillRule="evenodd" clipRule="evenodd" d="M10.403 12.841v-2.438h7.77a8.143 8.143 0 0 1-1.96 4.924 8.89 8.89 0 0 0-5.81-2.486zm0 .806a8.1 8.1 0 0 1 5.257 2.263 8.157 8.157 0 0 1-5.257 2.265v-4.528zm-.806 0v4.528a8.16 8.16 0 0 1-5.26-2.266 8.115 8.115 0 0 1 5.26-2.262zm0-7.293A8.094 8.094 0 0 1 4.339 4.09a8.165 8.165 0 0 1 5.258-2.265v4.528zm.806 0V1.826a8.166 8.166 0 0 1 5.26 2.266 8.115 8.115 0 0 1-5.26 2.262zm7.77 3.243h-7.77V7.16a8.912 8.912 0 0 0 5.813-2.484 8.141 8.141 0 0 1 1.958 4.921zM3.786 4.674A8.887 8.887 0 0 0 9.597 7.16v2.437h-7.77a8.145 8.145 0 0 1 1.958-4.923zm-1.959 5.729h7.771v2.438a8.904 8.904 0 0 0-5.813 2.485 8.15 8.15 0 0 1-1.958-4.923zm14.716 5.759A8.962 8.962 0 0 0 19 10c0-4.963-4.037-9-9-9a8.967 8.967 0 0 0-6.501 2.794c-.006.004-.012.002-.017.006-.007.007-.004.018-.01.023A8.96 8.96 0 0 0 1 10c0 4.964 4.037 9 9 9 2.55 0 4.85-1.07 6.49-2.78.01-.008.023-.004.032-.013.013-.013.01-.031.02-.045z" fill="currentColor"></path>
                                </svg>
                            </div>
                            <div className="category-info">
                                eNBA
                            </div>
                        </a>
                    </li>
                    {elements.map((value, index) => {
                        return <li key={index}  className="single-category">
                                    <a href="#">
                                        <div className="svg-wrapper">
                                            <svg width="1em" height="1em" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" color="#D33030">
                                                <path fillRule="evenodd" clipRule="evenodd" d="M16.887 10l1.082-1.873c.142.602.225 1.227.225 1.873a8.16 8.16 0 0 1-.225 1.874L16.887 10zm-3.431 5.987h2.12a8.166 8.166 0 0 1-3.187 1.85l1.067-1.85zm-6.912 0l1.067 1.85a8.17 8.17 0 0 1-3.187-1.85h2.12zm0-11.974h-2.12a8.186 8.186 0 0 1 3.187-1.85l-1.067 1.85zm6.912 0l-1.068-1.85a8.178 8.178 0 0 1 3.187 1.85h-2.119zm2.734 5.584h-2.734l-1.379-2.389 1.379-2.389h2.734l1.379 2.39-1.38 2.388zm-7.57 3.599h2.734l1.392 2.41-1.366 2.368H8.62l-1.379-2.39 1.38-2.388zm-4.864-2.793h2.759l1.379 2.39-1.379 2.388H3.756l-1.378-2.388 1.378-2.39zm2.759-5.584l1.379 2.39-1.379 2.388H3.756L2.378 7.208 3.756 4.82h2.759zm4.839 1.986H8.62L7.241 4.416l1.38-2.389h2.759l1.366 2.367-1.392 2.411zM8.62 12.39L7.241 10l1.38-2.389h2.733L12.733 10l-1.379 2.39H8.62zm4.836 2.79l-1.379-2.387 1.379-2.39h2.734l1.379 2.39-1.38 2.388h-2.733zM1.806 10c0-.622.076-1.226.207-1.81L3.058 10l-1.044 1.81A8.167 8.167 0 0 1 1.806 10zM10 1c-4.963 0-9 4.037-9 9s4.037 9 9 9 9-4.037 9-9-4.037-9-9-9z" fill="currentColor"></path>
                                            </svg>
                                        </div>
                                        <div className="category-info">
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
export default Categories