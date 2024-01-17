import "./Navigation.css";
import account from "../../images/account.svg";
import { useState } from 'react';

function Navigation({ isMainPage = false, pageUrl }) {
    const [isOpenMenu, setIsOpenMenu] = useState(false);

    function handleBurgerMenuClick() {
        setIsOpenMenu(!isOpenMenu);
    }

    return (
        <nav className="header__navigation">
            <button type="button" className="header__navigation-menu-open-btn" onClick={handleBurgerMenuClick}></button>
            <div className={`header__navigation-menu ${isOpenMenu && 'header__navigation-menu_opened'}`}>
                <div className="header__navigation-menu-close-and-links">
                    <button type="button" className="header__navigation-menu-close-btn" onClick={handleBurgerMenuClick}></button>
                    <div className="header__navigation-links">
                        <ul className="header__navigation-films-links">
                            <li><a className={`header__navigation-link header__navigation-link_type_main ${pageUrl === "/" && 'header__navigation-link_active'}`} href="/">Главная</a></li>
                            <li><a className={`header__navigation-link ${pageUrl === "/movies" && 'header__navigation-link_active'}`} href="/movies">Фильмы</a></li>
                            <li><a className={`header__navigation-link ${pageUrl === "/saved-movies" && 'header__navigation-link_active'}`} href="/saved-movies">Сохранённые фильмы</a></li>
                        </ul>
                        <div className="header__navigation-account-links">
                            <a className="header__navigation-link" href="/profile">Аккаунт</a>
                            <a className={isMainPage ? "header__navigation-link header__navigation-link_type_account header__navigation-link_on-main-page" : "header__navigation-link header__navigation-link_type_account"} href="/profile">
                                <img className="header__navigation-account-img" src={account} alt="Аккаунт"></img>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navigation;