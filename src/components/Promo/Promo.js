import landingLogo from "../../images/landing-logo.png"
import "./Promo.css";
import NavTab from "../NavTab/NavTab";

function Promo() {
    return (
        <section className="promo">
            <NavTab />
            <div className="promo__title-and-image">
                <div className="promo__text">
                    <h1 className="promo__title">Учебный проект студента факультета Веб&#8209;разработки.</h1>
                    <h2 className="promo__subtitle">Листайте ниже, чтобы узнать больше про этот проект и его создателя.</h2>
                </div>

                <img className="promo__landing-logo" src={landingLogo} alt="Шар, состоящий из слова web"></img>
            </div>
            <button className="promo__button">Узнать больше</button>
        </section>
    )
}

export default Promo;