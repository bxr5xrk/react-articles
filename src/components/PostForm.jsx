import React, { useState } from "react";
import Button from "./UI/button/Button";
import Input from "./UI/input/Input";

const PostForm = ({ create }) => {
    // blank for new post
    const [post, setPost] = useState({ title: "", body: "" });

    const addNewPost = (e) => {
        // for disable reload page during the click
        e.preventDefault();

        // blank for post
        const newPost = {
            ...post,
            id: Date.now(),
        };

        // checking if title and desc isnt empty
        if (post.title !== "" && post.body !== "") {
            create(newPost);
        }

        // clearing input field
        setPost({ title: "", body: "" });
    };

    return (
        <form className="form__container">
            <Input
                value={post.title}
                onChange={(e) => setPost({ ...post, title: e.target.value })}
                type="text"
                placeholder="enter post title"
            />
            <Input
                type="text"
                placeholder="enter post description"
                value={post.body}
                onChange={(e) => setPost({ ...post, body: e.target.value })}
            />
            <Button onClick={addNewPost}>New Post</Button>
        </form>
    );
};

export default PostForm;
