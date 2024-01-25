import "./MoviesCard.css";
import { beatfilmMoviesUrl } from "../../utils/apiConfig";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function MoviesCard({ movie, isSavedMoviesPage = false, handleSaveMovie, handleDeleteMovie, savedMovies }) {
    const [isSaved, setIsSaved] = useState(false);
    const imageLink = isSavedMoviesPage ? movie.image : `${beatfilmMoviesUrl}/${movie.image.url}`;

    function reformatDurationToHoursAndMinutes(duration) {
        const minutes = duration % 60;
        const hours = Math.floor(duration / 60);

        return `${hours}ч${padNumberTo2Digits(minutes)}м`;
    }

    function padNumberTo2Digits(num) {
        return num.toString().padStart(2, '0');
    }

    const duration = reformatDurationToHoursAndMinutes(movie.duration);

    useEffect(() => {
        if (isSavedMoviesPage)
            return;
        const isSaved = savedMovies.length !== 0 && savedMovies.some(savedMovie => savedMovie.movieId === movie.id);
        setIsSaved(isSaved);
    }, [savedMovies, movie.id, isSavedMoviesPage]);

    function handleSave() {
        handleSaveMovie(movie);
    }

    function handleRemove() {
        handleDeleteMovie(movie._id);
    }

    return (
        <li className="movies-card">
            <Link to={movie.trailerLink} target="_blank" rel="noopener noreferrer">
                <img className="movies-card__image" src={imageLink} alt={movie.nameRU} />
            </Link>
            <div className="movies-card__caption">
                <div className="movies-card__name-and-btn">
                    <h2 className="movies-card__name">{movie.nameRU}</h2>
                    {!isSavedMoviesPage && <button type="submit" className={`movies-card__save-btn ${isSaved ? "movies-card__save-btn_active" : ""}`} onClick={handleSave}></button>}
                    {isSavedMoviesPage && <button type="submit" className="movies-card__remove-btn" onClick={handleRemove}></button>}
                </div>
                <p className="movies-card__duration">{duration}</p>
            </div>
        </li>
    )
}

export default MoviesCard;