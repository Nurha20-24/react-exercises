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
      <h2 className="bg-fuchsia-300 text-black p-5  hover:bg-amber-600 rounded font-medium">
        KäyttäjäProfiili
      </h2>
      <div className="card bg-blue-400 p-36">ppppp</div>
      {user ? (
        <>
          <h3>{user.username}</h3>
          <p>{user.email}</p>
          <p className="bg-brand">Rekisteröitynyt: {user.created_at}</p>
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
