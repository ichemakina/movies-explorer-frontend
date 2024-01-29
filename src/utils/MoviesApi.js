import { beatfilmMoviesUrl } from "./apiConfig";

class MoviesApi {
    constructor(url) {
        this._url = url;
    }

    async getMovies() {
        const result = await fetch(`${this._url}/beatfilm-movies`, {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        });
        if (result.ok) {
            return result.json();
        }
        const err = await result.json();
        throw new Error(err.message);
    }
}

export const moviesApi = new MoviesApi(beatfilmMoviesUrl);