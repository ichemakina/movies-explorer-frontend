import AboutMe from "../AboutMe/AboutMe";
import AboutProject from "../AboutProject/AboutProject";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import Promo from "../Promo/Promo";
import Techs from "../Techs/Techs";
import "./Main.css";

function Main() {
    return (
        <main className="main">
            <Header />
            <Promo />
            <AboutProject />
            <Techs />
            <AboutMe />
            <Footer />
        </main>
    )
}

export default Main;