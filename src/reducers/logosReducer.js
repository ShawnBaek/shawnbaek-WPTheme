import { FETCH_LOGOS } from "../actions/types";

export default function(state = null, action) {

    console.log("Logo : " + action);

    switch (action.type) {

        case FETCH_LOGOS:
            return action.payload;

        default:
            return state;
    };

}