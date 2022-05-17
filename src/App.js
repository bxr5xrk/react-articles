import { useMemo, useState } from "react";
import CreateAndFilter from "./components/CreateAndFilter";
import PostForm from "./components/PostForm";
import PostList from "./components/PostList";
import Modal from "./components/UI/modal/Modal";
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

    // for searching and sorting posts
    const [filter, setFilter] = useState({ sort: "", search: "" });

    // sort posts
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
        setModal(false);
    };

    // delete selected post
    const deletePost = (post) => {
        setPosts(posts.filter((p) => p.id !== post.id));
    };

    // search in sorted posts
    const sortedAndSearchedPosts = useMemo(() => {
        return sortedPosts.filter(
            (post) =>
                post.title.toLowerCase().includes(filter.search) ||
                post.desc.toLowerCase().includes(filter.search)
        );
    }, [filter.search, sortedPosts]);

    // for activate and disable modal window
    const [modal, setModal] = useState(false);

    return (
        <div className="App">
            <CreateAndFilter
                setModal={setModal}
                filter={filter}
                setFilter={setFilter}
            />

            <PostList
                del={deletePost}
                posts={sortedAndSearchedPosts}
                listTitle="POST LIST"
            />

            <Modal visible={modal} setVisible={setModal}>
                <PostForm create={outputAllPosts} />
            </Modal>
        </div>
    );
}

export default App;
