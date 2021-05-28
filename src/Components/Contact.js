import React from 'react';

function Contact() {
    return (
        <>
            <div className="container">
                <h2 className="text-center">Contact Us</h2>
            </div>
            <form className="container form">
                <div className="formContent">
                    <div className="name">Full Name</div>
                    <div>
                        <input type="text" placeholder="Enter Your Name" required />
                    </div>
                    <div className="name">Phone</div>
                    <div>
                        <input type="number" placeholder="Enter Your Number" required />
                    </div>
                    <div className="name">Email</div>
                    <div>
                        <input type="email" placeholder="Enter Your Email" required />
                    </div>
                    <div className="name">Message</div>
                    <div>
                        <textarea rows="5" cols="50" required />
                    </div>
                    <div className="submitbtn">
                        <button value="submit">Submit</button>
                    </div>
                </div>
            </form>
        </>
    )
}

export default Contact;
