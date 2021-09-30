import React from 'react'
import Navbar from './Component/Navbar'
import {Route,Switch, } from "react-router-dom";
import Home from './Component/Home';
import Service from './Component/Service';
import About from './Component/About';
import Contact from './Component/Contact';
import Page404 from './Component/Page404';


function App() {
    return (
        <div>
        <Switch>
            <Route exact path="/">

            <Navbar/>
            <Home/>
            </Route>
            <Route exact path="/service" >
                <Navbar/>
                <Service/>
           
          
            </Route>
            <Route exact path='/about'>
                <Navbar/>
                <About/>
            </Route>
            <Route exact path="/contact">
                <Navbar/>
               <Contact/>
            </Route>
        <Route>
            <Page404/>
        </Route>
               
            

        </Switch>
        
        </div>
    )
}

export default App
