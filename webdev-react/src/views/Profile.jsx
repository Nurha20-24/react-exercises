import React, {useEffect, useState} from 'react';
import {useUser} from '../hooks/apiHooks';
import {useUserContext} from '../hooks/contextHooks';

const Profile = () => {
  //User state korvattu contextilla olevilla stateilla
  //const [user, setUser] = useState(null);
  const [error, setError] = useState(null);
  //const {getUserByToken} = useUser();
  const {user} = useUserContext();

  /*
  useEffect(() => {
    const getUserData = async () => {
      const token = localStorage.getItem('token');
      try {
        const userResponse = await getUserByToken(token);
        setUser(userResponse.user);
      } catch (error) {
        console.error('getUserData error: ', error);
        setError(error.message);
      }
    };
    //getUserData();
  }, []);
  */

  return (
    <>
      <h2>KäyttäjäProfiili</h2>
      {user ? (
        <>
          <h3>{user.username}</h3>
          <p>{user.email}</p>
          <p>Rekiseteröitynyt: {user.created_at}</p>
        </>
      ) : (
        <p>ffbg</p>
      )}
      {error && <p>Profiilin tietojen lataaminen epäonnistuin, ({error})</p>}
    </>
  );
};
Profile.propTypes = {};
export default Profile;
