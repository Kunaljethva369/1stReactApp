import React from 'react';
import CardData from './CardData';
import Card from './Card';

function Service() {
    return (
        <>
            <div className="my-5">
                <h2 className="text-center">Our Services</h2>
            </div>
            <div className="container mb-5">
                <div className="row">
                    <div className="col-12 mx-auto">
                        <div className="row gy-4 service">
                            {
                                CardData.map((val) => {
                                    return <Card
                                        key={val.id}
                                        title={val.title}
                                        imgsrc={val.imgsrc}
                                    />
                                })
                            }
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Service;
