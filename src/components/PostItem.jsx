import React from "react";
import Button from "../components/UI/button/Button";

const PostItem = (props) => {
    return (
        <div className="post">
            <div className="post__content">
                <h1 className="post-title">
                    {props.number}. {props.post.title}
                </h1>
                <p className="post-desc">{props.post.desc}</p>
            </div>

            <div className="post__btn">
                <Button onClick={() => props.delete(props.post)}>
                    delete post
                </Button>
            </div>
        </div>
    );
};

export default PostItem;
