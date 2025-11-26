import {useUserContext} from '../hooks/contextHooks';

const Login = () => {
  const {handleLogout} = useUserContext();
  return <button onClick={handleLogout}>Logout</button>;
};

export default Login;
