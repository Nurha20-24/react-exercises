import {createContext, useState} from 'react';
import {useAuthentication, useUser} from '../hooks/apiHooks';
import {useNavigate} from 'react-router';
import {useLocation} from 'react-router';

const UserContext = createContext(null);

const UserProvider = ({children}) => {
  const [user, setUser] = useState(null);
  const {postLogin} = useAuthentication();
  const {getUserByToken} = useUser();
  const navigate = useNavigate();
  const location = useLocation();

  // login, logout and autologin functions are here instead of components
  const handleLogin = async (credentials) => {
    try {
      // Post login credentials to API
      const userInfo = await postLogin(credentials);
      console.log(userInfo);
      // set user to state
      setUser(userInfo.user);
      // set token to local storage
      localStorage.setItem('token', userInfo.token);
      //navigate to home
      navigate('/');
    } catch (e) {
      console.log(e.message);
      throw new Error(e.message);
    }
  };

  const handleLogout = () => {
    try {
      // remove token from local storage
      localStorage.removeItem('token');
      //localStorage.clear();
      // set user to null
      setUser(null);
      // navigate to home or login page
      navigate('/login');
    } catch (e) {
      console.log(e.message);
    }
  };

  // handleAutoLogin is used when the app is loaded to check if there is a valid token in local storage
  const handleAutoLogin = async () => {
    //get token from local storage
    const token = localStorage.getItem('token');
    try {
      // if token exists, get user data from API
      // set user to state
      if (token) {
        const userResponse = await getUserByToken(token);
        setUser(userResponse.user);

        navigate(location.pathname);
      }
    } catch (e) {
      console.log(e.message);
      // if token is invalid, remove it from local storage
      localStorage.removeItem('token');
    }
  };

  return (
    <UserContext.Provider
      value={{handleLogin, handleLogout, handleAutoLogin, user}}
    >
      {children}
    </UserContext.Provider>
  );
};

export {UserProvider, UserContext};
