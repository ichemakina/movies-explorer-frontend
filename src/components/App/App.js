import Login from '../Login/Login';
import Main from '../Main/Main';
import Movies from '../Movies/Movies';
import Profile from '../Profile/Profile';
import Register from '../Register/Register';
import SavedMovies from '../SavedMovies/SavedMovies';
import NotFoundPage from '../NotFoundPage/NotFoundPage';
import './App.css';
import { useEffect, useState } from 'react';
import { Route, Routes, useLocation } from "react-router-dom";

function App() {
  const [isMainPage, setIsMainPage] = useState(false);
  const [pageUrl, setPageUrl] = useState('');

  const location = useLocation();

  useEffect(() => {
    if (location.pathname === '/')
      setIsMainPage(true);
    setPageUrl(location.pathname);
  }, [location]);


  return (
    <div className="App">
      <Routes>
        <Route path="/" element={
          <Main isMainPage={isMainPage} pageUrl={pageUrl} />
        } />

        <Route path='/movies' element={
          <Movies pageUrl={pageUrl} />
        } />
        <Route path='/saved-movies' element={
          <SavedMovies pageUrl={pageUrl} />
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

        <Route path='*' element={
          <NotFoundPage />
        } />

      </Routes>

    </div>
  );
}

export default App;
