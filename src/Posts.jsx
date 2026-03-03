import { use } from 'react';
import Post from './Post';

const Posts = ({postsPromise}) => {
    const posts = use(postsPromise);

    const postsContainerStyle = {
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 1fr)'
    }
    return (
        <div>
            <h2>Posts: {posts.length}</h2>
            <div style={postsContainerStyle}>
            {
                posts.map(post => <Post key={post.id} post={post}></Post>)
            }
            </div>
        </div>
    );
};

export default Posts;