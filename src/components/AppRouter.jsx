import React from "react";
import { Route } from "react-router-dom";
import { Routes } from "react-router-dom";
import About from "../pages/About";
import Page404 from "../pages/Page404";
import Posts from "../pages/Posts";

const AppRouter = () => {
    return (
        <div>
            <Routes>
                <Route path="/about" element={<About />} />
                <Route path="/posts" element={<Posts />} />
                <Route path="*" element={<Page404 />} />
            </Routes>
        </div>
    );
};

export default AppRouter;
