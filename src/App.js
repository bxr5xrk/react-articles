import { useMemo, useState } from "react";
import PostForm from "./components/PostForm";
import PostList from "./components/PostList";
import Input from "./components/UI/input/Input";
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
    const [searchQuery, setSearchQuery] = useState("");

    // const getSortedPosts = selectedSort
    //     ? [...posts].sort((a, b) =>
    //           a[selectedSort].localeCompare(b[selectedSort])
    //       )
    //     : posts;

    const sortedPosts = useMemo(() => {
        console.log("useMemo");
        if (selectedSort) {
            return [...posts].sort((a, b) =>
                a[selectedSort].localeCompare(b[selectedSort])
            );
        } else {
            return posts;
        }
    }, [selectedSort, posts]);

    // output all posts
    const outputAllPosts = (newPost) => {
        // adding new post to other posts
        setPosts([newPost, ...posts]);
    };

    // delete selected post
    const deletePost = (post) => {
        setPosts(posts.filter((p) => p.id !== post.id));
    };

    const sortPosts = (sort) => setSelectedSort(sort);

    // sort and search
    const sortedAndSearchedPosts = useMemo(() => {
        return sortedPosts.filter(
            (post) =>
                post.title.toLowerCase().includes(searchQuery) ||
                post.desc.toLowerCase().includes(searchQuery)
        );
    }, [searchQuery, sortedPosts]);

    return (
        <div className="App">
            <PostForm create={outputAllPosts} />

            <Input
                type="text"
                placeholder="search..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
            />

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

            {sortedAndSearchedPosts.length ? (
                <PostList
                    del={deletePost}
                    posts={sortedAndSearchedPosts}
                    listTitle="POST LIST"
                />
            ) : (
                <div className="not-founded-posts">No posts found</div>
            )}
        </div>
    );
}

export default App;
