import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import "./NotSearchResultsPage.css";
import { useNavigate } from "react-router-dom";

function NotSearchResultsPage() {
    const navigate = useNavigate();

    return (
        <section className="not-search-results-page">
            <Header />
            <div className="not-search-results-page__title-and-button">
                <h2 className="not-search-results-page__title">По вашему запросу ничего не найдено</h2>
                <button className="not-search-results-page__back" href="/" onClick={() => navigate(-1)}>Назад</button>
            </div>
            <Footer />
        </section>
    )
}

export default NotSearchResultsPage;