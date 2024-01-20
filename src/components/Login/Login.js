import logo from "../../images/logo.svg";
import "./Login.css";
import React, { useState } from 'react';

function Login({ handleLogin }) {
    const [formValue, setFormValue] = useState({
        email: '',
        password: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;

        setFormValue({
            ...formValue,
            [name]: value
        });
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!formValue.email || !formValue.password) {
            return;
        };
        handleLogin(formValue.email, formValue.password);
        setFormValue({ email: '', password: '' });
    }

    return (
        <main className="login">
            <a href="/"><img className="login__logo" src={logo} alt="Зеленый кружок с белой буквой С внутри"></img></a>
            <h1 className="login__title">Рады видеть!</h1>
            <form className="login__form" onSubmit={handleSubmit}>
                <div className="login__field">
                    <label className="login__label">E-mail</label>
                    <input className="login__input" type="email" name="email" id="email-field" required minLength="2" maxLength="40" placeholder="Email" onChange={handleChange} />
                </div>
                <div className="login__field">
                    <label className="login__label">Пароль</label>
                    <input className="login__input" type="password" name="password" id="password-field" required minLength="2" maxLength="40" placeholder="Пароль" onChange={handleChange} />
                </div>
                <button type="submit" className="login__login-btn">Войти</button>
            </form>
            <div className="login__registration">
                <p className="login__not-register">Ещё не зарегистрированы?</p>
                <a className="login__register-link" href="/signup">Регистрация</a>
            </div>
        </main>
    )
}

export default Login;