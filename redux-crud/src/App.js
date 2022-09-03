import "./App.css";
import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addUser, deleteUser, updateUserName } from "./features/Users";

function App() {
  const userList = useSelector((state) => state.users.value);
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [username, setUserName] = useState("");
  const [newName, setNewName] = useState("");
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
            dispatch(
              addUser({
                id: userList[userList.length - 1].id + 1,
                name: name,
                username: username,
              })
            );
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
              <input
                type="text"
                placeholder="New username..."
                onChange={(e) => {
                  setNewName(e.target.value);
                }}
              />
              <button
                onClick={() => {
                  dispatch(updateUserName({ id: user.id, username: newName }));
                }}
              >
                Update username
              </button>
              <button
                onClick={() => {
                  dispatch(deleteUser({ id: user.id }));
                }}
              >
                Delete user
              </button>
            </>
          );
        })}
      </div>
    </div>
  );
}

export default App;
