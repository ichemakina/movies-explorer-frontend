import "./NotFoundPage.css";

function NotFoundPage() {
    return (
        <section className="not-found-page">
            <h1 className="not-found-page__error-code">404</h1>
            <h2 className="not-found-page__error-text">Страница не найдена</h2>
            <a className="not-found-page__back" href="/">Назад</a>
        </section>
    )
}

export default NotFoundPage;