
import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { CircularProgress } from '@mui/material';

import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import './styles.scss';
import { fetchUsers } from './actions/usersAction';
import { fetchChats } from './actions/chatsActionDispatcher';

const App = () => {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUsers())
    dispatch(fetchChats());
  }, [dispatch]);

  const currentUser = useSelector(state => state.users.currentUser);
  console.log(`currentUser:`, currentUser)
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
              {!currentUser ? <CircularProgress /> : <Home />}
            </ProtectedPage>
          } />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />

        </Routes>
      </Router>

      </div>
  );
}

export default App;