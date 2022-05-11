import { useMemo, useState } from "react";
import PostFilter from "./components/PostFilter";
import PostForm from "./components/PostForm";
import PostList from "./components/PostList";
// import Input from "./components/UI/input/Input";
// import Select from "./components/UI/select/Select";
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

    const [filter, setFilter] = useState({ sort: "", search: "" });

    const sortedPosts = useMemo(() => {
        if (filter.sort) {
            return [...posts].sort((a, b) =>
                a[filter.sort].localeCompare(b[filter.sort])
            );
        } else {
            return posts;
        }
    }, [filter.sort, posts]);

    // output all posts
    const outputAllPosts = (newPost) => {
        // adding new post to other posts
        setPosts([newPost, ...posts]);
    };

    // delete selected post
    const deletePost = (post) => {
        setPosts(posts.filter((p) => p.id !== post.id));
    };

    // sort and search
    const sortedAndSearchedPosts = useMemo(() => {
        return sortedPosts.filter(
            (post) =>
                post.title.toLowerCase().includes(filter.search) ||
                post.desc.toLowerCase().includes(filter.search)
        );
    }, [filter.search, sortedPosts]);

    return (
        <div className="App">
            <PostForm create={outputAllPosts} />

            <PostFilter filter={filter} setFilter={setFilter} />

            <PostList
                del={deletePost}
                posts={sortedAndSearchedPosts}
                listTitle="POST LIST"
            />

        </div>
    );
}

export default App;
