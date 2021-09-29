import { API } from "../config/backend";

//user calls
export const createGame = (userId, token, user) => {
  return fetch(`${API}/user/create/${userId}`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(user),
  })
    .then((response) => {
      return response.json();
    })
    .catch((err) => console.log(err));
};

//get all users
export const getUsers = async () => {
  return await fetch(`${API}/users`, {
    method: "GET",
  })
    .then((response) => {
      return response.json();
    })
    .catch((err) => {
      console.error(err);
      // return err.message;
    });
};

// update user
export const updateGame = (userId, user) => {
  return fetch(`${API}/${user._id}/${userId}`, {
    method: "PUT",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(user),
  })
    .then((response) => {
      return response.json();
    })
    .catch((err) => console.log(err));
};

// Delete user
export const deleteGame = (userId) => {
  return fetch(`${API}/user/${userId}/${userId}`, {
    method: "DELETE",
    headers: {
      Accept: "application/json",
    },
  })
    .then((response) => {
      return response.json();
    })
    .catch((err) => console.log(err));
};
