import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../actions';

//Components
import Header from '../components/Header';
import Footer from '../components/Footer';
import PostShow from '../components/PostShow';

//Pages
import AboutPage from '../pages/AboutPage';
import PortfolioPage from '../pages/PortfolioPage';
import BlogPage from '../pages/BlogPage';
import ResourcesPage from '../pages/ResourcesPage';
import ContactPage from '../pages/ContactPage';



const App = () => {
    
    return (
        <div>
        <BrowserRouter>
            <div>
                <Header/>
                <Route exact path="/" component={AboutPage} />
                <Route exact path="/portfolio" component={PortfolioPage} />
                <Route exact path="/blog" component={BlogPage}/>
                <Route path="/blog/:id" component={PostShow} />
                <Route exact path="/resources" component={ResourcesPage} />
                <Route exact path="/contact" component={ContactPage} />
                <Footer/>
            </div>
        </BrowserRouter>
        </div>
    )
};
export default App;
