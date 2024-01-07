import Navigation from "../Navigation/Navigation";
import logo from "../../images/logo.svg";
import "./Header.css";
import NavTab from "../NavTab/NavTab";

function Header({ authorized = true }) {
    return (
        <header className="header">
            <img className="nav__logo" src={logo} alt="С"></img>
            {authorized
                ? <Navigation />
                : <NavTab />}
        </header>
    )
}

export default Header;