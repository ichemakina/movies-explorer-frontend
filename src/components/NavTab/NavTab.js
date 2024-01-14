import "./NavTab.css";

function NavTab({ authorized = true }) {
    return (
        <nav>
            <ul className="nav__links">
                <li className="nav__link">Регистрация</li>
                <li className="nav__link"><button type="button" className="nav__button">Войти</button></li>
            </ul>
        </nav>
    )
}

export default NavTab;