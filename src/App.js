import { useEffect, useState } from "react";
import CreateAndFilter from "./components/CreateAndFilter";
import PostForm from "./components/PostForm";
import PostList from "./components/PostList";
import Modal from "./components/UI/modal/Modal";
import { usePosts } from "./hooks/usePosts";
import "./styles/App.css";
import starterPosts from "./starterPosts.json";
import PostService from "./API/PostsService";
import Loader from "./components/UI/loader/Loader";
import { getPageCount } from "./utils/pages";
import Plagination from "./components/UI/plagination/Plagination";

function App() {
    // list with posts
    const [posts, setPosts] = useState([...starterPosts]);

    // for searching and sorting posts
    const [filter, setFilter] = useState({ sort: "", search: "" });
    const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.search);

    const [isPostLoading, setIsPostLoading] = useState(true);

    const [totalPages, setTotalPages] = useState(0);
    const [limitPosts] = useState(10);
    const [page, setPage] = useState(1);

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

    // fetch posts (100) from server
    async function fetchPosts() {
        const fetchedPosts = await PostService.getPosts(limitPosts, page);
        setPosts(fetchedPosts.data);

        const totalPosts = fetchedPosts.headers["x-total-count"];
        setTotalPages(getPageCount(totalPosts, limitPosts));
    }

    // for display posts from starterPosts.json, comment this lines and change isPostLoading to true
    useEffect(() => {
        setIsPostLoading(true);
        fetchPosts();

        setTimeout(() => {
            setIsPostLoading(false);
        }, 100);
    }, [page]);

    const changePage = (page) => {
        setPage(page);
    };

    return (
        <div className="App">
            <CreateAndFilter
                setModal={setModal}
                filter={filter}
                setFilter={setFilter}
            />

            {isPostLoading ? (
                <Loader />
            ) : (
                <PostList
                    del={deletePost}
                    posts={sortedAndSearchedPosts}
                    listTitle="POST LIST"
                    noPosts="No posts found"
                />
            )}

            <Modal visible={modal} setVisible={setModal}>
                <PostForm create={outputAllPosts} />
            </Modal>

            <Plagination
                totalPages={totalPages}
                changePage={changePage}
                page={page}
            />
        </div>
    );
}

export default App;
