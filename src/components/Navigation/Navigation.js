import "./Navigation.css";
import account from "../../images/account.svg";

function Navigation() {
    return (
        <nav className="navigation">
            <input className="navigation__btn" id="menu-toggle" type="checkbox" />
            <label className="navigation__btn-lines" htmlFor="menu-toggle">
                <span className="navigation__btn-line"></span>
            </label>

            <div className="navigation__links">
                <ul className="navigation__links_type_films">
                    <li><a className="navigation__link navigation__link_type_main" href="#">Главная</a></li>
                    <li><a className="navigation__link" href="#">Фильмы</a></li>
                    <li><a className="navigation__link" href="#">Сохранённые фильмы</a></li>
                </ul>
                <div className="navigation__links_type_account">
                    <a className="navigation__link" href="#">Аккаунт</a>
                    <a className="navigation__link navigation__link_type_account" href="#">
                        <img className="navigation__account-img" src={account} alt="Аккаунт"></img>
                    </a>
                </div>
            </div>
        </nav>
    )
}

export default Navigation;