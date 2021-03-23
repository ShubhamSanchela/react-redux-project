import React, { useEffect, useState } from "react";
import "../App.css";
import { fetchUsers, removeUsers } from "../actions/PostAction";
import { useDispatch, useSelector } from "react-redux";
import Loader from "react-loader-spinner";

function List({}) {
  const dispatch = useDispatch();
  const datalist = useSelector((state) => state.user);
  const [load, setLoad] = useState(true);
  console.log(load)
  useEffect(() => {
    dispatch(fetchUsers());
    setLoad(false);
  }, []);

  return (
    <div>
      {load ? (
        "Loadinnnnng..."
      ) : (
        <div className="column-container">
          <h2>User List</h2>
          {datalist?.users.map((user) => (
            <div key={user.id}>
              <div className="flex-container">
                {user.title}
                <button onClick={() => dispatch(removeUsers(user.id))}>
                  x
                </button>
              </div>
            </div>
          ))}
        </div>
      )}

      <Loader
        type="Puff"
        color="#00BFFF"
        height={100}
        width={100}
        timeout={3000}
      />
    </div>
  );
}

export default List;
