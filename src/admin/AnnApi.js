/*eslint-disable*/

import { API } from "../config/backend";

//game calls
export const createAnnouncement = async (announcement) => {
  console.log(JSON.stringify(announcement));

  return fetch(`${API}/announcement/create`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(announcement),
  })
    .then((response) => {
      console.log(response);
      return response.json();
    })
    .catch((err) => console.log(err));
};

//get all announcements
export const getAnnouncements = async () => {
  return await fetch(`${API}/announcements`, {
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

//get single announcement
export const getAnnouncement = (annId) => {
  return fetch(`${API}/announcement/${annId}`, {
    method: "GET",
  })
    .then((response) => {
      return response.json();
    })
    .catch((err) => console.log(err));
};

// update announcement
export const updateAnnouncement = (annId, announcement) => {
  console.log(announcement, annId);
  return fetch(`${API}/announcement/${annId}`, {
    method: "PUT",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(announcement),
  })
    .then((response) => {
      return response.json();
    })
    .catch((err) => console.log(err));
};

// Delete announcement
export const deleteAnnouncement = (annId) => {
  // console.log(annId, userId);
  return fetch(`${API}/announcement/${annId}`, {
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
