import "./MoviesCard.css";
import { beatfilmMoviesUrl } from "../../utils/apiConfig";

function MoviesCard({ movie, isSavedMoviesPage = false }) {
    const imageLink = `${beatfilmMoviesUrl}/${movie.image.url}`;

    function reformatDurationToHoursAndMinutes(duration) {
        const minutes = duration % 60;
        const hours = Math.floor(duration / 60);

        return `${hours}ч${padNumberTo2Digits(minutes)}м`;
    }

    function padNumberTo2Digits(num) {
        return num.toString().padStart(2, '0');
    }

    const duration = reformatDurationToHoursAndMinutes(movie.duration);

    return (
        <li className="movies-card">
            <img className="movies-card__image" src={imageLink} alt={movie.nameRU} />
            <div className="movies-card__caption">
                <div className="movies-card__name-and-btn">
                    <h2 className="movies-card__name">{movie.nameRU}</h2>
                    {!isSavedMoviesPage && <button type="submit" className="movies-card__save-btn"></button>}
                    {isSavedMoviesPage && <button type="submit" className="movies-card__remove-btn"></button>}
                </div>
                <p className="movies-card__duration">{duration}</p>
            </div>
        </li>
    )
}

export default MoviesCard;