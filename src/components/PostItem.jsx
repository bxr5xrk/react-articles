import React from "react";

const PostItem = (props) => {
    return (

        <div className="post">

            <div className="post__content">
                <h1 className="post-title">{props.post.id}. {props.post.title}</h1>
                <p className="post-desc">{props.post.desc}</p>
            </div>

            <div className="post__btn">
                <button>delete post</button>
            </div>

        </div>

    )
}

export default PostItem
