import React, {useState} from 'react';

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
    <div className="max-w-4xl mx-auto p-4">
      <h2 className="text-2xl m-4 text-indigo-900 pb-4 border-b border-gray-200">
        User Profile
      </h2>

      <div className="bg-white shadow-md rounded-lg p-6">
        {user ? (
          <>
            <h3>{user.username}</h3>
            <p>Email: {user.email}</p>
            <p>
              Registered: {new Date(user.created_at).toLocaleString('fi-FI')}
            </p>
          </>
        ) : (
          <p>Ladataan käyttäjän tietoa</p>
        )}
        {error && <p>Profiilin tietojen lataaminen epäonnistuin, ({error})</p>}
      </div>
    </div>
  );
};
Profile.propTypes = {};
export default Profile;
