import AboutMe from "../AboutMe/AboutMe";
import AboutProject from "../AboutProject/AboutProject";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import Promo from "../Promo/Promo";
import Techs from "../Techs/Techs";
import "./Main.css";

function Main({ isMainPage = false, pageUrl, authorized }) {
    return (
        <div className="main">
            <Header isMainPage={isMainPage} pageUrl={pageUrl} authorized={authorized} />
            <main>
                <Promo />
                <AboutProject />
                <Techs />
                <AboutMe />
            </main>
            <Footer />
        </div>
    )
}

export default Main;