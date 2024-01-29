import { Link } from "react-router-dom";
import "./NavTab.css";

function NavTab() {
    return (
        <nav>
            <ul className="header__nav-links">
                <Link to="/signup" className="header__nav-link"><li>Регистрация</li></Link>
                <Link to="/signin" className="header__nav-link"><li><button type="button" className="header__nav-button">Войти</button></li></Link>
            </ul>
        </nav>
    )
}

export default NavTab;