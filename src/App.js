import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from "./pages/About";
import Posts from "./pages/Posts";
import "./styles/App.css";

function App() {
    return (
        <BrowserRouter>

            <div className="navbar">
                <a href="/about" >About</a>
                <a href="/posts" >Posts</a>
            </div>

            <Routes>
                <Route path='/about' element={<About />} />
                <Route path='/posts' element={<Posts />} />
            </Routes>
        </BrowserRouter>
    )
}

export default App;
