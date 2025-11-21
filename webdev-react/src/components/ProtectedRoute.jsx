import {Navigate} from 'react-router';
import {useUserContext} from '../hooks/contextHooks';

const ProtectedRoute = ({children}) => {
  const {user} = useUserContext();

  if (!user) {
    //return <Navigate to="/" />;
    return <p>Nothing to see here</p>;
  }

  return children;
};

export default ProtectedRoute;
