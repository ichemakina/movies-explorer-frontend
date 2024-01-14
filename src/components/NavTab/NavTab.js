import "./NavTab.css";

function NavTab() {
    return (
        <nav>
            <ul className="nav__links">
                <a className="nav__link" href="/signup"><li>Регистрация</li></a>
                <a className="nav__link" href="/signin"><li className="nav__link"><button type="button" className="nav__button">Войти</button></li></a>
            </ul>
        </nav>
    )
}

export default NavTab;