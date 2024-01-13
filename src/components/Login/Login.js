import logo from "../../images/logo.svg";
import "./Login.css";

function Login() {
    return (
        <section className="login">
            <img className="login__logo" src={logo} alt="С"></img>
            <h2 className="login__title">Рады видеть!</h2>
            <form className="login__form">

                <div className="login__field">
                    <label className="login__label">E-mail</label>
                    <input className="login__input" type="email" name="email" id="email-field" required minLength="2" maxLength="40" />
                </div>
                <div className="login__field">
                    <label className="login__label">Пароль</label>
                    <input className="login__input" type="password" name="password" id="password-field" required minLength="2" maxLength="40" />
                </div>
                <button type="submit" className="login__login-btn">Войти</button>
            </form>
            <div className="login__registration">
                <p className="login__not-register">Ещё не зарегистрированы?</p>
                <a className="login__register-link" href="/signup">Регистрация</a>
            </div>
        </section>
    )
}

export default Login;