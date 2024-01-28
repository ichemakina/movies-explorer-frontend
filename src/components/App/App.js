import Login from '../Login/Login';
import Main from '../Main/Main';
import Movies from '../Movies/Movies';
import Profile from '../Profile/Profile';
import Register from '../Register/Register';
import SavedMovies from '../SavedMovies/SavedMovies';
import NotFoundPage from '../NotFoundPage/NotFoundPage';
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';
import './App.css';
import { useEffect, useState } from 'react';
import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
import { register, authorize, checkToken } from '../../utils/Auth';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import { api } from '../../utils/Main';
import { beatfilmMoviesUrl } from "../../utils/apiConfig";

function App() {
  const navigate = useNavigate();
  const location = useLocation();

  const [authorized, setAuthorized] = useState(() => {
    return localStorage.getItem('authorized');
  });
  const [isMainPage, setIsMainPage] = useState(false);
  const [pageUrl, setPageUrl] = useState('');
  const [currentUser, setCurrentUser] = useState({});
  const [queryResultMessage, setQueryResultMessage] = useState({ message: '', isSuccess: false });
  const [isLoading, setIsLoading] = useState(false);
  const [savedMovies, setSavedMovies] = useState([]);
  const [saveOrRemoveMovieErrors, setSaveOrRemoveMovieErrors] = useState({ message: '', movieId: '' });

  useEffect(() => {
    if (location.pathname === '/')
      setIsMainPage(true);
    setPageUrl(location.pathname);
    setQueryResultMessage({ message: '', isSuccess: false });
  }, [location]);

  useEffect(() => {
    function handleTokenCheck() {
      if (localStorage.getItem('token')) {
        const token = localStorage.getItem('token');
        checkToken(token)
          .then(() => {
            setAuthorized(true);
            localStorage.setItem('authorized', true);
          })
          .catch(console.error);

        api.getUserInfo()
          .then((userData) => {
            setCurrentUser(userData);
          })
          .catch(console.error);
        getSavedMovies();
      }
    }

    handleTokenCheck();
  }, []);

  function getSavedMovies() {
    api.getMovies()
      .then((data) => {
        setSavedMovies(data);
      })
      .catch(console.error);
  }

  function handleRegister(name, email, password) {
    setIsLoading(true);
    register(name, email, password)
      .then(() => {
        navigate("/movies", { replace: true });
        setAuthorized(true);
        localStorage.setItem('authorized', true);

        api.getUserInfo()
          .then((userData) => {
            setCurrentUser(userData);
          })
          .catch(console.error);
      })
      .catch((err) => {
        setQueryResultMessage({ message: err.message, isSuccess: false });
      })
      .finally(() => {
        setIsLoading(false);
      });
  }

  function handleLogin(email, password) {
    setIsLoading(true);
    authorize(email, password)
      .then((data) => {
        if (data.token) {
          setAuthorized(true);
          localStorage.setItem('authorized', true);
          navigate('/movies', { replace: true });

          api.getUserInfo()
            .then((userData) => {
              setCurrentUser(userData);
            })
            .catch(console.error);
          getSavedMovies();
        }
      })
      .catch((err) => {
        setQueryResultMessage({ message: err.message, isSuccess: false });
      })
      .finally(() => {
        setIsLoading(false);
      });
  }

  function handleLogout() {
    localStorage.removeItem('token');
    localStorage.removeItem('authorized');
    localStorage.removeItem('searchResults');
    localStorage.removeItem('isShortFilmsFilter');
    localStorage.removeItem('searchValue');
    setAuthorized(false);
    navigate("/", { replace: true });
  }

  function handleEditProfile(userInfo) {
    setIsLoading(true);
    api.updateUserInfo(userInfo)
      .then(userData => {
        setCurrentUser(userData);
        setQueryResultMessage({ message: "Данные успешно обновлены.", isSuccess: true });
      })
      .catch((err) => {
        setQueryResultMessage({ message: err.message, isSuccess: false });
      })
      .finally(() => {
        setIsLoading(false);
      });
  }

  function handleLikeMovie(movie) {
    if (savedMovies.some(savedMovie => savedMovie.movieId === movie.id)) {
      const savedMovie = savedMovies.find(savedMovie => savedMovie.movieId === movie.id);
      deleteMovie(savedMovie._id);
      return;
    }

    saveMovie(movie);
  }

  function saveMovie(movie) {
    const imageLink = `${beatfilmMoviesUrl}/${movie.image.url}`;
    let newMovie = {
      nameRU: movie.nameRU,
      nameEN: movie.nameEN,
      director: movie.director,
      country: movie.country,
      year: movie.year,
      duration: movie.duration,
      description: movie.description,
      trailerLink: movie.trailerLink,
      image: imageLink,
      thumbnail: imageLink,
      movieId: movie.id
    }
    api.saveMovie(newMovie)
      .then((movie) => {
        setSavedMovies((movies => [...movies, movie]));
      })
      .catch(() => {
        setSaveOrRemoveMovieErrors({ message: "Произошла ошибка. Пожалуйста, попробуйте позже.", movieId: movie.id });
      });
  }

  function deleteMovie(movieId) {
    api.removeMovie(movieId)
      .then(() => {
        setSavedMovies((state) => state.filter((c) => c._id !== movieId));
      })
      .catch(() => {
        setSaveOrRemoveMovieErrors({ message: "Произошла ошибка. Пожалуйста, попробуйте позже.", movieId: movieId });
      });
  }

  return (
    <div className="App">
      <CurrentUserContext.Provider value={currentUser}>
        <Routes>
          <Route path="/" element={
            <Main isMainPage={isMainPage} pageUrl={pageUrl} authorized={authorized} />
          } />

          <Route path='/movies' element={
            <ProtectedRoute authorized={authorized} element={
              <Movies pageUrl={pageUrl} savedMovies={savedMovies} handleSaveMovie={handleLikeMovie} saveMovieErrors={saveOrRemoveMovieErrors} />
            } />
          } />
          <Route path='/saved-movies' element={
            <ProtectedRoute authorized={authorized} element={
              <SavedMovies pageUrl={pageUrl} savedMovies={savedMovies} deleteMovie={deleteMovie} removeMovieErrors={saveOrRemoveMovieErrors} />
            } />
          } />
          <Route path='/profile' element={
            <ProtectedRoute authorized={authorized} element={
              <Profile handleLogout={handleLogout} handleEditProfile={handleEditProfile} resultMessage={queryResultMessage} isLoading={isLoading} />
            } />
          } />

          <Route path='/signup' element={
            <Register handleRegister={handleRegister} resultMessage={queryResultMessage} isLoading={isLoading} />
          } />

          <Route path='/signin' element={
            <Login handleLogin={handleLogin} resultMessage={queryResultMessage} isLoading={isLoading} />
          } />

          <Route path='*' element={
            <NotFoundPage />
          } />
        </Routes>
      </CurrentUserContext.Provider>
    </div>
  );
}

export default App;
