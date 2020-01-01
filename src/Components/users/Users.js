import React, { Component, Fragment } from 'react';
import Search from './Search';
import User from './User';
import axios from 'axios';
import './User.css';

class Users extends Component {
    state = {
        users: []
    }
    render(){
        return(
            <Fragment>
                <Search searchUsers={this.searchUsers} />
                {this.state.users.length > 0 ? 
                <div>
                    <h1>Search Results</h1>
                    <div className='grid'>
                        { this.state.users.map(u => { return ( <User key={u.id} user={u} /> ) })}
                    </div>
                </div>
                : null }
           </Fragment>
        );
    }

    searchUsers = async (login) => {
        const res = await axios.get(`https://api.github.com/search/users?q=${login}`);
        //items will have sort, 
        //and pageable options along with data
        this.setState({ users: res.data.items});
    }

    // async componentDidMount(){
    //     const res = await axios.get('https://api.github.com/users');
    //     this.setState({users: res.data});
    // }
}

export default Users;