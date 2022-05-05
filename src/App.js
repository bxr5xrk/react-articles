import { useState } from "react";
import PostForm from "./components/PostForm";
import PostList from "./components/PostList";
import "./styles/App.css";

function App() {
    // list with posts
    const [posts, setPosts] = useState([
        {
            id: 1,
            title: "React",
            desc: "React thats the library that helps programmers to write SPA and other sytes",
        },
        {
            id: 2,
            title: "Vue",
            desc: "React thats the library that helps programmers to write SPA and other sytes",
        },
        {
            id: 3,
            title: "Svelte",
            desc: "React thats the library that helps programmers to write SPA and other sytes",
        },
    ]);

    // output all posts
    const outputAllPosts = (newPost) => {
        // adding new post to other posts
        setPosts([newPost, ...posts]);
    };

    // delete selected post
    const deletePost = (post) => {
        setPosts(posts.filter((p) => p.id !== post.id));
    };

    return (
        <div className="App">
            <PostForm create={outputAllPosts} />

            {posts.length === 0 ? (
                <div className="not-founded-posts" >No posts yet</div>
            ) : (
                <PostList
                    del={deletePost}
                    posts={posts}
                    listTitle="POST LIST"
                />
            )}
        </div>
    );
}

export default App;
