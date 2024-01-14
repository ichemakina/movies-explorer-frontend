import landingLogo from "../../images/landing-logo.svg"
import "./Promo.css";

function Promo() {
    return (
        <section className="promo">
            <div className="promo__title-and-image">
                <div className="promo__text">
                    <h1 className="promo__title">Учебный проект студента факультета Веб&#8209;разработки.</h1>
                    <h2 className="promo__subtitle">Листайте ниже, чтобы узнать больше про этот проект и его создателя.</h2>
                </div>

                <img className="promo__landing-logo" src={landingLogo} alt="Шар, состоящий из слова web"></img>
            </div>
            <button type="button" className="promo__button">
                <a className="promo__learn-more-link" href="#about-project">Узнать больше</a>
            </button>
        </section>
    )
}

export default Promo;