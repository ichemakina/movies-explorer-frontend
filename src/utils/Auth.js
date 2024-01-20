export const BASE_URL = 'http://localhost:3000';

function checkResponse(result) {
    if (result.ok) {
        return result.json();
    }

    return Promise.reject(`Ошибка: ${result.status}`);
}

export async function register(name, email, password) {
    const result = await fetch(`${BASE_URL}/signup`, {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            name: name,
            password: password,
            email: email
        })
    });
    const res = await checkResponse(result);
    if (res.token) {
        localStorage.setItem('token', res.token);
        return res;
    }
};

export async function authorize(email, password) {
    const result = await fetch(`${BASE_URL}/signin`, {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            password: password,
            email: email
        })
    });
    const res = await checkResponse(result);
    if (res.token) {
        localStorage.setItem('token', res.token);
        return res;
    }
};

export async function checkToken(token) {
    const result = await fetch(`${BASE_URL}/users/me`, {
        method: 'GET',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`,
        }
    });
    const res = await checkResponse(result);
    return res;
}