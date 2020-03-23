import React from 'react'
// import logo from './layouts/components/logo.svg'
import logo from '../../logo.svg'
import {Link} from 'react-router-dom';

function NavBar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container">
                <Link className="navbar-brand" to="/">
                    <img src={logo} style={{ width:"35px"}} alt="logo" /> 
                </Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                {/* <span className="navbar-toggler-icon"></span> */}
                <span style={{ color: "#fff"}}><i className="fas fa-bars"></i></span>
                </button>
            
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav m-auto">
                        <li className="nav-item active">
                            <Link className="nav-link text-white text-uppercase ml-5" to="/">Home&nbsp;<i className="fas fa-home"></i><span className="sr-only">(current)</span></Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link text-white text-uppercase ml-5" to="/news">News</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link text-white text-uppercase ml-5" to="/contacts">contact us</Link>
                        </li>
                    </ul>
                    <form className="form-inline my-2 my-lg-0">
                        <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
                        <button className="btn btn-outline-primary my-2 my-sm-0" type="submit">Search</button>
                    </form>
                </div>
            </div>
      </nav>
    );
}

export default NavBar
