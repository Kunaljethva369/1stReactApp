import React from 'react';
import { NavLink } from 'react-router-dom';
import Button from '@material-ui/core/Button';
function Common({ heading, title, para, vist, btn, imgsrc }) {
    return ( 
        <>
            <div className="container home d-flex justify-content-center align-items-center">
                <div className="leftContent col-lg-6 col-md-6 col-sm-6 col-12 order-lg-1 order-md-1 order-2">
                    <h2>{heading}</h2>
                    <h3 style={{color:"rgba(170, 235, 90, 0.948)",textTransform:"uppercase"}}>{title}</h3>
                    <p>{para}</p>
                    <NavLink className="text-decoration-none" to={vist}><Button variant="outlined">{btn}</Button></NavLink>
                </div>
                <div className="rightContent col-lg-6 col-md-6 col-sm-6 col-12 order-lg-2 order-md-2 order-1 img-fluid">
                    <img src={imgsrc} className="img-fluid" alt="homePageImage" />
                </div>
            </div>
        </>
    )
}

export default Common;
