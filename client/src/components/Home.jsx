import React from "react";
import { Link } from "react-router-dom";
function Home() {
  return (
    <div>
      <h2>Welcome to My Blog App!</h2>
      <p>
        This is a simple blog application where you can create and view posts.
      </p>
      <p>
        Get started by navigating to the <Link to="/posts">posts page</Link> to
        see all posts or <Link to="/newpost">create a new post</Link>
      </p>
      <p>Happy blogging!</p>
    </div>
  );
}

export default Home;
