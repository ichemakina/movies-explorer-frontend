import Navigation from "../Navigation/Navigation";
import logo from "../../images/logo.svg";
import "./Header.css";
import NavTab from "../NavTab/NavTab";

function Header({ authorized = true, isMainPage = false, pageUrl }) {
    return (
        <header className={isMainPage ? "header header_on-main-page" : "header"}>
            <a href="/"><img className="nav__logo" src={logo} alt="С"></img></a>
            {authorized
                ? <Navigation isMainPage={isMainPage} pageUrl={pageUrl} />
                : <NavTab />}
        </header>
    )
}

export default Header;