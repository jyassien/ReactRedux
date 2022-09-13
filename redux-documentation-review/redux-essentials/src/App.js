import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import { useSelector, useDispatch } from "react-redux";
import { Navbar } from "./app/Navbar";
import { PostsList } from "./features/PostsList";
import { AddPostForm } from "./features/AddPostForm";

function App() {
  const posts = useSelector((state) => state.posts);
  return (
    <Router>
      {/* <div>
        here:
        {posts.map((post) => (
          <div key={post.id}>
            <p>{post.title}</p>
            <p> ::{post.content}</p>
          </div>
        ))}
      </div> */}
      <Navbar />

      {/* <PostsList /> */}
      <div className="App">
        <Routes>
          <Route
            path="/"
            element={
              <>
                <section>
                  <h2>Welcome to the Redux Essentials example app!</h2>
                  <AddPostForm />
                  <PostsList />
                </section>
              </>
            }
            render={() => (
              <React.Fragment>
                <PostsList />
              </React.Fragment>
            )}
          />
          {/* <Navigate to="/" /> */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
