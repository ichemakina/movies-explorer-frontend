import Header from "../Header/Header";
import "./Profile.css";
import { useState, useContext, useEffect } from "react";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import useForm from "../../hooks/useForm";

function Profile({ handleLogout, handleEditProfile, resultMessage, isLoading }) {
    const currentUser = useContext(CurrentUserContext);

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');

    useEffect(() => {
        setName(currentUser.name);
        setEmail(currentUser.email);
    }, [currentUser]);

    function handleLogoutClick() {
        handleLogout();
    }

    function handleSubmitForm(e) {
        const { name, email } = values;
        handleEditProfile({
            name,
            email,
        });
    }

    const { handleChange, values, errors, handleSubmit, isValid } = useForm(handleSubmitForm);

    return (
        <div className="profile">
            <Header />
            <main>
                <h1 className="profile__name">Привет, {currentUser.name}!</h1>
                <form className="profile__edit-form" onSubmit={handleSubmit}>
                    <div className="profile__field">
                        <div className="profile__label-and-input profile__label-and-input_type_name">
                            <label className="profile__label">Имя</label>
                            <input className="profile__input" type="text" name="name"
                                id="name-field" required minLength="2" maxLength="40" placeholder="Имя" defaultValue={name || ''} onChange={handleChange} />
                        </div>
                        <span className="profile__error">{errors.name}</span>
                    </div>
                    <div className="profile__field">
                        <div className="profile__label-and-input  profile__label-and-input_type_email">
                            <label className="profile__label">E-mail</label>
                            <input className="profile__input" type="email" name="email"
                                id="email-field" required minLength="2" maxLength="40" placeholder="Email" defaultValue={email || ''} onChange={handleChange} />
                        </div>
                        <span className="profile__error">{errors.email}</span>
                    </div>
                    <p className={`profile__result ${resultMessage.isSuccess ? "profile__result_success" : "profile__result_not-success"}`}>{resultMessage.message}</p>
                    <button type="submit" className={`profile__edit-btn ${isValid && ((values.name && values.name !== currentUser.name) || (values.email && values.email !== currentUser.email)) && !isLoading ? "" : "profile__edit-btn_disabled"}`}>Редактировать</button>
                </form>
                <button type="button" className="profile__logout-btn" onClick={handleLogoutClick}>Выйти из аккаунта</button>
            </main>
        </div>
    )
}

export default Profile;