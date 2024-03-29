import logo from "../../images/logo.svg";
import "./Login.css";
import useForm from "../../hooks/useForm";
import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

function Login({ handleLogin, resultMessage, isLoading }) {
    const navigate = useNavigate();

    useEffect(() => {
        if (localStorage.getItem('authorized'))
            navigate('/', { replace: true });
    }, []);

    const handleSubmitForm = (e) => {
        const { email, password } = values;
        handleLogin(email, password);
    }

    const { handleChange, values, errors, handleSubmit, isValid } = useForm(handleSubmitForm);

    return (
        <main className="login">
            <Link to="/"><img className="login__logo" src={logo} alt="Зеленый кружок с белой буквой С внутри"></img></Link>
            <h1 className="login__title">Рады видеть!</h1>
            <form className="login__form" onSubmit={handleSubmit}>
                <div className="login__field">
                    <label className="login__label">E-mail</label>
                    <input className={`login__input ${errors.email ? "login__input-error" : ""}`} type="email" name="email" id="email-field" required minLength="2" maxLength="40" placeholder="Email" onChange={handleChange} />
                    <span className="login__error">{errors.email}</span>
                </div>
                <div className="login__field">
                    <label className="login__label">Пароль</label>
                    <input className={`login__input ${errors.password ? "login__input-error" : ""}`} type="password" name="password" id="password-field" required minLength="2" maxLength="40" placeholder="Пароль" onChange={handleChange} />
                    <span className="login__error">{errors.password}</span>
                </div>
                <p className={`login__result ${resultMessage ? "login__result_visible" : ""}`}>{resultMessage.message}</p>
                <button type="submit" className={`login__login-btn ${isValid && !isLoading ? "" : "login__login-btn_disabled"}`}>Войти</button>
            </form>
            <div className="login__registration">
                <p className="login__not-register">Ещё не зарегистрированы?</p>
                <Link to="/signup" className="login__register-link">Регистрация</Link>
            </div>
        </main>
    )
}

export default Login;