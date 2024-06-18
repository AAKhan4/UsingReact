import React, { useState, useEffect } from 'react';
import { getPosts } from '../services/postService';

export default function Posts() {
    const [posts, setPosts] = useState([]);
    useEffect(() => {
        console.log("Fetching posts");
    }, []);

    return (
        <div>
            <h1>Posts</h1>
        </div>
    );
}