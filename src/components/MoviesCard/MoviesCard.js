import "./MoviesCard.css";

function MoviesCard({ movie }) {
    return (
        <div className="movies-card">
            <img className="movies-card__image" src={movie.image} alt={movie.nameRU} />
            <div className="movies-card__caption">
                <div className="movies-card__name-and-btn">
                    <h2 className="movies-card__name">{movie.nameRu}</h2>
                    <button className="movies-card__save-btn"></button>
                </div>
                <p className="movies-card__duration">{movie.duration}</p>
            </div>
        </div>
    )
}

export default MoviesCard;