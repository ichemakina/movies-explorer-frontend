import "./MoviesCard.css";

function MoviesCard({ movie, isSavedMoviesPage = false }) {
    return (
        <li className="movies-card">
            <img className="movies-card__image" src={movie.image} alt={movie.nameRu} />
            <div className="movies-card__caption">
                <div className="movies-card__name-and-btn">
                    <h2 className="movies-card__name">{movie.nameRu}</h2>
                    {!isSavedMoviesPage && <button type="submit" className="movies-card__save-btn"></button>}
                    {isSavedMoviesPage && <button type="submit" className="movies-card__remove-btn"></button>}
                </div>
                <p className="movies-card__duration">{movie.duration}</p>
            </div>
        </li>
    )
}

export default MoviesCard;