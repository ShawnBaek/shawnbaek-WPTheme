import { combineReducers } from 'redux';

import LogosReducer from './logosReducer';
import PostsReducer from './postsReducer';

const rootReducer = combineReducers({
    logos: LogosReducer,
    posts: PostsReducer
});


export default rootReducer;


