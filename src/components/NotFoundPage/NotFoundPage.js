import "./NotFoundPage.css";
import { useNavigate } from "react-router-dom";

function NotFoundPage() {
    const navigate = useNavigate();

    return (
        <section className="not-found-page">
            <h1 className="not-found-page__error-code">404</h1>
            <h2 className="not-found-page__error-text">Страница не найдена</h2>
            <button className="not-found-page__back" href="/" onClick={() => navigate(-1)}>Назад</button>
        </section>
    )
}

export default NotFoundPage;