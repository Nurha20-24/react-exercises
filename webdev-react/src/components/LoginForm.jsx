import useForm from '../hooks/formHooks';
import {useUserContext} from '../hooks/contextHooks';
import {useState} from 'react';

const LoginForm = () => {
  const {handleLogin} = useUserContext();
  const [error, setError] = useState('');

  const initValues = {
    username: '',
    password: '',
  };

  const doLogin = async (formData) => {
    //console.log(formData); // ÄLÄ IKINÄ LOGGAA LOGIN-tietoja tuotannossa!!
    setError(''); // Clear previous errors
    try {
      await handleLogin(formData);
    } catch (error) {
      console.log('login error', error);
      setError('Login failed. Please try again.');
    }
  };

  const {handleInputChange, handleSubmit} = useForm(doLogin, initValues);

  return (
    <>
      <h1>Login</h1>

      <form onSubmit={handleSubmit} style={{width: '400px', margin: 'auto'}}>
        <div>
          <label htmlFor="loginuser">Username</label>
          <input
            name="username"
            type="text"
            id="loginuser"
            onChange={handleInputChange}
            autoComplete="username"
          />
        </div>
        <div>
          <label htmlFor="loginpassword">Password</label>
          <input
            name="password"
            type="password"
            id="loginpassword"
            onChange={handleInputChange}
            autoComplete="current-password"
          />
        </div>
        {error && (
          <div
            style={{
              color: 'red',
              marginBottom: '20px',
            }}
          >
            {error}
          </div>
        )}
        <button type="submit">Login</button>
      </form>
    </>
  );
};

export default LoginForm;
