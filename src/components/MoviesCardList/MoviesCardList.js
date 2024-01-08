import "./MoviesCardList.css";
import {movies} from "../../utils/constants.js";
import MoviesCard from "../MoviesCard/MoviesCard";

function MoviesCardList() {
    return (
        <section className="movies-card-list">
            <ul className="movies-card-list__elements">
                {
                    movies.map((movie) => {
                        return (
                            <MoviesCard movie={movie} />
                        )
                    })
                }
            </ul>
            <button className="movies-card-list__more-btn">Ещё</button>
        </section>
    )
}

export default MoviesCardList;