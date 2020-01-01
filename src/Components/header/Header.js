import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'

const header = () =>
        <nav className='navbar'><ul>
                <li style={{float:'left', padding:'14px 16px'}}>Github Finder</li>
                <li><Link className='link' to='/about'>About</Link></li>
                <li><Link className='link' to='/'>Home</Link></li>
        </ul></nav>

export default header;