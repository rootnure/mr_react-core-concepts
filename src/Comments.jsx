import React, { useEffect, useState } from 'react';

const Comments = () => {
    const [comments, setComments] = useState([]);
    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/comments")
        .then(res => res.json())
        .then(data => setComments(data))
    }, []);
    return (
        <div>
            <h3>Comments: {comments.length}</h3>
        </div>
    );
};

export default Comments;