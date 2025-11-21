import useForm from '../hooks/formHooks';
import {useAuthentication} from '../hooks/apiHooks';

const LoginForm = () => {
  const {postLogin} = useAuthentication();

  const initValues = {
    username: '',
    password: '',
  };

  const doLogin = async (formData) => {
    //console.log(formData); // ÄLÄ IKINÄ LOGGAA LOGIN-tietoja tuotannossa!!
    try {
      const userInfo = await postLogin(formData);
      console.log(userInfo);
      localStorage.setItem('token', userInfo.token);
    } catch (error) {
      console.log('login error', error);
      // TODO: kotihommia: kerro käyttäjälle, miksi kirjautuminen epäonnistui
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
        <button type="submit">Login</button>
      </form>
    </>
  );
};

export default LoginForm;
