import {BrowserRouter, Routes, Route} from 'react-router';
import './App.css';
import {UserProvider} from './contexts/UserContext';

import Layout from './components/Layout';
import Home from './views/Home';
import Profile from './views/Profile';
import Upload from './views/Upload';
import Pizzas from './views/Pizzas';
import Single from './views/Single';
import Login from './views/Login';
import Logout from './views/Logout';
import ProtectedRoute from './components/ProtectedRoute';

const App = () => {
  return (
    <BrowserRouter basename={import.meta.env.BASE_URL}>
      <UserProvider>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route
              path="/profile"
              element={
                <ProtectedRoute>
                  <Profile />
                </ProtectedRoute>
              }
            />
            <Route
              path="/upload"
              element={
                <ProtectedRoute>
                  <Upload />
                </ProtectedRoute>
              }
            />
            <Route
              path="/pizzas"
              element={
                <ProtectedRoute>
                  <Pizzas />
                </ProtectedRoute>
              }
            />
            <Route path="/single" element={<Single />} />
            <Route path="/login" element={<Login />} />
            <Route
              path="/logout"
              element={
                <ProtectedRoute>
                  <Logout />
                </ProtectedRoute>
              }
            />
          </Route>
        </Routes>
      </UserProvider>
    </BrowserRouter>
  );
};
export default App;
