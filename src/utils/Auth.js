import { baseUrl } from "./apiConfig";

function checkResponse(result) {
    if (result.ok) {
        return result.json();
    }

    return result.json()
        .then((err) => {
            throw new Error(err.message)
        });
}

export async function register(name, email, password) {
    const result = await fetch(`${baseUrl}/signup`, {
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
    const result = await fetch(`${baseUrl}/signin`, {
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
    const result = await fetch(`${baseUrl}/users/me`, {
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