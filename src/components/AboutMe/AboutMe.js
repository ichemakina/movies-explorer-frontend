import "./AboutMe.css";
import photo from "../../images/photo.jpg";
import Portfolio from "../Portfolio/Portfolio";

function AboutMe() {
    return (
        <section className="about-me">
            <h2 className="about-me__title">Студент</h2>
            <div className="about-me__text-and-photo">
                <div className="about-me__text">
                    <h3 className="about-me__name">Ирина</h3>
                    <p className="about-me__profession">Веб-разработчик, 22 года</p>
                    <p className="about-me__description">Я живу в Архангельской области. В 2023 году я окончила Северный (Арктический) Федеральный университет им. М.В. Ломоносова, направление "Информатика и вычислительная техника". С 2021 года работаю бэкенд-разработчиком. На курсе от Яндекс Практикума освоила новые для себя технологии разработки.</p>
                    <a className="about-me__github" href="https://github.com/ichemakina" target="_blank" rel="noreferrer">GitHub</a>
                </div>
                <img className="about-me__photo" src={photo} alt="Фотография пользователя"></img>
            </div>
            <Portfolio />
        </section>
    )
}

export default AboutMe;