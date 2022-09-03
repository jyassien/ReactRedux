import "./App.css";
import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addUser } from "./features/Users";

function App() {
  const userList = useSelector((state) => state.users.value);
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [username, setUserName] = useState("");
  return (
    <div className="App">
      Redux
      <div className="addUsers">
        <input
          type="text"
          placeholder="Name..."
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="text"
          placeholder="Username..."
          onChange={(e) => setUserName(e.target.value)}
        />
        <button
          onClick={() => {
            dispatch(addUser({ id: 0, name: name, username: username }));
          }}
        >
          Add User
        </button>
      </div>
      <div className="displayUsers">
        {userList.map((user) => {
          return (
            <>
              <h1>{user.name}</h1>
              <h1>{user.username}</h1>
            </>
          );
        })}
      </div>
    </div>
  );
}

export default App;
