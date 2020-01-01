import React from 'react';
import './User.css'

const user = (props) => {
    const {login, avatar_url, html_url} = props.user;
    return(
        <div>
            <img src={avatar_url} alt='' style={{width:'60px'}}/>
            <div>{login}</div>
            <a href={html_url}>Profile</a>
        </div>
    );
}

export default user;
