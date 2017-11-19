import _ from 'lodash';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
// import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchPostList } from '../actions';

class BlogPage extends Component {


    componentDidMount(){
        
        this.props.fetchPostList();
        
    }

    renderPostList(){

        return _.map(this.props.posts, post => {

            const url = `/blog/${post.id}`;
            return (
                // <div key={post.id}>{post.id}</div>

                <li className="list-group-item" key={post.id}>
                
                    <Link to={url}>
                        {post.title.rendered}}
                    </Link>
                
                </li>
            );
        });
    }
    render(){

        console.log("BlogPage: " + this.props.posts);
        return (
            <div>
                <h1>Blog Page</h1>
                <ul className="list-group">
                    {this.renderPostList()}
                </ul>

                
            </div>
        );

    }
    
}

function mapStateToProps({ posts }) {
    
        return { posts };
}


export default connect(mapStateToProps, { fetchPostList })(BlogPage);
