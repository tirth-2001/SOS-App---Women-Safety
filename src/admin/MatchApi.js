import { API } from "../config/backend";

//match calls

export const createMatch = async (match) => {
  console.log(match);

  return fetch(`${API}/match/create`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(match),
  })
    .then((response) => {
      console.log(response);
      return response.json();
    })
    .catch((err) => console.log(err));
};

//get all matches
export const getMatches = async () => {
  return await fetch(`${API}/matches`, {
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

//get single match
export const getMatch = async (matchId) => {
  // console.log(matchId);
  return await fetch(`${API}/match/${matchId}`, {
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

// update match

export const updateMatch = async (matchId, match) => {
  console.log(match, matchId);
  return fetch(`${API}/match/${matchId}`, {
    method: "PUT",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(match),
  })
    .then((response) => {
      console.log(response);
      return response.json();
    })
    .catch((err) => console.log(err));
};

// Delete match
export const deleteMatch = (matchId) => {
  return fetch(`${API}/match/${matchId}`, {
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
