import React, { useReducer } from 'react';
import GithubReducer from './githubReducer';
import GithubContext from './githubContext';
import axios from 'axios';
import { SEARCH_USERS, SET_FOUND, SET_LOGIN } from '../types';

const GithubState = (props) => {
    const initialState = {
        users: [],
        found: true,
        login:''
    }

    const[state, dispatch] = useReducer(GithubReducer, initialState);

    const setFound = () => dispatch({ type: SET_FOUND });

    const setLogin = (login) => dispatch({ type: SET_LOGIN, payload: login });
    const searchUsers = async (login) => {
        setLogin(login);
        const res = await axios.get(`https://api.github.com/search/users?q=${login}`);
        if(res.data.items.length === 0){
            setFound();
        }
        //items will have sort, 
        //and pageable options along with data
        dispatch({
            type: SEARCH_USERS,
            payload: res.data.items
        });
    }
    
    return <GithubContext.Provider value={{
        users: state.users,
        found: state.found,
        login: state.login,
        searchUsers
    }}>
        {props.children}
    </GithubContext.Provider>
}

export default GithubState;