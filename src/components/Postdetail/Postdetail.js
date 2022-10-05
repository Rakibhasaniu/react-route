import React from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';

const Postdetail = () => {
    const post = useLoaderData();
    const {id,title,body,userId} = post;
    const navigate = useNavigate();
    const handleNavigate = () => {
        navigate(`/friend/${userId}`)
    }
    return (
        <div>
            <h2>Details about post : {id}</h2>
            <h4>{title}</h4>
            <p>{body}</p>
            <button onClick={handleNavigate}>Get the author</button>
        </div>
    );
};

export default Postdetail;