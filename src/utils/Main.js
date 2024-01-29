import { mainApiConfig } from './apiConfig';

class Api {
    constructor(options) {
        this._url = options.baseUrl;
        this._headers = options.headers;
    }

    _checkResponse(result) {
        if (result.ok) {
            return result.json();
        }

        return result.json()
            .then((err) => {
                throw new Error(err.message)
            });
    }

    _request(url, options) {
        return fetch(url, options).then(this._checkResponse)
    }

    setToken(token) {
        this._headers['authorization'] = `Bearer ${token}`;
    }

    getUserInfo() {
        const token = localStorage.getItem('token');
        api.setToken(token);
        return this._request(`${this._url}/users/me`, {
            headers: this._headers
        });
    }

    updateUserInfo(data) {
        const token = localStorage.getItem('token');
        api.setToken(token);
        return this._request(`${this._url}/users/me`, {
            method: 'PATCH',
            headers: this._headers,
            body: JSON.stringify({
                name: data.name,
                email: data.email
            })
        });
    }

    getMovies() {
        const token = localStorage.getItem('token');
        api.setToken(token);
        return this._request(`${this._url}/movies`, {
            headers: this._headers
        });
    }

    saveMovie(data) {
        const token = localStorage.getItem('token');
        api.setToken(token);
        return this._request(`${this._url}/movies`, {
            method: 'POST',
            headers: this._headers,
            body: JSON.stringify({
                nameRU: data.nameRU,
                nameEN: data.nameEN,
                director: data.director,
                country: data.country,
                year: data.year,
                duration: data.duration,
                description: data.description,
                trailerLink: data.trailerLink,
                image: data.image,
                thumbnail: data.thumbnail,
                movieId: data.movieId
            })
        });
    }

    removeMovie(movieId) {
        const token = localStorage.getItem('token');
        api.setToken(token);
        return this._request(`${this._url}/movies/${movieId}`, {
            method: 'DELETE',
            headers: this._headers
        });
    }
}

export const api = new Api(mainApiConfig);