const Post = ({post}) => {
    const {title, body} = post || {};

    const postStyle = {
        border: '1px solid aquamarine',
        borderRadius: '10px',
        margin: '5px'
    }
    return (
        <div style={postStyle}>
            <h3>Title: {title}</h3>
            <p>Body: {body}</p>
        </div>
    );
};

export default Post;