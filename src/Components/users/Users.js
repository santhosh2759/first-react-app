import React, { useContext } from 'react';
import User from './User';
import './User.css';
import GithubContext from '../../context/github/githubContext';
const users = () => {
    const githubContext = useContext(GithubContext);
    const {users, found, login} = githubContext;

    return(
        <div>
            { users.length > 0 && 
                <div>
                    <h1>Search Results</h1>
                    <div className='grid'>
                        { users.map(u => { return ( <User key={u.id} user={u} /> ) })}
                    </div>
                </div>
            }
            {!found && <h1>There are no results with login name {login}</h1>}
        </div>
    );
}

export default users;