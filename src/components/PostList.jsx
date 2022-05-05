import React from "react";
import PostItem from "./PostItem";

const PostList = ({ posts, listTitle, del}) => {
    return (
        <div>
            <h1 className="App-title">{listTitle}</h1>
            {posts.map((post, index) => (
                <PostItem delete={del} number={index + 1} post={post} key={post.id} />
            ))}
        </div>
    );
};

export default PostList;
