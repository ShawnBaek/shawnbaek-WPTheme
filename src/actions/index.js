import axios from 'axios';
import { FETCH_LOGOS, FETCH_ABOUT_PAGE, FETCH_POST_LIST, FETCH_POST  } from './types';


export const fetchLogos = () => {
    
        // console.log('fetchLogos -> ' + field);
        return function(dispatch) {
            axios
            .get('/wp-json/acf/v3/pages/6')
            .then(res => dispatch( { type: FETCH_LOGOS, payload: res.data.acf}));
        }
       
};



export const fetchAboutPage = () => {

    return function(dispatch) {
        axios
        .get('/wp-json/acf/v3/pages/6')
        .then(res => dispatch( { type: FETCH_ABOUT_PAGE, payload: res}));
    }
   
};

export const fetchPostList = () => {

    return function(dispatch) {
        axios
        .get('/wp-json/wp/v2/posts')
        .then(res => dispatch( { type: FETCH_POST_LIST, payload: res.data}));
    }
}


export const fetchPost = (postId) => {

    return function(dispatch) {
        axios
        .get(`/wp-json/wp/v2/posts/${postId}`)
        .then(res => dispatch( { type: FETCH_POST, payload: res.data}));
    }

}

