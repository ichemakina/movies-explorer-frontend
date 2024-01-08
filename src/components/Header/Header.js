import Navigation from "../Navigation/Navigation";
import logo from "../../images/logo.svg";
import "./Header.css";
import NavTab from "../NavTab/NavTab";

function Header({ authorized = true, isMainPage = false }) {
    return (
        <header className={isMainPage ? "header header_on-main-page" : "header"}>
            <img className="nav__logo" src={logo} alt="С"></img>
            {authorized
                ? <Navigation isMainPage={isMainPage} />
                : <NavTab />}
        </header>
    )
}

export default Header;