import "./Navigation.css";
import account from "../../images/account.svg";
import { useState } from 'react';
import { Link } from "react-router-dom";

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
                            <li><Link to="/" className={`header__navigation-link header__navigation-link_type_main ${pageUrl === "/" && 'header__navigation-link_active'}`}>Главная</Link></li>
                            <li><Link to="/movies" className={`header__navigation-link ${pageUrl === "/movies" && 'header__navigation-link_active'}`}>Фильмы</Link></li>
                            <li><Link to="/saved-movies" className={`header__navigation-link ${pageUrl === "/saved-movies" && 'header__navigation-link_active'}`}>Сохранённые фильмы</Link></li>
                        </ul>
                        <div className="header__navigation-account-links">
                            <Link to="/profile" className="header__navigation-link" >Аккаунт</Link>
                            <Link to="/profile" className={isMainPage ? "header__navigation-link header__navigation-link_type_account header__navigation-link_on-main-page" : "header__navigation-link header__navigation-link_type_account"}>
                                <img className="header__navigation-account-img" src={account} alt="Аккаунт"></img>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navigation;