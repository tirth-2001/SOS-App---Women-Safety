import { API } from "../config/backend";

//player calls
export const createPlayer = async (player) => {
  console.log(player);

  return fetch(`${API}/player/create`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(player),
  })
    .then((response) => {
      console.log(response);
      return response.json();
    })
    .catch((err) => console.log(err));
};

//get all players
export const getPlayers = async () => {
  return await fetch(`${API}/players`, {
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

//get single player
export const getPlayer = async (playerId) => {
  // console.log(playerId);
  return await fetch(`${API}/player/${playerId}`, {
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

// update player
export const updatePlayer = async (playerId, player) => {
  console.log(player, playerId);
  return fetch(`${API}/player/${playerId}`, {
    method: "PUT",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(player),
  })
    .then((response) => {
      console.log(response);
      return response.json();
    })
    .catch((err) => console.log(err));
};

// Delete player
export const deletePlayer = (playerId) => {
  return fetch(`${API}/player/${playerId}`, {
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
