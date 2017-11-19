import _ from 'lodash';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchPost } from '../actions';

class PostShow extends Component {


    componentDidMount(){
        
        const { id } = this.props.match.params;
        this.props.fetchPost(id);
        
    }

    render(){

        const postTitle =  _.result(this.props.posts, 'title.rendered');
        const postContents = _.result(this.props.posts, 'content.rendered');
        const postStatus = _.result(this.props.posts, 'status');
        const date = _.result(this.props.posts, 'date');


        return (
            <div className="container">
                <h1>{postTitle}</h1>
                <article 
                    dangerouslySetInnerHTML={ { __html: postContents } }>
                </article>

            </div>
        );

    }
    
}

function mapStateToProps({ posts }) {
    
        return { posts };
}


export default connect(mapStateToProps, { fetchPost })(PostShow);
