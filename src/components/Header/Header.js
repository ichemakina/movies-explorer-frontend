import Navigation from "../Navigation/Navigation";
import logo from "../../images/logo.svg";
import "./Header.css";
import NavTab from "../NavTab/NavTab";
import { Link } from "react-router-dom";

function Header({ authorized = true, isMainPage = false, pageUrl }) {
    return (
        <header className={isMainPage ? "header header_on-main-page" : "header"}>
            <Link to="/"><img className="header__nav-logo" src={logo} alt="Зеленый кружок с белой буквой С внутри"></img></Link>
            {authorized
                ? <Navigation isMainPage={isMainPage} pageUrl={pageUrl} />
                : <NavTab />}
        </header>
    )
}

export default Header;