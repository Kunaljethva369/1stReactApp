import React from 'react';
import Button from '@material-ui/core/Button';

function Card({ title, imgsrc }) {
    return (
        <>
            <div className="col-lg-4 col-md-6 col-sm-12 col-12 service">
                <div className="card">
                    <img src={imgsrc} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{title}</h5>
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <Button variant="outlined">Check Now</Button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Card;
