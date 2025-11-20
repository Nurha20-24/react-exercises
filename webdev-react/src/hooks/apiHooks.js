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
        //const data = await fetchData('/data.json');
        //setMediaArray(data);

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

export {useMedia};
