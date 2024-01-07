import "./NavTab.css";

function NavTab({ authorized = true }) {
    return (
        <ul className="nav__links">
            <li className="nav__link">Регистрация</li>
            <li className="nav__link"><button className="nav__button">Войти</button></li>
        </ul>
    )
}

export default NavTab;