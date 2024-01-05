import logo from "../../images/logo.svg";
import "./NavTab.css";
import account from "../../images/account.svg";

function NavTab({ authorized = false }) {
    return (
        <nav className="nav">
            <img className="nav__logo" src={logo} alt="С"></img>
            {authorized
                ? (<>
                    <ul className="nav__links nav__links_authorized">
                        <li className="nav__link">Фильмы</li>
                        <li className="nav__link">Сохранённые фильмы</li>
                    </ul>
                    <div className="nav__links nav__links_authorized nav__links_type_account">
                        <p className="nav__link">Аккаунт</p>
                        <a className="nav__link nav__link_type_account" href="#"><img className="nav__account-img" src={account} alt="Аккаунт"></img></a>
                       
                    </div>
                </>
                )
                : <ul className="nav__links">
                    <li className="nav__link">Регистрация</li>
                    <li className="nav__link"><button className="nav__button">Войти</button></li>
                </ul>}
        </nav>
    )
}

export default NavTab;