import axios from "axios";
import { useState } from "react";
import { FETCH_USERS_SUCCESS, REMOVE_USER, RESET_USERS } from "./Types";

export const fetchUserSuccess = (users) => {
  return {
    type: FETCH_USERS_SUCCESS,
    payload: users,
  };
};

export const removeUsers = (id) => {
  console.log(id);
  return {
    type: REMOVE_USER,
    payload: id,
  };
};

export const fetchUsers = () => {
  return (dispatch) => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((response) => {
        const users = response.data;
        dispatch(fetchUserSuccess(users));
      })
      .catch((error) => {
        console.log("Error Occureds : ", error);
      });
  };
};
