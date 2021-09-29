/*eslint-disable*/

import { API } from "../config/backend";

//game calls
export const createGame = async (game) => {
  console.log(JSON.stringify(game));

  return fetch(`${API}/game/create`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(game),
  })
    .then((response) => {
      console.log(response);
      return response.json();
    })
    .catch((err) => console.log(err));
};

//get all games
export const getGames = async () => {
  return await fetch(`${API}/games`, {
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

//get single game
export const getGame = (gameId) => {
  return fetch(`${API}/game/${gameId}`, {
    method: "GET",
  })
    .then((response) => {
      return response.json();
    })
    .catch((err) => console.log(err));
};

export const getSubCategories = (gameId) => {
  return fetch(`${API}/games/${gameId}`, {
    method: "GET",
  })
    .then((response) => {
      return response.json();
    })
    .catch((err) => console.log(err));
};

// update game
export const updateGame = (gameId, game) => {
  console.log(game, gameId);
  return fetch(`${API}/game/${gameId}`, {
    method: "PUT",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(game),
  })
    .then((response) => {
      return response.json();
    })
    .catch((err) => console.log(err));
};

export const updateSubCategory = (userId, gameId, game) => {
  console.log(game, gameId);
  return fetch(`${API}/games/${gameId}`, {
    method: "PUT",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(game),
  })
    .then((response) => {
      return response.json();
    })
    .catch((err) => console.log(err));
};

// Delete game
export const deleteGame = (gameId) => {
  // console.log(gameId, userId);
  return fetch(`${API}/game/${gameId}`, {
    method: "DELETE",
    headers: {
      Accept: "application/json",
    },
  })
    .then((response) => {
      console.log(response);
      return response.json();
    })
    .catch((err) => console.log(err));
};
