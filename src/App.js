import { useState } from "react";
import CreateAndFilter from "./components/CreateAndFilter";
import PostForm from "./components/PostForm";
import PostList from "./components/PostList";
import Modal from "./components/UI/modal/Modal";
import { usePosts } from "./hooks/usePosts";
import "./styles/App.css";
import starterPosts from "./starterPosts.json";
import axios from "axios";

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

    async function fetchPosts () {
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts')
        setPosts(response.data)
    }

    return (
        <div className="App">
            <CreateAndFilter
                setModal={setModal}
                filter={filter}
                setFilter={setFilter}
            />
            <button onClick={fetchPosts} >Get data</button>
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
