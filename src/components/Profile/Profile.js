import Header from "../Header/Header";
import "./Profile.css";
import { useState, useContext, useEffect } from "react";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";

function Profile({ handleLogout, handleEditProfile }) {
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

    function handleNameChange(e) {
        setName(e.target.value);
    }

    function handleEmailChange(e) {
        setEmail(e.target.value);
    }

    function handleSubmit(e) {
        e.preventDefault();

        handleEditProfile({
            name,
            email,
        });
    }

    return (
        <div className="profile">
            <Header />
            <main>
                <h1 className="profile__name">Привет, {currentUser.name}!</h1>
                <form className="profile__edit-form" onSubmit={handleSubmit}>
                    <div className="profile__field profile__field_type_name">
                        <label className="profile__label">Имя</label>
                        <input className="profile__input" type="text" name="name"
                            id="name-field" required minLength="2" maxLength="40" placeholder="Имя" value={name || ''} onChange={handleNameChange} />
                    </div>
                    <div className="profile__field profile__field_type_email">
                        <label className="profile__label">E-mail</label>
                        <input className="profile__input" type="email" name="email"
                            id="email-field" required minLength="2" maxLength="40" placeholder="Email" value={email || ''} onChange={handleEmailChange} />
                    </div>
                    <button type="submit" className="profile__edit-btn">Редактировать</button>
                </form>
                <button type="button" className="profile__logout-btn" onClick={handleLogoutClick}>Выйти из аккаунта</button>
            </main>
        </div>
    )
}

export default Profile;