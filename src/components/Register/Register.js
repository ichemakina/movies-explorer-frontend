import logo from "../../images/logo.svg";
import "./Register.css";
import useForm from "../../hooks/useForm";

function Register({ handleRegister }) {
    const handleSubmitForm = (e) => {
        const { name, email, password } = values;
        handleRegister(name, email, password);
    }

    const { handleChange, values, errors, handleSubmit, isValid } = useForm(handleSubmitForm);

    return (
        <main className="register">
            <a href="/"><img className="register__logo" src={logo} alt="Зеленый кружок с белой буквой С внутри"></img></a>
            <h1 className="register__title">Добро пожаловать!</h1>
            <form className="register__form" onSubmit={handleSubmit} noValidate>
                <div className="register__field">
                    <label className="register__label">Имя</label>
                    <input className={`register__input ${errors.name ? "register__input-error" : ""}`} type="text" name="name" id="name-field" required minLength="2" maxLength="40" placeholder="Имя" onChange={handleChange} />
                    <span className="register__error">{errors.name}</span>
                </div>
                <div className="register__field">
                    <label className="register__label">E-mail</label>
                    <input className={`register__input ${errors.email ? "register__input-error" : ""}`} type="email" name="email" id="email-field" required minLength="2" maxLength="40" placeholder="Email" onChange={handleChange} />
                    <span className="register__error">{errors.email}</span>
                </div>
                <div className="register__field">
                    <label className="register__label">Пароль</label>
                    <input className={`register__input ${errors.password ? "register__input-error" : ""}`} type="password" name="password" id="password-field" required minLength="2" maxLength="40" placeholder="Пароль" onChange={handleChange} />
                    <span className="register__error">{errors.password}</span>
                </div>
                <button type="submit" className={`register__register-btn ${isValid ? "" : "register__register-btn_disabled"}`}>Зарегистрироваться</button>
            </form>
            <div className="register__signing">
                <p className="register__already-register">Уже зарегистрированы?</p>
                <a className="register__login-link" href="/signin">Войти</a>
            </div>
        </main>
    )
}

export default Register;