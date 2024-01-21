const baseUrl = 'http://localhost:3000';
const beatfilmMoviesUrl = 'https://api.nomoreparties.co';

export { baseUrl, beatfilmMoviesUrl };
export const mainApiConfig = {
    baseUrl: baseUrl,
    headers: {
        'Content-Type': 'application/json'
    }
};