// TODO: add necessary imports

import {useState, useEffect} from 'react';
import fetchData from '../utils/fetchData';

const MEDIA_API = import.meta.env.VITE_MEDIA_API + '/media';
const AUTH_API = import.meta.env.VITE_AUTH_API;

const useMedia = () => {
  const [mediaArray, setMediaArray] = useState([]);

  useEffect(() => {
    const getMedia = async () => {
      try {
        const mediaData = await fetchData(MEDIA_API);
        //console.log('Fetched media data: ', mediaData);

        const newArray = await Promise.all(
          mediaData.map(async (item) => {
            try {
              const user = await fetchData(AUTH_API + '/users/' + item.user_id);
              //console.log('Fetched user data: ', user.username);
              return {
                ...item,
                username: user.username,
              };
            } catch (error) {
              console.error(
                'Error fetching user data for user_id',
                item.user_id,
                error
              );
              return {
                ...item,
                username: 'Unknown',
              };
            }
          })
        );
        setMediaArray(newArray);
        console.log('Media with users: ', newArray);
      } catch (error) {
        console.error('Error fetching media data: ', error);
      }
    };

    getMedia();
  }, []); // Tyhjää dependency, joka ajetaan vain kerran

  // Komponentille palautetaan vain mitä komponentti tarvitsee
  return {mediaArray};
};

const useAuthentication = () => {
  const postLogin = async (inputs) => {
    const fetchOptions = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(inputs),
    };
    const loginResult = await fetchData(
      import.meta.env.VITE_AUTH_API + '/auth/login',
      fetchOptions
    );
    return loginResult;
  };
  return {postLogin};
};

const useUser = () => {
  const getUserByToken = async (token) => {
    const options = {
      headers: {
        Authorization: 'Bearer ' + token,
      },
    };
    const tokenResult = fetchData(`${AUTH_API}/users/token`, options);
    return tokenResult;
  };

  const postUser = async (user) => {
    // TODO: register new user here https://media2.edu.metropolia.fi/auth-api/#api-User-CreateUser
  };
  return {getUserByToken, postUser};
};

export {useMedia, useAuthentication, useUser};
