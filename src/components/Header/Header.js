// import files 
import React from 'react';
import './Header.css'
const Header = () => {
    return (
        // title 
        <div className='title-style'>
            <h1 className='text-center fw-bold'>BOOK BAZAR</h1>
            {/* budget  */}
            <h4 className='text-center'>Total Budget for Buying Book: $2000</h4>
            {/* nav bar  */}
            <nav className="navbar navbar-expand-lg navbar-light">
                <div className="container-fluid">
                    <a className="navbar-brand fw-bold" href="/navBar">Home</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="navbar-brand fw-bold" href="/navBar">Category</a>
                            </li>

                        </ul>
                        <form className="d-flex">
                            <input className="form-control me-5" type="search" placeholder="Search" aria-label="Search" />
                            <button className="btn btn-outline-success  fw-bold" type="submit">Search</button>
                        </form>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Header;