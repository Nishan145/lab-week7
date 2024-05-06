import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Posts from "./components/Posts";
import NewPost from "./components/NewPost";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/posts" element={<Posts />} />
        <Route path="/newpost" element={<NewPost />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;
