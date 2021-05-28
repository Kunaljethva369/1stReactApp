import React from 'react';
import { NavLink } from 'react-router-dom';
import NightsStayIcon from '@material-ui/icons/NightsStay';
import WbSunnyIcon from '@material-ui/icons/WbSunny';
import EcoIcon from '@material-ui/icons/Eco';

function Navbar() {
    function moon() {
        document.body.classList.toggle("dark")
        let sun = document.getElementById("sun");
        let moons = document.getElementById("moon");
        moons.style.display = "none";
        sun.style.display = "flex";
    }
    function suns() {
        document.body.classList.toggle("dark");
        let sun = document.getElementById("sun");
        let moons = document.getElementById("moon");
        moons.style.display = "flex";
        sun.style.display = "none";
    }

    return (
        <>
            <div className="container">
                <nav className="navbar navbar-expand-xl navbar-dark">
                    <div className="container">

                        <a className="navbar-brand" href="#">React App</a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>

                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav  mb-lg-0">
                                <li className="nav-item">
                                    <NavLink activeClassName="active" className="nav-link" exact to="/">Home</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink activeClassName="active" className="nav-link" exact to="/service">Service</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink activeClassName="active" className="nav-link" exact to="/about">About</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink activeClassName="active" className="nav-link" exact to="/contact">Contact</NavLink>
                                </li>
                            </ul>
                        </div>
                        <div className="nav-item" onClick={moon} id="moon">
                            <NightsStayIcon />
                        </div>
                        <div className="nav-item" style={{ display: 'none' }} id="sun" onClick={suns}>
                            <WbSunnyIcon />
                        </div>
                    </div>
                </nav>
            </div>
        </>
    )
}

export default Navbar;
