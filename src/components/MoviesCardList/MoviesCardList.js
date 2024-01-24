import "./MoviesCardList.css";
import MoviesCard from "../MoviesCard/MoviesCard";

function MoviesCardList({ movies, isSavedMoviesPage = false, handleMoreMovies, isDisplayedMoreMoviesBtn, handleSaveMovie, handleDeleteMovie, savedMovies }) {
    return (
        <section className="movies-card-list">
            <ul className="movies-card-list__elements">
                {
                    movies.map((movie) => {
                        return (
                            <MoviesCard key={movie.movieId ?? movie.id} movie={movie} isSavedMoviesPage={isSavedMoviesPage} handleSaveMovie={handleSaveMovie} handleDeleteMovie={handleDeleteMovie} savedMovies={savedMovies} />
                        )
                    })
                }
            </ul>
            {isSavedMoviesPage && <div className="movies-card-list__devider"></div>}
            {!isSavedMoviesPage && isDisplayedMoreMoviesBtn && <button type="button" className="movies-card-list__more-btn" onClick={handleMoreMovies}>Ещё</button>}
        </section>
    )
}

export default MoviesCardList;