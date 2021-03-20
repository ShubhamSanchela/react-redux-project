import React, { useEffect, useState } from "react";
import "../App.css";
import { fetchUsers, removeUsers, resetUsers } from "../actions/PostAction";
import { useDispatch, useSelector } from "react-redux";

function List({}) {
  const dispatch = useDispatch();
  const datalist = useSelector((state) => state.user);
  useEffect(() => {
    dispatch(fetchUsers());
  }, []);

  return (
    <div>
      <h2>User List</h2>
      {/* <button onClick={}>x</button> */}
      <div className="column-container">
        {datalist?.users.map((user) => (
          <div key={user.id}>
            <div className="flex-container">
              {user.title}
              <button onClick={() => dispatch(removeUsers(user.id))}>x</button>
              
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default List;
