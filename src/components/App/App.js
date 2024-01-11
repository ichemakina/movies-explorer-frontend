import Login from '../Login/Login';
import Main from '../Main/Main';
import Movies from '../Movies/Movies';
import Profile from '../Profile/Profile';
import Register from '../Register/Register';
import SavedMovies from '../SavedMovies/SavedMovies';
import './App.css';
import { useEffect, useState } from 'react';
import { Route, Routes, useLocation } from "react-router-dom";

function App() {
  const [isMainPage, setIsMainPage] = useState(false);

  const location = useLocation();

  useEffect(() => {
    if (location.pathname === '/')
      setIsMainPage(true);
  }, [location]);

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={
          <Main isMainPage={isMainPage} />
        } />

        <Route path='/movies' element={
          <Movies />
        } />
        <Route path='/saved-movies' element={
          <SavedMovies />
        } />

        <Route path='/profile' element={
          <Profile />
        } />

        <Route path='/signup' element={
          <Register />
        } />

        <Route path='/signin' element={
          <Login />
        } />

      </Routes>

    </div>
  );
}

export default App;
