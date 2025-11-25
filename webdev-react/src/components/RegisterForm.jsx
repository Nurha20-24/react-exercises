import useForm from '../hooks/formHooks';
import {useUser} from '../hooks/apiHooks';
import {useState} from 'react';

function RegisterForm() {
  const {postUser} = useUser();
  const [error, setError] = useState('');

  const initValues = {
    username: '',
    password: '',
    email: '',
  };

  const doRegister = async (formData) => {
    console.log(formData); // ÄLÄ IKINÄ LOGGAA LOGIN-tietoja tuotannossa!!
    try {
      await postUser(formData);
    } catch (error) {
      console.error('Register error', error);

      setError('Registration failed. Please try again.');
    }
  };

  const {handleInputChange, handleSubmit} = useForm(doRegister, initValues);

  return (
    <>
      <h2>RegisterForm</h2>
      <form onSubmit={handleSubmit} style={{width: '400px', margin: 'auto'}}>
        <div>
          <label htmlFor="registeruser">Username</label>
          <input
            name="username"
            type="text"
            id="registeruser"
            onChange={handleInputChange}
            autoComplete="username"
          />
        </div>
        <div>
          <label htmlFor="registerpassword">Password</label>
          <input
            name="password"
            type="password"
            id="registerpassword"
            onChange={handleInputChange}
            autoComplete="current-password"
          />
        </div>
        <div>
          <label htmlFor="registeremail">Email</label>
          <input
            name="email"
            type="email"
            id="registeremail"
            onChange={handleInputChange}
            autoComplete="email"
          />
        </div>
        {error && (
          <div style={{color: 'red', marginBottom: '20px'}}>{error}</div>
        )}
        <button type="submit">Register</button>
      </form>
    </>
  );
}

export default RegisterForm;
