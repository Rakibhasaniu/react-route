import React from 'react';
import { Link } from 'react-router-dom';
import './Post.css'

const Post = ({post}) => {
    const {id,title, body} = post;
    return (
        <div className='post'>
            <h2>{title}</h2>
            <p><small>{body}</small></p>
            <Link to={`/post/${id}`}>
            <button>Show Details</button>
            </Link>
        </div>
    );
};

export default Post;