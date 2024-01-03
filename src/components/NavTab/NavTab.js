import logo from "../../images/logo.svg";
import "./NavTab.css";

function NavTab() {
    return (
        <nav className="nav">
            <img className="nav__logo" src={logo} alt="С"></img>
            <ul className="nav__links">
                <li className="nav__link">Регистрация</li>
                <li className="nav__link"><button className="nav__button">Войти</button></li>
            </ul>
        </nav>
    )
}

export default NavTab;