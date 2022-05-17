import { useState } from "react";
import CreateAndFilter from "./components/CreateAndFilter";
import PostForm from "./components/PostForm";
import PostList from "./components/PostList";
import Modal from "./components/UI/modal/Modal";
import { usePosts } from "./hooks/usePosts";
import "./styles/App.css";
import starterPosts from "./starterPosts.json";

function App() {
    // list with posts
    const [posts, setPosts] = useState([...starterPosts]);

    // for searching and sorting posts
    const [filter, setFilter] = useState({ sort: "", search: "" });
    const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.search);

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
                noPosts="No posts found"
            />

            <Modal visible={modal} setVisible={setModal}>
                <PostForm create={outputAllPosts} />
            </Modal>
        </div>
    );
}

export default App;
