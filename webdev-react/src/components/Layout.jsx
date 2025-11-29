import {Link, Outlet} from 'react-router';
import {useUserContext} from '../hooks/contextHooks';
import {useEffect} from 'react';

const Layout = () => {
  const {handleAutoLogin, user} = useUserContext();

  useEffect(() => {
    handleAutoLogin();
  }, []);

  return (
    <div>
      <nav className="mb-10 bg-white-500 shadow-sm border-b rounded-x px-10 py-10l">
        <ul className="flex items-center gap-15 border-gray-200 text-lg font-bold text-indigo-900">
          <li>
            <Link className="hover:text-indigo-600 p-10" to="/">
              Home
            </Link>
          </li>
          {user && (
            <>
              <li>
                <Link className="hover:text-indigo-600 p-10" to="/profile">
                  Profile
                </Link>
              </li>
              <li>
                <Link className="hover:text-indigo-600 p-10" to="/upload">
                  Upload
                </Link>
              </li>
              <li>
                <Link className="hover:text-indigo-600 p-10" to="/pizzas">
                  Pizzas
                </Link>
              </li>
              <li>
                <Link className="hover:text-red-600 p-10" to="/logout">
                  Logout
                </Link>
              </li>
            </>
          )}
          {!user && (
            <li>
              <Link className="hover:text-indigo-600 p-8" to="/login">
                Login
              </Link>
            </li>
          )}
        </ul>
      </nav>
      <main>
        <Outlet />
      </main>
    </div>
  );
};

Layout.propTypes = {};

export default Layout;
