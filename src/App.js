import React from 'react';
import Navbar from './Components/Navbar';
import { Route, Switch,Redirect } from 'react-router-dom';
import Home from "./Components/Home";
import Service from "./Components/Service";
import About from "./Components/About";
import Contact from "./Components/Contact";
import Footer from './Components/Footer';

function App() {

    return (
        <>
            <div className='website'>
                <Navbar />
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/service" component={Service} />
                    <Route exact path="/about" component={About} />
                    <Route exact path="/contact" component={Contact} />
                    <Redirect to='/' />
                </Switch>
                <Footer />
            </div>

        </>
    )
}

export default App;
