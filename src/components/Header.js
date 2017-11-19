import _ from 'lodash';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
// import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchLogos } from '../actions';

class Header extends Component {


    componentDidMount(){

        this.props.fetchLogos();


    }

    render() {
       
        const logoUrl =  _.result(this.props.logos, 'logo_light.url');

        return (
            <header>
                <nav className="navbar navbar-expand-lg navbar-light">
                    <Link to="/" className="navbar-brand">
                        <img src={logoUrl} width="auto" height="30" alt=""/>
                    </Link>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav ml-auto">
                    <Link to="/" className="nav-item nav-link">About</Link>
                    <Link to="/portfolio" className="nav-item nav-link">Portfolio</Link>
                    <Link to="/blog" className="nav-item nav-link">Blog</Link>
                    <Link to="/resources" className="nav-item nav-link">Resources</Link>
                    <Link to="/contact" className="nav-item nav-link">Contact</Link>
                    </div>
                    </div>
                </nav>
        
            </header>
            
        );
    }

}

function mapStateToProps({ logos }) {
    
        return { logos };
}


export default connect(mapStateToProps, { fetchLogos })(Header);
