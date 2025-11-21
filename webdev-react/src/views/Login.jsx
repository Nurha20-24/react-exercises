import LoginForm from '../components/LoginForm';
import RegisterForm from '../components/RegisterForm';
import {useState} from 'react';

const Login = () => {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <>
      {isLogin ? <LoginForm /> : <RegisterForm />}
      <button
        onClick={() => {
          setIsLogin(!isLogin);
        }}
      >
        {isLogin ? 'Rekisteröidy' : 'Kirjaudu'}
      </button>
    </>
  );
};

export default Login;
