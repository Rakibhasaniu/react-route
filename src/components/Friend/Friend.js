import React from 'react';
import { Link } from 'react-router-dom';
import './Friend.css'

const Friend = ({friend}) => {
    return (
        <div className='friend'>
            <h1>Name: {friend.name}</h1>
            <h2>Email: {friend.email}</h2>
            <h2>City: {friend.address.city}</h2>
            <p>Address: <Link to={`/friend/${friend.email}`}>{friend.address.street}</Link> </p>
        </div>
    );
};

export default Friend;