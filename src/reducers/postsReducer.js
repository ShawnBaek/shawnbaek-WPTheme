import { FETCH_POST_LIST, FETCH_POST } from "../actions/types";

export default function(state = {}, action) {

    
    console.log(action);

    switch (action.type) {

        case FETCH_POST_LIST:
            return action.payload;

        case FETCH_POST:
            return action.payload;

        default:
            return state;
    };

}