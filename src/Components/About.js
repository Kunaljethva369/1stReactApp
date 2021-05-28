import React from 'react';
import Common from './Common';

function About() {
    return (
        <>
            <Common 
                heading="Welcome To About Page"
                title='Kunal Jethva'
                para="We Are Here To Get The Best Responsive Layout!!"
                btn="Contact Here"
                vist="/contact"
                imgsrc="/images/aboutpage.svg"
            />
        </>
    )
}

export default About;
