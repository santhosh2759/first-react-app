import React, { useState, useContext } from 'react';
import GithubContext from '../../context/github/githubContext';
import './User.css'

const search = () => {
    const [login, setLogin] = useState('');
    const githubContext = useContext(GithubContext);

    const onSubmit = (event) => {
        event.preventDefault();
        githubContext.searchUsers(login);
        setLogin('');
    }
    
    const onChange = (event) => {
        setLogin(event.target.value);
    }

    return(
        <form onSubmit={onSubmit} className='form'>
            <input type='text' name='login' value={login} onChange={onChange} placeholder='Search users...' required />
            <input type='submit' value='Search' />
        </form>
    );
}

export default search;