import axios from 'axios';
import {useState} from 'react';
export const api = axios
  .get('https://reqres.in/api/users?page=1')
  .then(function(response) {
    return response.data; //console.log(response.data);
  })
  .catch(function(err) {
    console.log(err);
  });
export const getUser = () => {
  return api;
};