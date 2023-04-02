import React from 'react';
import { useLoaderData } from 'react-router-dom';

const FriendDetail = () => {
    const friend = useLoaderData()
    console.log(friend)
    return (
        <div>
            <h3>person info</h3>
            <h4>Name{friend.name}</h4>
            <p>Username: {friend.username}</p>
            <p>Email: {friend.email}</p>
            <p>Company Name: {friend.company.name}</p>
            <p>Company Website: {friend.website}</p>
        </div>
    );
};

export default FriendDetail;