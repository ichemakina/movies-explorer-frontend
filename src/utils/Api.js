import { apiConfig } from './apiConfig';

class Api {
    constructor(options) {
        this._url = options.baseUrl;
        this._headers = options.headers;
    }

    _checkResponse(result) {
        if (result.ok) {
            return result.json();
        }

        return Promise.reject(`Ошибка: ${result.status}`);
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
}

export const api = new Api(apiConfig);