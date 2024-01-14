import "./Navigation.css";
import account from "../../images/account.svg";

function Navigation({ isMainPage = false, pageUrl }) {
    return (
        <nav className="navigation">
            <input className="navigation__btn" id="menu-toggle" type="checkbox" />
            <label className="navigation__btn-lines" htmlFor="menu-toggle">
                <span className="navigation__btn-line"></span>
            </label>

            <div className="navigation__links">
                <ul className="navigation__links_type_films">
                    <li><a className={`navigation__link navigation__link_type_main ${pageUrl === "/" && 'navigation__link_active'}`} href="/">Главная</a></li>
                    <li><a className={`navigation__link ${pageUrl === "/movies" && 'navigation__link_active'}`} href="/movies">Фильмы</a></li>
                    <li><a className={`navigation__link ${pageUrl === "/saved-movies" && 'navigation__link_active'}`} href="/saved-movies">Сохранённые фильмы</a></li>
                </ul>
                <div className="navigation__links_type_account">
                    <a className="navigation__link" href="/profile">Аккаунт</a>
                    <a className={isMainPage ? "navigation__link navigation__link_type_account navigation__link_on-main-page" : "navigation__link navigation__link_type_account"} href="/profile">
                        <img className="navigation__account-img" src={account} alt="Аккаунт"></img>
                    </a>
                </div>
            </div>
        </nav>
    )
}

export default Navigation;