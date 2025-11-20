import MediaRow from '../components/MediaRow';
//import SingleView from '../components/SingleView';
import {useState, useEffect} from 'react';
import fetchData from '../utils/fetchData';

const MEDIA_API = import.meta.env.VITE_MEDIA_API + '/media';
const AUTH_API = import.meta.env.VITE_AUTH_API;

const Home = () => {
  //const [selectedItem, setSelectedItem] = useState(null);
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
  }, []);

  return (
    <>
      {/* <SingleView item={selectedItem} setSelectedItem={setSelectedItem} /> */}
      <h2>My Media</h2>
      <table>
        <thead>
          <tr>
            <th>Thumbnail</th>
            <th>Title</th>
            <th>Description</th>
            <th>Created</th>
            <th>Size</th>
            <th>Type</th>
            <th>Username</th>
            <th>View</th>
          </tr>
        </thead>
        <tbody>
          {mediaArray.map((item) => (
            <MediaRow
              key={item.media_id}
              item={item}
              //setSelectedItem={setSelectedItem}
            />
          ))}
        </tbody>
      </table>
    </>
  );
};
export default Home;
