import "./Footer.css";

function Footer(){
    return(
        <footer className="footer">
            <p className="footer__title">Учебный проект Яндекс.Практикум х BeatFilm.</p>
            <div className="footer__copyright">
                <p className="footer__year">© 2024</p>
                <ul className="footer__links">
                    <li><a className="footer__link" href="https://practicum.yandex.ru/" target="_blank" rel="noreferrer">Яндекс.Практикум</a></li>
                    <li><a className="footer__link" href="https://github.com/" target="_blank" rel="noreferrer">Github</a></li>
                </ul>
            </div>
        </footer>
    )
}

export default Footer;