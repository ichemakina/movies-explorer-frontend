import Main from '../Main/Main';
import Movies from '../Movies/Movies';
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

      </Routes>

    </div>
  );
}

export default App;
