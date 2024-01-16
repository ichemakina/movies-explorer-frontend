import Header from "../Header/Header";
import "./Profile.css";

function Profile() {
    const currentUserName = "Ирина";
    const currentUserEmail = "test@test.ru";

    return (
        <main className="profile">
            <Header />
            <h1 className="profile__name">Привет, {currentUserName}!</h1>
            <form className="profile__edit-form">
                <div className="profile__field profile__field_type_name">
                    <label className="profile__label">Имя</label>
                    <input className="profile__input" type="text" name="name"
                        id="name-field" required minLength="2" maxLength="40" value={currentUserName || ''} placeholder="Имя"/>
                </div>
                <div className="profile__field profile__field_type_email">
                    <label className="profile__label">E-mail</label>
                    <input className="profile__input" type="email" name="email"
                        id="email-field" required minLength="2" maxLength="40" value={currentUserEmail || ''} placeholder="Email"/>
                </div>
                <button type="submit" className="profile__edit-btn">Редактировать</button>
            </form>
            <a className="profile__logout-btn-link" href="/signup"><button type="button" className="profile__logout-btn">Выйти из аккаунта</button></a>
        </main>
    )
}

export default Profile;