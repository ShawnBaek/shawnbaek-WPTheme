import _ from 'lodash';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchLogos } from '../actions';

class Footer extends Component {


    componentDidMount(){

        this.props.fetchLogos();

    }

    render() {
       
        const logoUrl =  _.result(this.props.logos, 'logo_dark.url');

        return (
            <footer>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-3">
                            <img src={logoUrl} width="auto" height="30" alt=""/>
                            
                            <div className="footer-text">
                                &copy; Copyright 2015-2017
                            </div>
                        </div>

                        <div className="col-2">
                            Products
                            <nav className="nav flex-column">
                                <a target="_blank" className="nav-link" href="#">Project A</a>
                                <a target="_blank" className="nav-link" href="#">Project B</a>
                            </nav>
                        </div>

                        <div className="col-2">
                            Social
                            <nav className="nav flex-column">
                                <a target="_blank" className="nav-link" href="https://twitter.com/yoshiboarder">Twitter</a>
                                <a target="_blank" className="nav-link" href="https://github.com/ShawnBaek">Github</a>
                                <a target="_blank" className="nav-link" href="https://stackoverflow.com/users/5040508/shawn-baek">Stack Overflow</a>
                                <a target="_blank" className="nav-link" href="https://500px.com/shawnbaek">500px</a>
                            </nav>
                        </div>

                        <div className="col-2">
                            Contact
                            <nav className="nav flex-column">
                                <a target="_blank" className="nav-link" href="mailto:shawn@shawnbaek.com?Subject=Hi, ">E-Mail</a>
                                <a target="_blank" className="nav-link" href="#">Skype</a>
                            </nav>
                        </div>

                        <div className="col-3">
                            About this site
                            <div className="footer-text">
                            Design & Development by Shawn Baek
                            
                            </div>
                            <div className="footer-text">
                            Wordpress Rest API + React.js 
                            </div>
                        </div>
                    </div>
                </div>
        
            </footer>
            
        );
    }

}

function mapStateToProps({ logos }) {    
        return { logos };
}
export default connect(mapStateToProps, { fetchLogos })(Footer);
