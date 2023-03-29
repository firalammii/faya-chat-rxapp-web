
import React, { useContext, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';


import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import './styles.scss';
import { fetchUsers } from './actions/usersAction';


const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchUsers());
  }, []);

  const currentUser = useSelector(state => state.users.currentUser);
  console.log(currentUser);

  const ProtectedPage = ({ children }) => {
    if (!currentUser) return <Navigate to='/login' />;
    return children;
  }
  return (
      <div className='App'>
      <Router>
        <Routes path='/'>
          <Route index element={
            <ProtectedPage>
              <Home />
            </ProtectedPage>
          }
          />
          <Route path="/register" element={<Register />} />
          <Route path="/chat" element={<ProtectedPage />} />
          {/* <Route path="/chat" element={currentUser ? <Home /> : <Login />} /> */}
          <Route path="/login" element={currentUser ? <Home /> : <Login />} />

        </Routes>
      </Router>

      </div>
  );
}

export default App;