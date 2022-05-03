import { useState } from "react";
import PostList from "./components/PostList";
import Button from "./components/UI/button/Button";
import Input from "./components/UI/input/Input";
import "./styles/App.css";

function App() {
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

    const [post, setPost] = useState({ title: "", desc: "" });

    const addNewPost = (e) => {
        e.preventDefault();

        if (post.title !== '' && post.desc !== '') {
          setPosts([...posts, {...post, id: Date.now() }]);
        }

        setPost({ title: "", desc: "" });
    };

    return (
        <div className="App">
            <form>
                <Input
                    value={post.title}
                    onChange={(e) =>
                        setPost({...post, title: e.target.value })
                    }
                    type="text"
                    placeholder="enter post title"
                />
                <Input
                    type="text"
                    placeholder="enter post description"
                    value={post.desc}
                    onChange={(e) => setPost({ ...post, desc: e.target.value })}
                />
                <Button onClick={addNewPost}>New Post</Button>
            </form>

            <PostList posts={posts} listTitle="POST LIST" />
        </div>
    );
}

export default App;
