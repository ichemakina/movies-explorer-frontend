import "./NavTab.css";

function NavTab() {
    return (
        <nav>
            <ul className="header__nav-links">
                <a className="header__nav-link" href="/signup"><li>Регистрация</li></a>
                <a className="header__nav-link" href="/signin"><li className="nav__link"><button type="button" className="header__nav-button">Войти</button></li></a>
            </ul>
        </nav>
    )
}

export default NavTab;