import React from "react";
import blogData from "../data/blog";
import Header from "./Header";
import Article from "./Article";
import About from "./About";
import ArticleList from "./ArticleList";
console.log(blogData);

function App() {
    return ( <
        div className = "App" >
        <
        header >
        <
        Header name = { blogData.name }
        /> <
        About image = { blogData.image }
        /> <
        ArticleList posts = { blogData.posts }
        /> <
        /header> <
        /div>
    );
}

export default App;