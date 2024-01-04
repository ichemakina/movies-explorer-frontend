import './Portfolio.css';
import arrow from "../../images/arrow.svg";

function Portfolio() {
    return (
        <div className="portfolio">
            <h3 className="portfolio__title">Портфолио</h3>
            <ul className="portfolio__list">
                <li className="portfolio__element">
                    <a className="portfolio__link" href="https://ichemakina.github.io/how-to-learn/" target="_blank" rel="noreferrer">
                        <span>Статичный сайт</span>
                        <img className="portfolio__arrow" src={arrow} alt="Стрелка"></img>
                    </a>
                </li>
                <li className="portfolio__element">
                    <a className="portfolio__link" href="https://ichemakina.github.io/russian-travel/" target="_blank" rel="noreferrer">
                        <span>Адаптивный сайт</span>
                        <img className="portfolio__arrow" src={arrow} alt="Стрелка"></img>
                    </a>
                </li>
                <li className="portfolio__element">
                    <a className="portfolio__link" href="https://ichemakina.github.io/mesto/" target="_blank" rel="noreferrer">
                        <span>Одностраничное приложение</span>
                        <img className="portfolio__arrow" src={arrow} alt="Стрелка"></img>
                    </a>
                </li>
            </ul>
        </div>
    )
}

export default Portfolio;