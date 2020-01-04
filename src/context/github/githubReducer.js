import { SEARCH_USERS, SET_FOUND, SET_LOGIN } from '../types';

export default (state, action) => {
    switch(action.type){
        case SEARCH_USERS:
            return {
                ...state,
                users: action.payload,
                found: true
            }
        case SET_FOUND:
            return {
                ...state,
                found: false
            }
        case SET_LOGIN:
            return {
                ...state,
                login: action.payload
            }
        default:
            return state;
    }
}