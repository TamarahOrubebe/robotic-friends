import {
    CHANGE_SEARCH_FIELD,
    GET_ROBOTS_PENDING,
    GET_ROBOTS_SUCCESS,
    GET_ROBOTS_FAILED,
} from "./constants"

const initialSearchRobotsState = {
    searchfield: ""
}


export const searchRobots= (state = initialSearchRobotsState, action = {}) => {
    
    switch (action.type) {
        case CHANGE_SEARCH_FIELD:
            return Object.assign({}, state, { searchfield: action.payload });
        
        default:
            return state;
    }

}



const initialFetchRobotsState = {

    robots: [],
    isPending: false,
    error: ""

}

 export const fetchRobots = (state = initialFetchRobotsState, action = {}) => {

    switch (action.type) {
        case GET_ROBOTS_PENDING:
            return Object.assign({}, state, { isPending: true });
        
        case GET_ROBOTS_SUCCESS:
            return Object.assign({}, state, { robots: action.payload, isPending: false });
        
        case GET_ROBOTS_FAILED:
            return Object.assign({}, state, { error: action.payload, isPending: false });
        
        default:
            return state;
    }
}