import axios from "axios";
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

export const resetUsers = () => {
  return{
    type : RESET_USERS,
    payload : {users : null}
  }
} 

export const fetchUsers = () => {
  let isLoading = true;
  return (dispatch) => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((response) => {
        const users = response.data;
        dispatch(fetchUserSuccess(users));
        isLoading = false;
      })
      .catch((error) => {
        console.log("Error Occureds : ", error);
      });
  };
};
