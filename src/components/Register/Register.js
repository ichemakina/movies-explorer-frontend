import logo from "../../images/logo.svg";
import "./Register.css";

function Register() {
    return (
        <main className="register">
            <a href="/"><img className="register__logo" src={logo} alt="Зеленый кружок с белой буквой С внутри"></img></a>
            <h1 className="register__title">Добро пожаловать!</h1>
            <form className="register__form">
                <div className="register__field">
                    <label className="register__label">Имя</label>
                    <input className="register__input" type="text" name="name" id="name-field" required minLength="2" maxLength="40" placeholder="Имя"/>
                </div>
                <div className="register__field">
                    <label className="register__label">E-mail</label>
                    <input className="register__input" type="email" name="email" id="email-field" required minLength="2" maxLength="40" placeholder="Email"/>
                </div>
                <div className="register__field">
                    <label className="register__label">Пароль</label>
                    <input className="register__input" type="password" name="password" id="password-field" required minLength="2" maxLength="40" placeholder="Пароль"/>
                </div>
                <button type="submit" className="register__register-btn">Зарегистрироваться</button>
            </form>
            <div className="register__signing">
                <p className="register__already-register">Уже зарегистрированы?</p>
                <a className="register__login-link" href="/signin">Войти</a>
            </div>
        </main>
    )
}

export default Register;