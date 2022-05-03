import React from "react";
import PostItem from "./PostItem";

const PostList = ({posts, listTitle}) => {

    return (
        <div>
            <h1 className='App-title'>{listTitle}</h1>
            {posts.map(post => 
                <PostItem post={post} key={post.id}/>
            )}
        </div>
    )
}

export default PostList