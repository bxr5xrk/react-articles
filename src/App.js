import { useState } from "react";
import PostForm from "./components/PostForm";
import PostList from "./components/PostList";
import Select from "./components/UI/select/Select";
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
            desc: "for newbies",
        },
        {
            id: 3,
            title: "Svelte",
            desc: "new framework",
        },
    ]);
    const [selectedSort, setSelectedSort] = useState("");

    // output all posts
    const outputAllPosts = (newPost) => {
        // adding new post to other posts
        setPosts([newPost, ...posts]);
    };

    // delete selected post
    const deletePost = (post) => {
        setPosts(posts.filter((p) => p.id !== post.id));
    };

    const sortPosts = (sort) => {
        setSelectedSort(sort)
        setPosts([...posts].sort((a, b) => a[sort].localeCompare(b[sort])))
    }

    return (
        <div className="App">
            <PostForm create={outputAllPosts} />
            <div>
                <Select
                    defaultValue="Sort by:"
                    value={selectedSort}
                    onChange={sortPosts}
                    options={[
                        {
                            value: "title",
                            name: "by title",
                        },
                        {
                            value: "desc",
                            name: "by description",
                        },
                    ]}
                />
            </div>

            {posts.length ? (
                <PostList
                    del={deletePost}
                    posts={posts}
                    listTitle="POST LIST"
                />
            ) : (
                <div className="not-founded-posts">No posts yet</div>
            )}
        </div>
    );
}

export default App;
