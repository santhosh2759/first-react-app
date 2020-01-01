import React, { Component } from 'react';
import './User.css'

class Search extends Component {
    state = {
        login:''
    }
    render(){
        return(
            <form onSubmit={this.onSubmit} className='form'>
                <input type='text' name='login' value={this.state.login} onChange={this.onChange} placeholder='Search users...' />
                <input type='submit' value='Search' />
            </form>
        );
    };

    onSubmit = (event) => {
        event.preventDefault();
        this.props.searchUsers(this.state.login);
        this.setState({login: ''});
    }
    
    onChange = (event) => {
        this.setState({
            [event.target.name] : event.target.value
        });
    }
}

export default Search;