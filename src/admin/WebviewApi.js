/*eslint-disable*/

import {API} from '../config/backend';

//get all webviews
export const getWebviews = async () => {
  return await fetch(`${API}/webviews`, {
    method: 'GET',
  })
    .then(response => {
      return response.json();
    })
    .catch(err => {
      console.error(err);
      // return err.message;
    });
};
